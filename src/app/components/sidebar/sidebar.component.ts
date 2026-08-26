import { Component, inject, signal } from '@angular/core';
import { Folder } from '../../models/folder.model';
import { ComposeService } from '../../services/compose.service';
import { MailLabel } from '../../models/mail.label.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeFolder = signal<string | null>("inbox");

  activeLabel = signal<string | null>(null);

  composeService = inject(ComposeService);

  foldersExpanded = signal<boolean>(true);
  labelsExpanded = signal<boolean>(false);

  private router = inject(Router);


  folders: Folder[] = [
    { id: 'inbox', label: 'Inbox', icon: 'fa-solid fa-inbox', count: 4 },
    { id: 'sent', label: 'Trimise', icon: 'fa-solid fa-paper-plane' },
    { id: 'drafts', label: 'Ciorne', icon: 'fa-solid fa-file-lines', count: 1 },
    { id: 'trash', label: 'Coș de gunoi', icon: 'fa-solid fa-trash' },
  ];


  labels: MailLabel[] = [
    { id: 'important', name: 'Important', color: '#E8825A' },
    { id: 'work', name: 'Muncă', color: '#3B82C4' },
    { id: 'personal', name: 'Personal', color: '#5C8A7D' },
    { id: 'urgent', name: 'Urgent', color: '#D14D4D' },
  ];



  selectFolder(id: string): void {
    this.activeFolder.set(id);
    this.activeLabel.set(null);

    if (id === 'inbox') {
      this.router.navigate(['/inbox']);
    }
  }


  selectLabel(id: string): void {
    this.activeLabel.set(id);
    this.activeFolder.set('');
  }

  toggleFolders(): void {
    this.foldersExpanded.update(value => !value);
  }

  toggleLabels(): void {
    this.labelsExpanded.update(value => !value);
  }

}
