module Page.Home exposing (home)

import Element exposing (Element, centerX, column, el, fill, spacing, text, width)
import Element.Font as Font
import Element.Region as Region
import Model exposing (Model)
import Partial.Avatar exposing (avatar)


home : Model -> Element msg
home model =
    column [ Region.mainContent, width fill, spacing 25 ]
        [ avatar model.images.avatar
        , column [ width fill, spacing 15 ]
            [ el [ Region.heading 1, centerX ] <| text "Sylvain DENYSE"
            , el [ Region.heading 2, centerX ] <| text "Full Stack, DevOps and Magician"
            ]
        ]
