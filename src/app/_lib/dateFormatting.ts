import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const dateFormatting = (param: string): string => {
    const now = dayjs();
    const date = dayjs(param).add(0, 'hour');

    if (now.diff(date, 'hour') > 24) {
        return date.format('YYYY-MM-DD');
    } else {
        return date.format('YYYY-MM-DD HH:mm:ss');
    }
}
