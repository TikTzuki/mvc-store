package org.tiktuzki.mvcstore.category

data class CategoryDto(
    val id: Long,
    val name: String,
    val count: Int = 0,
    val subcategories: List<CategoryDto> = emptyList()
)