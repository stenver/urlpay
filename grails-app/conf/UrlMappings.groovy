class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(uri:"/index.html")
        "/transfer" {
            controller = "transfer"
            action = [POST: "send", PUT: "receive"]
        }
        "/transfer/$urlHash" {
            controller = "transfer"
            action = [GET: "show"]
        }

        "/users"(resources:'user')
        "500"(view:'/error')
	}
}
