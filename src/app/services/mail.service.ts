import { Injectable, signal } from '@angular/core';
import { Mail } from '../models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mails = signal<Mail[]>([
    {
      id: '1',
      from: 'Ana Popescu',
      to: 'eu@mail.com',
      subject: 'Raport lunar - Septembrie',
      body: 'Bună, atașez raportul lunar pentru echipa noastră. Te rog să-l verifici până vineri.',
      date: new Date('2026-08-25T09:14:00'),
      read: false,
      folderId: 'inbox'
    },
    {
      id: '2',
      from: 'Mihai Ionescu',
      to: 'eu@mail.com',
      subject: 'Re: Întâlnire proiect',
      body: 'Perfect, ne vedem mâine la ora 10 în sala de conferințe.',
      date: new Date('2026-08-24T16:32:00'),
      read: true,
      folderId: 'inbox'
    },
    {
      id: '3',
      from: 'Echipa Support',
      to: 'eu@mail.com',
      subject: 'Confirmare cont creat',
      body: 'Contul tău a fost creat cu succes. Poți începe să folosești platforma.',
      date: new Date('2026-08-23T11:05:00'),
      read: true,
      folderId: 'inbox'
    },
    {
      id: '4',
      from: 'Elena Vasiliu',
      to: 'eu@mail.com',
      subject: 'Factura August',
      body: 'Atașat găsești factura pentru luna august. Scadența e pe 5 septembrie.',
      date: new Date('2026-08-22T08:47:00'),
      read: false,
      folderId: 'inbox'
    },
  ]);
}
