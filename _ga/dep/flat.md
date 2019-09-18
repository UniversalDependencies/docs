---
layout: relation
title: 'flat'
shortdef: 'flat'
redirect_from: "ga/dep/name.html"
udver: '2'
---

The `flat` relation is used with compounding proper nouns, typically for places, organisations and so on.
Note, we use the language specific labels [flat:name](https://universaldependencies.org/ga/dep/flat:name.html)  and [flat:foreign](https://universaldependencies.org/ga/dep/flat:foreign.html) for personal names and text in foreign languges, respectively. 

The `flat` label is also used to attach what was previously labelled as `foreign`.


### Example

_Tá muintir Chorcaí an-mhíshásta le Fianna <b>Fáil</b>_ 'Cork people are very unhappy with Fianna <b>Fáil</b>'

~~~ sdparse
Tá muintir Chorcaí an-mhíshásta le Fianna Fáil \n Are people of_Cork very-unhappy with Fianna Fáil
flat(Fianna, Fáil)
~~~ 

_Sheas a hathair mar Shóisialaí Neamhspleách i dtoghachán na bliana 1969 i dtoghcheantar Bhaile <b>Átha Cliath Thiar Thuaidh</b>._ 'Her father stood as an Independent Socialist in the 1969 election in the Dublin <b>City</b> <b>North</b> <b>West</b> electoral area.'

~~~ sdparse
Sheas a hathair mar Shóisialaí Neamhspleách i dtoghachán na bliana 1969 i dtoghcheantar Bhaile Átha Cliath Thiar Thuaidh  \n Stood her father as Socialist Independent in election of_the year 1969 in electoral area of Dublin West North
flat(Bhaile, Átha)
flat(Bhaile, Cliath)
flat(Bhaile, Thiar)
flat(Bhaile, Thuaidh)
~~~ 
