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
<!-- Interlanguage links updated Út zář 29 20:43:28 CEST 2020 -->
