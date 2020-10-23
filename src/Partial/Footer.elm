module Partial.Footer exposing (footer)

import Element exposing (Element, centerX, column, el, fill, height, paddingEach, px, spacing, text, width)
import Element.Font as Font
import Element.Region as Region
import Util exposing (edges)


footer : Element msg
footer =
    column
        [ Region.footer
        , paddingEach
            { edges
                | bottom = 10
                , top = 20
            }
        , width fill
        , spacing 20
        , Font.size 16
        ]
        [ el [ centerX ] <| text "Innovating with respect."
        , el [ centerX ] <| text "© 2020"
        ]
