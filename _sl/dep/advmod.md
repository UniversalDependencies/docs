---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier is a (non-clausal) adverb or adverbial phrase that serves to modify a predicate or a modifier word. In contrast to adjectival and nominal modifiers ([amod]() and [nmod]()), which only appear as modifiers within phrases, the advmod relation is also used for adverbial modifiers of the main predicate. A detailed description of all these categories is provided below.

The `advmod` relation is typically used for modifiers of the main predicate in the form of adverbs or other kinds of adverbials. This applies to verbs as well as other types of predicates (adjectives, etc.).

~~~ sdparse
pravilno je postavil diagnozo \n correctly he set diagnosis
advmod(postavil,pravilno)
advmod(set,correctly)
~~~
~~~ sdparse
elektroda je navadno nameščena na bolnikovem hrbtu \n electrode is usually placed on patient's back
advmod(nameščena,navadno)
advmod(placed,usually)
~~~
~~~ sdparse
kot smo že poročali \n as we-have already reported
advmod(poročali,že)
advmod(reported,already)
~~~
~~~ sdparse
še pes ima rad mir pri jedi
advmod(ima,rad)
~~~

The `advmod` relation is also used for non-core elements of complex verb phrases expressing negation or modality. In particular, this refers to the adverb (`ADV`) _**lahko**_ and the particles (`PART`) _**ne**_ and _**naj**_.


~~~ sdparse
Rupla ne skrbi usoda slovenskega jezika v EU . \n Rupel not worries the-faith of-Slovenian language in EU .
advmod(skrbi,ne)
advmod(worries,not)
~~~
~~~ sdparse
Po tej poti so lahko konji vlekli vprege . 
advmod(vlekli,lahko)
~~~
~~~ sdparse
Le zakaj naj bi ju porinila ven ?
advmod(porinila,naj)
~~~

The second group of expressions typically marked as `advmod` are adverbs acting as modifiers to other modifier words such as adjectives or adverbs. 

~~~ sdparse
normalno delujoče mišice
advmod(delujoče,normalno)
amod(mišice,delujoče)
~~~
~~~ sdparse
dogodki so se odvijali bistveno drugače
advmod(drugače,bistveno)
advmod(odvijali,drugače)
~~~
~~~ sdparse
farmarjem ne prav ljubi časopisi
advmod(ljubi,ne)
advmod(ljubi,prav)
amod(časopisi,ljubi)
~~~

The `advmod` relation is also used for emphasizing or intensifying adverbs, such as _celo, zlasti, samo, tudi, niti, predvsem ..._, which modify noun phrases, including prepositional phrases.


~~~ sdparse
največji uspeh doslej
advmod(uspeh,doslej)
~~~

~~~ sdparse
v torek zvečer
advmod(torek,zvečer)
~~~

~~~ sdparse
popke takoj ob začetku sušenja hitro segrejejo
advmod(začetku,takoj)
case(začetku,ob)
~~~

~~~ sdparse
 vložki iz krp, spletene volne, gobe in celo trave
advmod(trave,celo)
~~~
