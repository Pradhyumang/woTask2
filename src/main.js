
import Storage from "./js/storage.js";
import InsertForm from "./js/form.js";
import Display from "./js/display.js";


export default class Main {
  constructor() {
   
    this.storage = new Storage();
    this.insertForm = new InsertForm();
    this.display = new Display(this.storage.getDataAll());//
    this.lastClickElementID = null;
    // this.flag=true;
    
    
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
    const btn = document.getElementById('submitBtn');
    const submitHandler = () => {
      // btn.removeEventListener('click', submitHandler);
      const data = this.insertForm.getFormData();
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
    const btn = document.getElementById('updateBtn');
    const updateFormHandler = () => {
      const btns=document.querySelectorAll('.dispNone');
                  
      btns.forEach(btn=>{btn.style.display='none';})
        submitBtn.style.display='inline';
      // if (this.flag) {
      //         this.flag=false;
      //         setTimeout(()=>{
      //           this.flag=true
      //         },0)

              const data = this.insertForm.getFormData();
              if (data !== undefined&&this.lastClickElementID!= null) {  
                this.storage.updateData(this.lastClickElementID, data);
                alert('Data Updated');
                      document.getElementById('form').reset();
              }
                 
                  this.displayTable();
                  this.updateBtnClick();
                  this.deleteClick();
      // }     
    };

    btn.addEventListener('click', updateFormHandler);
  }
}

// Move the window.onload code outside the class definition
window.onload = function () {
  const main = new Main();

  main.submitBtnClick();
 
  main.deleteClick();
 
  main.updateBtnClick();
  
};

