import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCoursesStudentOptionalPage } from './list-courses-student-optional.page';

describe('ListCoursesStudentOptionalPage', () => {
  let component: ListCoursesStudentOptionalPage;
  let fixture: ComponentFixture<ListCoursesStudentOptionalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoursesStudentOptionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCoursesStudentOptionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
