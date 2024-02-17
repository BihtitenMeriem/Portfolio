import { NgFor, NgStyle } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @ViewChild('progressBars')
  progressBars!: ElementRef[];
  expression: any;

  skills = [
    { name: 'HTML', value: 95 ,bg:'bg-primary'},
    { name: 'CSS', value: 75 ,bg:'bg-warning'},
    { name: 'PHP', value: 50 ,bg:'bg-danger'},
    { name: 'Javascript', value: 90 ,bg:'bg-danger'},
    { name: 'Angular JS', value: 55 ,bg:'bg-dark'},
    { name: 'React JS', value: 85 ,bg:'bg-info'}
  ];

  onScroll() {
    this.progressBars.forEach(bar => {
      const width = bar.nativeElement.getAttribute('aria-valuenow') + '%';
      bar.nativeElement.style.width = width;
    });
  }
}