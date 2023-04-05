 //start select
 class Province{
  id;
  name;
  citiesCount;
  perName;
  
  
  constructor(id,name,citiesCount=0){
    this.id=id;
    this.name=name;
    this.citiesCount=citiesCount;
  }
}
class City{
  id;
  provinceId;
  name;
  perName;
  
  constructor(id,provinceId,name,perName){
    this.id=id;
    this.provinceId=provinceId;
    this.name=name;
    this.perName;
  }
}
const provinces=[new Province(1,"Gilan"),new Province(2,"Tehran")];
const cities=[new City(1,1,"Masal","ماسال"),new City(2,1,"Shanderman","شاندرمن"),new City(3,2,"Tehran","تهران")];

const provincesS=document.getElementById("provinces");
const citiesS=document.getElementById("cities");
provinces.forEach(element=>{
  let option=document.createElement("option");
  option.value=element.id;
  option.textContent=element.name;
  provincesS.appendChild(option);
})
provincesS.addEventListener("change",e=>{
  let id=e.target.value;
  let relatesCities=cities.filter(x=>x.provinceId.toString()===id);
  citiesS.innerHTML="";
  relatesCities.forEach(element=>{
    let option=document.createElement("option");
    option.value=element.id;
    option.textContent=element.name;
    citiesS.appendChild(option);
  })     
})