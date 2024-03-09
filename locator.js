function redirectToPage() {
    var dropdown = document.getElementById("stateDropdown");
    var selectedState = dropdown.value;

    if (selectedState) {
        // Redirect to the corresponding webpage
        window.location.href = selectedState + ".html";
    }
}
