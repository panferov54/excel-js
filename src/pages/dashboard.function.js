function toHTML(){
    return `
         <li class="db__record">
            <a href="#">Таблица номер 1</a>
            <strong>12.01.2021</strong>
        </li>
    `
}


function getAllKeys(){
    const keys=[]
    for (let i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        if (!key.includes('excel')){
            continue
        }
        keys.push(key)
    }
    return keys
}


export  function createRecords (){
    const keys=getAllKeys()
    console.log(keys)

    if (!keys.length){
        return `<p>Записи таблицы отсутвуют</p>`
    }

    return `
       <div class="db__list-header">
                <span>Название</span>
                <span>Дата создания</span>
            </div>
            <ul class="db__list">
            ${keys.map(toHTML).join('')}
            </ul>

    `

}
