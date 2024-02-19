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
        if (/^[a-zA-Z0-9\s]{4,20}$/.test(nameOrignal)) 
        {  const err=document.getElementById('errName');
             err.style.display='none';
        return nameOrignal;
        }else{
        const err=document.getElementById('errName');
        err.style.display='inline';
       }  
    }
    validationEmail(emailOrignal){
        if (/^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(emailOrignal)) 
        {
           const err=document.getElementById('errEmail');
             err.style.display='none';
        return emailOrignal;
       }
       else{
        const err=document.getElementById('errEmail');
        err.style.display='inline';
       }
    }
    validationDate(givenDate){
      const currentDate = new Date();
        const dateOrignal=new Date(givenDate);
              if((dateOrignal.getTime()&&dateOrignal.getTime() <= currentDate.getTime()))
              {
                const err=document.getElementById('errDate');
                  err.style.display='none';
              return givenDate;
            }
            else if((dateOrignal.getTime()&&dateOrignal.getTime() >= currentDate.getTime())){
              const err=document.getElementById('errDate');
              err.style.display='inline';
                alert('You Can Not Born in Future'); 
            }
            else{
              const err=document.getElementById('errDate');
              err.style.display='inline';
            }
    }
    validationMobile(phoneNoOrignal){
        const len= phoneNoOrignal.length;
         if(len==0){
          const err=document.getElementById('errMob');
           err.style.display='none';
         return 'empty';
          }
          else if(/^[6789]\d{9}$/.test(phoneNoOrignal))
        {
             const err=document.getElementById('errMob');
               err.style.display='none';
          return phoneNoOrignal;
         }
         else{
          const err=document.getElementById('errMob');
          err.style.display='inline';
         }
    }
    validateFormData(data){
      if (data.checkName && data.checkGender && data.checkDate 
        && data.checkEmail  && data.checkHobbies && data.checkMob) {
            if (data.checkMob=='empty') {
              data.checkMob='';
            }
        const validData={
          empName:data.checkName,
          empGender:data.checkGender,
          empDOB:data.checkDate,
          empEmail:data.checkEmail,
          empMob:data.checkMob,
          empHobbies:data.checkHobbies
         }
         return validData;
      }
     }
    onNameChange(){
      const inputElement = document.getElementById('txtName');
      inputElement.addEventListener('input', () => {
        this.validationName(inputElement.value.trim())
      });
    }
    onDateChange(){
      const inputElement = document.getElementById('txtDate');
      inputElement.addEventListener('input', () => {
        this.validationDate(inputElement.value.trim())
      });
      
    }
    onMobChange(){
      const inputElement = document.getElementById('txtMob');
      inputElement.addEventListener('input', () => {
          this.validationMobile(inputElement.value.trim())   
      });
    }
    onEmailChange(){
      const inputElement = document.getElementById('txtEmail');
      inputElement.addEventListener('input', () => {
        this.validationEmail(inputElement.value.trim())
      });
    }
    getFormData()
    {
       const nameOrignal= document.getElementById('txtName')?.value?.trim() || '';
                const name=this.validationName(nameOrignal);          
       const gender= document.querySelector('input[name="gender"]:checked').value.trim();
       const dateOrignal=document.getElementById('txtDate').value.trim();
                const date= this.validationDate(dateOrignal);
       const emailOrignal=document.getElementById('txtEmail').value.trim();
                const email=this.validationEmail(emailOrignal);
       const phoneNoOrignal=document.getElementById('txtMob').value.trim();
                const phoneNo= this.validationMobile(phoneNoOrignal);
       const hobbies= []; 
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
       console.log(validData);
       if(validData){
        return validData
      }
    }

    // getValueFromElement(elementID) {
    //   return document.getElementById(elementID).value.trim();
    // }

    reset(){
      const submitBtn=document.getElementById('submitBtn');
          submitBtn.style.display='none';
      const btns=document.querySelectorAll('.dispNone');
          btns.forEach(btn=>{
            btn.style.display='inline';
          });
      const resetBtn=document.getElementById('resetBtn');
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
    }
    ShowSubmit(){
      setTimeout(()=> {
        const updatebtn=document.getElementById('updateBtn');
        const submitBtn = document.getElementById('submitBtn');
        const resetBtn=document.getElementById('resetBtn');
        updatebtn.style.display=''
        resetBtn.style.display=''
        submitBtn.style.display='inline-block'; 
      }, 0);
    }
    ShowUpdate(){
      setTimeout(()=> {
      const updatebtn=document.getElementById('updateBtn');
      const submitBtn = document.getElementById('submitBtn');
      const resetBtn=document.getElementById('resetBtn');
      updatebtn.style.display='inline'
      resetBtn.style.display='inline'
      submitBtn.style.display='none'; 
    }, 0);
    }
    commonFunc(isDisplay){
      setTimeout(()=> {
      const updatebtn=document.getElementById('updateBtn');
      const submitBtn = document.getElementById('submitBtn');
      const resetBtn=document.getElementById('resetBtn');
      updatebtn.style.display= isDisplay ? 'inline' : 'none'
      resetBtn.style.display= isDisplay ? 'inline' : 'none'
      submitBtn.style.display= isDisplay ? 'inline-block' : 'none'
    }, 0);
  }
}