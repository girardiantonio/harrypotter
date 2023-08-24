import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../../harrypotter.service';
import { HarryPotterCharacter } from '../../../harrypotter.interface';

@Component({
  selector: 'app-home',
  templateUrl: './allhouse.component.html',
  styleUrls: ['./allhouse.component.scss'],
})
export class AllHouseComponent implements OnInit {
  HarrypotterData: HarryPotterCharacter[] = [];

  constructor(private harrypotterService: HarrypotterService) {}

  ngOnInit() {
    this.harrypotterService.getHarrypotterList().subscribe((data) => {
      this.HarrypotterData = data;
    });
  }
}
