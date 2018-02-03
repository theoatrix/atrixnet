var donators = {
	"Hess": {
		"username": "Hess",
		"amount": "Developer",
		"image": ["/assets/img/hess.png"],
		"link": "https://www.twitter.com/Im_Hess",
	},
	"Haha Eggnog": {
		"username": "Haha Eggnog",
		"amount": "",
		"image": ["/assets/img/skillicons/fishing_16.png"],
		"link": "https://www.youtube.com/watch?v=eIri9YLHpOg",
	},
	"Evercleared": {
		"username": "Evercleared",
		"amount": "",
		"image": ["/assets/img/items/Antipoison_(3).png"],
		"link": "http://services.runescape.com/m=hiscore_oldschool/hiscorepersonal.ws?user1=Evercleared",
	},
};

var rswikiPrefix = "http://2007.runescape.wikia.com/wiki/";


$(document).ready(function() {

	refreshPageState();

	$("#panel-heading-btn-guide").on("click", function() {
		if ($("#panel-more-info").hasClass("guide-showing")) {
			$("#panel-more-info").removeClass("guide-showing");
			$("#panel-more-info").addClass("guide-not-showing");
		}
		else {
			$("#panel-more-info").removeClass("guide-not-showing");
			$("#panel-more-info").addClass("guide-showing");	
		}
	});

	$("#header-notice").on("click", function() {
		if ($("#panel-header-notice").hasClass("notice-showing")) {
			$("#panel-header-notice").removeClass("notice-showing");
			$("#panel-header-notice").addClass("notice-not-showing");
		}
		else {
			$("#panel-header-notice").removeClass("notice-not-showing");
			$("#panel-header-notice").addClass("notice-showing");
		}
	});

	$("#gpxp-username-entered-favorite").hide();
	$("#storedxp-username-entered-favorite").hide();
	$("#quests-username-entered-favorite").hide();
	$("#diaries-username-entered-favorite").hide();

	var page = $("#favorited-users-list").attr("data-page");

	$("#favorited-users").on("click", ".favorited-users-user", function() {

		var username = $(this).text();

		$("#" + page + "-username-field").val(username);
		$("#" + page + "-get-stats").click();

	});

	$("body").on("click", "#" + page + "-username-entered-favorite", function() {

		var userToAdd = $("#" + page + "-username-field").val();

		if (userToAdd != "" && userToAdd != null) {

			setPlayerFavoriteState(userToAdd, true);

			var row = "<li class='col-lg-12  favorited-users-row'><span class='col-lg-11 favorited-users-user cursor'>" + userToAdd + "</span><img class='pointer col-lg-1 no-pad favorited-users-remove-user' src='/assets/img/skillicons/minus.png'></li>";
			$("#favorited-users-list").append(titleCaseString(row));

			refreshPageState();
		}
	});

	 $("#favorited-users").on("click", ".favorited-users-remove-user", function() {

	 	var userToRemove = $(this).parent().parent().children(".favorited-users-user").text();

	 	setPlayerFavoriteState(userToRemove, false);

	 	$.each($(".favorited-users-user"), function(player) {

	 		var rowUsername = $(this).text();

	 		if (rowUsername == userToRemove) {
	 			$(this).parent().remove();
	 		}
	 	});
	 });
});

var pageState;
var storageName = 'favorites';

function isPlayerFavorited(descriptor) {
	var name = descriptor.username;
	var playerFavorited = pageState.playerFavorited;
	if (!(name in playerFavorited)) {
		playerFavorited[name] = {};
	}
	return playerFavorited[name];
}

function savePageState(favoritesArray) {
	favoritesArray.sort();
	localStorage.setItem(storageName, JSON.stringify(favoritesArray));
}

function getPageState() {
	return JSON.parse(localStorage.getItem(storageName));
}

function refreshPageState() {

	if (getPageState() == null) {
		savePageState([]);
	}

	pageState = getPageState().sort();

	if (pageState == null || pageState == undefined) {
		console.log("No page state found");
		return;
	}
	else {
		var page = $("#favorited-users-list").attr("data-page");

		var favoritesArray = pageState;

		$("#favorited-users-list").contents().remove();
		for (var i = 0; i < favoritesArray.length; i++) {
			var userToAdd = favoritesArray[i];

			var row = "<li class='col-lg-12 favorited-users-row'><div class='col-lg-11 favorited-users-user cursor'>" + titleCaseString(userToAdd) + "</div><div class='col-lg-1 no-pad favorited-users-minus'><img class='pointer favorited-users-remove-user' src='/assets/img/skillicons/minus.png'></div></li>";
			$("#favorited-users-list").append(row);

		}
	}
}

function setPlayerFavoriteState(username, value) {
	var ps = pageState;
	var favoritesArray = getPageState();

	if (value === true) {
		// only add if the username isn't already there
		if (!pageState.includes(username)) {
			favoritesArray.push(username);	
		}
	}
	else {

		newArray = [];

		for (var i = 0; i < favoritesArray.length; i++) {

			// only add back in the ones that are good
			if (favoritesArray[i].toLowerCase() != username.toLowerCase()) {
				newArray.push(favoritesArray[i]);
			}
		}

		favoritesArray = newArray;
	}

	savePageState(favoritesArray);
}







































function convertToNumber(x) {
	if (typeof x == "string") {
		x = x.replace(/\,/g,'');
	}
	return Number(x);
}

function addCommasToNumber(n) {
	return n.toLocaleString();
}

function replaceSpaceWithUnderscore(string) {
	return string.replace(/ /g,"_");
}
function removeCommasFromString(string) {
	return string.replace(/[, ]+/g, "");
}
function substringToParenthesis(string) {
	if (string.indexOf('(') > -1) {
		return string.substr(0, string.indexOf('(') - 1);	
	}
	return string;
}
function titleCaseString(string)
{
    return string.replace(/\w\S*/g, function(txt) {
    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}