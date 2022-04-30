---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial phrase that serves to modify the meaning of the word. In Italian adverbial modifiers cover all adverbs functioning as modifiers as well as pronominal adverbs.

<code>advmod</code> is used in the following cases:

* adverbial modifiers involving different types of parts of speech

~~~ sdparse
Si abbatte/VERB indistintamente su uomini e donne
advmod(abbatte, indistintamente)
~~~
~~~ sdparse
Poco/ADV dopo/ADV li fucilarono/VERB .
advmod(dopo, Poco)
advmod(fucilarono, dopo)
~~~
~~~ sdparse
una strada abbastanza/ADV frequentata/ADJ 
advmod(frequentata, abbastanza)
~~~
~~~ sdparse
cinque anni/NOUN fa/ADV
advmod(anni, fa)
~~~

* pronominal adverbs modifying verbs

~~~ sdparse
di questi problemi se ne occupano/verb i preti
advmod(occupano, ne)
~~~

* non-prepositional multiword expressions (like *pian piano*, *vale a dire*, *d'ora in avanti*, *oltre che*).  

~~~ sdparse
ogni fatto costituisce di/ADP per/ADP sé/PRON inadempimento .
advmod(costituisce, di)
fixed(di, per)
fixed(di, sé)
~~~
~~~ sdparse
meno/ADV che/SCONJ meno/ADV quella di essere a conoscenza dei segreti 
advmod(quella, meno-1)
fixed(meno-1, che)
fixed(meno-1, meno-3)
~~~
~~~ sdparse
vale/VERB a/ADP dire/VERB il cuore della Finanziaria
advmod(cuore, vale)
fixed(vale, a)
fixed(vale, dire)
~~~

**NB** For prepositional multiword expressions the correct relations are [case]() or [mark]().

Adverbials realized by noun phrases or adpositional phrases are instead covered by the relation [obl]():

~~~ sdparse
oggi la canto qui da voi
advmod(canto, oggi)
advmod(canto, qui)
obl(canto, voi)
~~~
<!-- Interlanguage links updated St lis 3 20:58:35 CET 2021 -->
