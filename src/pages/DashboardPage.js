import {Page} from "@core/Page";
import {$} from "@core/dom";

export class DashboardPage extends Page {
getRoot() {
return $.create('div','db').html(`

        <div class="db__header">
            <h1>Таблицы Excel</h1>
        </div>
        <div class="db__new">
            <div class="db__view">
                <a href="#" class="db__create">Новая <br/>таблица</a>

            </div>
        </div>
        <div class="db__table db__view">
            <div class="db__list-header">
                <span>Название</span>
                <span>Дата создания</span>
            </div>
            <ul class="db__list">
                <li class="db__record">
                    <a href="#">Тестовая Таблица</a>
                    <strong>12.01.2021</strong>
                </li>

                <li class="db__record">
                    <a href="#">Тестовая Таблица 2</a>
                    <strong>12.01.2021</strong>
                </li>
            </ul>

        </div>
    </div>

`)
}
}