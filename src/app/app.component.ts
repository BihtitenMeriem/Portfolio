import { Component, ElementRef, Renderer2, OnInit ,HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { QualificationComponent } from './qualification/qualification.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SkillComponent } from './skill/skill.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
declare var $: any; // Declare $ as an external library
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,HeaderComponent, AboutComponent, QualificationComponent,
    SkillComponent, FooterComponent,ProjectComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2,private http: HttpClient) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const yOffset = window.scrollY;
    if (yOffset > 200) {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.back-to-top'), 'display', 'block');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.back-to-top'), 'display', 'none');
    }
  }
 
  ngOnInit() {
    this.renderer.listen(window, 'scroll', () => {
      this.renderer.listen('window', 'scroll', () => {
        if (window.pageYOffset > 200) {


          this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.navbar'), 'display', 'flex');
          this.renderer.addClass(this.elementRef.nativeElement.querySelector('.navbar'), 'fadeIn');
        } else {

          this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.navbar'), 'display', 'none');
          this.renderer.removeClass(this.elementRef.nativeElement.querySelector('.navbar'), 'fadeIn');
        }
      });
  
    });
   
  }
  ngAfterViewInit() {
    const navbarLinks = this.elementRef.nativeElement.querySelectorAll('.navbar-nav a');
  
    navbarLinks.forEach((navbarLink: any) => {
      this.renderer.listen(navbarLink, 'click', (event) => {
        event.preventDefault();
  
        const targetHash = event.target.hash;
        if (targetHash !== "") {
          const targetElement = document.querySelector(targetHash);
          if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: offsetTop - 45,
              behavior: 'smooth'
            });
  

            navbarLinks.forEach((link: { classList: { remove: (arg0: string) => any; }; }) => link.classList.remove('active'));
            event.target.classList.add('active');
          }
        }
      });
    });
  }
  
  
}
