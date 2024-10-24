    document.getElementById('submit-button').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get input values
        const firstName = document.getElementById('first');
        const lastName = document.getElementById('last');
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        // Get warning elements
        const warnings = document.querySelectorAll('.warning p');
        const errorImages = document.querySelectorAll('img.error');
        
        // Reset all warnings and error images
        warnings.forEach(warning => {
            warning.style.display = 'none';
        });
        errorImages.forEach(img => {
            img.style.display = 'none';
        });

        let valid = true;

        // Validate First Name
        if (firstName.value.trim() === '') {
            valid = false;
            firstName.nextElementSibling.style.display = 'block'; // Show warning
            errorImages[0].style.display = 'block'; // Show error image
            warnings[0].style.display='block';
        }

        // Validate Last Name
        if (lastName.value.trim() === '') {
            valid = false;
            lastName.nextElementSibling.style.display = 'block'; // Show warning
            errorImages[1].style.display = 'block'; // Show error image
            warnings[1].style.display='block';
        }

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value)) {
            valid = false;
            email.nextElementSibling.style.display = 'block'; // Show warning
            errorImages[2].style.display = 'block'; // Show error image
            warnings[2].style.display='block';

        }

        // Validate Password
        if (password.value.trim() === '') {
            valid = false;
            password.nextElementSibling.style.display = 'block'; // Show warning
            errorImages[3].style.display = 'block'; // Show error image
            warnings[3].style.display='block';

        }

        // If all inputs are valid, show success message
        if (valid) {
            // Hide main content
            document.querySelector('main').style.display = 'none'; 
             // Show success message
            document.querySelector('.succeed').style.display = 'block';
        }
    });
