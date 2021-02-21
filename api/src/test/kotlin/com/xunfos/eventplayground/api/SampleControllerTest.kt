package com.xunfos.eventplayground.api

import com.xunfos.eventplayground.api.model.Event
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.reactive.WebFluxTest
import org.springframework.test.web.reactive.server.WebTestClient
import org.springframework.test.web.reactive.server.expectBodyList

@WebFluxTest
class SampleControllerTest {
    @Autowired
    private lateinit var webTestClient: WebTestClient

    @Test
    fun `should return a list of event data when requested`() {
        webTestClient.get()
            .uri("/event")
            .exchange()
            .expectStatus().isOk
            .expectBodyList<Event>()
            .hasSize(3)
    }
}
