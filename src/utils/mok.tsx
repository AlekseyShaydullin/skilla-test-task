import { IResults } from './types/table';

export const mokData: Array<IResults> = [
  {
    id: 7706478,
    partnership_id: '578',
    partner_data: {
      id: '578',
      name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
      phone: '74951205096',
    },
    date: '2023-12-14 18:47:51',
    date_notime: '2023-12-14',
    time: 0,
    from_number: '79602891748',
    from_extension: '',
    to_number: 'sip:m105@vpbx400105738.mangosip.ru',
    to_extension: '105',
    is_skilla: 0,
    status: 'Не дозвонился',
    record: '',
    line_number: '74951205096',
    line_name: '',
    in_out: 1,
    from_site: 0,
    source: 'Yandex',
    errors: ['Скрипт не использован'],
    disconnect_reason: 'Вызов завершен вызывающим абонентом',
    results: [
      {
        type: 'is_new',
        title: 'Новый',
        tooltip: '',
      },
    ],
    stages: [
      {
        person_name: 'Светлана',
        person_surname: ' ',
        person_mango_phone: '105',
        duration: '15',
        disconnect_reason: 'Вызов не получил ответа в течение времени ожидания',
      },
      {
        person_name: 'Варвара',
        person_surname: ' ',
        person_mango_phone: '104',
        duration: '20',
        disconnect_reason: 'Вызов не получил ответа в течение времени ожидания',
      },
    ],
    abuse: [],
    contact_name: '',
    contact_company: '',
    person_id: 2731,
    person_name: 'Кристина',
    person_surname: 'Мартынюк',
    person_avatar: 'https://lk.skilla.ru/img/noavatar.jpg',
    candidate_id: 0,
    candidate_name: '',
    candidate_link: '',
    candidate_vacancy_name: '',
  },
  {
    id: 7705368,
    partnership_id: '578',
    partner_data: {
      id: '578',
      name: 'ООО "ГРУЗЧИКОВ-СЕРВИС СПБ"',
      phone: '74951205096',
    },
    date: '2023-12-14 17:46:59',
    date_notime: '2023-12-14',
    time: 72,
    from_number: '74952121455',
    from_extension: '',
    to_number: 'sip:m105@vpbx400105738.mangosip.ru',
    to_extension: '105',
    is_skilla: 0,
    status: 'Дозвонился',
    record: 'MToxMDA2NzYxNToxOTI2NzE5MjM2NTow',
    line_number: 'sip:user1@vpbx400105738.mangosip.ru',
    line_name: '',
    in_out: 1,
    from_site: 0,
    source: '',
    errors: ['Скрипт не использован'],
    disconnect_reason: '',
    results: [
      {
        type: 'is_new',
        title: 'Новый',
        tooltip: '',
      },
    ],
    stages: [],
    abuse: [],
    contact_name: '',
    contact_company: '',
    person_id: 2731,
    person_name: 'Кристина',
    person_surname: 'Мартынюк',
    person_avatar: 'https://lk.skilla.ru/img/noavatar.jpg',
    candidate_id: 0,
    candidate_name: '',
    candidate_link: '',
    candidate_vacancy_name: '',
  },
];

export const filterData = [
  {
    typeCall: 'Входящие' || 'Исходящие' || 'Пропущенный' || 'Недозвон ',
    time: '18:47', //date
    employee: 'https://lk.skilla.ru/img/noavatar.jpg', //person_avatar
    call: '79602891748', //from_number
    source: 'Yandex', //source
    rating: 'Скрипт не использован' || 'Отлично' || 'Хорошо' || 'Плохо',
    //errors || results.find(result => result.type === 'order') || results.find(result => result.type === 'preorder') || abuse !== []
    record: 'MToxMDA2NzYxNToxNDM0ODcwNDQzMzow', //record Надо делать запрос
    timeRecord: 50, //time
  },
];
