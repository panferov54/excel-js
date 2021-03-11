
import {defaultStyles,defaultTitle} from "@/constants";
import {clone} from "@core/utils";

const defaultlState={
    title:defaultTitle,
    rowState:{},
    colState:{},
    dataState:{},
    stylesState:{},
    currentText:'',
    currentStyles:defaultStyles,

}

const normalize = state=>({
    ...state,
    currentStyles: defaultStyles,
    currentText: ''
})


export function normalizeInitialState  (state){
    return state? normalize(state): clone(defaultlState)
}