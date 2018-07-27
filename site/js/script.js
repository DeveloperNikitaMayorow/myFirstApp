 function myFirstApp(name, age) {
   alert("Привет, меня зовут " + name + " и это моя первая программа!");

    function showSkills(){
   	let skills = [
    "HTML",
    "CSS",
    "JavaScript"
   	];
   	for (let i = 0; i < skills.lenght; i++) {
   		document.write("Я владею " + skills[i] + "<br>"); 
   	}
   }
   showSkills();


   function checkAge() {
    let age = prompt("Сколько вам лет?");

   	if (age>= 18) {
   		alert("Доступ Разрещен!")
   	} else {
   		alert("Доступ Запрещен!")
   	}
   }
   checkAge();

   function calcPow(num) {
   	alert(num + "² = " + num*num)
   };
   calcPow(4)

}

myFirstApp("Nikita")