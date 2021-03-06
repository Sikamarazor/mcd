import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FormatTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return ('00' + minutes).slice(-2) + ':' + ('00' + Math.floor(value - minutes * 60)).slice(-2);
  }
}
