let arr =[];


function store(firstName,lastName,password){
    let data = {id:arr.length+1, firstName:firstName, lastName:lastName, password:password}
    arr.push(data);
    return data;

}

function fetch(){
    return arr;


}
 function fetchById(id){
     let found = false;
     for(let i = 0; i < arr.length; i++){

        if(id===arr[i].id){
            found = true;
            return (arr[i]);
        }
     }
     if(found==false){
         return false;
     }

 }
  function update(id,password,newpassword){
      let found =  false;
      for(let i = 0; i<arr.length;i++){
          if(id===arr[i].id){
              if(password ==arr[i].password){
                  found = true;
                  arr[i].password=newpassword;
                  return arr[i];
              }else{
                  return 0;
              }
          }
      }
      if(found == false){
          return 1;
      }

  }
module.exports = {store,fetch,fetchById,update};