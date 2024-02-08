
export default class Display {
    constructor(data) {
    this.datas=data;
    this.displayTable(this.datas);
    }
    displayTable(data)
    {
        const displayTable=document.getElementById('displayTable');
        if (data!=null) {
               displayTable.innerHTML='';
               data.forEach(d => {
                   displayTable.innerHTML+=`<tr>
                   <td>${d.empName}</td>
                   <td>${d.empGender}</td>
                   <td>${d.empDOB}</td>
                   <td>${d.empEmail}</td>
                   <td>${d.empMob}</td>
                   <td>${d.empHobbies}</td>
                   <td class="tdBtn">
                   <button class="btnGreen editBtn" id="${d.id}" ">EDIT</button>
                   <button class="btnRed" id="${d.id}" >DELETE</button>
                 </td>
                 </tr>`;
                });
        }
    }

}
