---
layout: base
title:  'Statistics of advmod:cc in UD_Latin-ITTB'
udver: '2'
---

## Treebank Statistics: UD_Latin-ITTB: Relations: `advmod:cc`

This relation is a language-specific subtype of <tt><a href="la_ittb-dep-advmod.html">advmod</a></tt>.
There are also 3 other language-specific subtypes of `advmod`: <tt><a href="la_ittb-dep-advmod-appos.html">advmod:appos</a></tt>, <tt><a href="la_ittb-dep-advmod-emph.html">advmod:emph</a></tt>, <tt><a href="la_ittb-dep-advmod-neg.html">advmod:neg</a></tt>.

43 nodes (0%) are attached to their parents as `advmod:cc`.

42 instances of `advmod:cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11627906976744.

The following 5 pairs of parts of speech are connected with `advmod:cc`: <tt><a href="la_ittb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (32; 74% instances), <tt><a href="la_ittb-pos-VERB.html">VERB</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (5; 12% instances), <tt><a href="la_ittb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (3; 7% instances), <tt><a href="la_ittb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="la_ittb-pos-DET.html">DET</a></tt>-<tt><a href="la_ittb-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod:cc	color:blue
1	formam	forma	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	3	obj	_	_
2	serui	seruus	NOUN	B1|grn1|casB|gen1	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	1	nmod	_	_
3	accipiens	accipio	VERB	L2|modD|tem1|grp1|casA|gen1	Aspect=Imp|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	6	punct	_	_
5	idest	idest	ADV	O4	_	6	advmod:cc	_	_
6	naturam	natura	NOUN	A1|grn1|casD|gen2	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	1	appos	_	SpaceAfter=No
7	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 advmod:cc	color:blue
1	intelligendum	intellego	VERB	L2|modO|grp1|casA|gen3	Aspect=Perf|Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Gdv|Voice=Pass	0	root	_	_
2	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux:pass	_	_
3	per	per	ADP	S4	AdpType=Prep	4	case	_	_
4	se	se	PRON	F1|grn1|casD|gen3	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	9	punct	_	_
6	idest	idest	ADV	O4	_	9	advmod:cc	_	_
7	secundum	secundum	ADP	S4	AdpType=Prep	9	mark	_	_
8	quod	quod	SCONJ	O4	_	7	fixed	_	_
9	uidetur	uideo	VERB	K3|modJ|tem1|gen6|vgr1	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	acl:appos	_	_
10	in	in	ADP	S4	AdpType=Prep	11	case	_	_
11	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	9	obl	_	_
12	sua	suus	DET	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	11	det	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 21 advmod:cc	color:blue
1	quia	quia	SCONJ	O4	_	10	mark	_	_
2	si	si	SCONJ	O4	_	3	mark	_	_
3	excludat	excludo	VERB	L3|modB|tem1|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
4	a	ab	ADP	S4|vgr1	AdpType=Prep	5	case	_	_
5	forma	forma	NOUN	A1|grn1|casF|gen2	Case=Abl|Degree=Pos|Gender=Fem|Number=Sing	3	obl:arg	_	_
6	subiecti	subiectum	NOUN	B1|grn1|casB|gen3|vgr2	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Punc	_	3	punct	_	_
8	sic	sic	ADV	O4	_	10	advmod	_	_
9	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	uera	uerus	ADJ	A1|grn1|casA|gen2|vgr1	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	,	,	PUNCT	Punc	_	13	punct	_	_
12	ut	ut	SCONJ	O4|vgr1	_	13	mark	_	_
13	sit	sum	VERB	N3|modB|tem1|gen6	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	_
14	sensus	sensus	NOUN	D1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	Punc	_	19	punct	_	_
16	solus	solus	ADJ	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod:advmod	_	_
17	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	19	nsubj	_	_
18	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	_	_
19	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	13	ccomp	_	SpaceAfter=No
20	,	,	PUNCT	Punc	_	21	punct	_	_
21	idest	idest	ADV	O4	_	32	advmod:cc	_	SpaceAfter=No
22	,	,	PUNCT	Punc	_	21	punct	_	_
23	ille	ille	PRON	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Dem	32	nsubj	_	_
24	cum	cum	ADP	S4|vgr1	AdpType=Prep	25	case	_	_
25	quo	qui	PRON	F1|grn1|casF|gen1	Case=Abl|Degree=Pos|Gender=Masc|Number=Sing|PronType=Rel	29	obl	_	_
26	nullus	nullus	DET	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Ind	27	det	_	_
27	alius	alius	PRON	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|PronType=Ind	29	nsubj	_	_
28	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	29	cop	_	_
29	pater	pater	NOUN	C1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	23	acl:relcl	_	SpaceAfter=No
30	,	,	PUNCT	Punc	_	23	punct	_	_
31	est	sum	AUX	N3|modA|tem1|gen6	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	32	cop	_	_
32	deus	deus	PROPN	F1|grn1|casA|gen1	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	19	ccomp	_	SpaceAfter=No
33	.	.	PUNCT	Punc	_	10	punct	_	_

~~~


