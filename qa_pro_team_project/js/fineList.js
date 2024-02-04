"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey){
    if (searchKey.length === 3 && !isNaN(searchKey)) {
        // Пошук за номером
        return DB.filter((fine) => fine.номер === searchKey);
      } else {
        // Пошук за типом
        return DB.filter((fine) => fine.тип === searchKey);
      }
    
}