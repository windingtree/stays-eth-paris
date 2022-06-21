import { DateTime } from 'luxon';
import { getDayZero } from '../config';

const dayZero = getDayZero();

export const getDate = (days: number) => DateTime.fromMillis(
  DateTime.fromMillis(dayZero * 1000)
    .set({ hour: 1 })
    .toMillis() + days * 86400 * 1000
);

// const target = DateTime.fromISO('2022-07-03').diff(DateTime.fromISO('2022-02-22'), 'days');
// console.log('@@@@@', target.days);
// console.log('#####', DateTime.fromISO('2022-02-22').plus({ days: 134 }).toISO());
