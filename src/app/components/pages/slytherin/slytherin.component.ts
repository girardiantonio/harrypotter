import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../../harrypotter.service';
import { HarryPotterCharacter } from '../../../harrypotter.interface';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styleUrls: ['./slytherin.component.scss']
})
export class SlytherinComponent {
  HarrypotterData: HarryPotterCharacter[] = [];

  constructor(private harrypotterService: HarrypotterService) {}

  ngOnInit() {
    this.harrypotterService.getHarrypotterList().subscribe((data) => {
      this.HarrypotterData = data.filter(
        (character) => character.house === 'Slytherin'
      );
    });
  }
}
