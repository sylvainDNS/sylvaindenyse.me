module Partial.Document exposing (document)

import Browser
import Element exposing (Element)
import Model exposing (Title)
import Partial.Layout exposing (layout)


document : ( Title, Element msg ) -> Browser.Document msg
document ( title, content ) =
    { title = title
    , body =
        [ layout <| content
        ]
    }
