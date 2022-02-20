import {ESearchHouseCriteria, ESearchTenantCriteria} from "../model/enums/search.enum";
import {ISearch} from "../model/search";


export const SEARCH_HOUSE_CRITERIAS: ISearch[] = [
  {name: 'по району', value: ESearchHouseCriteria.District as string},
  {name: 'по улице', value: ESearchHouseCriteria.Street as string}
];


export const SEARCH_TENANT_CRITERIAS: ISearch[] = [
  {name: 'по телефону', value: ESearchTenantCriteria.TelNum as string},
  {name: 'по ФИО', value: ESearchTenantCriteria.Fio as string}
];
