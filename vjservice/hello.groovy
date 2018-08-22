
@RestController

class HelloWorldController {
	@RequestMapping("/")
	String hello() {
		"Hello World!!!"
	}
}
