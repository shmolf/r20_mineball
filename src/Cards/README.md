When a new card is placed on the table top, or an existing card is moved, here's a list of properties available, specific to the object:
```json
{
  "_id":"-M8g2m4_kERyI8Xyc5FS",
  "_pageid":"-M80fzQqy1ddnDyRjv8g",
  "left":910,
  "top":630,
  "width":140,
  "height":140,
  "rotation":360,
  "layer":"objects",
  "isdrawing":false,
  "flipv":false,
  "fliph":false,
  "imgsrc":"https://s3.amazonaws.com/files.d20.io/images/139852841/h0u5KGtzGMr4pQfzEVDIYQ/max.png?1590945876",
  "name":"",
  "gmnotes":"",
  "controlledby":"all",
  "bar1_value":"",
  "bar1_max":"",
  "bar1_link":"",
  "bar2_value":"",
  "bar2_max":"",
  "bar2_link":"",
  "bar3_value":"",
  "bar3_max":"",
  "bar3_link":"",
  "represents":"",
  "aura1_radius":"",
  "aura1_color":"#FFFF99",
  "aura1_square":false,
  "aura2_radius":"",
  "aura2_color":"#59E594",
  "aura2_square":false,
  "tint_color":"transparent",
  "statusmarkers":"",
  "showname":false,
  "showplayers_name":false,
  "showplayers_bar1":false,
  "showplayers_bar2":false,
  "showplayers_bar3":false,
  "showplayers_aura1":false,
  "showplayers_aura2":false,
  "playersedit_name":true,
  "playersedit_bar1":true,
  "playersedit_bar2":true,
  "playersedit_bar3":true,
  "playersedit_aura1":true,
  "playersedit_aura2":true,
  "light_radius":"",
  "light_dimradius":"",
  "light_otherplayers":false,
  "light_hassight":false,
  "light_angle":"",
  "light_losangle":"",
  "light_multiplier":1,
  "adv_fow_view_distance":"",
  "sides":"https%3A//s3.amazonaws.com/files.d20.io/images/139852841/h0u5KGtzGMr4pQfzEVDIYQ/max.png%3F1590945876|https%3A//s3.amazonaws.com/files.d20.io/images/137387984/BxB9hd4SI7WY4rtd-iY9EA/max.jpg%3F1590239316",
  "currentSide":0,
  "lastmove":"1050,630",
  "_type":"graphic",
  "_subtype":"card",
  "_cardid":"-M8flbqflcgLsV2sLQEr",
  "has_bright_light_vision":false,
  "has_night_vision":false,
  "night_vision_distance":0,
  "emits_bright_light":false,
  "bright_light_distance":"0",
  "emits_low_light":false,
  "low_light_distance":0
}
```

If you need to acquire the value of a specific key from the Current State object(usually the first parameter in the callback), need to use the `get` command. Example:
```js
function handleNewCard(currentState) {
  const card = getObj('card', currentState.get('_cardid'));
  log(['newCard', card]);
}
```

However, if you need to acquire the value from the Previous State object (usually the second parameter in the callback), then you can access that property directly.
```js
function handleNewCard(currentState, previousState) {
  const card = getObj('card', previousState._cardid);
  log(['existingCard', card]);
}
```

The above example will respond with an object like the following ([Roll20 Documentation](https://roll20.zendesk.com/hc/en-us/articles/360037772793-API-Objects#API:Objects-Card)):
```json
{
    "name":"Aundrea",
    "avatar":"https://s3.amazonaws.com/files.d20.io/images/139852848/Pq_y2t1nQhEpleV0ReEqNg/max.png?1590945876",
    "_deckid":"-M8bOYLZTSMPMc317_Wf",
    "_type":"card",
    "_id":"-M8fm-qftFJPkh98Pax_"
}
```
