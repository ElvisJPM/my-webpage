var students = [
    {
        lname: "Perez",
        name: "Elvis Josue",
        age: 21,
        birthday: {
            year: 2000,
            month: "November",
            day: 19
        },
        career: "IDYGS"
    },
    {
        lname: "Morales",
        name: "Josue",
        age: 21,
        birthday: {
            year: 2001,
            month: "Agosto",
            day: 18
        },
        career: "IDYGS"
    },
    
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
    var templ = document.getElementById("tbodytempl").content.cloneNode(true);
    var tdnumber = templ.querySelector("span[name='tbodynumber']");
    var tdname = templ.querySelector("span[name='tbodyname']");
    var tdage = templ.querySelector("span[name='tbodyage']");
    var tdcareer = templ.querySelector("span[name='tbodycareer']");

    tdnumber.innerText = i + 1;
    tdname.innerText = students[i].lname + " " + students[i].name;
    tdage.innerText = students[i].age;
    tdcareer.innerText = students[i].career;

    table.append(templ); 
}