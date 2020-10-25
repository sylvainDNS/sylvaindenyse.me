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
    let
        segments =
            String.split "/" model.url.path |> List.filter (\s -> s /= "")
    in
    case segments of
        [] ->
            ( title, home model )

        [ "more" ] ->
            ( title, more )

        _ ->
            ( title, home model )
