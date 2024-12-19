package org.tiktuzki.mvcstore.controller

import lombok.extern.slf4j.Slf4j
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.tiktuzki.mvcstore.category.CategoryDto
import reactor.core.publisher.Flux

@Slf4j
@RestController
@RequestMapping("/api/v1/categories")
class CategoryRestController {

    @GetMapping
    fun getCategories(): Flux<CategoryDto> {
        return categories()
    }

    companion object {
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
    }
}