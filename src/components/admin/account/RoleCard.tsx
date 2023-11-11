'use client';

import { FunctionComponent } from 'react';

import { toast } from 'sonner';
import { AccountCard, AccountCardBody, AccountCardFooter } from "./AccountCard";

interface RoleCardProps {
  role: string;
}

const RoleCard: FunctionComponent<RoleCardProps> = ({ role }) => {
  return (
    <AccountCard
      params={{
        header: "Roles",
        description:
          "The role as a user.",
      }}
    >
      <AccountCardBody>
        <input
          defaultValue={role ?? ""}
          name="name"
          disabled={true}
          className="block text-sm w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-slate-700"
        />
      </AccountCardBody>
    </AccountCard>
  );
}

export default RoleCard;