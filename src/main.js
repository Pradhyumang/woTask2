
import Storage from "./js/storage.js";
import InsertForm from "./js/form.js";
import Display from "./js/display.js";


export default class Main {
  constructor() {
   
    this.storage = new Storage();
    this.insertForm = new InsertForm();
    this.display = new Display(this.storage.getDataAll());
    this.lastClickElementID = null;
    this.flag=true;
    
    
  }

  displayTable() {
    this.display.displayTable(this.storage.getDataAll());
  }
  //oninut cange 
  

  deleteClick() {
    document.querySelectorAll('.btnRed').forEach(element => {
      
      const deleteHandler = () => {
        // element.removeEventListener('click', deleteHandler);
        this.storage.deleteData(element.id);
        this.displayTable();
        this.deleteClick();
        this.updateBtnClick();
        // console.log('delete');
        document.getElementById('form').reset();
        this.insertForm.reset();
      };

      element.addEventListener('click', deleteHandler);
    });
  }

  submitBtnClick() {
    let btn = document.getElementById('submitBtn');
    const submitHandler = () => {
      // btn.removeEventListener('click', submitHandler);
      let data = this.insertForm.getFormData();
      if (data !== undefined) {
        //  console.log(data,'in main');
        this.storage.setStorage(data);
        this.displayTable();
        this.deleteClick();
        this.updateBtnClick();
        document.getElementById('form').reset();
      }
    };
    btn.addEventListener('click', submitHandler);
  }
//Edit ?BTN
  updateBtnClick() {
    document.querySelectorAll('.btnGreen').forEach(element => {
      const updateHandler = () => {
        // element.removeEventListener('click', updateHandler);
        //for buttons of update and reset in form
        this.insertForm.reset();
        //last element to get
      
        // console.log(this.lastClickElementID);
        const recordRecevid = this.storage.getOneData(element.id);
        //data fetched and sending
        if (recordRecevid) {
          this.lastClickElementID = recordRecevid.id;
          //reset form before filling data
          document.getElementById('form').reset();
          document.getElementById('txtName').value = recordRecevid.empName;

          //  gender
          document.querySelector(`input[value="${recordRecevid.empGender}"]`).checked = true;

          document.getElementById('txtDate').value = recordRecevid.empDOB;
          document.getElementById('txtEmail').value = recordRecevid.empEmail;
          document.getElementById('txtMob').value = recordRecevid.empMob;

          //  hobbies
          recordRecevid.empHobbies.forEach(check => {
            document.querySelector(`input[value="${check}"]`).checked = true;
          });

         
          this.updateFormData();
           // end data fetched and sending
          
        } 
      };
      
      element.addEventListener('click', updateHandler);
      
    });
  }

  updateFormData() {
    let btn = document.getElementById('updateBtn');
    const updateFormHandler = () => {
      let btns=document.querySelectorAll('.dispNone');
                  
      btns.forEach(btn=>{btn.style.display='none';})
        submitBtn.style.display='inline';
      // console.log(this.lastClickElementID,'id in update form data');
      // btn.removeEventListener('click', updateFormHandler);
      // console.log('update form data inside');
      if (this.flag) {
              this.flag=false;
              setTimeout(()=>{
                this.flag=true
              },0)

              let data = this.insertForm.getFormData();
              if (data !== undefined&&this.lastClickElementID!= null) {
                // console.log(this.lastClickElementID);
                // console.log(this.lastClickElementID);
                this.storage.updateData(this.lastClickElementID, data);
                
                // this.displayTable();
                // this.deleteClick();
                alert('Data Updated');
                      document.getElementById('form').reset();
              }
                  // this.insertForm.reset();
                  
                  this.displayTable();
                  this.updateBtnClick();
                  this.deleteClick();
      }     
    };

    btn.addEventListener('click', updateFormHandler);
  }
}

// Move the window.onload code outside the class definition
window.onload = function () {
  const main = new Main();
  //  on submit btn click 
  main.submitBtnClick();
  // for delete 
  main.deleteClick();
  //for edit
  main.updateBtnClick();
  //  main.storage.getOneData(3);
  // main.insertForm.onNameChange();
  
  // setTimeout(()=>{
  //   console.log(main.lastClickElementID);

  // },3000)
};

