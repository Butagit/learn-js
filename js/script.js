
function storage() {
    const userList = [];
    const addUser = (name, age) => {
        const obj = {
            name: name,
            age: age
        };
        userList.push(obj)
        console.log(`Пользователь name ${name} с возрастом ${age} был добавлен`) 
    } 
    return [userList, addUser]
}
const [userList, addUser] = storage();
addUser('ivan', 2)
console.log(userList);



