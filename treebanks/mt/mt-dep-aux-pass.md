---
layout: base
title:  'Statistics of aux:pass in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="mt-dep-aux.html">aux</a></tt>.

2 nodes (0%) are attached to their parents as `aux:pass`.

2 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	L-	_	DET	DDC	Definite=Def|PronType=Art	2	det	_	SpaceAfter=No
2	azzjoni	_	NOUN	NN	_	7	nsubj:pass	_	_
3	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	4	case	_	SpaceAfter=No
4	UE	_	PROPN	RA	Abbr=Yes	2	nmod	_	_
5	se	_	PART	PAF	Aspect=Prosp	7	aux	_	_
6	tkun	_	AUX	VA	_	7	aux:pass	_	_
7	immirata	_	VERB	VP	VerbForm=Part	0	root	_	_
8	lejn	_	ADP	PRP	AdpType=Prep	11	case	_	_
9	'	_	PUNCT	PUN	_	11	punct	_	_
10	l-	_	DET	DDC	Definite=Def|PronType=Art	11	det	_	SpaceAfter=No
11	iżvilupp	_	NOUN	NN	_	7	obl	_	_
12	tad-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	13	case	_	SpaceAfter=No
13	dimensjoni	_	NOUN	NN	_	11	nmod	_	_
14	Ewropea	_	ADJ	MJ	_	13	amod	_	_
15	fl-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	16	case	_	SpaceAfter=No
16	isport	_	NOUN	NN	_	11	nmod	_	_
17	,	_	PUNCT	PUN	_	20	punct	_	_
18	billi	_	SCONJ	CS	_	20	mark	_	_
19	tkun	_	AUX	VA	_	20	aux	_	_
20	promossa	_	VERB	VV	_	16	advcl	_	_
21	l-	_	DET	DDC	Definite=Def|PronType=Art	22	det	_	SpaceAfter=No
22	ġustizzja	_	NOUN	NN	_	20	obj	_	_
23	u	_	CCONJ	CC	_	25	cc	_	_
24	t-	_	DET	DDC	Definite=Def|PronType=Art	25	det	_	SpaceAfter=No
25	trasparenza	_	NOUN	NN	_	22	conj	_	_
26	fil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	27	case	_	SpaceAfter=No
27	kompetizzjonijiet	_	NOUN	NN	_	22	nmod	_	_
28	sportivi	_	ADJ	MJ	_	27	amod	_	_
29	u	_	CCONJ	CC	_	31	cc	_	_
30	l-	_	DET	DDC	Definite=Def|PronType=Art	31	det	_	SpaceAfter=No
31	koperazzjoni	_	NOUN	NN	_	22	conj	_	_
32	bejn	_	ADP	PRP	AdpType=Prep	34	case	_	_
33	il-	_	DET	DDC	Definite=Def|PronType=Art	34	det	_	SpaceAfter=No
34	korpi	_	NOUN	NN	_	31	nmod	_	_
35	responsabbli	_	ADJ	MJ	_	34	amod	_	_
36	mill-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	37	case	_	SpaceAfter=No
37	isport	_	NOUN	NN	_	34	nmod	_	_
38	,	_	PUNCT	PUN	_	20	punct	_	_
39	u	_	CCONJ	CC	_	41	cc	_	_
40	billi	_	SCONJ	CS	_	41	mark	_	_
41	tkun	_	AUX	VA	_	20	conj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux:pass	color:blue
1	Din	_	DET	PD	PronType=Dem	3	advmod	_	_
2	is-	_	DET	DDC	Definite=Def|PronType=Art	3	det	_	SpaceAfter=No
3	sena	_	NOUN	NN	_	9	obl	_	_
4	,	_	PUNCT	PUN	_	3	punct	_	_
5	Klabbsajf	_	CCONJ	CC	_	9	nsubj:pass	_	_
6	2010	_	NUM	NC	NumType=Card	5	conj	_	_
7	qed	_	PART	PAC	Aspect=Prog	9	aux	_	_
8	jiġi	_	VERB	VV	_	9	aux:pass	_	_
9	organizzat	_	VERB	VP	VerbForm=Part	0	advcl	_	_
10	mill-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	11	case	_	SpaceAfter=No
11	Cottonera	_	PROPN	NP	_	9	obl	_	_
12	Community	_	PROPN	NP	_	11	flat:name	_	_
13	Services	_	PROPN	NP	_	11	flat:name	_	_
14	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	15	case	_	SpaceAfter=No
15	Aġenzija	_	NOUN	NN	_	11	nmod	_	_
16	Appoġġ	_	NOUN	NN	_	15	fixed	_	_
17	,	_	PUNCT	PUN	_	9	punct	_	_
18	b'	_	ADP	PRP	AdpType=Prep	19	case	_	_
19	kollaborazzjoni	_	NOUN	NN	_	9	obl	_	_
20	maċ-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	21	case	_	SpaceAfter=No
21	Ċentru	_	NOUN	NN	_	19	nmod	_	_
22	ta'	_	ADP	PRP	AdpType=Prep	23	case	_	_
23	Riżorsi	_	NOUN	NN	_	21	nmod	_	_
24	fil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	25	case	_	SpaceAfter=No
25	Komunità	_	NOUN	NN	_	23	nmod	_	_
26	-	_	PUNCT	PUN	_	21	punct	_	SpaceAfter=No
27	AĊĊESS	_	X	RO	_	21	nmod	_	_
28	,	_	PUNCT	PUN	_	21	punct	_	_
29	fil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	30	case	_	SpaceAfter=No
30	Birgu	_	PROPN	NP	_	21	nmod	_	_
31	,	_	PUNCT	PUN	_	21	punct	_	_
32	il-	_	DET	DDC	Definite=Def|PronType=Art	33	det	_	SpaceAfter=No
33	Kulleġġ	_	NOUN	NN	_	21	conj	_	_
34	Santa	_	PROPN	NP	_	33	flat:name	_	_
35	Margerita	_	PROPN	NP	_	33	flat:name	_	_
36	,	_	PUNCT	PUN	_	21	punct	_	_
37	u	_	CCONJ	CC	_	39	cc	_	_
38	l-	_	DET	DDC	Definite=Def|PronType=Art	39	det	_	SpaceAfter=No
39	Fondazzjoni	_	NOUN	NN	_	21	conj	_	_
40	għal	_	ADP	PRP	AdpType=Prep	41	case	_	_
41	Servizzi	_	NOUN	NN	_	39	nmod	_	_
42	Edukattivi	_	ADJ	MJ	_	41	amod	_	_
43	.	_	PUNCT	PUN	_	9	punct	_	_

~~~


