const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(e){
    e.preventDefault();
    const studentName = document.getElementById("student-name").value;
    const teacherPayment = teacherSelect.value;
    const date = document.getElementById("date").value;

    if(!studentName || !teacherPayment || !date) return alert("Fill all fields");

    alert(`Booking successful! Redirecting to payment...`);
    window.open(teacherPayment, "_blank"); // opens Bank Muscat payment link
});