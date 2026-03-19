import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddLeadPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <h1 className="text-2xl font-bold mb-2">Add Lead</h1>
      <p className="text-muted-foreground mb-4">
        Use the "Add Lead" button on the leads table to quickly add new leads to your CRM.
      </p>
      <Button asChild>
        <Link href="/dashboard/leads">Back to Leads</Link>
      </Button>
    </div>
  );
}