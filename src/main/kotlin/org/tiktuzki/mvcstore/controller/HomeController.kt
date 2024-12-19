package org.tiktuzki.mvcstore.controller

import lombok.extern.slf4j.Slf4j
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.tiktuzki.mvcstore.product.ProductSummaryDto
import kotlin.math.max
import kotlin.math.min

@Slf4j
@Controller
@RequestMapping
class HomeController {
    @RequestMapping("/components/header.html")
    fun header(model: Model): String {
        model.addAttribute("categories", CategoryRestController.categories())
        return "components/header"
    }

    @RequestMapping("/components/footer.html")
    fun footer(): String {
        return "components/footer"
    }

    @RequestMapping("/contract.html")
    fun contract(): String {
        return "contract"
    }

    @RequestMapping("/info.html")
    fun info(): String {
        return "info"
    }

    @RequestMapping("/")
    fun index(
        model: Model,
        @RequestParam("page", defaultValue = "0") page: Int,
        @RequestParam("size", defaultValue = "10") size: Int
    ): String {
        val productPage: Page<ProductSummaryDto> = PageImpl(ProductController.products(), PageRequest.of(page, size), 100)
        model.addAttribute("productPage", productPage)
        model.addAttribute("categories", CategoryRestController.categories())

        model.addAttribute(
            "prevPages",
            (max(0, page - 3) until max(0, page))
                .toList()
        )
        model.addAttribute(
            "nextPages",
            (min(page + 1, productPage.totalPages) until min(page + 1 + 3, productPage.totalPages))
                .toList()
        )
        return "index"
    }
}