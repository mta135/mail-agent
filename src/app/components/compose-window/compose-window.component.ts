import { Component, inject, signal } from '@angular/core';
import { ComposeService } from '../../services/compose.service';

@Component({
  selector: 'app-compose-window',
  imports: [],
  templateUrl: './compose-window.component.html',
  styleUrl: './compose-window.component.css'
})
export class ComposeWindowComponent {
  composeService = inject(ComposeService);

  attachments = signal<File[]>([]);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const newFiles = Array.from(input.files);
      this.attachments.update(current => [...current, ...newFiles]);
    }
    input.value = ''; // permite re-selectarea aceluiași fișier ulterior
  }

  removeAttachment(index: number): void {
    this.attachments.update(current => current.filter((_, i) => i !== index));
  }

  formatFileSize(bytes: number): string {

    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';

  }

}
