import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TechGeekSharedModule } from 'app/shared/shared.module';
import { ModuleComponent } from './module.component';
import { ModuleDetailComponent } from './module-detail.component';
import { ModuleUpdateComponent } from './module-update.component';
import { ModuleDeleteDialogComponent } from './module-delete-dialog.component';
import { moduleRoute } from './module.route';

@NgModule({
  imports: [TechGeekSharedModule, RouterModule.forChild(moduleRoute)],
  declarations: [ModuleComponent, ModuleDetailComponent, ModuleUpdateComponent, ModuleDeleteDialogComponent],
  entryComponents: [ModuleDeleteDialogComponent]
})
export class TechGeekModuleModule {}
