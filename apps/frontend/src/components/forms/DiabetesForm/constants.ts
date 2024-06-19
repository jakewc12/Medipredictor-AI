export enum SmokingHistory {
    undefined = 'undefined',
    No_Info = "No_Info", 
    Never = "Never",
    Current = "Current",
    Former = "Former",
    Ever = "Ever",
    Not_Current = "Not_Current"
}

export const SMOKING_OPTIONS = [
    {value: 'No_Info', label:'No Info'},
    {value: 'Never', label: 'Never'},
    {value: 'Current', label: 'Current'},
    {value: 'Former', label: 'Former'},
    {value:'Ever', label: 'Ever'},
    {value:'Not_Current', label: 'Not Current'}
]

export const GENDER_OPTIONS = [
    {value: 'male', label:'Male'},
    {value:'female', label:'Female'}
]
export interface RESULTS {
    type: string;
    result: string;
}