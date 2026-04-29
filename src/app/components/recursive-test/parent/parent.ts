import { Component } from '@angular/core';
import { ItemComponent } from '../item/item';
import { Item } from '../Item';

@Component({
  selector: 'app-parent',
  imports: [ItemComponent],
  templateUrl: './parent.html',
  styleUrl: './parent.scss',
})
export class Parent {
  items: Item[] = [
    {
      id: 1,
      name: 'Grandma',
      children: [
        {
          id: 2,
          name: 'Daughter',
        },
        {
          id: 3,
          name: 'Son',
          children: [
            {
              id: 4,
              name: 'Grandson',
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Grandfather',
    },
    {
      id: 6,
      name: 'Uncle',
      children: [
        {
          id: 7,
          name: 'Cousin',
        },
      ],
    }
  ];
}
