import {storage} from "@core/utils";

const defaultlState={
    rowState:{},
    colState:{}
}

export  const initialState=storage('excel-state')
    ?storage('excel-state')
    : defaultlState