"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="flex flex-col gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-semibold tracking-tight">
            Welcome to LeadNest
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-lg">
            {greeting}, {firstName}! <br />
            Your workspace for building relationships and closing more deals.
          </p>
          <p className="text-muted-foreground">
            Invite your team to collaborate and grow together.
          </p>
          <Button asChild>
            <Link href="/dashboard/leads">Add Lead</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}