import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { WorkspaceComponent } from 'src/app/components/workspace/workspace.component';

const routes: Routes = ([
  {
     path: "workspace",
     component: WorkspaceComponent
  }
])
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorkspaceModule { }
