---
layout: relation
title: 'vocative:mention'
shortdef: 'Twitter mentions'
udver: '2'
---

The specialization of `vocative`, `vocative:mention` is used in PoSTWITA for Twitter @-mentions and it links the addressee (i.e. the used called out by means of the @-mention) to its host sentence;

~~~ sdparse
@user mi sono davvero divertito 
vocative:mention(divertito, @user)
~~~

However, just like hashtags, whenever they are syntactically integrated into the sentence, they are annotated according to their actual syntactic role.


~~~ sdparse
arriva @user
nsubj(arriva, @user)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:40 CET 2020 -->
