import { FunctionComponent } from 'react';
import EmailCard from './EmailCard';
import NameCard from './NameCard';
import CollegeCard from './CollegesCard';
import RoleCard from './RoleCard';
import { Skeleton } from '@nextui-org/react';

interface UserSettingsProps {
  user?: User;
}

const UserSettings: FunctionComponent<UserSettingsProps> = ({ user }) => {
  return (
    <>
      <Skeleton
        className='rounded-lg'
        isLoaded={!!user}
      >
        <NameCard
          firstName={user?.firstname ?? ''}
          lastName={user?.lastname ?? ''}
        />
      </Skeleton>
      <Skeleton
        className='rounded-lg'
        isLoaded={!!user}
      >
        <EmailCard
          email={user?.email ?? ''}
        />
      </Skeleton >
      <Skeleton
        className='rounded-lg'
        isLoaded={!!user}
      >
        <CollegeCard
          user_id={user?.id ?? ''}
          college={user?.college ?? ''}
        />
      </Skeleton>
      <Skeleton
        className='rounded-lg'
        isLoaded={!!user}
      >
        <RoleCard
          role={user?.role ?? ''}
        />
      </Skeleton>
    </>
  );
}

export default UserSettings;