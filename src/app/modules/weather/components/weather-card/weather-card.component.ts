import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { weatherDatas } from './../../../../models/interfaces/weatherDatas';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent{
  @Input() weatherDatasinput!: weatherDatas;


  iconeTempMin = faTemperatureLow;
  iconeTempMax = faTemperatureHigh;
  iconeHumidade = faDroplet;
  iconeDeVento = faWind;



  }







