
export default class Display {
    constructor() {
    }

    displayTable(data) {
        const displayTable = document.getElementById('displayTable');
        if (data) {
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
        const displayDiv = document.getElementsByClassName('display');
        (data && data.length > 0) ? displayDiv[0].style.display = 'block' : displayDiv[0].style.display = 'none';
    }

    displayAdvanceTable(data) {
        // console.log(data);
        const displayTable = document.getElementById('advanceDisplay');
        displayTable.innerHTML = '';
        displayTable.innerHTML = `<tr><th>Name</th></tr>
                                <tr><th>Gender</th></tr>
                                <tr><th>DOB</th></tr>
                                <tr><th>Email</th></tr>
                                <tr><th>Phone</th></tr>
                                <tr><th>Hobbies</th></tr>
                                <tr><th>Action</th></tr>`;
        if (data) {
            const elementsQuery = '#advanceDisplay > tr';
            let cnt = 0;
            data.forEach(d => { this.setTd(d.empName, elementsQuery, cnt); }); cnt++;
            data.forEach(d => { this.setTd(d.empGender, elementsQuery, cnt); }); cnt++;
            data.forEach(d => { this.setTd(d.empDOB, elementsQuery, cnt); }); cnt++;
            data.forEach(d => { this.setTd(d.empEmail, elementsQuery, cnt); }); cnt++;
            data.forEach(d => { this.setTd(d.empMob, elementsQuery, cnt); }); cnt++;
            data.forEach(d => { this.setTd(d.empHobbies, elementsQuery, cnt); }); cnt++;
            data.forEach(d => {
                const trs = document.querySelectorAll(elementsQuery);
                const td = document.createElement('td');
                const tdOut = document.createElement('td');
                td.setAttribute('class', 'tdBtn');
                td.setAttribute('style', 'border:0');
                const editBtn = document.createElement('button');
                editBtn.setAttribute('class', 'btnGreen editBtn');
                editBtn.setAttribute('id', d.id);
                editBtn.textContent = 'EDIT';
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('class', 'btnRed');
                deleteBtn.setAttribute('id', d.id);
                deleteBtn.textContent = 'DELETE';
                td.appendChild(editBtn);
                td.appendChild(deleteBtn)
                tdOut.appendChild(td)
                trs[cnt].appendChild(tdOut)
            });

        }
        const displayDiv = document.getElementsByClassName('display');
        (data && data.length > 0) ? displayDiv[1].style.display = 'block' : displayDiv[1].style.display = 'none';

    }
    setTd(setData, elementQuery, cnt) {
        const tag = document.querySelectorAll(elementQuery)[cnt];
        const td = document.createElement('td');
        td.textContent = setData;
        tag.appendChild(td);
    }

}
