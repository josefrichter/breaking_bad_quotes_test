(ns breaking-bad-quotes.core
  (:require [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET]]))

(defn fetch-link! [data]
  (GET "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    {:handler #(reset! data %)
     :error-handler (fn [{:keys [status status-text]}]
                      (js/console.log status status-text))}))

(defn quote []
  (let [data (atom nil)]
    (fetch-link! data)
    (fn []
      (let [{:strs [quote author]} (first @data)]
        [:div.cards>div.card
         [:h2.card-header.text-center "Breaking Bad Quotes"]
         [:div.card-body.text-center
          [:p#quote quote]
          [:p#author author]]
         [:div.card-footer.center.text-center
          [:button#twitter.outline>a#tweet
           {:href "#"
            :target "_blank"}
           [:i.fi-social-twitter " Tweet"]]
          [:button#new-quote.outline
           {:on-click #(fetch-link! data)}
           [:i.fi-shuffle " New Quote"]]]]))))

(defn start []
  (reagent/render-component [quote]
                            (. js/document (getElementById "app"))))