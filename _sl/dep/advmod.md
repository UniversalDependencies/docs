---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier is a (non-clausal) adverb or adverbial phrase that serves to modify a predicate or a modifier word. In contrast to adjectival ([amod]() and nominal [nmod]() modifiers, which only appear as phrase modifiers, the `advmod` relation is also used for adverbial modifiers of the predicate. 

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
še pes ima rad mir pri jedi \n even dogs have preference-for peace while eating
advmod(ima,rad)
advmod(have,preference-for)
~~~

The `advmod` relation is also used for non-core elements of complex verb phrases expressing negation or modality. In particular, this refers to the adverb (`ADV`) _**lahko**_ and the particles (`PART`) _**ne**_ and _**naj**_.


~~~ sdparse
Rupla ne skrbi usoda slovenskega jezika v EU . \n Rupel not worries the-fate of-Slovenian language in EU .
advmod(skrbi,ne)
advmod(worries,not)
~~~
~~~ sdparse
Po tej poti so lahko konji vlekli vprege . \n On this road they-aux-PAST could horses draw carriages . 
advmod(vlekli,lahko)
advmod(draw,could)
~~~
~~~ sdparse
Le zakaj naj bi ju porinila ven ? \n Truly why would she-aux-COND them push out ?
advmod(porinila,naj)
advmod(push,would)
~~~

The second group of expressions typically marked as `advmod` are adverbs acting as modifiers to other modifier words such as adjectives or adverbs. 

~~~ sdparse
normalno delujoče mišice \n normally functioning muscles
advmod(delujoče,normalno)
amod(mišice,delujoče)
advmod(functioning,normally)
amod(muscles,functioning)
~~~
~~~ sdparse
dogodki so se odvijali bistveno drugače \n events they-aux-PAST REFLEX unfolded quite differently
advmod(drugače,bistveno)
advmod(odvijali,drugače)
advmod(differently,quite)
advmod(unfold,differently)
~~~
~~~ sdparse
farmarjem ne prav ljubi časopisi \n with-farmers not very popular newspapers
advmod(ljubi,ne)
advmod(ljubi,prav)
amod(časopisi,ljubi)
advmod(popular,not)
advmod(popular,very)
amod(newspapers,popular)
~~~

The `advmod` relation is also used for emphasizing or intensifying adverbs, such as _celo, zlasti, samo, tudi, niti, predvsem ..._, which modify noun phrases, including prepositional phrases.


~~~ sdparse
največji uspeh doslej \n greatest achievement yet
advmod(uspeh,doslej)
advmod(achievement,yet)
~~~

~~~ sdparse
v torek zvečer \n on Tuesday evening
advmod(torek,zvečer)
advmod(Tuesday,evening)
~~~

~~~ sdparse
popke takoj ob začetku sušenja hitro segrejejo \n buds immediately at start of-drying quickly they-warm-up
advmod(začetku,takoj)
case(začetku,ob)
advmod(start,immediately)
case(start,at)
~~~

~~~ sdparse
vložki iz krp , spletene volne , gobe in celo trave \n inserts made-of cloth, knitted wool , sponge and even grass
advmod(trave,celo)
advmod(even,grass)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:20 CET -->
