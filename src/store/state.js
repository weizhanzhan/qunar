let defaultCity="常州"
try{
  if(defaultCity){
      defaultCity=localStorage.city
  }else{
      let defaultCity="常州"
  }
 }catch (e){}

export default{
    city:defaultCity
}