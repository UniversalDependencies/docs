---
layout: relation
title: 'iobj'
shortdef: 'indirect object'
udver: '2'
---

The indirect object of a verb is any nominal phrase that is a core argument of the verb but is not its subject or [direct object](obj).
The prototypical example is the recipient of ditransitive verbs of exchange:

~~~ conllu
# visual-style 2 4 iobj color:blue
1	Ջուր	ջուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	obj	_	_
2	տուր	տալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
3	ծարւած	ծարւիլ	VERB	_	Aspect=Perf|Polarity=Pos|Style=Var|Subcat=Intr|VerbForm=Part|Voice=Mid	4	acl	_	_
4	լերդիս	լերդ	NOUN	_	Animacy=Nhum|Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	iobj	_	SpaceAfter=No
5	:	:	PUNCT	_	Foreign=Yes	2	punct	_	_
~~~

Middle Armenian allows other semantic roles as additional objects. The morphological [Case]() of the objects is dictated by verb valency.

If there is just one object, it should likely be [obj]() unless it is morphosyntactically more similar to clear cases of [iobj](). This is an amended policy of UD as
described [on the changes page](https://universaldependencies.org/changes.html#sole-iobj).

~~~ conllu
# visual-style 2 4 obj color:blue
1	օձն	օձ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	_
2	խայթէ	խայթ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3-4	զմարդն	_	_	_	_	_	_	_	
3	զ	զ	ADP	_	AdpType=Prep	4	case	_	_
4	մարդն	մարդ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	2	obj	_	_
~~~

~~~ conllu
# visual-style 4 3 iobj color:blue
1-2	յայլ	_	_	_	_	_	_	_	_
1	յ	ի	ADP	_	AdpType=Prep	3	case	_	_
2	այլ	այլ	DET	_	PronType=Ind	3	det	_	_
3	դատաւորքն	դատաւոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	4	iobj	_	_
4	թողու	թողուլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
~~~

When there is a [clausal complement](ccomp), then the clausal complement is regarded as a “clausal direct object” and an object nominal will be an `iobj`, parallel to
the simple ditransitive case:

~~~ conllu
# visual-style 4 3 iobj color:blue
# visual-style 4 7 ccomp color:blue
1	եւ	եւ	CCONJ	_	_	4	cc	_	_
2	երկին	երակ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	տիրոջն	տէր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	iobj	_	_
4	հարցնեն	հարցնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	թե	թե	SCONJ	_	_	7	mark	_	_
7-8	ինչպե՞ս	_	_	_	_	_	_	_	_
7	ինչպես	ինչպես	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Int	4	ccomp	_	_
8	՞	՞	PUNCT	_	_	7	punct	_	_
9	ես	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	_
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:44:12 CEST -->
