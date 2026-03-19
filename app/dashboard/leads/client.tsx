"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@/components/ui/table";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { createLeadAction, getLeadsAction } from "./actions";

// Client-only: fetch leads via server action (callable as RPC), mimic SSR on mount.
export default function LeadsClientTable({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads || []);
  const [showAdd, setShowAdd] = useState(false);
  const [formStatus, setFormStatus] = useState<{ status?: string; message?: string } | null>(null);

  // Simple fetch for client-side add/update UX (no live revalidate for now)
  async function refetchLeads() {
    const all = await getLeadsAction();
    setLeads(all);
  }

  // Add lead form handler
  const handleAddLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await createLeadAction(formData);
    setFormStatus(res);

    if (res.status === "success") {
      form.reset();
      setShowAdd(false);
      refetchLeads();
    }
  };

  return (
    <section>
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Leads</h2>
        <Dialog open={showAdd} onOpenChange={setShowAdd}>
          <DialogTrigger asChild>
            <Button>Add Lead</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Lead</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddLead} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input required className="w-full border rounded px-2 py-1" type="text" id="name" name="name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input className="w-full border rounded px-2 py-1" type="email" id="email" name="email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                <input className="w-full border rounded px-2 py-1" type="text" id="phone" name="phone" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="status">Status</label>
                <select className="w-full border rounded px-2 py-1" id="status" name="status" defaultValue="open">
                  <option value="open">Open</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="lost">Lost</option>
                  <option value="won">Won</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="source">Source</label>
                <input className="w-full border rounded px-2 py-1" type="text" id="source" name="source" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="value">Value</label>
                <input className="w-full border rounded px-2 py-1" type="text" id="value" name="value" placeholder="$0" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="notes">Notes</label>
                <textarea className="w-full border rounded px-2 py-1" id="notes" name="notes" />
              </div>
              {formStatus?.status === "error" && (
                <div className="text-destructive text-sm">{formStatus.message}</div>
              )}
              <DialogFooter>
                <Button type="submit">Save</Button>
                <DialogClose asChild>
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {leads.length === 0 ? (
        <p className="text-muted-foreground">No leads yet. Add your first lead to start tracking opportunities.</p>
      ) : (
        <Table>
          <TableCaption>Your current leads.</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Status</Th>
              <Th>Source</Th>
              <Th>Value</Th>
              <Th>Notes</Th>
              {/* Future: Add Edit/Delete here */}
            </Tr>
          </Thead>
          <Tbody>
            {leads.map((lead) => (
              <Tr key={lead.id}>
                <Td>{lead.name}</Td>
                <Td>{lead.email}</Td>
                <Td>{lead.phone}</Td>
                <Td>{lead.status}</Td>
                <Td>{lead.source}</Td>
                <Td>{lead.value}</Td>
                <Td>{lead.notes}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </section>
  );
}