'use strict';

function Group(numberOfgroup, listOfStudentsArr) {
    this.numberOfgroup = numberOfgroup;
    this.listOfStudentsArr = listOfStudentsArr;

    this.absentStudents = function () {
        return this.listOfStudentsArr.filter(student => !student.isYouHealth()).map(student => student.initials());
    };
}