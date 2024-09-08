import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZikoUIComponent } from './ziko-ui.component'; // Adjust the path as needed

@NgModule({
  declarations: [ZikoUIComponent],
  imports: [CommonModule],
  exports: [ZikoUIComponent],
})
export class SharedModule {}
