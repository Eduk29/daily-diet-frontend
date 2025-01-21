import { Component, Input } from '@angular/core';

import { Meal } from '../../models/meal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list-item',
  imports: [CommonModule],
  templateUrl: './meal-list-item.component.html',
  styleUrl: './meal-list-item.component.scss',
})
export class MealListItemComponent {
  @Input() customClass!: string;
  @Input() meal!: Meal;

  public get iconColor(): string {
    return this.meal.isInDiet ? 'success' : 'error';
  }
}
