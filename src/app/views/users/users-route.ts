import { UserViewComponent } from './user-view/user-view.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersComponent } from './users.component';
import { UserResolve, UserboxConfigResolve } from '../../common/resolvers/user-resolver';
export const UsersRoute = {
  path : 'user',
  component: UsersComponent,
  children: [
    {
      path: '',
      component: UsersIndexComponent
    },
    {
      path: ':id',
      component: UserViewComponent,
      resolve: {
        user: UserResolve,
        config: UserboxConfigResolve
      }
    }
  ]
}
