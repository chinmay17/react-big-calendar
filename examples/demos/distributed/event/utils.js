import moment from 'moment';

export const isAllDayEvent = event => event.allDay || (moment( event.end ).diff( event.start, 'days' ) > 2);