async function getStudentDataById() {
    const studentId = document.getElementById('studentIdInput').value;

    if (!studentId) {
        alert("Please enter a student ID.");
        return;
    }

    try {
        let response = await fetch(`http://localhost:5135/Student/${studentId}?student_Id=${studentId}`);
        // http://localhost:5135/Student/STDN00001?student_Id=STDN00001
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        const userData = document.getElementById('studentData');
        userData.innerHTML = `
            <tr>
                <td>${data.studentId || 'N/A'}</td>
                <td>${data.gender || 'N/A'}</td>
                <td>${data.nationalIty || 'N/A'}</td>
                <td>${data.placeofBirth || 'N/A'}</td>
                <td>${data.stageId || 'N/A'}</td>
                <td>${data.gradeId || 'N/A'}</td>
                <td>${data.sectionId || 'N/A'}</td>
                <td>${data.topic || 'N/A'}</td>
                <td>${data.semester || 'N/A'}</td>
                <td>${data.relation || 'N/A'}</td>
                <td>${data.raisedhands || 'N/A'}</td>
                <td>${data.visItedResources || 'N/A'}</td>
                <td>${data.announcementsView || 'N/A'}</td>
                <td>${data.discussion || 'N/A'}</td>
                <td>${data.parentAnsweringSurvey || 'N/A'}</td>
                <td>${data.parentschoolSatisfaction || 'N/A'}</td>
                <td>${data.studentAbsenceDays || 'N/A'}</td>
                <td>${data.studentMarks || 'N/A'}</td>
                <td>${data.class || 'N/A'}</td>
            </tr>
        `;
    } catch (error) {
        alert("Please enter valid Student Id : StudentID must be in STDN00000 format");
        console.error('Error:', error);
    }
}
