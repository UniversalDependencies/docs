---
layout: relation
title: 'orphan'
shortdef: 'connecting orphaned arguments of elided predicate'
udver: '2'
---

Ellipsis is a missing part of a sentence (such as a predicate or a nominal). This relation is used in
cases of head ellipsis where simple promotion would result in an unnatural and misleading
dependency relation.

If an ellipsis does not change the structure, it is not annotated.

If an ellipsis changes the structure, i.e., a word is omitted on which other words would depend, then
those dependent words inherit the syntactic function of the missing word.

If the omitted word is a nominal, its function is inherited by other words in the following priority
order: _amod > nummod > det > nmod > case_. Remaining words attach according to their usual
dependency relations.

~~~ sdparse
Aš norėčiau oranžinių . \n I would-like some-orange-ones .
obj(norėčiau, oranžinių)
obj(would-like, some-orange-ones)
~~~

~~~ sdparse
Mama slepiasi už stalo , sūnus slepiasi po . \n Mom is-hiding behind the-table , the-son is-hiding underneath .
obl(slepiasi, po)
obl(is-hiding, underneath)
~~~

If the main predicate is elided, we use simple promotion only if there is an [aux](),
[aux:pass]() or [cop]().

~~~ sdparse
Jis buvo jaunas , o ji nebuvo . \n He was young , and she was-not .
conj(jaunas, nebuvo)
nsubj(nebuvo, ji)
conj(young, was-not)
nsubj(was-not, she)
~~~

When the predicate is omitted but the sentence does not contain [aux](), [aux:pass]() or [cop](), transferring the syntactic function of the predicate to
other words without using the `orphan` relation can appear unnatural. To show
syntactically that the dependency structure of the sentence is incomplete, the relation `orphan` is used. This indicates that a predicate was omitted in the sentence.
Words inherit the syntactic function of an omitted predicate according to the following priority
order: _nsubj / nsubj:pass > obj > iobj > obl / obl:arg > advmod > csubj / csubj:pass > xcomp >
ccomp > advcl > dislocated > vocative_. The relation `orphan` is used for words that
would normally be attached to the missing predicate.

~~~ sdparse
Aš mėgstu šunis , o tu kates . \n I like dogs , and you cats .
conj(mėgstu, tu)
orphan(tu, kates)
conj(like, you)
orphan(you, cats)
~~~

~~~ sdparse
Tomas nori dainuoti , o Ona šokti . \n Tom wants to-sing , and Ann to-dance .
conj(dainuoti, Ona)
orphan(Ona, šokti)
conj(to-sing, Ann)
orphan(Ann, to-dance)
~~~

~~~ sdparse
Vieni moka brangiai , nes kiti pigiai . \n Some pay dearly , because others cheaply .
advcl(moka, kiti)
orphan(kiti, pigiai)
advcl(pay, others)
orphan(others, cheaply)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:13:06 CEST -->
