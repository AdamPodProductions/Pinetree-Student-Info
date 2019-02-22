var students = [];
students[0] = CreateNewStudent("Adam", "Podoxin", 1265646);

function CreateNewStudent(firstName, lastName, id) {
	var student = new Object();

	student.firstName = firstName;
	student.lastName = lastName;
	student.id = id;

	return student;
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
	alert(student.firstName + " " + student.lastName + " - " + student.id);
}