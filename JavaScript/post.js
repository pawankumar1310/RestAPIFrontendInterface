// async function submitForm(event) {
    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Retrieve input values
    const studentId = document.getElementById('StudentId').value;
    const gender = document.getElementById('gender').value;
    const nationality = document.getElementById('nationality').value;
    const placeOfBirth = document.getElementById('PlaceofBirth').value;
    const stageID = document.getElementById('StageID').value;
    const gradeID = document.getElementById('GradeID').value;
    const sectionID = document.getElementById('SectionID').value;
    const topic = document.getElementById('Topic').value;
    const semester = document.getElementById('Semester').value;
    const relation = document.getElementById('Relation').value;
    const raisedhands = document.getElementById('raisedhands').value.trim() === "" ? 0 : parseInt(document.getElementById('raisedhands').value, 10);
    ;
    const visITedResources = document.getElementById('VisITedResources').value.trim() === "" ? 0 : parseInt(document.getElementById('VisITedResources').value, 10);
    ;
    const announcementsView = document.getElementById('AnnouncementsView').value.trim() === "" ? 0 : parseInt(document.getElementById('AnnouncementsView').value, 10);
    const discussion = document.getElementById('Discussion').value.trim() === "" ? 0 : parseInt(document.getElementById('Discussion').value, 10);;;
    const parentAnsweringSurvey = document.getElementById('ParentAnsweringSurvey').value;
    const parentschoolSatisfaction = document.getElementById('ParentschoolSatisfaction').value;
    const studentAbsenceDays = document.getElementById('StudentAbsenceDays').value;
    const studentMarks = document.getElementById('Student Marks').value.trim() === "" ? 0 : parseInt(document.getElementById('Student Marks').value, 10);;;
    const classID = document.getElementById('Class').value;
    // ... Retrieve other attribute values ...

    // Create a data object with the form data
    const formData = {
        studentId: studentId,
        gender: gender,
        nationality: nationality,
        placeOfBirth: placeOfBirth,
        stageID: stageID,
        gradeID: gradeID,
        sectionID: sectionID,
        topic: topic,
        semester: semester,
        relation: relation,
        raisedhands: raisedhands,
        visITedResources: visITedResources,
        announcementsView: announcementsView,
        discussion: discussion,
        parentAnsweringSurvey: parentAnsweringSurvey,
        parentschoolSatisfaction: parentschoolSatisfaction,
        studentAbsenceDays: studentAbsenceDays,
        studentMarks: studentMarks,
        classID: classID
        // Add other form data properties
    };

    // Make an HTTP POST request to your API endpoint
    const apiUrl='http://localhost:5135/Student';
    console.log('API URL:', apiUrl);
    console.log('Request Data:', formData);

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })

    .then(response => {
        if (response.ok) {
            alert('Student ID successfully posted to the API.');
        } else {
            alert('Error posting Student ID to the API.');
        }
    })

    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while posting Student ID to the API.');
    });

});
