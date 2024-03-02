// script.js

document.getElementById('previewBtn').addEventListener('click', function () {
  generateResume();
});

document.getElementById('downloadBtn').addEventListener('click', function () {
  downloadResume();
});

function generateResume() {
  const template = document.getElementById('templateSelect').value;
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;

  const previewContainer = document.getElementById('resumePreview');
  previewContainer.innerHTML = '';

  // Generate the resume HTML based on the selected template and user input
  const resumeHTML = `
        <h3>${fullName}</h3>
        <p>Email: ${email}</p>
        <p>Address: ${address}</p>
        <!-- Add more sections and fields as needed -->
    `;

  previewContainer.innerHTML = resumeHTML;
}

function downloadResume() {
  const resumeContent = document.getElementById('resumePreview').innerText;
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
