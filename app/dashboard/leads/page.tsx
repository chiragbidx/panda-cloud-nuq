import { getLeadsAction } from "./actions";
import LeadsClientTable from "./client";

export default async function LeadsPage() {
  const leads = await getLeadsAction();
  return <LeadsClientTable initialLeads={leads} />;
}