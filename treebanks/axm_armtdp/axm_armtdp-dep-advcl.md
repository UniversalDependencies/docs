---
layout: base
title:  'Statistics of advcl in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="axm_armtdp-dep-advcl-relcl.html">advcl:relcl</a></tt>.

36 nodes (3%) are attached to their parents as `advcl`.

26 instances of `advcl` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.25.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (20; 56% instances), <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="axm_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 advcl	color:blue
1	Եւ	եւ	CCONJ	_	_	12	cc	_	_
2	որ	որ	SCONJ	_	_	5	mark	_	_
3	գաղտուկ	գաղտուկ	ADJ	_	Degree=Pos	4	amod	_	_
4	մեղանք	մեղանք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Ptan|Style=Arch	5	xcomp	_	_
5	լինի	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	12	advcl	_	_
6	յ	ի	ADP	_	AdpType=Prep	7	case	_	_
7	երկիրն	յերկիր	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Def|Number=Sing	5	obl	_	_
8	՝	՝	PUNCT	_	_	12	punct	_	_
9	զ	զ	ADP	_	AdpType=Prep	10	case	_	_
10	այն	այն	PRON	_	Case=Acc|Deixis=Remt|Number=Sing|PronType=Dem	12	obj	_	_
11	խոստովանհայրքն	խոստովանհայր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur|Style=Var	12	nsubj	_	_
12	ուղղեն	ուղղել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
13	։	։	PUNCT	_	_	12	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 30 advcl	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 advcl	color:blue
1	Եթէ	եթէ	SCONJ	_	_	6	mark	_	_
2	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nsubj	_	_
3	զ	զ	ADP	_	AdpType=Prep	4	case	_	_
4	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Ind|Number=Sing	6	obj	_	_
5	կամաւք	կամ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Plur	6	obl	_	_
6	սպաննէ	սպաննել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	12	punct	_	_
8	նա	նա	SCONJ	_	_	12	mark	_	_
9	նորա	նա	PRON	_	Case=Gen|Deixis=Remt|Number=Sing|PronType=Dem	10	nmod:poss	_	_
10	արեան	արիւն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Coll	11	nmod:poss	_	_
11	վրէժխնդիրն	վրէժխնդիր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Coll	12	nsubj	_	_
12	թագավորին	թագավոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	0	root	_	_
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	cop	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	16	nsubj	_	_
16	խրատէ	խրատել	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	_
17	եւ	եւ	CCONJ	_	_	21	cc	_	_
18	ի	ի	ADP	_	AdpType=Prep	20	case	_	_
19	յ	ի	ADP	_	AdpType=Prep	20	case	_	_
20	ապաշխարութիւն	ապաշխարութիւն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	21	obl	_	_
21	հասցնէ	հասցնել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Cau	16	conj	_	SpaceAfter=No
22	։	։	PUNCT	_	_	12	punct	_	_

~~~


