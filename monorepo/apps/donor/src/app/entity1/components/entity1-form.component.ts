import {ChangeDetectorRef, Component, ComponentRef, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {FormBuilder, FormControl} from "@angular/forms";
import {IFeature, SharedFeature2Component} from "@monorepo/shared";
import {SharedFeature1Component} from "@monorepo/shared";
import {SharedFeature3Component} from "@monorepo/shared";

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
  ) {}

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef | undefined;

  dynamicComponents = [SharedFeature1Component, SharedFeature2Component, SharedFeature3Component];
  componentsRefs: ComponentRef<any>[] = [];

  public form = this.fb.group({});
  public bus = this.fb.group({
    submitDisabled: new FormControl(false),
  });
  public model: any = {};

  ngOnInit(): void {
    setTimeout(() => {
      this.initFeatures();
      this.changeDetectorRef.detectChanges();
    });
  }

  public submit() {
    console.log('FORM IS INVALID');
  }

  private initFeatures() {
    this.container?.clear();
    this.dynamicComponents.forEach((component)=>{
      this.createComponent(component);
    })
  }

  private createComponent(component: any) {
    Injector.create({
      providers: [],
      parent: this.injector,
    });

    const componentRef = this?.container?.createComponent<IFeature>(component, {
      injector: this.injector
    });

    if(componentRef) {
      componentRef.instance.form = this.form;
      componentRef.instance.bus = this.bus;
      componentRef.instance.model = this.model;
      /*componentRef.instance.changed.subscribe(this.featureChanged.bind(this));*/
      this.componentsRefs.push(componentRef);
    }
  }

}
