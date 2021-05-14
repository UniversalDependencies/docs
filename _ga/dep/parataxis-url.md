---
layout: relation
title: 'parataxis:url'
shortdef: 'URLs'
udver: '2'
---


The subtype `parataxis:url` is used in TwittIrish to connect a URL, which plays no syntactic role, to the root of the tweet. 

~~~ sdparse
Aindrias Mac Cruitín, fear Lios Ceannúir. http://t.co/q9xWZl5mMs
parataxis:url(Aindrias, http://t.co/q9xWZl5mMs)
~~~

Similarly to hashtags and usernames, if the URL is syntactically integrated, it should be annotated with the appropriate dependency relation.

~~~ sdparse
Seo ceann don dialann. André Rieu beo i Maastricht ar 23 & 24 Iúil. Ticéid ar fáil ag https://t.co/T5H2QupiEN
parataxis:url( Ticéid, https://t.co/T5H2QupiEN)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:20 CEST 2021 -->
