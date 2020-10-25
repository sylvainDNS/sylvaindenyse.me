module Page.NotFound exposing (notFound)

import Element exposing (Element, centerX, column, el, fill, spacing, text, width)
import Element.Font as Font


notFound : Element msg
notFound =
    column [ width fill, spacing 10 ]
        [ el [ centerX, Font.size 40 ] <| text "404"
        , el [ centerX, Font.size 32 ] <| text "Page not found."
        ]
