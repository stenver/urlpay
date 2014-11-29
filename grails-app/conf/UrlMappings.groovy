class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "/transfer" {
            controller = "transfer"
            action = [POST: "send", UPDATE: "receive"]
        }
        "/transfer/$urlHash" {
            controller = "transfer"
            action = [GET: "show"]
        }

        "/users"(resources:'user')
        "500"(view:'/error')
	}
}
