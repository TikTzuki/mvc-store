package org.tiktuzki.mvcstore.product

import java.net.URL

data class ProductSummaryDto(
    val id: Long,
    val name: String,
    val price: String,
    val image: String
)