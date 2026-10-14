---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies a verb or other predicate (adjective, etc.), as a modifier not as a core complement. This includes things such as a temporal clause, consequence, conditional clause, purpose
clause, etc. The dependent must be clausal (or else it is an [advmod]()) and the dependent is the main predicate of the clause.

~~~ conllu
# visual-style 8 4 advcl color:blue
1	Եւ	եւ	CCONJ	_	_	8	cc	_	_
2	յորժամ	յորժամ	ADV	_	ExtPos=ADV	4	advmod	_	_
3	որ	որ	PART	_	_	2	fixed	_	_
4	օթիս	օթել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=2|Polarity=Pos|Style=Var|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	8	advcl	_	_
5	ի	ի	ADP	_	AdpType=Prep	6	case	_	_
6	ճանապարհն	ճանապարհ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	obl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	8	punct	_	_
8	լվա	լվանալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Style=Var|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	_
9-10	զերեսդ	_	_	_	_	_	_	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	երեսդ	երես	NOUN	_	Animacy=Nhum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	8	obj	_	_
11	հով	հով	ADJ	_	Degree=Pos	12	amod	_	_
12	ջրով	ջուր	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	8	obl	_	SpaceAfter=No
13	։	։	PUNCT	_	_	8	punct	_	_  

~~~

In Middle Armenian, constructions introduced by the coordinating conjunction _ու_/_ow_ “and” may express simultaneous actions or states accompanying the main action. These constructions may occur with or without an overt verbal head, but in both cases they function as adverbial clauses and are attached to the main predicate with the `advcl` relation. In such cases, the conjunction _ու_/_ow_ retains its `CCONJ` tag, while its subordinating function is indicated by the feature `ExtPos=SCONJ`.

~~~ conllu
# visual-style 1 9 advcl color:blue
1	թաղէին	թաղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=t’aġēin|LTranslit=t’aġel
2	զ	զ	ADP	_	AdpType=Prep	3	case	_	SpaceAfter=No|Translit=z|LTranslit=z
3	ինք	ինք	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	1	obj	_	Translit=ink’|LTranslit=ink’
4	ի	ի	ADP	_	AdpType=Prep	6	case	_	Translit=i|LTranslit=i
5	յ	ի	ADP	_	AdpType=Prep	6	case	_	SpaceAfter=No|Translit=y|LTranslit=i
6	աղբն	աղբ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	1	obl	_	Translit=aġbn|LTranslit=aġb
7	ու	ու	CCONJ	_	ExtPos=SCONJ	9	mark	_	Translit=ow|LTranslit=ow
8	զ	զ	ADP	_	AdpType=Prep	9	case	_	SpaceAfter=No|Translit=z|LTranslit=z
9	գլուխն	գլուխ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	1	advcl	_	Translit=glowxn|LTranslit=glowx
10	ի	ի	ADP	_	AdpType=Prep	11	case	_	Translit=i|LTranslit=i
11	դուրս	դուրս	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	9	nmod:npmod	_	SpaceAfter=No|Translit=dowrs|LTranslit=dowrs
12	,	,	PUNCT	_	_	15	punct	_	Translit=,|LTranslit=,
13	որ	որ	SCONJ	_	_	15	mark	_	Translit=or|LTranslit=or
14	շունչն	շունչ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	15	nsubj	_	Translit=šownč’n|LTranslit=šownč’
15	ելնէր	ելնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	9	advcl	_	SpaceAfter=No|Translit=elnēr|LTranslit=elnel

~~~

~~~ conllu
# visual-style 6 9 advcl color:blue
1	Նշանքն	նշան	NOUN	_	Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	Translit=Nšank’n|LTranslit=nšan
2	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	0	root	_	Translit=ays|LTranslit=ays
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	SpaceAfter=No|Translit=ē|LTranslit=em
4	.	.	PUNCT	_	_	14	punct	_	Translit=.|LTranslit=.
5	եբ	եբ	SCONJ	_	Style=Var	6	mark	_	Translit=eb|LTranslit=eb
6	ելնէ	ելնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	14	advcl	_	Translit=elnē|LTranslit=elnel
7	մկնատամն	մկնատամ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=mknatamn|LTranslit=mknatam
8	ու	ու	CCONJ	_	ExtPos=SCONJ	9	mark	_	Translit=ow|LTranslit=ow
9	թամբեն	թամբել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	Translit=t’amben|LTranslit=t’ambel
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	SpaceAfter=No|Translit=z|LTranslit=z
11	գրաստն	գրաստ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	9	obj	_	SpaceAfter=No|Translit=grastn|LTranslit=grast
12	,	,	PUNCT	_	_	14	punct	_	Translit=,|LTranslit=,
13	նա	նա	SCONJ	_	_	14	mark	_	Translit=na|LTranslit=na
14	խոցնայ	խոցնալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	2	parataxis	_	SpaceAfter=No|Translit=xoc’nay|LTranslit=xoc’nal
15	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:27 CEST -->
