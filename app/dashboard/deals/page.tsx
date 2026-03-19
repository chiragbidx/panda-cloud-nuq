import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DealsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <h1 className="text-2xl font-bold mb-2">Deals</h1>
      <p className="text-muted-foreground mb-4">
        Your pipeline has no deals yet.
      </p>
      <Button asChild>
        <Link href="/dashboard/deals/new">Add Deal</Link>
      </Button>
    </div>
  );
}