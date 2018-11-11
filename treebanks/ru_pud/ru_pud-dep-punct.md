---
layout: base
title:  'Statistics of punct in UD_Russian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Russian-PUD: Relations: `punct`

This relation is universal.

2980 nodes (15%) are attached to their parents as `punct`.

1562 instances of `punct` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.51442953020134.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="ru_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (1963; 66% instances), <tt><a href="ru_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (517; 17% instances), <tt><a href="ru_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (144; 5% instances), <tt><a href="ru_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (128; 4% instances), <tt><a href="ru_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (71; 2% instances), <tt><a href="ru_pud-pos-X.html">X</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (69; 2% instances), <tt><a href="ru_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (26; 1% instances), <tt><a href="ru_pud-pos-DET.html">DET</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (18; 1% instances), <tt><a href="ru_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (14; 0% instances), <tt><a href="ru_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (12; 0% instances), <tt><a href="ru_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances), <tt><a href="ru_pud-pos-PART.html">PART</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="ru_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="ru_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ru_pud-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 punct	color:blue
1	То	то	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	5	punct	_	_
3	что	что	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	5	obj	_	_
4	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
5	говорит	говорить	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	acl	_	_
6	и	и	CCONJ	CC	_	9	cc	_	_
7	что	что	SCONJ	WP	Animacy=Inan|Case=Acc|Gender=Neut	9	obj	_	_
8	она	она	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nsubj	_	_
9	делает	делать	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	5	punct	_	_
11	на	на	ADP	IN	_	13	case	_	_
12	самом	самый	ADJ	JJ	Animacy=Inan|Gender=Neut|Number=Sing|Variant=Long	13	amod	_	_
13	деле	дело	NOUN	NN	Animacy=Inan|Gender=Neut|Number=Sing	14	obl	_	_
14	невероятно	невероятно	ADV	RB	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Будучи	быть	VERB	VBG	Aspect=Imp|VerbForm=Part	3	cop	_	_
2	страстным	страстный	ADJ	JJ	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing|Variant=Long	3	amod	_	_
3	гитаристом	гитарист	NOUN	NN	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	он	он	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	_
6	играл	играть	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
7	там	там	ADV	RB	_	6	advmod	_	_
8	концерт	концерт	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
9	в	в	ADP	IN	_	12	case	_	_
10	том	тот	DET	DT	Animacy=Inan|Gender=Masc|Number=Sing	12	det	_	_
11	же	же	PART	UH	_	10	advmod	_	_
12	году	год	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 punct	color:blue
1	Город	город	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
2	-	-	PUNCT	-	_	3	punct	_	SpaceAfter=No
3	государство	государство	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	1	compound	_	_
4	возник	возникнуть	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	_
5	в	в	ADP	IN	_	8	case	_	_
6	тот	тот	DET	DT	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	det	_	_
7	же	же	PART	UH	_	6	advmod	_	_
8	период	период	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	_	_
10	что	что	ADP	IN	_	12	mark	_	_
11	и	и	PART	UH	_	12	advmod	_	_
12	Сукхотай	Сукхотай	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	4	punct	_	_

~~~


