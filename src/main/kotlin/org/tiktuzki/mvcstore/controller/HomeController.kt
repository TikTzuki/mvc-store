package org.tiktuzki.mvcstore.controller

import lombok.extern.slf4j.Slf4j
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Slf4j
@Controller
@RequestMapping
class HomeController {
    @RequestMapping("/components/header.html")
    fun header(): String {
        return "components/header"
    }

    @RequestMapping("/components/footer.html")
    fun footer(): String {
        return "components/footer"
    }
}