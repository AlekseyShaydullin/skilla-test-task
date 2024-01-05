import { ReactNode } from 'react';

/**
 * Типизация данных шапки таблицы
 */
export interface IRefColumns {
  key: string;
  label: string;
  style: {
    width: string;
    justifyContent?: string;
  };
  cellComponent: (data: string, key: string) => ReactNode;
}

export interface IConfigRows {
  style: {
    width: string;
  };
  cellComponent: (data: IResults, isHovering: number | null) => ReactNode;
}

export interface IResults {
  id: number;
  partnership_id: string;
  partner_data: {
    id: string;
    name: string;
    phone: string;
  };
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: number;
  status: string;
  record: string;
  line_number: string;
  line_name: string;
  in_out: number;
  from_site: number;
  source: string;
  errors: Array<string>;
  disconnect_reason: string;
  results: {
    type: string;
    title: string;
    tooltip: string;
  }[];
  stages: {
    person_name: string;
    person_surname: string;
    person_mango_phone: string;
    duration: string;
    disconnect_reason: string;
  }[];
  abuse:
    | [
        {
          date: string;
          person_name: string;
          message: string;
          support_read_status: number;
          support_answer_status: number;
          answers: [
            {
              message: string;
              from_support: number;
              support_read_status: number;
              person_read_status: number;
            },
          ];
        },
      ]
    | [];
  contact_name: string;
  contact_company: string;
  person_id: number;
  person_name: string;
  person_surname: string;
  person_avatar: string;
  candidate_id: number;
  candidate_name: string;
  candidate_link: string;
  candidate_vacancy_name: string;
}

export interface IData {
  total_rows: string;
  results: Array<IResults>;
}
