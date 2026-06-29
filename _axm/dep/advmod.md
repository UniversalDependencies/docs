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
այլ փոքր \n smaller (lit. more small)
advmod(փոքր, այլ)
advmod(small, more)
~~~

~~~ conllu
# visual-style 3 2 advmod color:blue
1	թող	թողնուլ	VERB	_	Aspect=Prosp|ExtPos=PART|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	3	discourse	_	_
2	աւրինաւոր	աւրինաւոր	ADV	_	Style=Var	3	advmod	_	_
3	ամուսնանայ	ամուսնանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
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

<!-- Interlanguage links updated Po 29. června 2026, 17:00:01 CEST -->
