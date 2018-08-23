
@RestController

class HelloWorldController {
	@RequestMapping("/names")
	String hello() {
		println
		"Thanks for requesting a response from vjService - 001   !!!\n"
	}
}
