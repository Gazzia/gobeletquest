import { animate, style, transition, trigger } from '@angular/animations';

export class Animations {
  public static fade = trigger('fade', [
    transition(':enter', [
      style({ opacity: '0', marginTop: '10px' }),
      animate('.2s ease-in', style({ opacity: '1', marginTop: '0px' })),
    ]),
    transition(':leave', [
      style({ opacity: '1', marginTop: '0px' }),
      animate('.2s ease-in', style({ opacity: '0', marginTop: '10px' })),
    ]),
  ]);
  public static fadeStatic = trigger('fadeStatic', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('.2s ease-in', style({ opacity: '1' })),
    ]),
    transition(':leave', [
      style({ opacity: '1', marginTop: '0px' }),
      animate('.2s ease-in', style({ opacity: '0', marginTop: '10px' })),
    ]),
  ]);
  public static slideLeftFadeIn = trigger('slideLeftFadeIn', [
    transition(':enter', [
      style({ opacity: '0.6', marginLeft: '-200px' }),
      animate('.5s ease', style({ opacity: '1', marginLeft: '0px' })),
    ]),
  ]);
}
