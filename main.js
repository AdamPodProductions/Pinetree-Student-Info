var students = [];
students[0] = CreateNewStudent(
	"Adam", 
	"Podoxin", 
	1265646,
	"130-apodoxin",
	"enrol854", 
	1009, 
	[
	CreateNewCourse("XAT--00P1-1009", "PACK", "B207", "Richard, Suzanne", "Full Year", "6 (Day 1 - Day 2)", 0),

	CreateNewCourse("MPHED10-01", "Physical and Health Education 10", "GYM2", "Jack, Steve", "1", "1 (Day 1 - Day 2)", 4),
	CreateNewCourse("MSS--10-02", "Social Studies 10", "A113", "Kerr, Paul", "1", "2 (Day 1 - Day 2)", 2),
	CreateNewCourse("MFR--10-01", "French 10", "A212", "Mohamed Ali, Sahwa", "1", "3 (Day1 - Day 2)", 4),
	CreateNewCourse("MLCE-10-04", "Career Life Education", "A115", "Fera, Natalee", "1", "4 (Day1 - Day 2)", 4),

	CreateNewCourse("MSC--10H-02", "Science 10 Honours", "B207", "Richard, Suzanne", "2", "1 (Day 1 - Day 2)", 4),
	CreateNewCourse("MLTST10-mnmd02", "Literary Studies 10", "A100", "Faulks, Darren", "2", "14 (Day 2)", 2),
	CreateNewCourse("MNMD-10-02", "New Media 10", "A100", "Faulks, Darren", "2", "2 (Day 1 - Day 2)", 2),
	CreateNewCourse("MPREC11H-02", "Pre-Calculus 11 Honours", "A206", "Lin, George", "2", "3 (Day1 - Day 2)", 4),
	CreateNewCourse("MICTX11-02", "ICT: Modular Survey Course 11", "A222", "Lu, Aaron", "2", "5 (Day1 - Day 2)", 4)
	],
	"A877",
	"30-15-30"
	);

function CreateNewStudent(firstName, lastName, id, username, password, pack, courses, lockerNumber, lockerCombo) {
	var student = new Object();

	student.firstName = firstName;
	student.lastName = lastName;
	student.id = id;
	student.username = username;
	student.password = password;
	student.pack = pack;
	student.courses = courses;
	student.lockerNumber = lockerNumber;
	student.lockerCombo = lockerCombo;

	return student;
}

function CreateNewCourse(code, name, room, teacher, semester, block, credit) {
	var course = new Object();

	course.code = code;
	course.name = name;
	course.room = room;
	course.teacher = teacher;
	course.semester = semester;
	course.block = block;
	course.credit = credit;

	return course;
}

function GetStudentFromLogin(username, password) {
	for (var i = 0; i < students.length; i++) {
		if(username == students[i].username && password == students[i].password) {
			return students[i];
		}
	}

	return null;
}

function Login() {
	var student = GetStudentFromLogin(document.getElementById("username-input").value, document.getElementById("password-input").value);

	if(student == null) {
		document.getElementById("invalid-login").style.display = "block";
	} else {
		document.getElementById("login-form").style.display = "none";
		document.getElementById("student-info").style.display = "block";

		document.getElementById("name").innerHTML = "Name: " + student.firstName + " " + student.lastName;
		document.getElementById("id").innerHTML = "Student ID: " + student.id;
		document.getElementById("username").innerHTML = "Username: " + student.username;
		document.getElementById("password").innerHTML = "Password: " + student.password;
		document.getElementById("pack").innerHTML = "PACK: " + student.pack;

		var i = 0;
		for(i = 0; i < student.courses.length; i++) {
			var row = document.getElementById("courses").insertRow(i + 1);

			row.insertCell(0).innerHTML = student.courses[i].code;
			row.insertCell(1).innerHTML = student.courses[i].name;
			row.insertCell(2).innerHTML = student.courses[i].room;
			row.insertCell(3).innerHTML = student.courses[i].teacher;
			row.insertCell(4).innerHTML = student.courses[i].semester;
			row.insertCell(5).innerHTML = student.courses[i].block;
			row.insertCell(6).innerHTML = student.courses[i].credit;
		}

		document.getElementById("locker-number").innerHTML = "Locker number: " + student.lockerNumber;
		document.getElementById("locker-combo").innerHTML = "Locker combination: " + student.lockerCombo;
	}
}