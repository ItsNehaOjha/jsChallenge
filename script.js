document.addEventListener('DOMContentLoaded', () => {
    // Registration form validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            let msg = [];

            if (name.value === '' || name.value === null) {
                msg.push('Name is required');
            }
            if (email.value === '' || email.value === null) {
                msg.push('Email is required');
            }

            if (msg.length > 0) {
                e.preventDefault();
                alert(msg.join(', '));
            } else {
                // Redirect to topics form
                window.location.href = "step2.html";
            }
        });
    }

    // Topics selection form validation
    const topicsForm = document.getElementById('topicsForm');
    if (topicsForm) {
        const topics = document.querySelectorAll('li[name="topic"]');
        const errorMessages = document.getElementById('errorMessages');

        topicsForm.addEventListener('submit', (e) => {
            let isSelected = false;

            // Check if any topic link has been clicked
            topics.forEach(topic => {
                if (topic.classList.contains('selected')) {
                    isSelected = true;
                }
            });

            // If no topic is selected, prevent form submission and show error message
            if (!isSelected) {
                e.preventDefault();
                errorMessages.textContent = 'Please select at least one topic.';
                errorMessages.classList.add('error');  // Add error class
            } else {
                errorMessages.textContent = '';
                errorMessages.classList.remove('error');  // Remove error class
                // Redirect to next page
                window.location.href = "step3.html";
            }
        });

        // Add click event to each topic link
        topics.forEach(topic => {
            topic.addEventListener('click', (e) => {
                e.preventDefault();  

          
                if (topic.classList.contains('selected')) {
                    topic.classList.remove('selected');
                } else {
                    topic.classList.add('selected');
                }
            });
        });
    }

    //summary page
    const summaryPage= document.getElementById('summaryForm');
    if(summaryPage){
        const confirm = document.getElementById('confirm');
        summaryPage.addEventListener('click', (e)=>{
            alert("Success ✅");
        })
    }

    // Highlight current page dot
    const currentPage = window.location.pathname.split('/').pop();
    const dots = document.querySelectorAll('.pagedot .dot');

    dots.forEach(dot => {
        const dotPage = dot.parentElement.getAttribute('href').split('/').pop();
        if (dotPage === currentPage) {
            dot.classList.add('active');
        }
    });
});

