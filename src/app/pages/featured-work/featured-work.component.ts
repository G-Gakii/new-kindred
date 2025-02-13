import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-work',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './featured-work.component.html',
  styleUrl: './featured-work.component.scss',
})
export class FeaturedWorkComponent {}
