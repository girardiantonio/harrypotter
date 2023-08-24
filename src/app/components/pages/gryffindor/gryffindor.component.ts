import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../../harrypotter.service';
import { HarryPotterCharacter } from '../../../harrypotter.interface';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.scss'],
})
export class GryffindorComponent implements OnInit {
  HarrypotterData: HarryPotterCharacter[] = [];

  constructor(private harrypotterService: HarrypotterService) {}

  ngOnInit() {
    this.harrypotterService.getHarrypotterList().subscribe((data) => {
      this.HarrypotterData = data.filter(
        (character) => character.house === 'Gryffindor'
      );
    });
  }
}
