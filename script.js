function submitApplication() {
    var name = document.getElementById('name').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var place = document.getElementById('place').value;
    var state = document.getElementById('state').value;
    var education = document.getElementById('education').value;
    var income = document.getElementById('income').value;
    var caste = document.getElementById('caste').value;
    var marks = document.getElementById('marks').value;
    var documents = document.getElementById('documents').value;

    // Store data in session storage (for demonstration purposes)
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('dob', dob);
    sessionStorage.setItem('place', place);
    sessionStorage.setItem('state', state);
    sessionStorage.setItem('education', education);
    sessionStorage.setItem('income', income);
    sessionStorage.setItem('caste', caste);
    sessionStorage.setItem('marks', marks);
    sessionStorage.setItem('documents', documents);

    // Redirect to the display page
    window.location.href = 'myprofile.html';
}

function displayDetails() {
    var submittedDetailsDiv = document.getElementById('submittedDetails');
    var name = sessionStorage.getItem('name');
    var gender = sessionStorage.getItem('gender');
    var dob = sessionStorage.getItem('dob');
    var place = sessionStorage.getItem('place');
    var state = sessionStorage.getItem('state');
    var education = sessionStorage.getItem('education');
    var income = sessionStorage.getItem('income');
    var caste = sessionStorage.getItem('caste');
    var marks = sessionStorage.getItem('marks');
    var documents = sessionStorage.getItem('documents');

    submittedDetailsDiv.innerHTML = `
        <h2>Submitted Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Place:</strong> ${place}</p>
        <p><strong>State in India:</strong> ${state}</p>
        <p><strong>Education Qualification:</strong> ${education}</p>
        <p><strong>Family Annual Income:</strong> ${income}</p>
        <p><strong>Caste:</strong> ${caste}</p>
        <p><strong>Percentage of Marks:</strong> ${marks}</p>
        <p><strong>List of Documents Submitted:</strong> ${documents}</p>
    `;
}

function goBack() {
    window.location.href = 'scholar.html';
}

// Call displayDetails when the display page loads
window.onload = displayDetails;
