import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddLeadPage() {
  return (
    <div className="flex flex-col items-start max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Lead</h1>
      <p className="text-muted-foreground mb-4">
        Use this form to add a new lead (coming soon—full form in the next phase).
      </p>
      <Button asChild>
        <Link href="/dashboard/leads">Back to Leads</Link>
      </Button>
    </div>
  );
}