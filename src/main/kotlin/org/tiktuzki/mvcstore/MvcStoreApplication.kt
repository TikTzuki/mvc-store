package org.tiktuzki.mvcstore

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication
import org.tiktuzki.mvcstore.config.StoreConfigurationProperties

@SpringBootApplication
@EnableConfigurationProperties(
    StoreConfigurationProperties::class
)
class MvcStoreApplication

fun main(args: Array<String>) {
    runApplication<MvcStoreApplication>(*args)
}
