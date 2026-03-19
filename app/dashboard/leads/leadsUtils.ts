import { z } from "zod";
import { eq, and, desc } from "drizzle-orm";
import { db } from "@/lib/db/client";
import { leads, teamMembers } from "@/lib/db/schema";
import { getAuthSession } from "@/lib/auth/session";

// Zod schema for input validation
export const leadSchema = z.object({
  name: z.string().min(1, "Lead name is required"),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  status: z.string().optional().default("open"),
  source: z.string().optional().or(z.literal("")),
  value: z.string().optional().or(z.literal("")),
  notes: z.string().optional().or(z.literal("")),
});

// Helper: get teamId for current user (assumes single active membership)
// This version has improved error handling and diagnostics.
export async function getTeamIdForUser(userId: string): Promise<string | undefined> {
  try {
    if (!userId) {
      console.error("[getTeamIdForUser] userId not provided or falsy");
      return undefined;
    }
    const membership = await db
      .select({ teamId: teamMembers.teamId })
      .from(teamMembers)
      .where(eq(teamMembers.userId, userId))
      .limit(1);

    if (!membership?.length) {
      console.warn(`[getTeamIdForUser] No team membership found for userId: ${userId}`);
      return undefined;
    }
    return membership[0]?.teamId;
  } catch (error) {
    console.error(`[getTeamIdForUser] DB error for userId: ${userId}`, error);
    return undefined;
  }
}

// Fetch all leads for the current user's team
export async function getLeadsHelper() {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  const myTeamId = await getTeamIdForUser(session.userId);
  if (!myTeamId) {
    throw new Error("No team found for your user. If you just registered, please contact support.");
  }

  const allLeads = await db
    .select()
    .from(leads)
    .where(eq(leads.teamId, myTeamId))
    .orderBy(desc(leads.createdAt));

  return allLeads;
}

// Create a new lead in the user's team
export async function createLeadHelper(formData: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  const myTeamId = await getTeamIdForUser(session.userId);
  if (!myTeamId) {
    return {
      status: "error",
      message: "No team found for your user. Please contact support.",
    };
  }

  const raw = Object.fromEntries(formData.entries());

  // Validate using zod
  const parseResult = leadSchema.safeParse(raw);
  if (!parseResult.success) {
    return {
      status: "error",
      message: parseResult.error.errors[0]?.message || "Invalid data",
    };
  }

  await db.insert(leads).values({
    ...parseResult.data,
    teamId: myTeamId,
    ownerId: session.userId,
  });

  return {
    status: "success",
    message: "Lead added successfully",
  };
}

// Update an existing lead (only if owner or admin)
export async function updateLeadHelper(id: string, formData: FormData) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  const myTeamId = await getTeamIdForUser(session.userId);
  if (!myTeamId) {
    return { status: "error", message: "No team found for your user. Please contact support." };
  }

  const leadRow = await db
    .select()
    .from(leads)
    .where(and(eq(leads.id, id), eq(leads.teamId, myTeamId)))
    .limit(1);

  if (!leadRow.length) {
    return { status: "error", message: "Lead not found" };
  }

  const raw = Object.fromEntries(formData.entries());

  // Validate using zod
  const parseResult = leadSchema.safeParse(raw);
  if (!parseResult.success) {
    return {
      status: "error",
      message: parseResult.error.errors[0]?.message || "Invalid data",
    };
  }

  await db.update(leads)
    .set({
      ...parseResult.data,
      updatedAt: new Date(),
    })
    .where(eq(leads.id, id));

  return {
    status: "success",
    message: "Lead updated successfully",
  };
}

// Delete an existing lead
export async function deleteLeadHelper(id: string) {
  const session = await getAuthSession();
  if (!session) throw new Error("Not authenticated");

  const myTeamId = await getTeamIdForUser(session.userId);
  if (!myTeamId) {
    return { status: "error", message: "No team found for your user. Please contact support." };
  }

  await db.delete(leads)
    .where(and(eq(leads.id, id), eq(leads.teamId, myTeamId)));

  return {
    status: "success",
    message: "Lead deleted.",
  };
}