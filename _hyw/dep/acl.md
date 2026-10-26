---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The `acl` relation stands for finite and non-finite clauses that modify a nominal.  This relation contrasts with the [advcl]() relation, which is used for adverbial clauses that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that modifies the noun.

Note that in Western Armenian relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

~~~ conllu
# visual-style 7 10 acl color:blue
1	Այս	այս	DET	_	Deixis=Prox|PronType=Dem	2	det	_	Translit=Ays|LTranslit=ays
2	շարքին	շարք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	7	obl	_	Translit=šark’in|LTranslit=šark’
3	մէջ	մէջ	ADP	_	AdpType=Post	2	case	_	Translit=mēǰ|LTranslit=mēǰ
4	վերջին	վերջին	ADJ	_	Degree=Pos	5	amod	_	Translit=verǰin|LTranslit=verǰin
5	տունը	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Translit=townë|LTranslit=town
6	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	7	det:poss	_	Translit=mer|LTranslit=menk’
7	տունն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	0	root	_	Translit=townn|LTranslit=town
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	7	cop	_	Translit=ēr|LTranslit=em|SpaceAfter=No
9	՝	՝	PUNCT	_	_	10	punct	_	Translit=,|LTranslit=,
10	գետնայարկ	գետնայարկ	ADJ	_	_	7	acl	_	Translit=getnayark|LTranslit=getnayark|SpaceAfter=No
11	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
12	պճլիկ	պճլիկ	ADJ	_	Style=Expr	13	amod	_	Translit=pč̣lik|LTranslit=pč̣lik
13	պալքոնով	պալքոն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	10	conj	_	Translit=palk’onov|LTranslit=palk’on|SpaceAfter=No
14	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.
~~~

~~~ conllu
# visual-style 3 2 acl color:blue
1	վաղուց	վաղուց	ADV	_	_	2	advmod	_	Translit=vaġowc’|LTranslit=vaġowc’
2	սպասուած	սպասուիլ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	3	acl	_	Translit=spasowaç|LTranslit=spasowil
3	լուր	լուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	Translit=lowr|LTranslit=lowr
4	մըն	մը	DET	_	PronType=Art	3	det	_	Translit=mën|LTranslit=më
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	cop	_	Translit=ē|LTranslit=em|SpaceAfter=No
~~~

~~~ conllu
# visual-style 1 6 acl color:blue
1	Կոչ	կոչ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	Translit=Koč|LTranslit=koč
2	կար	կամ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	0	root	_	Translit=kar|LTranslit=kam
3	յստակ	յստակ	ADJ	_	Degree=Pos	1	amod	_	Translit=ystak|LTranslit=ystak|SpaceAfter=No
4	՝	՝	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
5	իրերը	իր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	6	obj	_	Translit=irerë|LTranslit=ir
6	կոչելու	կոչել	VERB	_	Case=Dat|Definite=Ind|Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	acl	_	Translit=kočelow|LTranslit=kočel
7	իրենց	իրենց	DET	_	Number=Plur|Person=3|Poss=Yes|PronType=Emp	8	det:poss	_	Translit=irenc’|LTranslit=irenc’
8	անուններով	անուն	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	6	obl	_	Translit=anownnerov|LTranslit=anown
~~~


This relation is no longer used for optional depictives: [advcl]() should be used instead.
See [xcomp]() for further discussion.

<!-- Interlanguage links updated Út 30. června 2026, 10:59:25 CEST -->
