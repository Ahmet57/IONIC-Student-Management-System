import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCoursesTeacherOptionalPage } from './list-courses-teacher-optional.page';

describe('ListCoursesTeacherOptionalPage', () => {
  let component: ListCoursesTeacherOptionalPage;
  let fixture: ComponentFixture<ListCoursesTeacherOptionalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesTeacherOptionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCoursesTeacherOptionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
