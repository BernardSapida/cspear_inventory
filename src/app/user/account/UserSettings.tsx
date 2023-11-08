import { User } from '@clerk/nextjs/server';

import { FunctionComponent } from 'react';
import NameCard from './NameCard';
import EmailCard from './EmailCard';
import DepartmentCard from './DepartmentCard';
import RoleCard from './RoleCard';

interface UserSettingsProps {
  user: User | null;
}

const UserSettings: FunctionComponent<UserSettingsProps> = ({ user }) => {
  const {
    firstName,
    lastName
  } = user!;
  const email = user?.emailAddresses[0].emailAddress;

  return (
    <>
      <NameCard
        firstName={firstName ?? ''}
        lastName={lastName ?? ''}
      />
      <EmailCard
        email={email ?? ''}
      />
      <DepartmentCard
        college={'CEIT' ?? ''}
      />
      <RoleCard
        role={'Student' ?? ''}
      />
    </>
  );
}

export default UserSettings;