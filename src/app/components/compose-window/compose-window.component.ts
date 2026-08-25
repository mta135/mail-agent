import { Component, inject } from '@angular/core';
import { ComposeService } from '../../services/compose.service';

@Component({
  selector: 'app-compose-window',
  imports: [],
  templateUrl: './compose-window.component.html',
  styleUrl: './compose-window.component.css'
})
export class ComposeWindowComponent {
  composeService = inject(ComposeService);

}
