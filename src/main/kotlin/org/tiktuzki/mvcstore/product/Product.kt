package org.tiktuzki.mvcstore.product

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
class Product {
    @Id
    var id: String? = null
    var name: String? = null
    var description: String? = null
}