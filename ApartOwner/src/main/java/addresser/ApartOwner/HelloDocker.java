package addresser.ApartOwner;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ApartOwner")
public class HelloDocker {
    @GetMapping
    public String Hello(){
        return "This is ApartOwnerService!!!";
    }
}
