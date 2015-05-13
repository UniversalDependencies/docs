---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
---

The `discourse` label is used to connect interjections and other discourse particles to a clause.

_<b>Á</b> , níl sé chomh holc sin !_  '<b>Aw</b> , it is not as bad as that !'

~~~ sdparse
Á , níl sé chomh holc sin ! \n Aw , is_not it as bad that !
discourse(níl, Á)
discourse(is, Aw)
~~~

_<b>Leoga</b> , tá aitheantas tugtha dóibh_ <b>Indeed</b> , is recognition given to\_them

~~~ sdparse
Leoga , tá aitheantas tugtha dóibh \n Indeed , they are given recognition
discourse(tá, Leoga)
discourse(are, Indeed)
~~~



