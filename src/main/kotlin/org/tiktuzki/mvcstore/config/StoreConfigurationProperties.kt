package org.tiktuzki.mvcstore.config

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.bind.ConstructorBinding

@ConfigurationProperties("store")
data class StoreConfigurationProperties @ConstructorBinding constructor(
    val name: String,
)