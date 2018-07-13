let defaultCity="常州"
try{
  if(defaultCity){
      defaultCity=localStorage.city
  }
}catch (e){}

export default{
    city:defaultCity
}