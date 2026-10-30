---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a predicative or clausal complement without its own subject. The reference of the subject is necessarily determined by an argument external to the `xcomp` (normally by the subject of the next higher clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are complements (arguments of the higher verb or adjective) rather than adjuncts/modifiers, such as a purpose clause.
The name `xcomp` is borrowed from Lexical-Functional Grammar.

~~~ conllu
# visual-style 4 9 xcomp color:blue
1	Քրիստոսի	Քրիստոս	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Prs|Number=Sing	2	nmod:poss	_	_
2	դատաստանին	դատաստան	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	աւրինակովն	աւրինակ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Def|Number=Sing|Style=Var	4	obl	_	_
4	պարտի	պարտել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
6-7	զիր	_	_	_	_	_	_	_	_
6	զ	զ	ADP	_	AdpType=Prep	8	case	_	_
7	իր	իր	DET	_	Case=Acc|Number=Sing|Person=3|PronType=Poss|Reflex=Yes	8	det:poss	_	_
8	իրաւունքն	իրաւունք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	9	obj	_	_
9	տանել	տանել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	4	xcomp	_	_
10	ըղորդ	ըղորդ	ADV	_	_	9	advmod	_	_

~~~

~~~ conllu
# visual-style 32 34 xcomp color:blue
1	Գրաստ	գրաստ	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	13	dislocated	_	SpaceAfter=No|Translit=Grast|LTranslit=grast
2	,	,	PUNCT	_	_	4	punct	_	Translit=,|LTranslit=,
3	որու	որ	PRON	_	Case=Dat|Number=Sing|PronType=Rel	4	iobj	_	Translit=orow|LTranslit=or
4	լինի	լինել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	1	acl:relcl	_	Translit=lini|LTranslit=linel
5	ու	ու	CCONJ	_	_	6	cc	_	Translit=ow|LTranslit=ow
6	բնակի	բնակիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	4	conj	_	Translit=bnaki|LTranslit=bnakil
7	յ	ի	ADP	_	AdpType=Prep	8	case	_	SpaceAfter=No|Translit=y|LTranslit=i
8	ինք	ինք	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	obl	_	Translit=ink’|LTranslit=ink’
9	այս	այս	DET	_	Deixis=Prox|PronType=Dem	10	det	_	Translit=ays|LTranslit=ays
10	ցաւս	ցաւ	NOUN	_	Case=Nom|Deixis[psor]=Prox|Number=Sing	4	nsubj	_	SpaceAfter=No|Translit=c’aws|LTranslit=c’aw
11	,	,	PUNCT	_	_	13	punct	_	Translit=,|LTranslit=,
12	նա	նա	SCONJ	_	_	13	mark	_	Translit=na|LTranslit=na
13	առնէին	առնել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	Translit=aṙnēin|LTranslit=aṙnel
14	և	և	CCONJ	_	_	15	cc	_	Translit=ew|LTranslit=ew
15	թաղէին	թաղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Imp|VerbForm=Fin|Voice=Act	13	conj	_	Translit=t’aġēin|LTranslit=t’aġel
16	զ	զ	ADP	_	AdpType=Prep	17	case	_	SpaceAfter=No|Translit=z|LTranslit=z
17	ինք	ինք	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	obj	_	Translit=ink’|LTranslit=ink’
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	Translit=i|LTranslit=i
19	յ	ի	ADP	_	AdpType=Prep	20	case	_	SpaceAfter=No|Translit=y|LTranslit=i
20	աղբն	աղբ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	15	obl	_	Translit=aġbn|LTranslit=aġb
21	ու	ու	CCONJ	_	ExtPos=SCONJ	23	mark	_	Translit=ow|LTranslit=ow
22	զ	զ	ADP	_	AdpType=Prep	23	case	_	SpaceAfter=No|Translit=z|LTranslit=z
23	գլուխն	գլուխ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	13	advcl	_	Translit=glowxn|LTranslit=glowx
24	ի	ի	ADP	_	AdpType=Prep	25	case	_	Translit=i|LTranslit=i
25	դուրս	դուրս	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	23	nmod:npmod	_	SpaceAfter=No|Translit=dowrs|LTranslit=dowrs
26	,	,	PUNCT	_	_	29	punct	_	Translit=,|LTranslit=,
27	որ	որ	SCONJ	_	_	29	mark	_	Translit=or|LTranslit=or
28	շունչն	շունչ	NOUN	_	Case=Nom|Definite=Def|Number=Sing	29	nsubj	_	Translit=šownč’n|LTranslit=šownč’
29	ելնէր	ելնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	23	advcl	_	SpaceAfter=No|Translit=elnēr|LTranslit=elnel
30	,	,	PUNCT	_	_	32	punct	_	Translit=,|LTranslit=,
31	մինչև	մինչև	SCONJ	_	_	32	mark	_	Translit=minč’ew|LTranslit=minč’ew
32	գայր	գալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	13	advcl	_	Translit=gayr|LTranslit=gal
33	և	և	CCONJ	_	_	34	cc	_	Translit=ew|LTranslit=ew
34	քրտնէր	քրտնիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Imp|VerbForm=Fin|Voice=Mid	32	xcomp	_	SpaceAfter=No|Translit=k’rtnēr|LTranslit=k’rtnil
35	։	։	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.

~~~

Note that the above condition “without its own subject” does not mean that a clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause. That is, there should be no available interpretation where the subject of the lower clause may be distinct from the specified role of the upper clause. In cases where the missing subject may or must be distinct from a fixed role in the higher clause, [ccomp]() should be used instead. This includes cases of arbitrary subjects and anaphoric control.

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_.
Remember that `xcomp` is used for core arguments of clausal predicates so it will not be used for other instances of secondary predication.

<!-- Interlanguage links updated Út 30. června 2026, 11:00:44 CEST -->
