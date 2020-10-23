module Partial.Avatar exposing (avatar)

import Element exposing (Element, centerX, clip, height, image, px, width)
import Element.Border as Border


avatar : String -> Element msg
avatar url =
    image
        [ width <| px 200
        , height <| px 200
        , centerX
        , Border.rounded 100
        , clip
        ]
        { src = url, description = "Picture of me" }
