import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByKey'
})
export class FilterByKeyPipe implements PipeTransform {
    transform(items: any[], searchText?: string, searchProperty?: string): any[] {
        if (!items || !searchText) { return items; }
        searchText = searchText.toLowerCase();
        return items.filter( item => {
            if (searchProperty) {
                if (item[searchProperty]) {
                    return item[searchProperty].toLowerCase().includes(searchText);
                }
            } else {
                return item.toLowerCase().includes(searchText);
            }
        });
    }
}
