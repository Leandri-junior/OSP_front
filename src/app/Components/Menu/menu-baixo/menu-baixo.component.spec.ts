import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBaixoComponent } from './menu-baixo.component';

describe('MenuBaixoComponent', () => {
  let component: MenuBaixoComponent;
  let fixture: ComponentFixture<MenuBaixoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBaixoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBaixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
