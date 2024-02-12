export default class storage{

    constructor(){
    }
    
    setData(data){
        localStorage.setItem('employee',JSON.stringify(data));
        // console.log('insert success');
    }
    getDataAll() {
        let allData=JSON.parse(localStorage.getItem('employee'));
        return allData;
    }
    getOneData(id){
        // console.log(id,'inside storage');
        let data=this.getDataAll();
        const userIdIndex=data.findIndex(dt=>dt.id==id);
        // console.log(userIdIndex);
       if (userIdIndex!=-1) {
            const record=data[userIdIndex];
        //    console.log('id',record);
           return record;
       }
        // return true;
       
    }
    deleteData(id){
        //  console.log(id);
        let cnf=confirm('Are You Sure to Delete');
        if (cnf) {
            let data=this.getDataAll();
            const userIdIndex=data.findIndex(dt=>dt.id==id);
            //  console.log(userIdIndex);
            if (userIdIndex!=-1) {
                data.splice(userIdIndex,1);
            this.setData(data);
                // console.log("data delete successfull");
            }
            return true
        }
        else
           return false;
        
    }
     
    setStorage(data)
    {
       //  for storing data in local storage 
       
       const dataAll=this.getDataAll();
        // console.log(dataAll,'inside storage ');
       if (dataAll===null||dataAll.length==0) {
           let arr=[];
           arr.push({id:1,...data});
           this.setData(arr);
           alert('Insert SuccesFull');
       }
       else{
        // console.log("inside ELse");
         let arr=dataAll;
         let index=this.idCounter(arr.length);
         arr.push({id:index,...data});
         this.setData(arr);
       }
       //end of storge
    }

     idCounter(lastIndex){
        // console.log(lastIndex);
        const dataAll=this.getDataAll();
        let idCount  =dataAll[lastIndex-1].id+1;
        return idCount;
     }
     updateData(idUser,updateInfo){
        //  console.log(idUser+' ',updateInfo);
        let data=this.getDataAll();
         const userIdIndex=data.findIndex(dt=>dt.id==idUser);
        //  console.log(userIdIndex);
        if (userIdIndex!=-1) {
            data.splice(userIdIndex,1,{id:idUser,...updateInfo});
           this.setData(data);
            // console.log("data delete successfull");
        }
         return true;
     }
    // validFormData(data){
    //     console.log(data,'this is storage');
    //     this.setData(data);
    // }

}
