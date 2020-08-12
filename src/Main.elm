module Main exposing (Model, Msg(..), init, main, subscriptions, update, view, viewLink)

import Browser
import Browser.Navigation as Nav
import Html exposing (Html, a, div, footer, h1, h2, header, img, li, span, text)
import Html.Attributes exposing (href, src)
import Maybe exposing (Maybe(..))
import Url



-- MAIN


main : Program Images Model Msg
main =
    Browser.application
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        , onUrlChange = UrlChanged
        , onUrlRequest = LinkClicked
        }



-- MODEL


type alias Model =
    { key : Nav.Key
    , url : Url.Url
    , images : Images
    }


type alias Images =
    { avatar : String
    }


init : Images -> Url.Url -> Nav.Key -> ( Model, Cmd Msg )
init flags url key =
    ( Model key url flags, Cmd.none )



-- UPDATE


type Msg
    = LinkClicked Browser.UrlRequest
    | UrlChanged Url.Url


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        LinkClicked urlRequest ->
            case urlRequest of
                Browser.Internal url ->
                    ( model, Nav.pushUrl model.key (Url.toString url) )

                Browser.External href ->
                    ( model, Nav.load href )

        UrlChanged url ->
            ( { model | url = url }
            , Cmd.none
            )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



-- VIEW


view : Model -> Browser.Document Msg
view model =
    { title = "Sylvain DENYSE - Web Developer Designer"
    , body =
        [ header []
            [ div [] [ text "Sylvain DENYSE - Web developer designer" ]
            , div []
                [ a [ href "#" ] [ text "More information" ]
                , span [] [ text "|" ]
                , a [ href "#" ] [ text "Français" ]
                ]
            ]
        , div []
            [ img [ src model.images.avatar ] []
            , div []
                [ h1 [] [ text "Sylvain DENYSE" ]
                , h2 [] [ text "Full Stack, DevOps and Magician" ]
                ]
            , div [] []
            ]
        , footer []
            [ div [] [ text "Innovating with respect" ]
            , div [] [ text "© 2020" ]
            ]
        ]
    }


viewLink : String -> Html msg
viewLink path =
    li [] [ a [ href path ] [ text path ] ]
