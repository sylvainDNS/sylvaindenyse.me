module Partial.Footer exposing (footer)

import Element exposing (Element, centerX, column, el, fill, spacing, text, width)
import Element.Region as Region


footer : Element msg
footer =
    column [ Region.footer, width fill, spacing 20 ]
        [ el [ centerX ] <| text "Innovating with respect."
        , el [ centerX ] <| text "© 2020"
        ]
