---
layout: base
title:  'Statistics of det:numgov in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="sr-dep-det.html">det</a></tt>.

107 nodes (0%) are attached to their parents as `det:numgov`.

107 instances of `det:numgov` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36448598130841.

The following 6 pairs of parts of speech are connected with `det:numgov`: <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (99; 93% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:numgov	color:blue
1	I	i	CCONJ	_	_	3	discourse	_	_
2	tu	tu	ADV	_	Degree=Pos	3	advmod	_	_
3	ima	imati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	mnogo	mnogo	ADV	_	Degree=Pos	6	det:numgov	_	_
5	uspešnih	uspešan	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	_
6	slučajeva	slučaj	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:numgov	color:blue
1	Prema	prema	ADP	_	Case=Loc	2	case	_	_
2	rečima	reč	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	5	obl	_	_
3	Šutanovca	Šutanovac	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	ima	imati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	još	još	ADV	_	Degree=Pos	7	advmod	_	_
7	puno	puno	ADV	_	Degree=Pos	8	det:numgov	_	_
8	toga	taj	PRON	_	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	nsubj	_	_
9	da	da	SCONJ	_	_	11	mark	_	_
10	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	11	compound	_	_
11	uradi	uraditi	VERB	_	Number=Sing|Person=3|Tense=Pres	8	acl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	uključujući	uključivati	ADV	_	VerbForm=Part	5	xcomp	_	_
14	jačanje	jačanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	13	obj	_	_
15	granične	graničan	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	_
16	kontrole	kontrola	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	14	obl	_	_
17	i	i	CCONJ	_	_	18	cc	_	_
18	uklanjanje	uklanjanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	14	conj	_	_
19	bezbednosnih	bezbednosan	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	20	amod	_	_
20	rizika	rizik	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	18	obl	_	SpaceAfter=No
21	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 det:numgov	color:blue
1	On	on	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	aux	_	_
3	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	da	da	SCONJ	_	_	6	mark	_	_
5	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
6	zatražiti	zatražiti	VERB	_	VerbForm=Inf	3	ccomp	_	_
7	od	od	ADP	_	Case=Gen	8	case	_	_
8	strana	strana	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	6	obl	_	_
9	u	u	ADP	_	Case=Loc	10	case	_	_
10	sporu	spor	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	8	nmod	_	_
11	da	da	SCONJ	_	_	13	mark	_	_
12	javno	javno	ADV	_	Degree=Pos	13	advmod	_	_
13	potvrde	potvrditi	VERB	_	Number=Plur|Person=3|Tense=Pres	6	ccomp	_	_
14	da	da	SCONJ	_	_	16	mark	_	_
15	li	li	PART	_	_	14	fixed	_	_
16	prihvataju	prihvatati	VERB	_	Number=Plur|Person=3|Tense=Pres	13	ccomp	_	_
17	neke	neki	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind	20	det:numgov	_	_
18	od	od	ADP	_	Case=Gen	20	case	_	_
19	Nimicovih	Nimicov	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|Poss=Yes	20	amod	_	_
20	predloga	predlog	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	16	obj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


