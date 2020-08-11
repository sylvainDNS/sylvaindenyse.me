module Main exposing (main)

import Html exposing (a, div, header, span, text)
import Html.Attributes exposing (href)


main =
    header []
        [ div [] [ text "Sylvain DENYSE - Web developer designer" ]
        , div []
            [ a [ href "#" ] [ text "More information" ]
            , span [] [ text "|" ]
            , a [ href "#" ] [ text "Français" ]
            ]
        ]
