var students = [];
students[0] = CreateNewStudent(
	"Adam", 
	"Podoxin", 
	1265646, 
	1009, 
	[CreateNewCourse("MSC--10H-02", "Science 10 Honours", "B207", "2", "1 (Day 1 - Day 2)", 4), 
	CreateNewCourse("XAT--00P1-1009", "PACK", "B207", "Full Year", "6 (Day 1 - Day 2)", 0)]
	);

function CreateNewStudent(firstName, lastName, id, pack, courses) {
	var student = new Object();

	student.firstName = firstName;
	student.lastName = lastName;
	student.id = id;
	student.pack = pack;
	student.courses = courses;

	return student;
}

function CreateNewCourse(code, name, room, semester, block, credit) {
	var course = new Object();

	course.code = code;
	course.name = name;
	course.room = room;
	course.semester = semester;
	course.block = block;
	course.credit = credit;

	return course;
}

function GetStudentFromID(id) {
	for (var i = 0; i < students.length; i++) {
		if(id == students[i].id) {
			return students[i];
		}
	}

	return null;
}

function SubmitStudentID() {
	var student = GetStudentFromID(document.getElementById("student-id").value);
	alert(student.firstName + " " + student.lastName + " - " + student.id + " " + student.courses[0].name);
}