// When opening a particular tab, the following are to be done
/*
1.) Hide the underline on the previously opened tab
2.) display:none for the previously opened tab
3.) Make the display visible for another tab
4.) Underline the tab link of another tab
 */

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

var typed = new Typed('#name', {
	strings: ['Web Developer', 'Graphic Designer','UI/UX Desiner','Video Editor'],
	typeSpeed: 50,
    loop:true
});



let opentab = (tab_to_open) => {
    // removing the underlines from each of the tablinks
    // an element get underline if it has the class 'active-link'
    for (const tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    // removing a particular tab-content which displays a particular information
    // a tabcontent is visible if it has the class active-tab
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }

    // target that tab-link which triggered this function
    event.currentTarget.classList.add('active-link');

    // Make the display of the particular tab visible
    document.getElementById(tab_to_open).classList.add('active-tab');
};
