const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
	"test": "event"
}

const data = {
	method: "POST",
	headers,
	mode: "cors",
	body: JSON.stringify(body),
}

fetch("https://eogjelf95ooxiey.m.pipedream.net", data)