---
layout: base
title:  'Statistics of goeswith in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `goeswith`

This relation is universal.

3 nodes (0%) are attached to their parents as `goeswith`.

3 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `goeswith`: <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 33% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-X.html">X</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	В	_	ADP	IN	_	3	case	_	_
2	8	_	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	веке	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing|Person=3	9	obl	_	_
4	д	_	ADP	IN	_	6	case	_	_
5	н.	_	DET	PRP$	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	6	det	_	_
6	э	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	3	nmod	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	goeswith	_	_
8	Греция	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	начала	_	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
10	выходить	_	VERB	VB	Aspect=Imp	9	xcomp	_	_
11	из	_	ADP	IN	_	13	case	_	_
12	темных	_	ADJ	JJ	Animacy=Inan|Case=Gen|Number=Plur|Variant=Long	13	amod	_	_
13	веков	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	10	obl	_	SpaceAfter=No
14	,	_	PUNCT	,	_	15	punct	_	_
15	последовавших	_	VERB	VBN	Animacy=Inan|Aspect=Perf|Case=Gen|Number=Plur|Tense=Past|Variant=Long|VerbForm=Part|Voice=Act	13	acl	_	_
16	за	_	ADP	IN	_	17	case	_	_
17	падением	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing|Person=3	15	obl	_	_
18	Микенской	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	19	amod	_	_
19	цивилизации	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	17	nmod	_	SpaceAfter=No
20	.	_	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Не	_	PART	NEG	Polarity=Neg	0	root	_	_
2	удивительно	_	VERB	PRED	_	1	goeswith	_	SpaceAfter=No
3	,	_	PUNCT	,	_	10	punct	_	_
4	что	_	ADP	IN	_	10	mark	_	_
5	федеральные	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	8	amod	_	_
6	и	_	CCONJ	CC	_	7	cc	_	_
7	государственные	_	ADJ	JJ	Animacy=Inan|Case=Nom|Number=Plur|Variant=Long	5	conj	_	_
8	органы	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|Person=3	10	nsubj	_	_
9	власти	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	8	nmod	_	_
10	назвали	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	1	ccomp	_	_
11	Национальное	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	Proper=True
12	природное	_	ADJ	JJ	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	Proper=True
13	наследие	_	PROPN	NN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|Person=3	10	obj	_	_
14	общегосударственной	_	ADJ	JJ	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Variant=Long	15	amod	_	_
15	идеей	_	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing|Person=3	10	iobj	_	_
16	самого	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	17	advmod	_	_
17	высокого	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Variant=Long	18	amod	_	_
18	приоритета	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|Person=3	15	nmod	_	_
19	и	_	CCONJ	CC	_	21	cc	_	_
20	документально	_	ADV	RB	_	21	advmod	_	_
21	подтвердили	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past	10	conj	_	_
22	это	_	DET	DT	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	21	obj	_	_
23	в	_	ADP	IN	_	25	case	_	_
24	коалиционном	_	ADJ	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	25	amod	_	_
25	договоре	_	NOUN	NN	Animacy=Inan|Gender=Masc|Number=Sing|Person=3	21	obl	_	_
26	в	_	ADP	IN	_	28	case	_	_
27	2005	_	NUM	JJ	Animacy=Inan|Gender=Masc|Number=Sing|Variant=Long	28	nummod	_	_
28	году	_	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Person=3	21	obl	_	SpaceAfter=No
29	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Тариф	_	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	_
2	энергетической	_	ADJ	JJ	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Variant=Long	3	amod	_	_
3	компании	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	1	nmod	_	_
4	E.	_	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing|Person=3	3	nmod	_	SpaceAfter=No
5	ON	_	X	GW	_	4	goeswith	_	Proper=True
6	по	_	ADP	IN	_	8	case	_	_
7	фиксированной	_	ADJ	JJ	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Variant=Long	8	amod	_	_
8	ставке	_	NOUN	NN	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing|Person=3	1	nmod	_	_
9	составляет	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
10	760	_	NUM	CD	Case=Acc	11	nummod	_	_
11	фунтов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	9	obl	_	_
12	стерлингов	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3	11	nmod	_	SpaceAfter=No
13	;	_	PUNCT	:	_	16	punct	_	_
14	cтолько	_	ADV	RB	_	16	advmod	_	_
15	же	_	PART	UH	_	14	advmod	_	_
16	платят	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres	9	parataxis	_	_
17	и	_	X	UH	_	18	advmod	_	_
18	клиенты	_	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|Person=3	16	nsubj	_	_
19	Avro	_	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	18	nmod	_	_
20	Energy	_	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing|Person=3	19	flat	_	_
21	за	_	ADP	IN	_	22	case	_	_
22	тариф	_	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3	16	obl	_	_
23	Simple	_	PROPN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	22	nmod	_	_
24	and	_	CCONJ	IN	_	25	cc	_	Proper=True
25	Select	_	PROPN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Person=3	23	conj	_	SpaceAfter=No
26	.	_	PUNCT	.	_	9	punct	_	_

~~~


