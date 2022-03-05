import {
  ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  OnInit,
} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {
  ENTITY1_FEATURE_RESOLVER,
  DYNAMIC_FORM,
  DYNAMIC_FORM_CALLBACK,
  DYNAMIC_FORM_MODEL,
  DYNAMIC_FORM_SYNC_BUS,
  SharedFeature2Component
} from "@monorepo/shared";
import {SharedFeature1Component} from "@monorepo/shared";
import {SharedFeature3Component} from "@monorepo/shared";
import {Entity1FeaturesResolverService} from "../../services/entity1-features-resolver.service";
import {Store} from "@ngrx/store";
import {CreateEntity1Action, EditEntity1Action, LoadEntity1Action, ResetEntity1Action} from "../../store/entity1.action";
import {selectEntity} from "../../store/entity1.selector";
import {filter} from "rxjs";

@Component({
  selector: 'monorepo-entity1-form',
  templateUrl: './entity1-form.component.html',
  styleUrls: ['./entity1-form.component.scss']
})
export class Entity1FormComponent implements OnInit {
  mode: string = '';
  constructor(
      public route: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private injector: Injector,
      private changeDetectorRef: ChangeDetectorRef,
      @Inject(ENTITY1_FEATURE_RESOLVER)
      private dynamicResolver: Entity1FeaturesResolverService,
      private store: Store,
  ) {
    this.dynamicInjector = Injector.create({
      providers: [
        {provide: DYNAMIC_FORM, useValue: this.form},
        {provide: DYNAMIC_FORM_CALLBACK, useValue: this.form},
        {provide: DYNAMIC_FORM_SYNC_BUS, useValue: this.bus},
        {provide: DYNAMIC_FORM_MODEL, useValue: this.model},
      ],
      parent: this.injector,
    });
  }

  dynamicComponents = [
    SharedFeature1Component,
    SharedFeature2Component,
    SharedFeature3Component];
  dynamicInjector: Injector;

  public form = this.fb.group({});
  public bus = this.fb.group({
    submitDisabled: new FormControl(false),
    model: new FormControl(null),
    timer: new FormControl('x'),
  });
  public model: any = {};

  ngOnInit() {
    this.mode = this.route.snapshot.params['mode'];

    if(this.mode === 'edit') {
      this.store.dispatch(
          new LoadEntity1Action(parseInt(this.route.snapshot.params['id'], 10)));
    } else {
      debugger
      this.store.dispatch(
          new ResetEntity1Action());
    }

    this.dynamicComponents =
        this.dynamicResolver.getDynamicFeatures(this.dynamicComponents);

    this.store.select(selectEntity).pipe(filter(Boolean))
        .subscribe((model)=>{
          this.bus.get('model')?.patchValue(model);
          this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  public submit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let routRedirect = '../';
    if(this.mode === 'edit') {
      routRedirect += '../';
      const id = parseInt(this.route.snapshot.params['id'], 10);
      const payload = {...{model: this.form.value}, ...{id: id}};
      this.store.dispatch(new EditEntity1Action(payload));
    }
    else {
      this.store.dispatch(new CreateEntity1Action(this.form.value));
    }
    this.router.navigate([routRedirect], { relativeTo: this.route });
  }
}
