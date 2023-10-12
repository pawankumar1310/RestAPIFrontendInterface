async function getStudentDataAPI() {
    try {
        let response = await fetch('http://localhost:5135/Student');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();

        const userData = document.getElementById('studentData');
        userData.innerHTML = data
            .map((user) => `
                <tr>
                    <td>${user.studentId || 'N/A'}</td>
                    <td>${user.gender || 'N/A'}</td>
                    <td>${user.nationalIty || 'N/A'}</td>
                    <td>${user.placeofBirth || 'N/A'}</td>
                    <td>${user.stageId || 'N/A'}</td>
                    <td>${user.gradeId || 'N/A'}</td>
                    <td>${user.sectionId || 'N/A'}</td>
                    <td>${user.topic || 'N/A'}</td>
                    <td>${user.semester || 'N/A'}</td>
                    <td>${user.relation || 'N/A'}</td>
                    <td>${user.raisedhands || 'N/A'}</td>
                    <td>${user.visItedResources || 'N/A'}</td>
                    <td>${user.announcementsView || 'N/A'}</td>
                    <td>${user.discussion || 'N/A'}</td>
                    <td>${user.parentAnsweringSurvey || 'N/A'}</td>
                    <td>${user.parentschoolSatisfaction || 'N/A'}</td>
                    <td>${user.studentAbsenceDays || 'N/A'}</td>
                    <td>${user.studentMarks || 'N/A'}</td>
                    <td>${user.class || 'N/A'}</td>
                </tr>
            `)
            .join(' ');
    } catch (error) {
        console.error('Error:', error);
    }
}

getStudentDataAPI();