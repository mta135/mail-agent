import { Component, computed, inject } from '@angular/core';
import { MailService } from '../../services/mail.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-inbox',
  imports: [DatePipe],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {

  mailService = inject(MailService);


  inboxMails = computed(() =>
    this.mailService.mails().filter(mail => mail.folderId === 'inbox')
  );


}
