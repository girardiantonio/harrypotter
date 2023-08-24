import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../../../harrypotter.service';
import { HarryPotterCharacter } from '../../../harrypotter.interface';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styleUrls: ['./ravenclaw.component.scss'],
})
export class RavenclawComponent {
  HarrypotterData: HarryPotterCharacter[] = [];

  constructor(private harrypotterService: HarrypotterService) {}

  ngOnInit() {
    this.harrypotterService.getHarrypotterList().subscribe((data) => {
      this.HarrypotterData = data.filter(
        (character) => character.house === 'Ravenclaw'
      );
    });
  }
}
