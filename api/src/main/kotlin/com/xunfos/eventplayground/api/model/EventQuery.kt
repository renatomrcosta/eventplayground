package com.xunfos.eventplayground.api.model

import com.expediagroup.graphql.generator.scalars.ID
import com.expediagroup.graphql.types.operations.Query
import org.springframework.stereotype.Component
import java.util.UUID

@Component
class EventQuery : Query {
    fun listEvents(): List<Event> = listOf(
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #1"),
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #2"),
        Event(id = ID(UUID.randomUUID().toString()), title = "Random Name #3"),
    )
}
