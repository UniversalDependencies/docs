---
layout: relation
title: 'nummod'
shortdef: 'numeral'
udver: '2'
---

The numeric modifier relation is used for cardinal [numbers](NumType) only which are used as quantifiers. The number 'one' can appear as an enclitic, which must be distinguished from its use as a [determiner](det). Cardinal numerals can also head nominal phrases and are then annotated accordingly.

Note that *harw dō* is analysed as *all two* (i.e. 'both') with *harw* as determiner of *dō*.

- "of these two things"
~~~ sdparse
az ēn dō tis \n from this two thing
case(tis, az)
det(tis, ēn)
nummod(tis, dō)
~~~

- "(He) wrote every single question in one chapter."
~~~ sdparse
harw pursišn =ēw pad dar =ēw nibišt \n every question one in chapter one wrote
det(pursišn, harw)
nummod(pursišn, =ēw-3)
obj(nibišt, pursišn)
case(dar, pad)
nummod(dar, =ēw-6)
obl:lmod(nibišt, dar)
~~~

- "(It) is possible to eat ten from the outside and not from the inside such as dates and peaches."
~~~ sdparse
dah bērōn šāyēd xwardan ud andarōn nē šāyēd čiyōn xormā ud šiftālūg \n ten outside is_possible eat and inside not is_possible like date and peach
obj(xwardan, dah)
advmod(xwardan, bērōn)
xcomp(šāyēd-3, xwardan)
cc(šāyēd-8, ud-5)
advmod(šāyēd-8, andarōn)
advmod(šāyēd-8, nē)
conj(šāyēd-3, šāyēd-8)
case(xormā, čiyōn)
obl(xwardan, xormā)
conj(xormā, šiftālūg)
cc(šiftālūg, ud-11)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:27 CEST -->
