---
layout: relation
title: 'det'
shortdef: 'determiner'
udver: '2'
---

The relation determiner (`det`) holds between a nominal head and its determiner, i.e. a pronominal ronominal or adverbial expression that modifies a nouns or a noun phrase and express the reference of the noun phrase in context. In Slovenian, determiners ([DET](https://universaldependencies.org/sl/pos/DET)) constitute a closed class incporporating pronominal and adverbial words. When these words occur in attributive roles, as premodifiers of nouns or noun phrases, they are labeled as `det`.  

~~~ sdparse
Definitivno je odločitev unije za širitev naš velik zaveznik . \n Definitely is decision of-union to expand our great ally .
det(zaveznik,naš)
det(ally,our)
~~~
~~~ sdparse
Ali ima center veliko dela spričo tako hudih medvrstniških obračunavanj ? \n Does have center a-lot-of work because-of such severe peer conflicts ?
det(dela,veliko)
det(work,a-lot-of)
~~~

The `det` relation is also used for the definite article _ta_ ('the', lit. 'this'), which is typically only used in speech or informal texts. Regardless of what the article determines, e.g. the modifiers or the head, we attach it to the nominal head.

~~~ sdparse
ko bom imela čas samo zase pa za ta tretjega otroka \n when I-will have time only for-myself and for the third child
det(otroka,ta)
amod(otroka,tretjega)
case(otroka,za)
det(child,the)
amod(child,third)
case(child,for)
~~~

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:48 CET -->
