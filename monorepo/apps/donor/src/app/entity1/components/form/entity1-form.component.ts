import {
  ChangeDetectorRef,
  Component,
  Inject,
  Injector,
  OnInit,
  Optional,
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
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

@Component({
  selector: 'monorepo-entity1-form',
  templateUrl: './entity1-form.component.html',
  styleUrls: ['./entity1-form.component.scss']
})
export class Entity1FormComponent implements OnInit {
  constructor(
      public route: ActivatedRoute,
      private fb: FormBuilder,
      private injector: Injector,
      private changeDetectorRef: ChangeDetectorRef,
      @Optional() @Inject(ENTITY1_FEATURE_RESOLVER) private dynamicResolver: Entity1FeaturesResolverService,
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

  dynamicComponents = [SharedFeature1Component, SharedFeature2Component, SharedFeature3Component];
  dynamicInjector: Injector;

  public form = this.fb.group({});
  public bus = this.fb.group({
    submitDisabled: new FormControl(false),
  });
  public model: any = {};

  ngOnInit() {
    this.dynamicComponents =
        this.dynamicResolver.getDynamicFeatures(this.dynamicComponents);
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  public submit() {
    console.log('FORM IS INVALID');
  }
}
