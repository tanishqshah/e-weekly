import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    // return null;
    // console.log(value)
    // console.log(searchText)
    if(!searchText){
      return value;
    }
    searchText = searchText.toLocaleLowerCase();

    return value.filter((it:any) => {
      console.log(it);
      // let data=it.name+it.bio+it.domain+it.designation;
      let data = it.name;
      return data.toLocaleLowerCase().includes(searchText);
    });
  }
}
