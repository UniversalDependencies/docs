---
layout: base
title:  'Statistics of fixed in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `fixed`

This relation is universal.
There are 1 language-specific subtypes of `fixed`: <tt><a href="br_keb-dep-fixed-name.html">fixed:name</a></tt>.

4 nodes (0%) are attached to their parents as `fixed`.

4 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="br_keb-pos-ADP.html">ADP</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="br_keb-pos-PART.html">PART</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 fixed	color:blue
1	Komzet	komz	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
2	e	e	PART	vpart	_	1	aux	_	_
3	vez	bezañ	VERB	vblex	Aspect=Hab|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
4	kembraeg	kembraeg	NOUN	n	Gender=Masc|Number=Sing	1	nsubj	_	_
5	e	e	ADP	pr	_	6	case	_	_
6	Kembre	Kembre	PROPN	np	Number=Sing	1	obl	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	12	punct	_	_
8	gant	gant	ADP	pr	_	12	case	_	_
9	war-dro	war-dro	ADV	adv	_	11	advmod	_	_
10	611	611	X	x	_	11	dep	_	_
11	000	000	NUM	num	Number=Plur	12	nummod	_	_
12	den	den	NOUN	n	Gender=Masc|Number=Sing	1	obl:agent	_	_
13	(	(	PUNCT	lpar	_	18	punct	_	SpaceAfter=No
14	da	da	ADP	pr	_	18	cc	_	_
15	lavaret	lavaret	VERB	vblex	Tense=Past|VerbForm=Part	14	fixed	_	_
16	eo	bezañ	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	fixed	_	_
17	tremen	tremen	ADP	pr	_	18	case	_	_
18	22%	22	NUM	num	Number=Plur	12	appos	_	_
19	eus	eus	ADP	pr	_	20	case	_	_
20	tud	den	NOUN	n	Gender=Masc|Number=Plur	18	nmod	_	_
21	ar	an	DET	det	_	22	det	_	_
22	vro	bro	NOUN	n	Gender=Fem|Number=Sing	20	nmod:gen	_	SpaceAfter=No
23	)	)	PUNCT	rpar	_	18	punct	_	SpaceAfter=No
24	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Er maez	er-maez	ADV	adv	_	4	case	_	_
2	eus	eus	ADP	pr	_	1	fixed	_	_
3	an	an	DET	det	_	4	det	_	_
4	Emsav	emsav	NOUN	n	Gender=Masc|Number=Sing	6	obl	_	_
5	e	e	PART	vpart	_	6	aux	_	_
6	adkaver	adkavout	VERB	vblex	Mood=Ind|Person=Auto|Tense=Pres|VerbForm=Fin	0	root	_	_
7	nebeut	nebeut	ADV	adv	_	8	advmod	_	_
8	implij	implij	NOUN	n	Gender=Masc|Number=Sing	6	obj	_	_
9	eus	eus	ADP	pr	_	11	case	_	_
10	ar	an	DET	det	_	11	det	_	_
11	yezh	yezh	NOUN	n	Gender=Fem|Number=Sing	8	nmod	_	_
12	vrezhon	brezhon	ADJ	adj	_	11	amod	_	_
13	war	war	ADP	pr	_	15	case	_	_
14	an	an	DET	det	_	15	det	_	_
15	dachenn	tachenn	NOUN	n	Gender=Fem|Number=Sing	6	obl	_	_
16	bolitikel	politikel	ADJ	adj	_	15	amod	_	SpaceAfter=No
17	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Rodig	rodig	NOUN	n	Gender=Masc|Number=Sing	7	nsubj	_	_
2	hag	ha	CCONJ	cnjcoo	_	4	aux	_	_
3	a	a	PART	vpart	_	1	acl	_	_
4	dro	treiñ	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	a	a	PART	vpart	_	7	aux	_	_
7	ra	ober	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	bro	bro	NOUN	n	Gender=Fem|Number=Sing	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	7	punct	_	_

~~~


