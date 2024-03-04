export default class storage {

    constructor() {
    }

    setData(data) {
        localStorage.setItem('employee', JSON.stringify(data));
    }
    getDataAll() {
        let allData = JSON.parse(localStorage.getItem('employee'));
        return allData;
    }
    getOneData(id) {
        let data = this.getDataAll();
        const userIdIndex = data.findIndex(dt => dt.id == id);
        if (userIdIndex != -1) {
            const record = data[userIdIndex];
            return record;
        }
    }
    deleteData(id) {
        let cnf = confirm('Are You Sure to Delete');
        if (cnf) {
            let data = this.getDataAll();
            const userIdIndex = data.findIndex(dt => dt.id == id);
            if (userIdIndex != -1) {
                data.splice(userIdIndex, 1);
                this.setData(data);
            }
            return true
        }
        else
            return false;

    }

    setStorage(data) {
        //  for storing data in local storage 

        const dataAll = this.getDataAll();
        if (dataAll === null || dataAll.length === 0) {
            let arr = [];
            arr.push({ id: 1, ...data });
            this.setData(arr);
            alert('Insert SuccesFull');
        }
        else {
            let arr = dataAll;
            let index = this.idCounter(arr.length);
            arr.push({ id: index, ...data });
            this.setData(arr);
            return true
        }
    }

    idCounter(lastIndex) {
        const dataAll = this.getDataAll();
        let idCount = dataAll[lastIndex - 1].id + 1;
        return idCount;
    }
    updateData(idUser, updateInfo) {
        let data = this.getDataAll();
        const userIdIndex = data.findIndex(dt => dt.id == idUser);
        if (userIdIndex != -1) {
            data.splice(userIdIndex, 1, { id: idUser, ...updateInfo });
            this.setData(data);
        }
        return true;
    }
}
