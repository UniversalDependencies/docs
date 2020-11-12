---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The `discourse` label is used to connect interjections and other discourse particles which are not clearly linked to the structure of the sentence except in an expressive way to a clause. 
### Examples

_<b>Á</b>, níl sé chomh holc sin!_  '<b>Aw</b>, it is not as bad as that!'

~~~ sdparse
Á , níl sé chomh holc sin ! \n Aw , is_not it as bad that !
discourse(níl, Á)
~~~

_<b>Leoga</b>, tá aitheantas tugtha dóibh_ '<b>Indeed</b>, they are given recognition'

~~~ sdparse
Leoga , tá aitheantas tugtha dóibh \n Indeed , is recognition given to\_them
discourse(tá, Leoga)
~~~

_<b>Och</b>, a chumannaigh!_ '<b>Ah</b>, comrades!'

~~~ sdparse
Och , a chumannaigh ! \n Ah , my comrades !
discourse(chumannaigh, Och)
~~~

_<b>Ó</b> glacaim pardún agat_ '<b>Oh</b>, I beg your pardon!'
~~~ sdparse
Ó , glacaim pardún agat \n Oh , I_take pardon at_you!
discourse(glacaim, Ó)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
