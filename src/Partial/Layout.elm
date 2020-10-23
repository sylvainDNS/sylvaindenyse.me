module Partial.Layout exposing (layout)

import Element as El exposing (Element, centerX, column, fill, height, px, spaceEvenly, width)
import Element.Font as Font
import Html
import Partial.Footer exposing (footer)
import Partial.Header exposing (header)


layout : Element msg -> Html.Html msg
layout content =
    El.layout
        [ width fill
        , height fill
        , Font.family
            [ Font.typeface "Inter"
            , Font.sansSerif
            ]
        ]
    <|
        column [ width <| px 900, height fill, spaceEvenly, centerX ]
            [ header
            , content
            , footer
            ]
