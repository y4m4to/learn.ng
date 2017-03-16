interface IMode {
  PLUS: TMode;
  MINUS: TMode;
  TIMES: TMode;
  DIVIDE: TMode;
  FINISH: TMode;
}

export type TMode =
  'PLS' |
  'MNS' |
  'TIM' |
  'DIV' |
  'FIN'
;

export interface ICalc {
  count: number;
  text: string;
  mode: TMode;
  isFirstPush: boolean;
}
