package com.xunfos.eventplayground.api

import com.expediagroup.graphql.generator.scalars.ID
import com.xunfos.eventplayground.api.model.Event
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
class SampleController {
    @GetMapping("/event")
    suspend fun getEvents() : List<Event> = listOf(
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #1"),
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #2"),
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #3"),
    )
}
