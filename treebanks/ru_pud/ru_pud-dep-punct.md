---
layout: base
title:  'Statistics of punct in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `punct`

This relation is universal.

2977 nodes (15%) are attached to their parents as `punct`.

1559 instances of `punct` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.50050386294928.

The following 13 pairs of parts of speech are connected with `punct`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1883; 63% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (507; 17% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (178; 6% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (164; 6% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (76; 3% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (43; 1% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (39; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (26; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="ru_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Будучи	быть	AUX	VBG	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	3	cop	_	_
2	страстным	страстный	ADJ	JJ	Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	гитаристом	гитарист	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	играл	играть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	там	там	ADV	RB	Degree=Pos	6	advmod	_	_
8	концерт	концерт	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
9	в	в	ADP	IN	_	12	case	_	_
10	том	тот	DET	DT	Case=Loc|Gender=Masc|Number=Sing	12	det	_	_
11	же	же	PART	UH	_	10	advmod	_	_
12	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 punct	color:blue
1	То	то	PRON	DT	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	IN	_	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	IN	_	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятный	ADJ	JJH	Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


