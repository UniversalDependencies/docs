---
layout: base
title:  'Statistics of dep in UD_Maltese-MUDT'
udver: '2'
---

## Treebank Statistics: UD_Maltese-MUDT: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="mt_mudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt>-<tt><a href="mt_mudt-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="mt_mudt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt_mudt-pos-NUM.html">NUM</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep	color:blue
1	Xi	_	PRON	PRON_INT	_	0	root	_	_
2	tkun	_	AUX	KIEN	_	1	cop	_	_
3	din	_	PRON	PRON_DEM	_	5	det	_	_
4	il-	_	DET	DEF	_	5	det	_	SpaceAfter=No
5	kamra	_	NOUN	NOUN	_	1	nsubj	_	_
6	riħa	_	NOUN	NOUN	_	1	appos	_	_
7	ta'	_	ADP	GEN	_	6	dep	_	SpaceAfter=No
8	.	_	PUNCT	X_PUN	_	7	punct	_	SpaceAfter=No
9	.	_	PUNCT	X_PUN	_	8	punct	_	SpaceAfter=No
10	.	_	PUNCT	X_PUN	_	8	punct	_	_
11	riħa	_	NOUN	NOUN	_	6	nmod:poss	_	_
12	ta'	_	ADP	GEN	_	13	case	_	_
13	mewt	_	NOUN	NOUN	_	11	nmod:poss	_	SpaceAfter=No
14	?	_	PUNCT	X_PUN	_	1	punct	_	_
15	"	_	PUNCT	X_PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 dep	color:blue
1	"	_	PUNCT	X_PUN	_	2	punct	_	SpaceAfter=No
2	Inħossni	_	VERB	VERB	_	0	root	_	_
3	twelidt	_	VERB	VERB	_	2	xcomp	_	_
4	mill-	_	ADP	PREP_DEF	_	5	case:det	_	SpaceAfter=No
5	ġdid	_	ADJ	ADJ	_	3	obl	_	_
6	u	_	CCONJ	CONJ_CORD	_	8	cc	_	_
7	bi	_	ADP	PREP	_	8	case	_	_
8	grinta	_	NOUN	NOUN	_	3	conj	_	_
9	liema	_	PRON	PRON_INT	_	10	dep	_	_
10	bħalha	_	PRON	PREP_PRON	_	8	acl	_	_
11	…	_	PUNCT	X_PUN	_	10	punct	_	SpaceAfter=No
12	"	_	PUNCT	X_PUN	_	2	punct	_	_
13	jistqarr	_	VERB	VERB	_	2	parataxis	_	_
14	Borg	_	PROPN	NOUN_PROP	_	13	nsubj	_	_
15	Bonaci	_	PROPN	NOUN_PROP	_	14	flat:name	_	_
16	li	_	SCONJ	COMP	_	17	mark	_	_
17	jispjega	_	VERB	VERB	_	14	acl	_	_
18	kif	_	ADV	PRON_INT	_	25	advmod	_	_
19	minn	_	ADP	PREP	_	22	case	_	_
20	din	_	PRON	PRON_DEM	_	22	det	_	_
21	il-	_	DET	DEF	_	22	det	_	SpaceAfter=No
22	ġimgħa	_	NOUN	NOUN	_	25	obl	_	_
23	stess	_	PRON	PRON_REF	_	22	nmod	_	_
24	se	_	AUX	FUT	_	25	aux:part	_	_
25	jerġa'	_	VERB	VERB	_	17	xcomp	_	_
26	jibda	_	VERB	VERB	_	25	xcomp	_	_
27	r-	_	DET	DEF	_	28	det	_	SpaceAfter=No
28	rekordings	_	NOUN	NOUN	_	26	obj	_	_
29	tal-	_	ADP	GEN_DEF	_	30	case:det	_	SpaceAfter=No
30	programm	_	NOUN	NOUN	_	34	compound	_	_
31	'	_	PUNCT	X_PUN	_	34	punct	_	_
32	Kontra	_	ADP	PREP	_	34	case	_	_
33	l-	_	DET	DEF	_	34	det	_	SpaceAfter=No
34	Ħin	_	NOUN	NOUN	_	28	nmod:poss	_	_
35	'	_	PUNCT	X_PUN	_	34	punct	_	_
36	li	_	SCONJ	COMP	_	38	mark	_	_
37	se	_	AUX	FUT	_	38	aux:part	_	_
38	jerġa'	_	VERB	VERB	_	34	acl	_	_
39	jibda	_	VERB	VERB	_	38	xcomp	_	_
40	jixxandar	_	VERB	VERB	_	39	xcomp	_	_
41	fuq	_	ADP	PREP	_	43	case	_	_
42	Net	_	NOUN	NOUN	_	43	nmod	_	_
43	Television	_	NOUN	NOUN	_	40	obl	_	_
44	għal	_	ADP	PREP	_	45	case	_	_
45	staġun	_	NOUN	NOUN	_	40	obl	_	_
46	televiżiv	_	ADJ	ADJ	_	45	amod	_	_
47	ġdid	_	ADJ	ADJ	_	45	amod	_	SpaceAfter=No
48	.	_	PUNCT	X_PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 dep	color:blue
1	Jekk	_	SCONJ	CONJ_SUB	_	3	mark	_	_
2	wieħed	_	NUM	NUM_WHD	_	3	nsubj	_	_
3	iħares	_	VERB	VERB	_	8	advcl	_	_
4	lejn	_	ADP	PREP	_	6	case	_	_
5	il-	_	DET	DEF	_	6	det	_	SpaceAfter=No
6	kuntratt	_	NOUN	NOUN	_	3	obl:arg	_	_
7	innifsu	_	PRON	PRON_REF	_	6	nmod	_	_
8	jara	_	VERB	VERB	_	0	root	_	_
9	li	_	SCONJ	COMP	_	10	mark	_	_
10	hemm	_	VERB	HEMM	_	8	ccomp	_	_
11	numru	_	NOUN	NOUN	_	10	nsubj	_	_
12	ta'	_	ADP	GEN	_	10	dep	_	SpaceAfter=No
13	.	_	PUNCT	X_PUN	_	12	punct	_	SpaceAfter=No
14	.	_	PUNCT	X_PUN	_	12	punct	_	SpaceAfter=No
15	.	_	PUNCT	X_PUN	_	12	punct	_	_

~~~


