let currentLanguage = "cn";
const translations = {
	en: {
		button: "中文",
		about: {
			heading: "Computer · Phone · TV Box · Travel SIM",
			strong: "Quick and easy",
			paragraph: `repairs for phones and computers, including screens, batteries,
				keyboards, and more. Need a TV box or travel SIM? We’ve got those too. Fast
				service, straightforward help, and everything in one place.`
		},
		location: {
			heading: "Location",
			paragraph: `4300 Steeles Ave E Unit B10, Markham, ON L3R 0Y5. Pacific Mall, main floor, southeast corner, Unit B10.`
		},
		businessHours: {
			heading: "Business Hours",
			table: [
				["Monday – Wednesday", "12:00 – 7:00 PM"],
				["Thursday", "Closed"],
				["Friday – Sunday", "12:00 – 7:00 PM"]
			]
		},
		contact: {
			heading: "Contact",
			table: ["Owner", "Number", "Email"]
		}
	},
	cn: {
		button: "English",
		about: {
			heading: "電腦 · 手機 · 電視盒 · 旅行數據卡",
			strong: "快速又輕鬆",
			paragraph: `的手機和電腦維修服務，包括螢幕、電池、鍵盤等各種問題。需要電視盒子或旅行手機卡嗎？我們也有。服務快捷，溝通簡單，一站式滿足您的需求。`
		},
		location: {
			heading: "地點",
			paragraph: `安大略省馬克姆市史提爾斯東街 4300 號 B10 舖，郵遞區號 L3R 0Y5。太古廣場一樓東南角 B10 號舖。`
		},
		businessHours: {
			heading: "營業時間",
			table: [
				["星期一至星期三", "下午12:00–7:00"],
				["星期四", "休息"],
				["星期五至星期日", "下午12:00–7:00"]
			]
		},
		contact: {
			heading: "聯絡",
			table: ["店主", "電話", "電郵"]
		}
	}
};
const button = document.getElementById("button");
function toggleLanguage(event) {
	event.preventDefault();
	currentLanguage = currentLanguage === "en" ? "cn" : "en";
	updateText();
}
function updateText() {
	button.textContent = translations[currentLanguage].button;
	updateAbout();
	updateLocation();
	updateBusinessHours();
	updateContact();
}
function updateAbout() {
	const paragraphs = document.getElementById("about").querySelectorAll("p");
	paragraphs[0].textContent = translations[currentLanguage].about.heading;
	const strong = document.createElement("strong");
	strong.textContent = translations[currentLanguage].about.strong;
	paragraphs[1].textContent = "";
	paragraphs[1].append(strong);
	if (currentLanguage === "en") paragraphs[1].append(" ");
	paragraphs[1].append(translations[currentLanguage].about.paragraph);
}
function updateLocation() {
	const location = document.getElementById("location");
	location.querySelector("h2").textContent = translations[currentLanguage].location.heading;
	location.querySelector("p").textContent = translations[currentLanguage].location.paragraph;
}
function updateBusinessHours() {
	const businessHours = document.getElementById("business-hours");
	businessHours.querySelector("h2").textContent = translations[currentLanguage].businessHours.heading;
	const table = businessHours.querySelector("table");
	for (let i = 0; i < table.rows.length; i++) {
		const row = table.rows[i];
		for (let j = 0; j < row.cells.length; j++) {
			row.cells[j].textContent = translations[currentLanguage].businessHours.table[i][j];
		}
	}
}
function updateContact() {
	const contact = document.getElementById("contact");
	contact.querySelector("h2").textContent = translations[currentLanguage].contact.heading;
	const table = contact.querySelector("table");
	for (let i = 0; i < table.rows.length; i++) {
		const row = table.rows[i];
		row.cells[0].textContent = translations[currentLanguage].contact.table[i];
	}
}
button.addEventListener('click', toggleLanguage);
// Initialize
updateText();