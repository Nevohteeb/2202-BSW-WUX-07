function getAllStudents() {
    // jQuerry AJAX Call to require JSON from our file
    $.ajax({
        url: './js/students.json',
        type: 'GET',
        data: 'json',

        // Every Ajax should have a success - what to do when it works and and error - if it fails

        // In this case we are telling it what to do with the student data when it successfully grabs it
        success: function (studentdata) {
            document.getElementById('results').innerHTML = ''; // clear dom for a refresh
            let i;
            for (i = 0; i < studentdata.length; i++) {
                let student = studentdata[i];
                console.log(student); // log out every student to the console
                // NB!!!!! - Notice the backticks to allows us to use template literals 
                document.getElementById('results').innerHTML += `
               <div class="col-md-4 col-12 mb-3">
                    <div class="card">
                        <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                        <div class="card-body">
                            <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                            <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                            <p class="card-text">Email: <span class="email">${student.email}</span></p>
                        </div>
                    </div>
                </div>
               `;

            }
        },

        // Here we can log out an error - or whatever we desire inside the error function
        error: function () {
            console.log('error');
        }
    });
}

function searchStudentsName() {
    // jQuerry AJAX Call to require JSON from our file
    $.ajax({
        url: './js/students.json',
        type: 'GET',
        data: 'json',

        // Every Ajax should have a success - what to do when it works and and error - if it fails

        // In this case we are telling it what to do with the student data when it successfully grabs it
        success: function (studentdata) {
            document.getElementById('results').innerHTML = ''; // clear dom for a refresh
            let i;
            for (i = 0; i < studentdata.length; i++) {
                let student = studentdata[i];
                let firstName = student.first_name.toLowerCase();
                let lastName = student.last_name.toLowerCase();
                let searchName = document.getElementById('nameSearch').value;
                let search = searchName.toLowerCase();
                // NB!!!!! - Notice the backticks to allows us to use template literals 
                if ((firstName.includes(search) === true) || (lastName.includes(search)) === true) {
                    document.getElementById('results').innerHTML += `
               <div class="col-md-3 col-12 mb-3">
                    <div class="card">
                        <img src="${student.profile_img}" class="card-img-top" alt="Student Profile Image">
                        <div class="card-body">
                            <h5 class="card-title"><span class="first-name">${student.first_name}</span> <span class="last-name">${student.last_name}</span></h5>
                            <p class="card-text">Id#: <span class="id-number">${student.id}</span></p>
                            <p class="card-text">Email: <span class="email">${student.email}</span></p>
                        </div>
                    </div>
                </div>
               `;
                }
                
            }
        },

        // Here we can log out an error - or whatever we desire inside the error function
        error: function () {
            console.log('error');
        }
    });
}

$('#getBtn').click(function () {
    getAllStudents();
})

$('#nameSearch').on('input', function () {
    searchStudentsName()
})