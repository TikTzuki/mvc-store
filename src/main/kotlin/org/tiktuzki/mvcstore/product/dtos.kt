package org.tiktuzki.mvcstore.product

data class ProductSummaryDto(
    val id: Long,
    val name: String,
    val price: String,
    val image: String
)