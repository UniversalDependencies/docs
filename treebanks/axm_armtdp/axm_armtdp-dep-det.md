---
layout: base
title:  'Statistics of det in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="axm_armtdp-dep-det-poss.html">det:poss</a></tt>.

25 nodes (2%) are attached to their parents as `det`.

23 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04.

The following 2 pairs of parts of speech are connected with `det`: <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-DET.html">DET</a></tt> (23; 92% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-DET.html">DET</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 det	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	_
2	տաճկին	տաճիկ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	3	nmod:poss	_	_
3	գինն	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
4	այսոր	այս	PRON	_	Case=Dat|Deixis=Prox|Number=Sing|PronType=Dem	6	nmod:poss	_	_
5	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	6	nummod	_	_
6	բաժնէն	բաժին	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Def|Number=Sing	7	nmod:npmod	_	_
7	մէկն	մէկ	PRON	_	Case=Nom|Definite=Def|PronType=Ind	0	root	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	14	punct	_	_
10	զ	զ	ADP	_	AdpType=Prep	11	case	_	_
11	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	14	obj	_	_
12	այն	այն	DET	_	Deixis=Remt|PronType=Dem	13	det	_	_
13	տաճկին	տաճկ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	14	obl	_	_
14	տան	տալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	_
15	գին	գին	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	14	compound:lvc	_	SpaceAfter=No
16	,	,	PUNCT	_	_	21	punct	_	_
17	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	21	nsubj	_	_
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	_
19	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	20	nmod:poss	_	_
20	երկրին	երկիր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	obl	_	_
21	կենայ	կենալ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	13	acl:relcl	_	SpaceAfter=No
22	։	։	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 22 det	color:blue
1	Եւ	եւ	CCONJ	_	_	13	cc	_	_
2	որ	որ	SCONJ	_	_	7	mark	_	_
3	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
4	արքունի	արքունի	ADJ	_	Degree=Pos	5	amod	_	_
5	ջամբռէ	ջամբռ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	7	obl	_	_
6	իրք	իրք	PRON	_	PronType=Ind	7	obj	_	_
7	գողանայ	գողանալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	advcl	_	SpaceAfter=No
8	՝	՝	PUNCT	_	_	13	punct	_	_
9	նա	նա	SCONJ	_	_	13	mark	_	_
10	զ	զ	ADP	_	AdpType=Prep	12	case	_	_
11	երկու	երկու	NUM	_	NumForm=Word|NumType=Card	12	nummod	_	_
12	աչսն	աչք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Plur	13	obj	_	_
13	հանէ	հանել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
14	եւ	եւ	CCONJ	_	_	20	cc	_	_
15	զ	զ	ADP	_	AdpType=Prep	16	case	_	_
16	կինն	կին	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	20	obj	_	_
17	ու	ու	CCONJ	_	_	19	cc	_	_
18	զ	զ	ADP	_	AdpType=Prep	19	case	_	_
19	որդիսն	որդի	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Plur	16	conj	_	_
20	առնուն	առնուլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	_
21	եւ	եւ	CCONJ	_	_	26	cc	_	_
22	այլ	այլ	DET	_	PronType=Ind	23	det	_	_
23	զինչ	զինչ	PRON	_	PronType=Ind	24	obj	_	_
24	ունենայ	ունենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	26	ccomp	_	SpaceAfter=No
25	՝	՝	PUNCT	_	_	26	punct	_	_
26	առնուն	առնուլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	SpaceAfter=No
27	.	.	PUNCT	_	_	37	punct	_	_
28	եւ	եւ	CCONJ	_	_	37	cc	_	_
29	թէ	թէ	SCONJ	_	_	30	mark	_	_
30	ծախէ	ծախել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	37	advcl	_	_
31	զ	զ	ADP	_	AdpType=Prep	32	case	_	_
32	կինն	կին	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Sing	30	obj	_	_
33	եւ	եւ	CCONJ	_	_	35	cc	_	_
34	զ	զ	ADP	_	AdpType=Prep	35	case	_	_
35	որդիսն	որդի	NOUN	_	Animacy=Hum|Case=Acc|Definite=Def|Number=Plur	32	conj	_	_
36	՝	՝	PUNCT	_	_	37	punct	_	_
37	արժան	արժան	ADJ	_	Degree=Pos	13	parataxis	_	_
38	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	37	cop	_	SpaceAfter=No
39	։	։	PUNCT	_	_	13	punct	_	_

~~~


