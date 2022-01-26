import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TechGeekTestModule } from '../../../test.module';
import { LevelDetailComponent } from 'app/entities/level/level-detail.component';
import { Level } from 'app/shared/model/level.model';

describe('Component Tests', () => {
  describe('Level Management Detail Component', () => {
    let comp: LevelDetailComponent;
    let fixture: ComponentFixture<LevelDetailComponent>;
    const route = ({ data: of({ level: new Level(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TechGeekTestModule],
        declarations: [LevelDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(LevelDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(LevelDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load level on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.level).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
