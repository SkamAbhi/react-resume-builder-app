// import * as React from 'react';

// import { graphql } from 'babel-plugin-relay/macro';
// import { useLazyLoadQuery } from 'react-relay/hooks';
// import { UserGetUserDataQuery } from '../src/__generated__/UserGetUserDataQuery.graphql'

// const User = () => {
//   const { user } = useLazyLoadQuery<UserGetUserDataQuery>(
//     graphql`
//       query UserGetUserDataQuery($userId: ID!) {
//         user(id: $userId) {
//           id
//           name
//         }
//       }
//     `,
//     { userId: 'user1' }
//   );

//   if (!user) {
//     throw new Error('Cannot load user ;/');
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };

// export default User;
