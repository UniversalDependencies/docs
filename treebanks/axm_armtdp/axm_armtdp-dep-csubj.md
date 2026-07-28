---
layout: base
title:  'Statistics of csubj in UD_Middle_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Middle_Armenian-ArmTDP: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="axm_armtdp-dep-csubj-outer.html">csubj:outer</a></tt>.

3 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="axm_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="axm_armtdp-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 csubj	color:blue
1	Եւ	եւ	CCONJ	_	_	15	cc	_	_
2	ի	ի	ADP	_	AdpType=Prep	3	case	_	_
3	կռիւ	կռիւ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	15	obl	_	_
4	ուր	ուր	ADV	_	PronType=Rel	6	advmod	_	_
5	թագաւորն	թագաւոր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
6	ուրդի	ուրդիլ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	3	acl:relcl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	15	punct	_	_
8	նա	նա	SCONJ	_	_	15	mark	_	_
9	երբ	երբ	ADV	_	PronType=Rel	11	advmod	_	_
10	սուրն	սուր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	11	nsubj	_	_
11	վերնա	վերնալ	VERB	_	Aspect=Prosp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	15	advcl	_	SpaceAfter=No
12	՝	՝	PUNCT	_	_	15	punct	_	_
13	նա	նա	SCONJ	_	_	15	mark	_	_
14	չէ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
16	այլ	այլ	DET	_	PronType=Ind	17	det	_	_
17	մարդ	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	18	obj	_	_
18	սպաննել	սպաննել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	15	csubj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	24	punct	_	_
20	քաւէլ	քաւէլ	SCONJ	_	ExtPos=SCONJ	24	mark	_	_
21	թէ	թէ	PART	_	_	20	fixed	_	_
22	հայնց	հայնց	DET	_	PronType=Dem	23	det	_	_
23	մարդիք	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	24	nsubj	_	_
24	լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	15	advcl	_	_
25	յ	ի	ADP	_	AdpType=Prep	26	case	_	_
26	այլազգեացն	այլազգի	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	24	obl	_	_
27	,	,	PUNCT	_	_	33	punct	_	_
28	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	33	nsubj	_	_
29	այն	այն	DET	_	Deixis=Remt|PronType=Dem	30	det	_	_
30	շմորոյն	շմոր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	31	nmod:poss	_	_
31	պատճառք	պատճառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	33	xcomp	_	_
32	լինին	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	33	aux	_	_
33	լել	լինալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	26	acl:relcl	_	SpaceAfter=No
34	։	։	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Զընդանելն	զընդանել	VERB	_	Case=Nom|Definite=Def|Polarity=Pos|Style=Var|Subcat=Tran|VerbForm=Inf|Voice=Act	5	csubj	_	_
2	ըստ	ըստ	ADP	_	AdpType=Prep	4	case	_	_
3	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	4	nmod:poss	_	_
4	կամացն	կամ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	5	obl	_	_
5	լինի	լինիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	9	punct	_	_
7	զի	զի	SCONJ	_	_	9	mark	_	_
8	այս	այս	PRON	_	Case=Nom|Deixis=Prox|Number=Sing|PronType=Dem	9	nsubj	_	_
9	թագաւորին	թագաւոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	5	advcl	_	_
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	՝	՝	PUNCT	_	_	14	punct	_	_
12	որ	որ	SCONJ	_	_	14	mark	_	_
13	ինքն	ինք	PRON	_	Case=Nom|Deixis[psor]=Remt|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
14	դատէ	դատել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	csubj:outer	_	SpaceAfter=No
15	.	.	PUNCT	_	_	23	punct	_	_
16	եւ	եւ	CCONJ	_	_	23	cc	_	_
17	զ	զ	ADP	_	AdpType=Prep	18	case	_	_
18	այլն	այլ	PRON	_	Case=Acc|Definite=Def|Number=Sing|PronType=Ind	23	obj	_	_
19	ի	ի	ADP	_	AdpType=Prep	22	case	_	_
20	յ	ի	ADP	_	AdpType=Prep	22	case	_	_
21	այլ	այլ	DET	_	PronType=Ind	22	det	_	_
22	դատաւորքն	դատաւոր	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	23	iobj	_	_
23	թողու	թողուլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	SpaceAfter=No
24	՝	՝	PUNCT	_	_	27	punct	_	_
25	որ	որ	SCONJ	_	_	27	mark	_	_
26	նոքա	նոքա	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	27	nsubj	_	_
27	հոգան	հոգալ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	23	advcl	_	SpaceAfter=No
28	։	։	PUNCT	_	_	5	punct	_	_

~~~


