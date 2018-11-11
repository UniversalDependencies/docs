---
layout: base
title:  'Statistics of goeswith in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `goeswith`

This relation is universal.

2 nodes (0%) are attached to their parents as `goeswith`.

2 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 50% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	В	в	ADP	IN	_	3	case	_	_
2	8	8	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	веке	век	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	9	obl	_	_
4	д	д	ADP	IN	_	6	case	_	_
5	н.	н.	DET	PRP$	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	6	det	_	_
6	э	э	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	goeswith	_	_
8	Греция	Греция	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
9	начала	начать	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
10	выходить	выходить	VERB	VB	Aspect=Imp	9	xcomp	_	_
11	из	из	ADP	IN	_	13	case	_	_
12	темных	темный	ADJ	JJ	Animacy=Inan|Case=Gen|Number=Plur|Variant=Long	13	amod	_	_
13	веков	век	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	obl	_	SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	_	_
15	последовавших	последовать	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|Variant=Long|VerbForm=Part|Voice=Act	13	acl	_	_
16	за	за	ADP	IN	_	17	case	_	_
17	падением	падение	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	15	obl	_	_
18	Микенской	микенский	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	19	amod	_	_
19	цивилизации	цивилизация	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	SpaceAfter=No
20	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Не	не	PART	NEG	Polarity=Neg	0	root	_	_
2	удивительно	удивительно	VERB	PRED	_	1	goeswith	_	SpaceAfter=No
3	,	,	PUNCT	,	_	10	punct	_	_
4	что	что	ADP	IN	_	10	mark	_	_
5	федеральные	федеральный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	8	amod	_	_
6	и	и	CCONJ	CC	_	7	cc	_	_
7	государственные	государственный	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	5	conj	_	_
8	органы	орган	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
9	власти	власть	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
10	назвали	назвать	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	1	ccomp	_	_
11	Национальное	национальный	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	Proper=True
12	природное	природный	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	Proper=True
13	наследие	наследие	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	10	obj	_	_
14	общегосударственной	общегосударственный	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	15	amod	_	_
15	идеей	идея	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	10	iobj	_	_
16	самого	самый	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	17	advmod	_	_
17	высокого	высокий	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	18	amod	_	_
18	приоритета	приоритет	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	_
19	и	и	CCONJ	CC	_	21	cc	_	_
20	документально	документально	ADV	RB	_	21	advmod	_	_
21	подтвердили	подтвердить	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	10	conj	_	_
22	это	это	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	21	obj	_	_
23	в	в	ADP	IN	_	25	case	_	_
24	коалиционном	коалиционный	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	25	amod	_	_
25	договоре	договор	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing	21	obl	_	_
26	в	в	ADP	IN	_	28	case	_	_
27	2005	2005	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	28	amod	_	_
28	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	21	obl	_	SpaceAfter=No
29	.	.	PUNCT	.	_	1	punct	_	_

~~~


