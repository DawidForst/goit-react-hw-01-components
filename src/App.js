import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import { Profile } from "./task-01/SocialProfile";
import { Statistics } from "./task-02/Statistics";
import { FriendList, FriendListItem } from "./task-03/FriendList";
import { TransactionHistory } from "./task-04/Transactions";

export function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions} />
    </>
  );
}
