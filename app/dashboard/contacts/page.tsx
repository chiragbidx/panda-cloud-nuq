import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <h1 className="text-2xl font-bold mb-2">Contacts</h1>
      <p className="text-muted-foreground mb-4">
        No contacts found. Create your first contact to get started.
      </p>
      <Button asChild>
        <Link href="/dashboard/contacts/new">Add Contact</Link>
      </Button>
    </div>
  );
}