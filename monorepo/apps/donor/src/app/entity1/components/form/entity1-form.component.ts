import {
  ChangeDetectorRef,
  Component,
  ComponentRef, Inject,
  Injector,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {IFeature, SharedFeature2Component} from "@monorepo/shared";
import {SharedFeature1Component} from "@monorepo/shared";
import {SharedFeature3Component} from "@monorepo/shared";
import {FeaturesResolverService} from "../../../services/features-resolver.service";

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
      @Optional() @Inject('DEPENDENCY_RESOLVER') private dynamicResolver: FeaturesResolverService,
  ) {
    this.dynamicInjector = Injector.create({
      providers: [
        {provide: 'DYNAMIC_FORM', useValue: this.form},
        {provide: 'DYNAMIC_FORM_CALLBACK', useValue: this.form},
        {provide: 'DYNAMIC_FORM_SYNC_BUS', useValue: this.bus},
        {provide: 'DYNAMIC_FORM_MODEL', useValue: this.model},
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
        this.dynamicResolver.getDynamicComponents(this.dynamicComponents);
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  public submit() {
    console.log('FORM IS INVALID');
  }
}
