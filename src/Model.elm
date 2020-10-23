module Model exposing (Images, Model)

import Browser.Navigation as Nav
import Url


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    , images : Images
    }


type alias Images =
    { avatar : String
    }
