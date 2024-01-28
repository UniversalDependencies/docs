---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any **number phrase** that serves to modify the meaning of the noun **with a quantity**.

~~~ sdparse
pred desetimi leti \n ten years ago
nummod(leti,desetimi)
nummod(years,ten)
~~~
~~~ sdparse
študentki 3. letnika Akademije za glasbo \n students of-3rd year at-the-Academy of Music
nummod(letnika,3.)
nummod(year,of-3rd)
~~~
~~~ sdparse
pet tisoč tristo metrov \n five thousand three-hundred meters
nummod(metrov,pet)
nummod(meters,five)
~~~

This also applies to numbers that modify nouns of quantity, such as *milijon*, *milijarda* in *bilijon*.
~~~ sdparse
Lani so ustvarili 550 milijonov tolarjev prometa . \n Last-year they generated 550 million tolar in-revenue .
nummod(milijonov,550-4)
nmod(milijonov,tolarjev)
nummod(million,550-13)
nmod(million,tolar)
~~~

Numeric modifiers can also act as **postmodifiers**.
~~~ sdparse
Zemljanka številka pet \n Earthling number five
nummod(številka,pet)
nummod(number,five)
~~~
~~~ sdparse
v letu 2002 \n in the-year 2002
nummod(letu,2002-3)
nummod(the-year,2002-7)
~~~ 

The `nummod` relation is only applied to words tagged as numerals (NUM), and not other words that express quantity, such as some determiners (*veliko, malo*), adjectives (*prvi, drugi*), or nouns (*milijon, milijarda, bilijon*).
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:12 CET -->
