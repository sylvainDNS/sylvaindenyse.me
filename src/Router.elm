module Router exposing (router, title)

import Element exposing (Element)
import Model exposing (Model, Title)
import Page.Home exposing (home)
import Page.More exposing (more)


title : Title
title =
    "Sylvain DENYSE - Web Developer Designer"


router : Model -> ( Title, Element msg )
router model =
    case model.url.path of
        "/more" ->
            ( title, more )

        _ ->
            ( title, home model )
