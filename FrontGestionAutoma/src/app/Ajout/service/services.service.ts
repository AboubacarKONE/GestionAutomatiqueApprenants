import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  AddForm(value: any) {
    throw new Error('Method not implemented.');
  }

  url='http://localhost:8081/odc';
 public GroupR: any;
  constructor( private http : HttpClient) { }
  Ajout(data: any){
    console.log(data);
    return this.http.post(this.url+"/saveApprenant", data);
  }
  getApprenant(){
    return this.http.get(this.url+'/listeApprenants')
  }
  deleteApprenant(id:any, ){
    return this.http.delete(`${this.url+"/deleteById"}/${id}`);
}
GetRandomGroup(nbreApprenant:any, nbreGroupe:any ){
  return this.http.get(this.url+"/listeByRandomGroupe/nbreApprenant="+nbreApprenant+"&nbreGroupe="+nbreGroupe)
}
GetRandom(){
  return this.GroupR
}
SetRandom(data:any){
  this.GroupR=data
}
async exportToExcel(data, filename) {
  {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, filename);
  XLSX.writeFile(wb, filename + '.xlsx');
  }
  }
}
