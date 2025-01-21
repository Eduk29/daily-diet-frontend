import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Meal } from '../../models/meal.model';
import { MealListItemComponent } from '../meal-list-item/meal-list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-list',
  imports: [CommonModule, MealListItemComponent],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.scss',
})
export class MealListComponent implements OnChanges {
  @Input() customClass!: string;
  @Input() meals!: Meal[];

  public groupedMeals: { [date: string]: Meal[] } = {};
  public dates: string[] = [];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['meals']) {
      this.groupMealsByDate();
    }
  }

  private groupMealsByDate(): void {
    this.groupedMeals = this.meals.reduce(
      (acc, meal) => {
        const date = this.normalizeDate(meal.date);
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(meal);
        return acc;
      },
      {} as { [date: string]: Meal[] }
    );

    this.dates = Object.keys(this.groupedMeals).sort();
  }

  private normalizeDate(dateTime: string): string {
    return dateTime.split(' ')[0];
  }
}
