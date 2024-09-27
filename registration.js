document.getElementById('generateIdBtn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const aadhaar = document.getElementById('aadhaar').value;
    const profilePic = document.getElementById('photo').files[0];

    // Generate a 12-digit random number for Teacher ID
    const teacherId = Math.floor(100000000000 + Math.random() * 900000000000);

    // Display the ID card section
    document.getElementById('idCardSection').style.display = 'block';
    document.getElementById('teacherName').textContent = `Name: ${name}`;
    document.getElementById('teacherDob').textContent = `DOB: ${dob}`;
    document.getElementById('teacherPhone').textContent = `Phone: ${phone}`;
    document.getElementById('teacherAadhaar').textContent = `Aadhaar: ${aadhaar.slice(0, -4) + '****'}`; // Hide last 4 digits
    document.getElementById('teacherId').textContent = `Teacher ID: ${teacherId}`; // Show generated Teacher ID

    // Display the uploaded profile photo
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profilePic').src = e.target.result;
    };
    reader.readAsDataURL(profilePic);

    // Generate QR code
    const qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';  // Clear previous QR code
    const qrCode = new QRCode(qrCodeDiv, {
      text: teacherId.toString(),
      width: 100,
      height: 100
    });

    // Handle Download button
    document.getElementById('downloadBtn').addEventListener('click', function() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();

      doc.text(`Teacher ID Card`, 10, 10);
      doc.text(`Name: ${name}`, 10, 20);
      doc.text(`DOB: ${dob}`, 10, 30);
      doc.text(`Phone: ${phone}`, 10, 40);
      doc.text(`Aadhaar: ${aadhaar.slice(0, -4) + '****'}`, 10, 50); // Hide last 4 digits
      doc.text(`Teacher ID: ${teacherId}`, 10, 60); // Show generated Teacher ID

      const qrImageData = qrCodeDiv.querySelector('img').src;
      doc.addImage(qrImageData, 'PNG', 10, 80, 50, 50);  // Adding QR code
      const profilePicData = document.getElementById('profilePic').src; // Get profile picture source
      doc.addImage(profilePicData, 'PNG', 10, 140, 50, 50); // Adding Profile Pic

      // Save the PDF
      doc.save('teacher_id_card.pdf');
    });
});
