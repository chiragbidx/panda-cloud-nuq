import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddContactPage() {
  return (
    <div className="flex flex-col items-start max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Contact</h1>
      <p className="text-muted-foreground mb-4">
        Use this form to add a new contact (full form coming soon in the next phase).
      </p>
      <Button asChild>
        <Link href="/dashboard/contacts">Back to Contacts</Link>
      </Button>
    </div>
  );
}