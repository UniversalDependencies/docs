---
layout: relation
title: 'flat'
shortdef: 'flat'
redirect_from: "ga/dep/name.html"
udver: '2'
---

The `flat` relation is used with compounding proper nouns, typically for places, organisations and so on.
Note, we use the language specific labels [flat:name](https://universaldependencies.org/ga/dep/flat-name.html)  and [flat:foreign](https://universaldependencies.org/ga/dep/flat-foreign.html) for personal names and text in foreign languges, respectively. 

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

NOTE: Information clusters that contain dates/times should be labelled in the following way:

_Ní mór na foirmeacha (...) a <b>bheith</b> san Ardoifig roimh 5.00 <b>p.m.</b>, <b>Aoine</b>, <b>4</b> Aibreán 1997._ The forms must be submitted to Head Office before 5:00 p.m., Friday, 4 April 1997. 

~~~ sdparse
Ní mór na foirmeacha (...) a bheith san Ardoifig roimh 5.00 p.m. , Aoine , 4 Aibreán 1997 . \n Must be the forms (...) to being in_the Head_office before 5.00 p.m. , Friday , 4 April 1997 .
obl:tmod(bheith, p.m.)
obl:tmod(bheith, Aoine)
obl:tmod(bheith, 4)
nummod(p.m., 5.00)
flat(4, Aibreán)
flat(4, 1997)
~~~ 

#### Days of the week

_Dé_ + day of the week in the genitive case should be treated like a proper noun string with the flat relation

~~~ sdparse
Ceardlann Aisteoireachta agus Drámaíochta sa Chrannóg i nGaoth Dobhair Dé Sathairn agus Dé Domhnaigh seo caite
flat(Dé,Sathairn)
flat(Dé, Domhnaigh)
~~~ 

~~~ sdparse
ranganna seiteanna agus céilí do dhaoine fásta gach oíche Dé Luain ag 8.30.
flat(Dé,Luain)
~~~ 
