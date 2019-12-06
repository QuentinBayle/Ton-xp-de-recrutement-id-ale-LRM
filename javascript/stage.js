<script src="http://code.jquery.com/jquery-latest.min.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>

<link rel="stylesheet" href="fullpage.css" />

<script src="fullpage.js"></script>

fullpage('#fullpage', {
// options here
});
// jQuery

$('#fullpage').fullpage({

// options here

});
// A selector used to specify the menu to link with the sections
menu: '#menu',

// Whether anchors in the URL will have any effect at all in the library
lockAnchors: false,

// Defines the anchor links
anchors:['firstPage', 'secondPage'],

// Enables navigation
navigation: false,

// Or 'left'
navigationPosition: 'right',

// An array of tooltips
navigation<a href="https://www.jqueryscript.net/tooltip/">Tooltip</a>s: ['firstSlide', 'secondSlide'],

// Enables active tooltip
showActiveTooltip: false,

// Shows a navigation for each landscape slide
slides<a href="https://www.jqueryscript.net/tags.php?/Navigation/">Navigation</a>: false,

// Or 'top'
slidesNavPosition: 'bottom',

// Whether to use JavaScript or CSS3 transforms
css3: true,

// <a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>ing speed in ms
scrollingSpeed: 700,

// Enables auto scrolling
autoScrolling: true,

// Auto fits sections to the viewport
fitToSection: true,

// In ms
fitToSectionDelay: 1000,

// Shows browser scrollbar
scrollBar: false,

// Easing effect
easing: 'easeInOutCubic',
easingcss3: 'ease',

// Auto scrolls to the top/bottom
loopBottom: false,
loopTop: false,

// Enables infinite looping on horizontal sliders
loopHorizontal: true,

// Defines whether scrolling down in the last section or should scroll down to the first one and if scrolling up in the first section should scroll up to the last one. 
continuousVertical: false,

// Defines whether sliding right in the last slide should slide right to the first one or not, and if scrolling left in the first slide should slide left to the last one or not.
continuousHorizontal: false,

// Slides horizontally within sliders by using the mouse wheel or trackpad
scrollHorizontally: false,

// Moving one horizontal slider will force the sliding of sliders in other section in the same direction
interlockedSlides: false,

// Enables drag and move
// true: enables the feature.
// false: disables the feature.
// vertical: enables the feature only vertically.
// horizontal: enables the feature only horizontally.
// fingersonly: enables the feature for touch devices only.
// mouseonly: enables the feature for desktop devices only (mouse and trackpad).
dragAndMove: false,

// Use non full screen sections based on percentage
offsetSections: false,

// Resets every slider after leaving its section
reset<a href="https://www.jqueryscript.net/slider/">Slider</a>s: false,

// Uses fade effect instead
fadingEffect: false,

// If you want to avoid the auto scroll when scrolling over some elements, this is the option you need to use. (useful for <a href="https://www.jqueryscript.net/tags.php?/map/">map</a>s, scrolling divs etc.) 
// It requires a string with the Javascript selectors for those elements. (For example: normalScrollElements: '#element1, .element2'). 
normalScrollElements: '#element1, .element2',

// Creates a scroll for the section/slide in case its content is bigger than the height of it
// Requires: /vendor/scrolloverflow.js
scrollOverflow: false,

// Scrolls up the content of the section/slide with scroll bar when leaving to another vertical section
scrollOverflowReset: false,

// Requires iScroll.js library
scrollOverflowOptions: null,

// Defines a percentage of the browsers window width/height, and how far a swipe must measure for navigating to the next section / slide.
touchSensitivity: 5,

// Defines how to scroll to a section which size is bigger than the viewport.
// top, bottom, null
bigSectionsDestination: null,

// Accessibility
keyboardScrolling: true,

// Enables smooth scroll on anchor links
animateAnchor: true,

// Records URL history
recordHistory: true,

// Shows navigation arrows
controlArrows: true,

// Vertically centered?
verticalCentered: true,

// An array of colors for page sections
sectionsColor : ['#ccc', '#fff'],

// padding in pixels
paddingTop: '3em',
paddingBottom: '10px',

// Which elements will be taken off the scrolling structure of the plugin which is necessary when using the css3 option to keep them fixed
fixedElements: '#header, .footer',

// A normal scroll (autoScrolling:false) will be used under the defined width in pixels
responsiveWidth: 0,

// A normal scroll (autoScrolling:false) will be used under the defined height in pixels
responsiveHeight: 0,

// When set to true slides will be turned into vertical sections when responsive mode is fired
responsiveSlides: false,

// Enables <a href="https://www.jqueryscript.net/tags.php?/parallax/">parallax</a> backgrounds effects
parallax: false,

// Parallax options
parallaxOptions: {
  type: 'reveal',
  percentage: 62,
  property: 'translate'
},

// Enables card effects
cards: false,

// Card options
cardsOptions: {
  perspective: 100,
  fadeContent: true,
  fadeBackground: true
},

// Custom selectors
sectionSelector: '.section',
slideSelector: '.slide',

// Lazy load media elements
lazyLoading: true
