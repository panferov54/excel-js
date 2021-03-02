import {storage} from "@core/utils";
import {defaultStyles} from "@/constants";

const defaultlState={
    rowState:{},
    colState:{},
    dataState:{},
    currentText:'',
    currentStyles:defaultStyles,

}

export  const initialState=storage('excel-state')
    ?storage('excel-state')
    : defaultlState