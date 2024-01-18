import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineConfiguratorComponent } from './engine-configurator.component';

describe('EngineConfiguratorComponent', () => {
  let component: EngineConfiguratorComponent;
  let fixture: ComponentFixture<EngineConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineConfiguratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngineConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
