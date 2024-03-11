function createClassRoom(numberOfStudents) {
    const students = [];

    function studentSeat(seat) {
        return () => seat;
    }

    for (let i = 0; i < numberOfStudents; i++) {
        students.push(studentSeat(i+1));
    }

    return students;
}

const classRoom = createClassRoom(10);