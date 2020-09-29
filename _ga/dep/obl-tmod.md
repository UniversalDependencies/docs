---
layout: relation
title: 'obl:tmod'
shortdef: 'oblique temporal modifier'
udver: '2'
---

This label is used when a nominal phrase has a temporal aspect and is acting adverbially, attaching to a verb.  

### Examples

_Uaisle saibhre de chuid na Róimhe a bhí ina magistri <b>tráth</b> a bhíodh ann._ 'Magistri were <b>once</b> wealthy Roman nobles.'

~~~ sdparse
Uaisle saibhre de chuid na Róimhe a bhí ina magistri tráth a bhíodh ann. \n Nobles wealthy of part of_the Rome that were in-their magistri
obl:tmod(bhí, tráth)
~~~ 

_Is é Micheal D. Higgins ba chionsiocair leis an Roinn a bhunú sa <b>bhliain</b> 1992._ 'Michael D. Higgins was a contributor to the establishment of the Department in the <b>year</b> 1992.'

~~~ sdparse
Is é Micheal D. Higgins ba chionsiocair leis an Roinn a bhunú sa bhliain 1992. \n Is him Michael D. Higgins was contributor with the Department to establish in-the year 1992
obl:tmod(bhunú, bhliain)
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
<!-- Interlanguage links updated Út zář 29 20:32:00 CEST 2020 -->
