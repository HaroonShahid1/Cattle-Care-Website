document.addEventListener("DOMContentLoaded", function () {
    const addNewButton = document.querySelector('.btn-primary[data-toggle="modal"]');
    const addAccountModal = new bootstrap.Modal(document.getElementById('addAccountModal'));

    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // Function to open the modal and set the current date
    function openAddAccountModal() {
        const creationDateField = document.getElementById("creationDate");
        creationDateField.value = getCurrentDate();
        addAccountModal.show();
    }

    addNewButton.addEventListener('click', openAddAccountModal);
});

document.addEventListener("DOMContentLoaded", function () {
	// Get the current URL path
	var path = window.location.pathname;

	// Find the matching link and add the active-link class
	var links = document.querySelectorAll('.nav-link');
	links.forEach(function (link) {
		if (link.getAttribute('href') === path) {
			link.classList.add('active-link');
		}
	});
});