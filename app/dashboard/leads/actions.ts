"use server";

import {
  createLeadHelper,
  updateLeadHelper,
  deleteLeadHelper,
  getLeadsHelper,
  leadSchema,
} from "./leadsUtils";

// Export async server actions ONLY
export async function getLeadsAction() {
  return getLeadsHelper();
}

export async function createLeadAction(formData: FormData) {
  return createLeadHelper(formData);
}

export async function updateLeadAction(id: string, formData: FormData) {
  return updateLeadHelper(id, formData);
}

export async function deleteLeadAction(id: string) {
  return deleteLeadHelper(id);
}