
// @Component({
//     selector: 'sample',
//     template: `
//         <span>I am first span</span>
//         <ng-container #vc></ng-container>
//         <span>I am last span</span>
//         <ng-template #tpl>
//             <span>I am span in template</span>
//         </ng-template>
//     `
// })
// export class SampleComponent implements AfterViewInit {
//     @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
//     @ViewChild("tpl") tpl: TemplateRef<any>;

//     ngAfterViewInit() {
//         let view = this.tpl.createEmbeddedView(null);
//         this.vc.insert(view);
//     }
// }

// <ng-container *ngComponentOutlet="ColorComponent"></ng-container>

// <span>I am first span</span>
// <ng-container [ngTemplateOutlet]="tpl"></ng-container>
// <span>I am last span</span>
// <ng-template #tpl>
//     <span>I am span in template</span>
// </ng-template>