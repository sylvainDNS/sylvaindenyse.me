module Partial.Header exposing (header)

import Element exposing (Element, alignRight, fill, height, link, px, row, spacing, text, width)
import Element.Font as Font
import Element.Region as Region


header : Element msg
header =
    row [ width fill, height <| px 60, Font.semiBold, Font.size 14, Font.letterSpacing 1 ]
        [ link [] { url = "/", label = text <| String.toUpper "Sylvain DENYSE - Web Developer Designer" }
        , navigation
        ]


navigation : Element msg
navigation =
    row [ Region.navigation, alignRight, spacing 20 ]
        [ link []
            { url = "/about"
            , label = text "More information"
            }
        , text "|"
        , link []
            { url = "#"
            , label = text "Français"
            }
        ]
