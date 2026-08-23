import { Component, signal } from '@angular/core';
import { Folder } from '../../models/folder.model';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  activeFolder = signal<string | null>("inbox");


  folders: Folder[] = [
    { id: 'inbox', label: 'Inbox', icon: '📥', count: 4 },
    { id: 'sent', label: 'Trimise', icon: '📤' },
    { id: 'drafts', label: 'Ciorne', icon: '📝', count: 1 },
    { id: 'trash', label: 'Coș de gunoi', icon: '🗑️' },
  ];



  selectFolder(id: string): void {
    this.activeFolder.set(id);
  }

}
