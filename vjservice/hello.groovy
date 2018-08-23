
@RestController

class HelloWorldController {
	@RequestMapping("/names")
	String hello() {
		"Thanks for requesting a response from vjService - 001   !!!\n"
	}
}
