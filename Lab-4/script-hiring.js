document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('applicationForm');
    const ageInput = form.querySelector('input[name="age"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const moreInfoInput = document.getElementById('moreInfo');
    const charCounter = document.getElementById('charCounter');
    const maxChars = 30;
  
    // Character Counter for More Info field
    moreInfoInput.addEventListener('input', function() {
      const remaining = maxChars - moreInfoInput.value.length;
      charCounter.textContent = `${remaining} characters remaining`;
    });
  
    // Form submission handler
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Age validation
      const ageValue = parseInt(ageInput.value, 10);
      if (isNaN(ageValue) || ageValue < 21 || ageValue > 99) {
        alert('Age must be a number between 21 and 99.');
        return;
      }
  
      // Phone number validation and formatting
      const phoneValue = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters
      if (phoneValue.length !== 10) {
        alert('Phone number must be 10 digits long.');
        return;
      }
      const formattedPhone = phoneValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      phoneInput.value = formattedPhone; // Format the phone number
  
      // Log all form data
      const formData = new FormData(form);
      const entries = {};
      formData.forEach((value, key) => {
        entries[key] = value;
      });
      console.log(entries);
      alert('Form submitted successfully!');
    });
  });
  