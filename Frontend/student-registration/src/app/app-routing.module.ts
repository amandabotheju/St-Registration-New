import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'add-student',component:AddStudentComponent},
  {path: 'studentupdate/:student_id', component: StudentupdateComponent},
  {path: '',redirectTo:'student',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
