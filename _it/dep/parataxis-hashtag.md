---
layout: relation
title: 'parataxis:hashtag'
shortdef: 'paratactic hashtag'
udver: '2'
---

The specialization is used in PoSTWITA for Twitter hashtags. 
~~~ sdparse
#notizie Piovono dollari su Blatter
parataxis:hashtag(Piovono, #notizie) 
~~~

However, whenever they are syntactically integrated into the sentence we consider these elements for the actual grammatical value they ’gain’, since with their removal the sentence may turn out to be ungrammatical.
~~~ sdparse
#Ferrara critica #Grillo
nsubj(critica, #Ferrara)
obj(critica, #Grillo)
~~~

<!-- Interlanguage links updated Út zář 29 20:43:26 CEST 2020 -->
