---
layout: relation
title: 'parataxis:hashtag'
shortdef: 'paratactic hashtag'
udver: '2'
---

The subtype `parataxis:hashtag` is used in TwittIrish for hashtags which do not play a syntactic role. The hashtag should depend on the root of the tweet.
~~~ sdparse
Barraíocht rudaí le déanamh agam inniú ach tá mo leaba I bhfad ró-chompordach #fadhbannanamicléinn
parataxis:hashtag(Barraíocht, #fadhbannanamicléinn) 
~~~

However, whenever they are syntactically integrated into the sentence we annotate these elements according to their actual grammatical value, since with their removal from the sentence may turn out to be ungrammatical.
~~~ sdparse
Beidh mé ar chlár @user anocht ag labhairt leis @user faoi #neknominations má tá fonn oraibh mo ghuth binn a chloisteáil.
nmod(labhairt, #neknominations)
~~~
<!-- Interlanguage links updated St lis 3 20:59:08 CET 2021 -->
