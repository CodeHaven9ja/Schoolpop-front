import { ReadMailComponent } from './views/mail/read-mail/read-mail.component';
import { OutboxComponent } from './views/mail/outbox/outbox.component';
import { BasicComponent } from './common/layouts/basic/basic.component';
import { BlankComponent } from './common/layouts/blank/blank.component';
import { Routes } from '@angular/router';
import { LandingComponent } from './views/landing/landing.component';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { AuthComponent } from './views/auth/auth.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MailResolver } from './common/resolvers/mail-resolver';
import { MailComponent } from './views/mail/mail.component';
import { InboxComponent } from './views/mail/inbox/inbox.component';
import { InboxResolve } from './common/resolvers/inbox-resolver';
import { MailItemResolve } from './common/resolvers/mail-item-resolver';
import { OutboxResolve } from './common/resolvers/outbox-resolver';
import { ComposeComponent } from './views/mail/compose/compose.component';
import { ClassRoomComponent } from './views/class-room/class-room.component';
import { ClassRoomIndexComponent } from './views/class-room/index/index.component';
import { ClassRoomViewComponent } from './views/class-room/view/view.component';
import { ClassroomResolve } from './common/resolvers/classroom.resolver';
import { UsersRoute } from './views/users/users-route';
import { FourOhFourComponent } from './views/error/four-oh-four/four-oh-four.component';
import { FourOhOneComponent } from './views/error/four-oh-one/four-oh-one.component';
import { AdminOrTeacherGuard } from './common/guards/admin-or-teacher.guard';
export const ROUTES: Routes = [
  {
    path: '404',
    component: FourOhFourComponent
  },
  {
    path: '500',
    component: FourOhOneComponent
  },
  {
    "path": '',
    component: LandingComponent,
    pathMatch: 'full',
    canActivate: [
      AuthenticatedGuard
    ]
  },

  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: AuthComponent
      }
    ]
  },
  {
    path: '',
    component: BasicComponent,
    children: [
      UsersRoute,
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'class',
        redirectTo: 'class/index'
      },
      {
        path: 'class',
        component: ClassRoomComponent,
        canActivate: [AdminOrTeacherGuard],
        children: [
          {
            path: 'index',
            component: ClassRoomIndexComponent
          },
          {
            path: ':id',
            component: ClassRoomViewComponent,
            resolve: {
              classroom: ClassroomResolve
            }
          }
        ]
      },
      {
        path: 'mail',
        redirectTo: 'mail/inbox'
      },
      {
        path: 'mail',
        component: MailComponent,
        children: [
          {
            path: 'compose',
            component: ComposeComponent
          },
          {
            path: 'inbox',
            component: InboxComponent,
            resolve: {
              mails: InboxResolve
            }
          },
          {
            path: 'outbox',
            component: OutboxComponent,
            resolve: {
              mails: OutboxResolve
            }
          },
          {
            path: ':id',
            component: ReadMailComponent,
            resolve: {
              mail: MailItemResolve
            }
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: '/404' }
]