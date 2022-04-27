function addLists() {
	document.getElementById('course').innerHTML = courseList;
	document.getElementById('location').innerHTML = addressList;
	document.getElementById('destination').innerHTML = addressList;
}

addLists();

const optionLinks = document.querySelectorAll('.search-bar-option');
optionLinks.forEach((currentLink) => {
	currentLink.addEventListener('click', () => {
		optionLinks.forEach((link) => {
			link.classList.remove('active-option');
		});
		currentLink.classList.add('active-option');
		if (
			currentLink.textContent == 'Get Scholarships' ||
			currentLink.textContent == 'Practice Exams'
		) {
			document.getElementsByClassName(
				'navbar__search-bar__bar'
			)[0].innerHTML = `<p>Still Under Construction </p>`;
			document
				.getElementsByClassName('navbar__search-bar__bar')[0]
				.classList.add('construction');
		} else {
			document.getElementsByClassName(
				'navbar__search-bar__bar'
			)[0].innerHTML = `<div class="bar__option">
            <select id="destination" name="explore-college-info"></select>
        </div>
        <div class="bar__option">
            <select id="location" name="explore-college-info"></select>
        </div>
        <div class="bar__option">
            <select id="course" name="explore-college-info"></select>
        </div>
        <div class="bar__option submit-option">
            <button type="button" name="explore-college-info" id="submit">
                Search Now
            </button>
        </div>`;
			document
				.getElementsByClassName('navbar__search-bar__bar')[0]
				.classList.remove('construction');
			addLists();
		}
	});
});
