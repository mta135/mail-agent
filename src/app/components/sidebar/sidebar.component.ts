import { Component, inject, signal } from '@angular/core';
import { Folder } from '../../models/folder.model';
import { ComposeService } from '../../services/compose.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeFolder = signal<string | null>("inbox");
  composeService = inject(ComposeService);

  foldersExpanded = signal<boolean>(true);


  folders: Folder[] = [
    { id: 'inbox', label: 'Inbox', icon: 'fa-solid fa-inbox', count: 4 },
    { id: 'sent', label: 'Trimise', icon: 'fa-solid fa-paper-plane' },
    { id: 'drafts', label: 'Ciorne', icon: 'fa-solid fa-file-lines', count: 1 },
    { id: 'trash', label: 'Coș de gunoi', icon: 'fa-solid fa-trash' },
  ];


  selectFolder(id: string): void {
    this.activeFolder.set(id);
  }

  toggleFolders(): void {
    this.foldersExpanded.update(value => !value);
  }

}
