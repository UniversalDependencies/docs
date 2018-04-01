---
layout: base
title:  'Statistics of iobj in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `iobj`

This relation is universal.

2 nodes (0%) are attached to their parents as `iobj`.

1 instances of `iobj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Dizajn	dizajn	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	novog	nov	ADJ	_	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	_
3	muzeja	muzej	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
4	omogućava	omogućavati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
5	posetiocima	posetilac	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	4	iobj	_	_
6	da	da	SCONJ	_	_	7	mark	_	_
7	proučavaju	proučavati	VERB	_	Number=Plur|Person=3|Tense=Pres	4	ccomp	_	_
8	mermere	mermer	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	_
9	Partenona	Partenon	PROPN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
10	dok	dok	SCONJ	_	_	12	mark	_	_
11	istovremeno	istovremeno	ADV	_	Degree=Pos	12	advmod	_	_
12	gledaju	gledati	VERB	_	Number=Plur|Person=3|Tense=Pres	7	advcl	_	_
13	njegovu	njegov	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|Poss=Yes	15	det	_	_
14	originalnu	originalan	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	15	amod	_	_
15	lokaciju	lokacija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	_
16	-	-	PUNCT	_	_	18	punct	_	_
17	sam	sam	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	amod	_	_
18	Akropolj	Akropolj	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	15	appos	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 28 iobj	color:blue
1	U	u	ADP	_	Case=Acc	2	case	_	_
2	ponedeljak	ponedeljak	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	10	obl	_	_
3	(	(	PUNCT	_	_	5	punct	_	SpaceAfter=No
4	7.	7.	NUM	_	NumType=Ord	5	nummod	_	_
5	aprila	april	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	2	appos	_	SpaceAfter=No
6	)	)	PUNCT	_	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	_	_	2	punct	_	_
8	vlada	vlada	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
9	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
10	saopštila	saopštiti	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
11	da	da	SCONJ	_	_	15	mark	_	_
12	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	15	aux	_	_
13	ove	ovaj	PRON	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
14	nedelje	nedelja	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	15	obl	_	_
15	pokrenuti	pokrenuti	VERB	_	VerbForm=Inf	10	ccomp	_	_
16	pregovore	pregovor	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	15	obj	_	_
17	da	da	SCONJ	_	_	19	mark	_	_
18	bi	biti	AUX	_	Number=Sing|Person=3|Tense=Past	19	aux	_	_
19	rešila	rešiti	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	15	advcl	_	_
20	spor	spor	NOUN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	19	obj	_	_
21	sa	sa	ADP	_	Case=Ins	22	case	_	_
22	Grčkom	Grčka	PROPN	_	Case=Ins|Gender=Fem|Number=Sing	20	nmod	_	_
23	oko	oko	ADP	_	Case=Gen	24	case	_	_
24	imena	ime	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	20	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	29	punct	_	_
26	koji	koji	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	29	nsubj	_	_
27	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	29	aux	_	_
28	Makedoniju	Makedonija	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	29	iobj	_	_
29	koštao	koštati	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	20	acl	_	_
30	poziva	poziv	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	29	obj	_	_
31	za	za	ADP	_	Case=Acc	32	case	_	_
32	NATO	NATO	PROPN	_	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	30	nmod	_	SpaceAfter=No
33	.	.	PUNCT	_	_	10	punct	_	_

~~~


