import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent{

    static className='excel__header'
    toHTML() {
        return `
         <input type="text" class="input" value="Новая таблица"/>
            <div class="">
                <div class="button">
          <span class="material-icons">
            delete
            </span>
                </div>
                <div class="button">
          <span class="material-icons">
            cancel
            </span>
                </div>
        
        
        `
    }
}