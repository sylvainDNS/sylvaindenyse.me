module Main exposing (Model, Msg(..), init, main, subscriptions, update, view, viewLink)

import Browser
import Browser.Dom exposing (Element)
import Browser.Navigation as Nav
import Element exposing (Element, Length, alignBottom, alignLeft, alignRight, centerX, clip, column, el, fill, height, image, layout, link, px, row, spaceEvenly, spacing, text, width)
import Element.Background as Background
import Element.Border as Border
import Element.Font as Font
import Element.Region as Region
import Html
import Html.Attributes
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
        [ layout
            [ width fill
            , height fill
            , Font.family
                [ Font.typeface "Inter"
                , Font.sansSerif
                ]
            ]
          <|
            column [ width <| px 900, height fill, spaceEvenly, centerX ]
                [ header
                , content model
                , footer
                ]
        ]
    }


content : Model -> Element msg
content model =
    column [ Region.mainContent, width fill, spacing 25 ]
        [ avatar model.images.avatar
        , column [ width fill, spacing 15 ]
            [ el [ Region.heading 1, centerX ] <| text "Sylvain DENYSE"
            , el [ Region.heading 2, centerX ] <| text "Full Stack, DevOps and Magician"
            ]
        ]


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


header : Element msg
header =
    row [ width fill, height <| px 60 ]
        [ link [] { url = "/", label = text "Sylvain DENYSE - Web Developer Designer" }
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


footer : Element msg
footer =
    column [ Region.footer, width fill, spacing 20 ]
        [ el [ centerX ] <| text "Innovating with respect."
        , el [ centerX ] <| text "© 2020"
        ]


viewLink : String -> Html.Html msg
viewLink path =
    Html.li [] [ Html.a [ Html.Attributes.href path ] [ Html.text path ] ]
