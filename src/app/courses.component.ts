import { CoursesService } from './courses.services';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>`
    /* Examples of selector
    
    <courses> "courses" 
    <div class="courses"> ".courses"
    <div id="courses"> "#courses"
    */ 
})

export class CoursesComponent{
    title = "List of courses";
    // courses = ["course1", "course2", "course3"];
    courses;
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}