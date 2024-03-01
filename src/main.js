
import Storage from "./js/storage.js";
import InsertForm from "./js/form.js";
import Display from "./js/display.js";
export default class Main {
  constructor() {
    this.storage = new Storage();
    this.insertForm = new InsertForm();
    this.display = new Display();//
    this.lastClickElementID = null;
    this.flagUpadate = true;
    this.displayTable()
  }
  displayTable() {
    this.display.displayTable(this.storage.getDataAll());
    this.display.displayAdvanceTable(this.storage.getDataAll());
  }
  deleteClick() {
    document.querySelectorAll('.btnRed').forEach(element => {
      const deleteHandler = () => {
        this.storage.deleteData(element.id);
        this.displayTable();
        this.deleteClick();
        this.updateBtnClick();
        const btns = document.querySelectorAll('.dispNone');
        const submitBtn = document.getElementById('submitBtn');
        btns.forEach(btn => { btn.style.display = 'none'; })
        submitBtn.style.display = 'inline';
        document.getElementById('form').reset();
      };
      element.addEventListener('click', deleteHandler);
    });
  }
  submitBtnClick() {
    const btn = document.getElementById('submitBtn');
    const submitHandler = () => {
      const data = this.insertForm.getFormData();
      if (data) {
        if (this.storage.setStorage(data)) { alert('submit SuccessFull'); }
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
        this.insertForm.reset();
        const recordRecevid = this.storage.getOneData(element.id);
        //data fetched and sending
        if (recordRecevid) {
          this.lastClickElementID = recordRecevid.id;
          //reset form before filling data
          document.getElementById('form').reset();
          document.getElementById('txtName').value = recordRecevid.empName;
          //  gender set
          document.querySelector(`input[value="${recordRecevid.empGender}"]`).checked = true;

          document.getElementById('txtDate').value = recordRecevid.empDOB;
          document.getElementById('txtEmail').value = recordRecevid.empEmail;
          document.getElementById('txtMob').value = recordRecevid.empMob;
          //  hobbies set
          recordRecevid.empHobbies.forEach(check => {
            document.querySelector(`input[value="${check}"]`).checked = true;
          });
          this.updateFormData();
        }
      };
      element.addEventListener('click', updateHandler);
    });
  }
  //update button
  updateFormData() {
    const btn = document.getElementById('updateBtn');
    const updateFormHandler = () => {
      const data = this.insertForm.getFormData();
      if (!data) {
        const errName = document.getElementById('errName');
        errName.style.display = 'none';
        const errEmail = document.getElementById('errEmail');
        errEmail.style.display = 'none';
        const errDate = document.getElementById('errDate');
        errDate.style.display = 'none';
      }
      if (this.flagUpadate) {
        this.flagUpadate = false;
        setTimeout(() => {
          this.flagUpadate = true;
        }, 0)
        if (data) {
          if (this.storage.updateData(this.lastClickElementID, data)) {
            this.insertForm.ShowSubmit();
            alert('Data Updated');
            this.displayTable();
            this.updateBtnClick();
            this.deleteClick()
            document.getElementById('form').reset();
          }
        }
        else {
          this.displayTable();
          this.updateBtnClick();
          this.deleteClick()
          this.insertForm.ShowUpdate();
        }
      }
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

