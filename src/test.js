//main 
// // import SubMain from "./subMain.js";
// import storage from "./js/storage.js";
// import insertForm from "./js/form.js"
// import display from "./js/display.js"
// export default class Main {
//   constructor() {
//     // new SubMain();
//     this.storage= new storage();
//     this.insertForm= new insertForm();
//     this.display=new display(this.storage.getDataAll());
//     } 
//     displayTable(){
//       this.display.displayTable(this.storage.getDataAll());
//     }
//     deleteClick(){

//       document.querySelectorAll('.btnRed').forEach(element => {
//         element.addEventListener('click',()=>{
//           element.removeEventListener('click', this.deleteClick);
//           // element.removeEventListener('click', this.submitBtnClick);
//           // element.removeEventListener('click', this.updateBtnClick);
//           this.storage.deleteData(element.id);
//           this.displayTable();
//           this.deleteClick();
//           this.updateBtnClick();
//           // console.log('delete');
//           return
//         });  
//       });

//     }
//     submitBtnClick(){
//       let btn=document.getElementById('submitBtn');
//         btn.addEventListener('click',()=>{  
//           // btn.removeEventListener('click', this.deleteClick);
//           btn.removeEventListener('click', this.submitBtnClick);
//           // btn.removeEventListener('click', this.updateBtnClick);
//       let data=this.insertForm.getFormData();
//       if (data!=undefined) {
//         //  console.log(data,'in main');
//         this.storage.setStorage(data);
//         this.displayTable();
//         this.deleteClick();
//         this.updateBtnClick();
//         return
//         }  
//       });
//     }
//     // updateBtnClick(){
  
//     //   document.querySelectorAll('.btnGreen').forEach(element => {
//     //     element.addEventListener('click',()=>{
         
//     //       // element.removeEventListener('click', this.deleteClick);
//     //       // element.removeEventListener('click', this.submitBtnClick);
//     //       element.removeEventListener('click', this.updateBtnClick);
//     //       //for buttons of update and reset in form
//     //       this.insertForm.reset();
          
//     //       // console.log(element.id);
//     //       // this.deleteClick(element.id);
//     //       const recordRecevid=this.storage.getOneData(element.id);
//     //       // console.log(recordRecevid);
//     //       //data fetched and sending
//     //       document.getElementById('form').reset();
//     //         document.getElementById('txtName').value=recordRecevid.empName;
//     //             //gender
//     //         if (recordRecevid.empGender=='Male') {
//     //           document.querySelector('input[value="Male"]').checked=true;
//     //         }else{
//     //           document.querySelector('input[value="Female"]').checked=true;
//     //         }
            
//     //         document.getElementById('txtDate').value=recordRecevid.empDOB;
//     //         document.getElementById('txtEmail').value=recordRecevid.empEmail;
//     //         document.getElementById('txtMob').value=recordRecevid.empMob;
//     //        //hobies 
//     //         recordRecevid.empHobbies.forEach(check=>{
//     //          document.querySelector(`input[value="${check}"]`).checked=true;
//     //        });
//     //        this.updateFormData();

//     //       // end data fetched and sending
//     //       this.displayTable();
//     //       this.updateBtnClick();
//     //       this.deleteClick();
//     //       // console.log('inside editData MAIN');
//     //       //click ends here
//     //     });  
//     //   });
//     //   return
//     // }
//     updateBtnClick() {
//       document.querySelectorAll('.btnGreen').forEach(element => {
//         element.addEventListener('click', () => {
//           element.removeEventListener('click', this.updateBtnClick);
//           this.insertForm.reset();
    
//           const recordRecevid = this.storage.getOneData(element.id);
    
//           if (recordRecevid) {
//             document.getElementById('form').reset();
//             document.getElementById('txtName').value = recordRecevid.empName;
//             document.querySelector(`input[value="${recordRecevid.empGender}"]`).checked = true;
//             document.getElementById('txtDate').value = recordRecevid.empDOB;
//             document.getElementById('txtEmail').value = recordRecevid.empEmail;
//             document.getElementById('txtMob').value = recordRecevid.empMob;
    
//             recordRecevid.empHobbies.forEach(check => {
//               document.querySelector(`input[value="${check}"]`).checked = true;
//             });
    
//             // Use setTimeout to delay the alert
    
//             // Call updateFormData with recordRecevid.id
//             this.updateFormData(recordRecevid.id);
    
//             this.displayTable();
//             this.updateBtnClick();
//             this.deleteClick();
//           } else {
//             console.error("Record not found for ID:", element.id);
//           }
//         });
//       });
//     }
    

//     updateFormData(){
//       let btn=document.getElementById('updateBtn');
//         btn.addEventListener('click',()=>{
//       let data=this.insertForm.getFormData();
//       if (data!=undefined) {
//          console.log(data,'in main for Update');
//         // this.storage.setStorage(data);
//         this.displayTable();
//         this.deleteClick();
//         // this.updateBtnClick();
//         return
//         }  
//       });
//     }

// }

// window.onload = function () {
//  const main= new Main();
 
//  //  main.deleteData('12');
 
//  //  on submit btn click 
//  main.submitBtnClick();
//  //end of btn click
 
//  // for delete 
//  main.deleteClick();

//  //for edit
//  main.updateBtnClick();

//  //
// //  main.storage.getOneData(3);
// };