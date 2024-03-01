
export default class Display {
    constructor() {
    }

    displayTable(data) {
        const displayTable = document.getElementById('displayTable');
        if (data != null) {
            displayTable.innerHTML = '';
            data.forEach(d => {
                displayTable.innerHTML += `<tr>
                   <td>${d.empName}</td>
                   <td>${d.empGender}</td>
                   <td>${d.empDOB}</td>
                   <td>${d.empEmail}</td>
                   <td>${d.empMob}</td>
                   <td>${d.empHobbies}</td>
                   <td class="tdBtn">
                   <button class="btnGreen editBtn" id="${d.id}" >EDIT</button>
                   <button class="btnRed" id="${d.id}" >DELETE</button>
                 </td>
                 </tr>`;
            });
        }
        if (data == null || data.length == 0) {
            const displayDiv = document.getElementsByClassName('display');
            displayDiv[0].style.display = 'none';
        } else {
            const displayDiv = document.getElementsByClassName('display');
            displayDiv[0].style.display = 'block';
        }
    }

    displayAdvanceTable(data) {
        const displayTable = document.getElementById('advanceDiv');
        if (data != null) {
            // displayTable.innerHTML = '';
            const td = document.createElement('td');
            td.textContent = 'hello'
            // displayTable.appendChild(td)
            const davduv = document.querySelector('#advanceDiv');
            console.log(davduv);
            data.forEach(d => {

            });
        }
        if (data == null || data.length == 0) {
            const displayDiv = document.getElementsByClassName('display');
            displayDiv[0].style.display = 'none';
        } else {
            const displayDiv = document.getElementsByClassName('display');
            displayDiv[0].style.display = 'block';
        }
    }

}
