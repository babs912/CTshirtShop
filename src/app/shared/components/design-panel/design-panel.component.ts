import { Component, OnInit, Input,ViewChild,Output,EventEmitter } from '@angular/core';
import { DesignService } from 'src/app/services/design.service';
import { Design } from 'src/app/models/design';

@Component({
  selector: 'app-design-panel',
  templateUrl: './design-panel.component.html',
  styleUrls: ['./design-panel.component.css']
})
export class DesignPanelComponent implements OnInit {
  designs: any;
  @Output() click = new EventEmitter<number>();
  constructor(private designService: DesignService) { 
      this.designs = this.designService.designs;
  }

  ngOnInit() {
   // this.designs = this.designService.designs;
  }


  addImage(id){
    this.click.emit(id);
  }

}
