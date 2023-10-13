async function deleteStudentData() {
    const studentId = document.getElementById('studentId').value;

    if (!studentId) {
        alert("Please enter a valid student ID.");
        return;
    }

    try {
        let response = await fetch(`http://localhost:5135/Student/${studentId}?student_Id=${studentId}`, {
            method: 'DELETE'
        });
        
        if (response.status === 200) {
            document.getElementById('deleteStatus').textContent = 'Student data deleted successfully.';
        } else if (response.status === 404) {
            document.getElementById('deleteStatus').textContent = 'Student data not found.';
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
