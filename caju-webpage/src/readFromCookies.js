import Cookies from "js-cookie"

export default function readFromCookies(func) {
	var unparsedCookie = Cookies.get("cart");
	if (unparsedCookie === undefined) {
	unparsedCookie = "[]";
	}
	var parsedCookie = JSON.parse(unparsedCookie);
	func(parsedCookie);
}

