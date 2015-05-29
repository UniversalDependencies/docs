---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

The dependency type `acl` is used for relative clauses and clausal complements of nouns.
For a relative clause, the head of the dependency is the noun modified by the clause,
and the dependant is the main predicate of the clause.

~~~ sdparse
太郎 が 食べ た リンゴ \n Taro NOM eat PAST apple
acl(リンゴ, 食べ)
case(太郎, が)
aux(食べ, た)
~~~

Formal noun こと / *koto* "fact" can have a clausal complement and forms a noun phrase
denoting the action expressed by the clause.
For a example, 走る / *hashiru* "run"  こと  / *koto* "fact" 
means running (or a fact that someone runs).

~~~ sdparse
ほめ られ た こと \n praise PASSIVE PAST fact
acl(こと, ほめ)
auxpass(ほめ, られ)
aux(ほめ, た)
~~~
