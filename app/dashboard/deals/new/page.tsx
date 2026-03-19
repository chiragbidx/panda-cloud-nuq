import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddDealPage() {
  return (
    <div className="flex flex-col items-start max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Deal</h1>
      <p className="text-muted-foreground mb-4">
        Use this form to add a new deal (full form coming soon in the next phase).
      </p>
      <Button asChild>
        <Link href="/dashboard/deals">Back to Deals</Link>
      </Button>
    </div>
  );
}