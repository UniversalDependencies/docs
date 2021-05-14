---
layout: relation
title: 'vocative:mention'
shortdef: 'Twitter mentions'
udver: '2'
---

The subtype `vocative:mention` is used in TwittIrish for Twitter @-mentions. The addressee (i.e. the user called out by means of the @-mention) should depend on the head of the host sentence. 

~~~ sdparse
@user Go raibh maith agat :) 
vocative:mention(raibh, @user)
~~~

However, just like hashtags, whenever they are syntactically integrated into the sentence, they are annotated according to their actual syntactic role.


~~~ sdparse
RT @spleodar: Ní díreach @user ...Ach is maith linn é... léirigh cion inniu - nígh na soithí https://t.co/QaD247f1Dk
nsubj(díreach, @user)
~~~
<!-- Interlanguage links updated Pá kvě 14 11:09:22 CEST 2021 -->
