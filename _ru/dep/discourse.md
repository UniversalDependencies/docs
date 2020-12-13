---
layout: relation
title:  'discourse'
shortdef : 'discourse element'
udver: '2'
---

The `discourse` relation is used for [interjections](ru-pos/INTJ) and other discourse particles and elements (which are not clearly linked to the structure of the sentence, except in an expressive way). This includes: interjections (_ох_ “oh”, _вау_ “wow”), fillers (_ммм_ ”um”, _э-э-э_ ”ah”), and discourse markers including emoticons (_ну_ “well”, _:)_ ).

~~~ sdparse
Игуасу в Аргентине :) \n Iguazu is in Argentina :)
discourse(Аргентине, :)-4)
discourse(Argentina, :)-10)
~~~

~~~ sdparse
Ох , вы издеваетесь ! \n Oh , you 're joking !
discourse(издеваетесь, Ох)
discourse(joking, Oh)
~~~

Note that in Russian, the parentheticals (*значит* “I mean”, *так сказать* “so to say”) are labeled `parataxis` and the question particle _ли_ “whether” used as a marker of the Yes-No questions is labeled `advmod`.

<!-- Interlanguage links updated Čt lis 12 09:43:24 CET 2020 -->
