// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InboxComponent } from '../pages/inbox/inbox.component';

export const routes: Routes = [

    { path: '', redirectTo: 'inbox', pathMatch: 'full' },
    { path: 'inbox', component: InboxComponent },
];