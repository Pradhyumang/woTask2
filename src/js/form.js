export default class insertForm {
  constructor() {
    this.flag = true;
    this.onNameChange();
    this.onDateChange();
    this.onEmailChange();
    this.onMobChange();
  }


  validationName(nameOrignal) {
    if (/^[a-zA-Z0-9\s]{4,20}$/.test(nameOrignal)) {
      const err = document.getElementById('errName');
      err.style.display = 'none';
      return nameOrignal;
    } else {
      const err = document.getElementById('errName');
      err.style.display = 'inline';
    }
  }
  validationEmail(emailOrignal) {
    if (/^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,}$/.test(emailOrignal)) {
      const err = document.getElementById('errEmail');
      err.style.display = 'none';
      return emailOrignal;
    }
    else {
      const err = document.getElementById('errEmail');
      err.style.display = 'inline';
    }
  }
  validationDate(givenDate) {
    const currentDate = new Date();
    const dateOrignal = new Date(givenDate);
    if ((dateOrignal.getTime() && dateOrignal.getTime() <= currentDate.getTime())) {
      const err = document.getElementById('errDate');
      err.style.display = 'none';
      return givenDate;
    }
    else if ((dateOrignal.getTime() && dateOrignal.getTime() >= currentDate.getTime())) {
      const err = document.getElementById('errDate');
      err.style.display = 'inline';
      alert('You Can Not Born in Future');
    }
    else {
      const err = document.getElementById('errDate');
      err.style.display = 'inline';
    }
  }
  validationMobile(phoneNoOrignal) {
    const len = phoneNoOrignal.length;
    if (len === 0) {
      const err = document.getElementById('errMob');
      err.style.display = 'none';
      return;
    }
    else if (/^[6789]\d{9}$/.test(phoneNoOrignal)) {
      const err = document.getElementById('errMob');
      err.style.display = 'none';
      return phoneNoOrignal;
    }
    else {
      const err = document.getElementById('errMob');
      err.style.display = 'inline';
    }
  }
  validateFormData(data) {
    if (data.checkName && data.checkGender && data.checkDate
      && data.checkEmail && data.checkHobbies) {
      if (!data.checkMob) {
        data.checkMob = '';
      }
      const validData = {
        empName: data.checkName,
        empGender: data.checkGender,
        empDOB: data.checkDate,
        empEmail: data.checkEmail,
        empMob: data.checkMob,
        empHobbies: data.checkHobbies
      }
      return validData;
    }
  }
  onNameChange() {
    const inputElement = document.getElementById('txtName');
    inputElement.addEventListener('input', () => {
      this.validationName(inputElement.value.trim())
    });
  }
  onDateChange() {
    const inputElement = document.getElementById('txtDate');
    inputElement.addEventListener('input', () => {
      this.validationDate(inputElement.value.trim())
    });

  }
  onMobChange() {
    const inputElement = document.getElementById('txtMob');
    inputElement.addEventListener('input', () => {
      this.validationMobile(inputElement.value.trim())
    });
  }
  onEmailChange() {
    const inputElement = document.getElementById('txtEmail');
    inputElement.addEventListener('input', () => {
      this.validationEmail(inputElement.value.trim())
    });
  }
  getFormData() {
    const nameOrignal = document.getElementById('txtName')?.value?.trim() || '';
    const name = this.validationName(nameOrignal);
    const gender = document.querySelector('input[name="gender"]:checked').value.trim();
    const dateOrignal = document.getElementById('txtDate')?.value.trim();
    const date = this.validationDate(dateOrignal);
    const emailOrignal = document.getElementById('txtEmail')?.value.trim();
    const email = this.validationEmail(emailOrignal);
    const phoneNoOrignal = document.getElementById('txtMob')?.value.trim();
    const phoneNo = this.validationMobile(phoneNoOrignal);
    // console.log(phoneNo);
    const hobbies = [];
    document.querySelectorAll('input[name="hobbies"]:checked').forEach(check => {
      hobbies.push(check.value);
    });
    const checkData = {
      checkName: name,
      checkGender: gender,
      checkDate: date,
      checkEmail: email,
      checkMob: phoneNo,
      checkHobbies: hobbies
    }
    if (phoneNoOrignal.length === 0 || phoneNoOrignal.length === 10) {
      const validData = this.validateFormData(checkData);
      if (validData) { return validData }
    }

  }


  reset() {
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.style.display = 'none';
    const btns = document.querySelectorAll('.dispNone');
    btns.forEach(btn => {
      btn.style.display = 'inline';
    });
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
      if (this.flag) {
        this.flag = false;
        setTimeout(() => {
          this.flag = true;
        }, 0)
        if (confirm('Sure to Reset')) {
          btns.forEach(btn => { btn.style.display = 'none'; })
          submitBtn.style.display = 'inline';
          const formHeading = document.querySelector('.formDiv .headerForm');
          formHeading.textContent = 'Add Employee';
          document.getElementById('form').reset();
        }
      }
    })
  }
  showSubmit() {
    document.getElementById('updateBtn').style.display = '';
    document.getElementById('resetBtn').style.display = '';
    document.getElementById('submitBtn').style.display = 'inline-block';;

  }
  showUpdate() {
    document.getElementById('updateBtn').style.display = 'inline';
    document.getElementById('resetBtn').style.display = 'inline';
    document.getElementById('submitBtn').style.display = 'none';
  }

}