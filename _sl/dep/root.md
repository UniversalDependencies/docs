---
layout: relation
title: 'root'
shortdef: 'root'
udver: '2'
---

The `root` relation, which can be ascribed to only one token in each sentence, is used for the **root of the sentence**. This is usually the head of the predicate of the main clause in the sentence.  
~~~ sdparse
ROOT Lastnika je oškodoval za 30 tisočakov . \n ROOT For the owner aux-PAST he-caused-financial-damage of 30 thousand .
root(ROOT-1,oškodoval)
root(ROOT-10,he-caused-financial-damage)
~~~
~~~ sdparse
ROOT To je bilo značilno za pokrajine daleč od morja \n ROOT This aux-PAST was characteristic of regions far-away from the-sea
root(ROOT-1,značilno)
root(ROOT-12,characteristic)
~~~

In the case of an ellipse of the main verb, the `root` relation is applied to the head of the most appropriate argument of the omitted predicate.  
~~~ sdparse
ROOT Večno hvaležni udeleženci prometa v Ljubljani ! \n ROOT The-ever thankful road-users in-traffic in Ljubljana !
root(ROOT-1,udeleženci)
root(ROOT-10,road-users)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:28 CET -->
