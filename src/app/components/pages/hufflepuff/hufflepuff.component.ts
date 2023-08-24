import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../../harrypotter.service';
import { HarryPotterCharacter } from '../../../harrypotter.interface';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.scss']
})
export class HufflepuffComponent {
  HarrypotterData: HarryPotterCharacter[] = [];

  constructor(private harrypotterService: HarrypotterService) {}

  ngOnInit() {
    this.harrypotterService.getHarrypotterList().subscribe((data) => {
      this.HarrypotterData = data.filter(
        (character) => character.house === 'Hufflepuff'
      );
    });
  }
}
