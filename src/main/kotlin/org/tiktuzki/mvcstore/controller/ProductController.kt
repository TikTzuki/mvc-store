package org.tiktuzki.mvcstore.controller

import lombok.extern.slf4j.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.thymeleaf.spring6.context.webflux.ReactiveDataDriverContextVariable
import org.tiktuzki.mvcstore.product.ProductRepository
import reactor.core.publisher.Flux

@Slf4j
@Controller
@RequestMapping
class ProductController @Autowired constructor(
    val productRepository: ProductRepository
) {

    @RequestMapping("/")
    fun index(model: Model): String {
        val products = Flux.just("product1", "product2", "product3")
        val p = ReactiveDataDriverContextVariable(products, 1)
        model.addAttribute("products", p)
        return "index"
    }

}
