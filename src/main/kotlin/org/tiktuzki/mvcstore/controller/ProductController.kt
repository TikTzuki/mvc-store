package org.tiktuzki.mvcstore.controller

import lombok.extern.slf4j.Slf4j
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.domain.Page
import org.springframework.data.domain.PageImpl
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.tiktuzki.mvcstore.category.CategoryDto
import org.tiktuzki.mvcstore.product.ProductRepository
import org.tiktuzki.mvcstore.product.ProductSummaryDto
import reactor.core.publisher.Flux
import kotlin.math.max
import kotlin.math.min

@Slf4j
@Controller
@RequestMapping
class ProductController @Autowired constructor(
    val productRepository: ProductRepository
) {
    fun categories(): Flux<CategoryDto> {
        return Flux.just(
            CategoryDto(
                1, "Clothes", 0, listOf(
                    CategoryDto(1, "Shirt", 100),
                    CategoryDto(2, "Shorts & Jeans"),
                    CategoryDto(3, "Jacket", 300),
                )
            ),
            CategoryDto(
                2, "Footwear", 0, listOf(
                    CategoryDto(1, "Sneakers"),
                    CategoryDto(2, "Boots"),
                    CategoryDto(3, "Sandals"),
                )
            ),
            CategoryDto(
                3, "Jewelry", 0, listOf(
                    CategoryDto(1, "Earrings", 10),
                    CategoryDto(2, "Necklaces"),
                    CategoryDto(3, "Bracelets"),
                )
            ),
            CategoryDto(
                4, "Perfume", 0, listOf(
                    CategoryDto(1, "Clothes Perfume"),
                    CategoryDto(2, "Deodorant"),
                    CategoryDto(3, "Jacket"),
                )
            )
        )
    }

    fun products(): List<ProductSummaryDto> {
        return listOf(
            ProductSummaryDto(1, "Shirt", "100", "https://via.placeholder.com/150"),
            ProductSummaryDto(2, "Shorts", "200", "https://via.placeholder.com/150"),
            ProductSummaryDto(3, "Jacket", "300", "https://via.placeholder.com/150"),
            ProductSummaryDto(4, "Sneakers", "400", "https://via.placeholder.com/150"),
            ProductSummaryDto(5, "Boots", "500", "https://via.placeholder.com/150"),
            ProductSummaryDto(6, "Sandals", "600", "https://via.placeholder.com/150"),
            ProductSummaryDto(7, "Earrings", "700", "https://via.placeholder.com/150"),
            ProductSummaryDto(8, "Necklaces", "800", "https://via.placeholder.com/150"),
            ProductSummaryDto(9, "Bracelets", "900", "https://via.placeholder.com/150"),
            ProductSummaryDto(10, "Clothes Perfume", "1000", "https://via.placeholder.com/150"),
            ProductSummaryDto(11, "Deodorant", "1100", "https://via.placeholder.com/150"),
            ProductSummaryDto(12, "Jacket Perfume", "1200", "https://via.placeholder.com/150"),
        )
    }

    @RequestMapping("/")
    fun index(
        model: Model,
        @RequestParam("page", defaultValue = "0") page: Int,
        @RequestParam("size", defaultValue = "10") size: Int
    ): String {
        val productPage: Page<ProductSummaryDto> = PageImpl(products(), PageRequest.of(page, size), 100)
        model.addAttribute("productPage", productPage)
        model.addAttribute("categories", categories())

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
