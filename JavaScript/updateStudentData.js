let studentData = null;
async function fetchStudentData() {
    const studentId = document.getElementById('studentId').value;
    if (!studentId) {
        alert("Please enter a student ID.");
        return;
    }

    try {
        let response = await fetch(`http://localhost:5135/Student/${studentId}?student_Id=${studentId}`);
        // http://localhost:5135/Student?student_Id=stdn00001
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        studentData = await response.json();
        // Retrieve input values
        document.getElementById('StudentId').value = studentData.studentId;
        document.getElementById('gender').value = studentData.gender;
        document.getElementById('nationality').value = studentData.nationalIty;
        document.getElementById('PlaceofBirth').value = studentData.placeofBirth;
        document.getElementById('StageID').value = studentData.stageId;
        document.getElementById('GradeID').value = studentData.gradeId;
        document.getElementById('SectionID').value = studentData.sectionId;
        document.getElementById('Topic').value = studentData.topic;
        document.getElementById('Semester').value = studentData.semester;
        document.getElementById('Relation').value = studentData.relation;
        document.getElementById('raisedhands').value = studentData.raisedhands;
        document.getElementById('VisITedResources').value = studentData.visItedResources;
        document.getElementById('AnnouncementsView').value = studentData.announcementsView;
        document.getElementById('Discussion').value = studentData.discussion;
        document.getElementById('ParentAnsweringSurvey').value = studentData.parentAnsweringSurvey;
        document.getElementById('ParentschoolSatisfaction').value = studentData.parentschoolSatisfaction;
        document.getElementById('StudentAbsenceDays').value = studentData.studentAbsenceDays;
        document.getElementById('Student Marks').value = studentData.studentMarks;
        document.getElementById('Class').value = studentData.class;
        document.getElementById('updateStatus').textContent = 'Student data fetched.';
    } catch (error) {
        console.error('Error:', error);
    }
}

async function updateStudentData() {
    if (!studentData) {
        alert("No data retrieved for update. Please fetch data first.");
        return;
    }
   
    const updatedData = {
        studentId:  document.getElementById('StudentId').value ,
        gender: document.getElementById('gender').value,
        nationality: document.getElementById('nationality').value,
        placeOfBirth: document.getElementById('PlaceofBirth').value ,
        stageID:  document.getElementById('StageID').value ,
        gradeID: document.getElementById('GradeID').value,
        sectionID: document.getElementById('SectionID').value,
        topic: document.getElementById('Topic').value,
        semester: document.getElementById('Semester').value ,
        relation: document.getElementById('Relation').value ,
        raisedhands: document.getElementById('raisedhands').value,
        visITedResources: document.getElementById('VisITedResources').value,
        announcementsView: document.getElementById('AnnouncementsView').value ,
        discussion:  document.getElementById('Discussion').value,
        parentAnsweringSurvey: document.getElementById('ParentAnsweringSurvey').value ,
        parentschoolSatisfaction: document.getElementById('ParentschoolSatisfaction').value,
        studentAbsenceDays: document.getElementById('StudentAbsenceDays').value,
        studentMarks: document.getElementById('Student Marks').value ,
        class: document.getElementById('Class').value 
    };

    try {
        let response = await fetch(`http://localhost:5135/Student?student_Id=${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        return;
        if (response.status === 200) {
            document.getElementById('updateStatus').textContent = 'Student data updated successfully.';
            alert("updated successfully")
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}