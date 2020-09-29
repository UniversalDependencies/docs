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


### Proper nouns

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

#### Days of the week

_Dé_ is a particle that introduces days of the week. The particular day of the week follows _Dé_ in the genitive case. We treat this as having no phrasal structure, i.e. with the `flat` dependency relation.

_Dé <b>Sathairn</b>_ '(on) Saturday'

~~~ sdparse
Dé Sathairn \n [] of_Saturday
flat(Dé,Sathairn)
~~~ 

_Ceardlann Aisteoireachta agus Drámaíochta i nGaoth Dobhair Dé <b>Domhnaigh</b> seo caite_ 'Acting and Drama Workshop in Gweedore last Sunday'

~~~ sdparse
Ceardlann Aisteoireachta agus Drámaíochta i nGaoth Dobhair Dé Domhnaigh seo caite \n Workshop of_Acting and of_Drama in Gweedore [] [] of_Sunday this_past spent
flat(Dé, Domhnaigh)
~~~ 

_ranganna seteanna agus céilí do dhaoine fásta gach oíche Dé <b>Luain</b> ag 8.30._ 'set dancing and céilí classes for adults every Monday night at 8.30.'

~~~ sdparse
ranganna seteanna agus céilí do dhaoine fásta gach oíche Dé Luain ag 8.30. \n Classes of_sets and of_céilí for people grown every night [] of_Monday at 8.30 
flat(Dé,Luain)
~~~ 

#### Date strings

Per the UD guidelines regarding the treatment of [Dates and Complex Numerals](https://universaldependencies.org/u/dep/all.html#dates-and-complex-numerals), date expressions with a clear syntactic structure should be annotated with regular dependency relations. 

_Phós siad ar an <b>10ú lá de mhí na Nollag</b>_ 'They got married on the 10th of December'

~~~ sdparse
Phós siad ar an 10ú lá de mhí na Nollag \n Married they on the 10th day of_the month of December []
nummod(lá,10ú)
obl(lá,Phós)
nmod(lá,mhí)
nmod(mhí,Nollag)
~~~ 

However, the `flat` relation should be used for date expressions which have a flat structure with no clearly discernible head.

_10 - 12 Deireadh <b>Fómhair</b>_ '10 - 12 December'

~~~ sdparse
10 - 12 Deireadh Fómhair \n 10 - 12 December []
flat(10,12)
flat(10,Deireadh)
flat(10,Fómhair)
~~~ 

_Ní mór na foirmeacha (...) a <b>bheith</b> san Ardoifig roimh 5.00 <b>p.m.</b>, <b>Aoine</b>, <b>4</b> <b>Aibreán</b> <b>1997</b>._ The forms must be submitted to Head Office before 5:00 <b>p.m.</b>, <b>Friday</b>, <b>4</b> <b>April</b> <b>1997</b>. 

~~~ sdparse
Ní mór na foirmeacha (...) a bheith san Ardoifig roimh 5.00 p.m. , Aoine , 4 Aibreán 1997 . \n Must be the forms (...) to being in_the Head_office before 5.00 p.m. , Friday , 4 April 1997 .
obl:tmod(bheith, p.m.)
obl:tmod(bheith, Aoine)
obl:tmod(bheith, 4)
nummod(p.m., 5.00)
flat(4, Aibreán)
flat(4, 1997)
~~~ 

#### Months of the year

Several months of the year in Irish are composed of two nouns with the second in the genitive case. In cases like these, the second noun is treated as `flat` on the first. 

_Meán <b>Fómhair</b>_ 'September'

~~~ sdparse
Meán Fómhair \n Middle of_Harvest
flat(Meán,Fómhair)
~~~ 
<!-- Interlanguage links updated Út zář 29 20:23:32 CEST 2020 -->
