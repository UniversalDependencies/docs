---
layout: relation
title: 'vocative:mention'
shortdef: 'Twitter mentions'
udver: '2'
---

The specialization of `vocative`, `vocative:mention` is used for Twitter @-mentions when they are not syntactically integrated into the sentence;

~~~ sdparse
@user mi sono davvero divertito 
vocative:mention(divertito, @user)
~~~
