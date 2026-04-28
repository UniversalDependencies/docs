---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) [adverb](ADV)
or adverbial phrase that serves to modify predicate or a modifier word.

Note that in the Armenian grammatical tradition, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological 
[cases](Case). We differentiate adverbials realized as adverbs (`advmod`) and adverbials realized by noun phrases or adpositional phrases ([obl]()). 

~~~ sdparse
թող աւրինաւոր ամուսնանայ \n let him marry lawfully
advmod(ամուսնանայ, աւրինաւոր)
advmod(marry, lawfully)
~~~

~~~ sdparse
այլ փոքր \n smaller (lit. more small)
advmod(փոքր, այլ)
advmod(small, more)
~~~

~~~ conllu
# visual-style 6 3 advcl:relcl color:blue
1	ի	ի	ADP	_	AdpType=Prep	2	case	_	_
2	կռիւ	կռիւ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	0	root	_	_
3	ուր	ուր	ADV	_	PronType=Rel	5	advmod	_	_
4	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	5	nsubj	_	_
5	ուրդի	ուրդիլ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	acl:relcl	_	SpaceAfter=No

~~~

We use a special label, [advmod:emph]() for adverbial modifiers that are used for emphasis.

<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:07 CET -->
