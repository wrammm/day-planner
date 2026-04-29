import { Component, Input } from '@angular/core';
import { Item } from '../Item';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-item',
  imports: [MatExpansionModule, MatFormField],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})
export class ItemComponent {
  @Input() items: Item[] = [];
  @Input() level: number = 0;
}
