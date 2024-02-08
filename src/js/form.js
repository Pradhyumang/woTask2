export default class insertForm
{
    constructor(){
      this.flag=true;
      this.onNameChange();
      this.onDateChange();
      this.onEmailChange();
      this.onMobChange();
    }

    
    validationName(nameOrignal)
    {
      
        if (/^[a-zA-Z0-9]{4,20}$/.test(nameOrignal)) 
        {
           let err=document.getElementById('errName');
             err.style.display='none';
        return nameOrignal;
       }
       else{
        let err=document.getElementById('errName');
        err.style.display='inline';
       }
    }
    validationEmail(emailOrignal){
      if (/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z][a-zA-Z0-9]{0,}$/.test(emailOrignal)) 
        {
           let err=document.getElementById('errEmail');
             err.style.display='none';
        return emailOrignal;
       }
       else{
        let err=document.getElementById('errEmail');
        err.style.display='inline';
       }

    }
    validationDate(givenDate){
      const currentDate = new Date();
      const dateOrignal=new Date(givenDate);
      // console.log(dateOrignal);
     
            if((dateOrignal.getTime()&&dateOrignal.getTime() <= currentDate.getTime()))
            {
              let err=document.getElementById('errDate');
                err.style.display='none';
            return givenDate;
          }
          else if((dateOrignal.getTime()&&dateOrignal.getTime() >= currentDate.getTime())){
            let err=document.getElementById('errDate');
            err.style.display='inline';
              alert('You Can Not Born in Future'); 
          }
          else{
            let err=document.getElementById('errDate');
            err.style.display='inline';
          }
      
    }
    validationMobile(phoneNoOrignal){
        let len= phoneNoOrignal.length;
        if(len==10)
        {
             let err=document.getElementById('errMob');
               err.style.display='none';
          return phoneNoOrignal;
         }
         else if(len==0){
              let err=document.getElementById('errMob');
               err.style.display='none';
          return '';
         }
         else{
          let err=document.getElementById('errMob');
          err.style.display='inline';
          // alert('number must be of 10 digits');
         }
    }
    validateFormData(data){
      // if (data.checkName!=undefined&&data.checkGender!=undefined&&data.checkDate!=undefined&&
      //     data.checkEmail!=undefined&&data.checkMob!=undefined&&data.checkHobbies!=undefined) {
        if (data.checkName && data.checkGender && data.checkDate
           && data.checkEmail && data.checkMob && data.checkHobbies) {
            
        const validData={
          empName:data.checkName,
          empGender:data.checkGender,
          empDOB:data.checkDate,
          empEmail:data.checkEmail,
          empMob:data.checkMob,
          empHobbies:data.checkHobbies
         }
        //  console.log("form data is valid");
         return validData;
      }
    //   else{
    //     console.log('Form Data is invalid');
    //   }
     }

     onNameChange(){
      const inputElement = document.getElementById('txtName');
      inputElement.addEventListener('input', () => {
        this.validationName(inputElement.value)
      });
    }
    onDateChange(){
      const inputElement = document.getElementById('txtDate');
      inputElement.addEventListener('input', () => {
        this.validationDate(inputElement.value)
      });
    }
    onMobChange(){
      const inputElement = document.getElementById('txtMob');
      inputElement.addEventListener('input', () => {
        this.validationMobile(inputElement.value)
      });
    }
    onEmailChange(){
      const inputElement = document.getElementById('txtEmail');
      inputElement.addEventListener('input', () => {
        this.validationEmail(inputElement.value)
      });
    }
    getFormData()
    {
       let nameOrignal= document.getElementById('txtName').value.trim();
                let name=this.validationName(nameOrignal);          
       let gender= document.querySelector('input[name="gender"]:checked').value.trim();
       let dateOrignal=document.getElementById('txtDate').value.trim();
                let date= this.validationDate(dateOrignal);
       let emailOrignal=document.getElementById('txtEmail').value.trim();
                let email=this.validationEmail(emailOrignal);
       let phoneNoOrignal=document.getElementById('txtMob').value.trim();
                let phoneNo= this.validationMobile(phoneNoOrignal);
       let hobbies= []; 
       document.querySelectorAll('input[name="hobbies"]:checked').forEach(check=>{
        hobbies.push(check.value);
       });
     
       const checkData={
        checkName:name,
        checkGender:gender,
        checkDate:date,
        checkEmail:email,
        checkMob:phoneNo,
        checkHobbies:hobbies
       }
      const validData= this.validateFormData(checkData);
       if(validData){
        return validData
      }
      
    }

    reset(){
      let submitBtn=document.getElementById('submitBtn');
          submitBtn.style.display='none';
          let btns=document.querySelectorAll('.dispNone');
          btns.forEach(btn=>{
            btn.style.display='inline';
          });
          let resetBtn=document.getElementById('resetBtn');
          resetBtn.addEventListener('click',()=>{
            if (this.flag) {
              this.flag=false;
              setTimeout(()=>{
                this.flag=true;
              },0)
                  if (confirm('Sure to Reset')) {
                    btns.forEach(btn=>{btn.style.display='none';})
                    submitBtn.style.display='inline';
                    document.getElementById('form').reset();
                  }
            }
           
              
          })
          
          document.querySelectorAll('.btnRed').forEach(deleteBtn => {
            deleteBtn.addEventListener('click',()=>{
              btns.forEach(btn=>{btn.style.display='none';})
                submitBtn.style.display='inline';
                
            })
          })
          
    }
}