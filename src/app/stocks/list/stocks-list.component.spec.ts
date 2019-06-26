import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { StocksListComponent } from './stocks-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BackendClient} from '../client/BackendClient';
import {Stock} from '../model/Stock';

describe('StocksListComponent', () => {
  let component: StocksListComponent;
  let fixture: ComponentFixture<StocksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksListComponent ],
      imports: [ReactiveFormsModule,
        HttpClientModule],
      providers: [BackendClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Should allow list stocks', fakeAsync(() => {
    spyOn(component, 'ngOnInit').and.callFake(function () {
      component.stocks.push(getStock());
      fixture.detectChanges();
    });
    expect(component).toBeTruthy();

  }));
  function getStock() {
    return new Stock(1, 'Payconiq', 'EUR 15', new Date());
  }
});
