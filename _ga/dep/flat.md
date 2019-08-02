---
layout: relation
title: 'flat'
redirect_from: "ga/dep/name.html"
shortdef: 'name'
udver: '2'
---

The `flat` relation is used with compounding proper nouns, typically for places, organisations and so on.
Note that for names, we use language specific label `flat-name`.

The `flat` label is also used to attach what was previously labelled as `foreign`.


### Example

_Tá muintir Chorcaí an-mhíshásta le Fianna <b>Fáil</b>_ `Cork people are very unhappy with Fianna <b>Fáil</b>'

~~~ sdparse
Tá muintir Chorcaí an-mhíshásta le Fianna Fáil\n Be people Cork very-unhappy with Fianna Fáil
flat(Fianna,Fáil)
~~~ 

_Sheas a hathair mar Shóisialaí Neamhspleách i dtoghachán na bliana 1969 i dtoghcheantar Bhaile Átha <b>Cliath</b> Thiar Thuaidh.

~~~ sdparse
Sheas a hathair mar Shóisialaí Neamhspleách i dtoghachán na bliana 1969 i dtoghcheantar Bhaile Átha <b>Cliath</b> Thiar Thuaidh  \n Stood her father as Socialist Independent in election of_the year 1969 in electoral area of Dublin South West
flat(Átha,Cliath)
~~~ 
