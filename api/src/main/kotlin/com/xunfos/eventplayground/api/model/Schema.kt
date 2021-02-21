package com.xunfos.eventplayground.api.model

import com.expediagroup.graphql.generator.scalars.ID

data class Event(
    val id: ID,
    val title: String,
    val description: String = "Basic Description!",
)
