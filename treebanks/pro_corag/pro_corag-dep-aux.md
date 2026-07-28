---
layout: base
title:  'Statistics of aux in UD_Old_Occitan-CorAG'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CorAG: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="pro_corag-dep-aux-pass.html">aux:pass</a></tt>.

443 nodes (1%) are attached to their parents as `aux`.

388 instances of `aux` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22799097065463.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="pro_corag-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_corag-pos-AUX.html">AUX</a></tt> (440; 99% instances), <tt><a href="pro_corag-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_corag-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pro_corag-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_corag-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	et	_	CCONJ	_	_	5	cc	_	_
2	per	_	ADP	_	_	3	case	_	_
3	so	_	PRON	_	Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	_
4	es	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux	_	_
5	mort	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
6	,	_	PUNCT	_	_	5	punct	_	_
7	ayssicum	_	SCONJ	_	_	10	mark	_	_
8	lodeyt	_	DET	_	_	9	det	_	_
9	caperan	_	NOUN	_	_	10	nsubj	_	_
10	dischut	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	advcl	_	_
11	en	_	ADP	_	_	12	mark	_	_
12	morien	_	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part	10	advcl	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 aux	color:blue
1	&	_	CCONJ	_	_	5	cc	_	_
2	lous	_	DET	_	_	3	det	_	_
3	expleyts	_	NOUN	_	_	5	nsubj	_	_
4	seran	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
5	testimoniats	_	VERB	_	Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
6	de	_	ADP	_	_	8	case	_	_
7	deux	_	NUM	_	_	8	nummod	_	_
8	testimonis	_	NOUN	_	_	5	obl	_	_
9	qui	_	PRON	_	PronType=Rel	12	nsubj	_	_
10	seran	_	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	12	aux	_	_
11	estats	_	AUX	_	Gender=Masc|Number=Plur|Person=3|Tense=Past|VerbForm=Part	12	cop	_	_
12	presens	_	ADJ	_	_	8	acl:relcl	_	_
13	a-	_	ADP	_	_	15	case	_	_
14	-losdits	_	DET	_	_	15	det	_	_
15	expleyts	_	NOUN	_	_	12	obl	_	_
16	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 30 aux	color:blue
1	Item	_	ADV	_	_	15	advmod	_	SpaceAfter=No
2	,	_	PUNCT	_	_	1	punct	_	_
3	que	_	SCONJ	_	_	15	mark	_	_
4	si	_	SCONJ	_	_	7	mark	_	_
5	un	_	DET	_	_	6	det	_	_
6	homi	_	NOUN	_	_	7	nsubj	_	_
7	auciit	_	VERB	_	Number=Sing|Person=3|VerbForm=Fin	15	advcl	_	_
8	a	_	ADP	_	_	10	case	_	_
9	d'	_	ADP	_	_	10	case	_	SpaceAfter=No
10	aute	_	PRON	_	Gender=Masc|Number=Sing|PronType=Ind	7	obl	_	SpaceAfter=No
11	,	_	PUNCT	_	_	7	punct	_	_
12	que	_	SCONJ	_	_	15	mark	_	_
13	no	_	ADV	_	Polarity=Neg	15	advmod	_	_
14	es	_	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux:pass	_	_
15	tengut	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
16	de	_	ADP	_	_	17	mark	_	_
17	pagar	_	VERB	_	VerbForm=Inf	15	xcomp	_	_
18	la	_	DET	_	_	19	det	_	_
19	ley	_	NOUN	_	_	17	obj	_	_
20	degude	_	ADJ	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	19	amod	_	_
21	entro	_	ADP	_	_	24	case	_	_
22	lo	_	DET	_	_	24	det	_	_
23	prumer	_	ADJ	_	_	24	amod	_	_
24	jorn	_	NOUN	_	_	17	obl	_	_
25	de	_	ADP	_	_	26	case	_	_
26	may	_	NOUN	_	_	24	nmod	_	SpaceAfter=No
27	,	_	PUNCT	_	_	15	punct	_	_
28	ab	_	ADP	_	ExtPos=SCONJ	33	mark	_	_
29	que	_	SCONJ	_	_	28	fixed	_	_
30	agos	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	33	aux	_	_
31	estat	_	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	33	cop	_	_
32	lo	_	DET	_	_	33	det	_	_
33	prim	_	NOUN	_	_	15	advcl	_	_
34	de	_	ADP	_	_	35	mark	_	_
35	domandar	_	VERB	_	VerbForm=Inf	33	xcomp	_	_
36	la	_	DET	_	_	37	det	_	_
37	ley	_	NOUN	_	_	35	obj	_	_
38	degude	_	ADJ	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	37	amod	_	_
39	dus	_	NUM	_	_	40	nummod	_	_
40	ans	_	NOUN	_	_	35	obl	_	_
41	o	_	CCONJ	_	_	42	cc	_	_
42	plus	_	ADV	_	_	40	conj	_	_
43	entro	_	SCONJ	_	_	45	mark	_	_
44	aye	_	AUX	_	Number=Sing|Person=3|VerbForm=Fin	45	aux	_	_
45	comensat	_	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	35	advcl	_	_
46	a	_	ADP	_	_	47	mark	_	_
47	domandar	_	VERB	_	VerbForm=Inf	45	xcomp	_	SpaceAfter=No
48	;	_	PUNCT	_	_	15	punct	_	_

~~~


