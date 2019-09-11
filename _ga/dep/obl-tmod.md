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

~~~ sdparse
Ní mór na foirmeacha (...) a bheith san Ardoifig roimh 5.00 pm, Aoine, 4 Aibreán 1997. \n Is important the forms (...) to be in_the Head_office before 5.00 pm, Friday, 4 April 1997.
obl:tmod(bheith, pm)
nummod(pm, 5)
obl:tmod(bheith, Aoine)
obl:tmod(bheith, 4)
flat(4, Aibreán)
flat(4, 1997)
~~~ 
