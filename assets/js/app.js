let navToggler = document.getElementById("nav__phone-view");
navToggler.addEventListener("click", function () {
	console.log("this btn is working ");
});

// function featureCard(position, content) {
// 	let cardContainer = document.createElement("div");
// 	cardContainer.innerHTML = `
//         <p class="feature__content"> <i class=" feature__content-icon fa fa-bullseye" aria-hidden="true"></i> ${content}.</p>
//     `;
// 	position.append(cardContainer);
// }

function featureCard(position, content) {
	let cardContainer = document.createElement("div");
	cardContainer.innerHTML = `
        <p class="feature__content-d flex">${content}.</p>
    `;
	position.append(cardContainer);
}

function featuresRender(pos, arr) {
	for (let i = 0; i < arr.length; i++) {
		const features = arr[i];
		featureCard(pos, features);
	}
}

let features = [
	"RCC frame structure with attractive elevation",
	"Designed for earthquake safety",
	'Internal walls 4" and external walls 6" thick',
	"External plaster sand face and interior plaster POP/ Gypsum finish",
	"Attractive main doors with design laminated sheet, internal wooden door",
	"Keyless entery to the flats with high security locks",
	"32 * 32 inch vitrified tiles flooring for the entire flat",
	"anti skid cetamic flooring in attached terraace and bathrooms",
	"adequate concealed electrical points with copper wiring",
	"AC provision in master bedroom",
	"Ample electrical points",
	"Granite top kitechen platform with stainless steel sinks",
	"Glazes/design dado tiles up to lintek level",
	"Provision for exhaust fan",
	"Ant-skid ceramic flooring",
	"Provision for boiler/geyser",
	"Water proof doors",
	"Finest quality CP fitting and sanity ware from jaguar or equivalent",
	'Colored glazed tiles dado up to 4" height in bathrooms an wc',
	"Powered coated amuminum sliding windows with mosquitos net with granite/marbel frames",
	"Internal oil bond distemper and external semi acrylic paint",
];

let featuresPos = document.querySelector(".features__contents");
featuresRender(featuresPos, features);

// console.log(features);
let color = [
	"#d81b60",
	"#ff7043",
	"#0277bd",
	"#8e24aa",
	"#4527a0",
	"#3f51b5",
	"#651fff",
	"#7cb342",
	"#880e4f",
	"#5c6bc0",
	"#304ffe",
	"#ffab00",
];

let aminities = document.querySelectorAll(".ami__features-lst");

for (let i = 0; i < aminities.length; i++) {
	let a = aminities[i];
	let colorStyle = color[i];
	a.style.backgroundColor = colorStyle;
	console.log(a);
}
