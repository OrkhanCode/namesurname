"use strict"

let students = [
    {
        name: "Musa",
        surname: "Afandiyev",
        age: 19
    },
    {
        name: "Ramil",
        surname: "Allahverdiyev",
        age: 26
    },
    {
        name: "Resul",
        surname: "Hesebov",
        age: 15
    },
    {
        name: "Novreste",
        surname: "Aslanzade",
        age: 25
    },
    {
        name: "Gultaj",
        surname: "Jafarova",
        age: 18
    },

]


getStudentsByFilter("r")

function getStudentsByFilter(str) {
 setTimeout(() => {
    let result=students.filter(m=>m.name.includes(str));
    console.log(result)
 }, 3000);

}

getStudents()

let elem = document.querySelector("ul")

 createStudent({ name: "Anar", surname: "heseneov", age: 36 }, getStudents)



function getStudents() {
    setTimeout(() => {
        let str="";
        students.forEach(stu => {
            str+=`<li class="list-group-item"><b>${stu.name}-</b><b>${stu.surname}-</b><b>${stu.age}-</b></li>`


        });
        elem.innerHTML=str;

    }, 2000);
}



function createStudent(student) {
    return new Promise ((resolved,rejected)=>{
    setTimeout(() => {
        students.push(student);
        let err=false;
        if(!err){
            resolved(students);
        }
        else{
            rejected("something is wrong");
        }

    }, 3000);

})

}


createStudent({ name: "Anar", surname: "heseneov", age: 36 }, getStudents).then(response=>{
    console.log(response)
}).catch(err=>{
    console.log(err)
})