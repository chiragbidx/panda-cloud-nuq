import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LeadsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <h1 className="text-2xl font-bold mb-2">Leads</h1>
      <p className="text-muted-foreground mb-4">
        No leads yet. Add your first lead to start tracking opportunities.
      </p>
      <Button asChild>
        <Link href="/dashboard/leads/new">Add Lead</Link>
      </Button>
    </div>
  );
}