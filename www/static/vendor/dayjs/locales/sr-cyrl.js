export default {
    name: 'sr-cyrl',
    weekdays: 'Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота'.split('_'),
    months: 'Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар'.split('_'),
    weekStart: 1,
    relativeTime: {
        future: 'за %s',
        past: 'пре %s',
        s: 'секунда',
        m: 'минут',
        mm: '%d минута',
        h: 'сат',
        hh: '%d сати',
        d: 'дан',
        dd: '%d дана',
        M: 'месец',
        MM: '%d месеци',
        y: 'година',
        yy: '%d године'
    },
    ordinal: n => `${n}.`,
    formats: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    }
};