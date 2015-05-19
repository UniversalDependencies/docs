---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

Relative clause, clausal complement of nouns.

~~~ sdparse
太郎 が 食べ た リンゴ \n Taro NOM eat PAST apple
acl(リンゴ, 食べ)
case(太郎, が)
aux(食べ, た)
~~~

~~~ sdparse
ほめ られ た こと \n praise PASSIVE PAST fact
acl(こと, ほめ)
auxpass(ほめ, られ)
aux(ほめ, た)
~~~
