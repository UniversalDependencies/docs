---
layout: base
title:  'Statistics of nsubj:pass in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="mt-dep-nsubj.html">nsubj</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:pass`.

5 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-DET.html">DET</a></tt> (1; 20% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-SCONJ.html">SCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Attenzjoni	_	NOUN	NN	_	3	nsubj:pass	_	_
2	speċjali	_	ADJ	MJ	_	1	amod	_	_
3	tingħata	_	VERB	VV	_	0	root	_	_
4	lil	_	ADP	PRP	AdpType=Prep	7	case	_	_
5	dawk	_	DET	PD	PronType=Dem	7	det	_	_
6	it-	_	DET	DDC	Definite=Def|PronType=Art	7	det	_	SpaceAfter=No
7	tfal	_	NOUN	NN	_	3	obl	_	_
8	li	_	SCONJ	CMP	_	9	mark	_	_
9	jkollhom	_	VERB	VG	_	7	acl	_	_
10	diffikultà	_	NOUN	NN	_	9	obj	_	_
11	biex	_	SCONJ	CS	_	12	mark	_	_
12	jintegraw	_	VERB	VV	_	9	advcl	_	_
13	ma'	_	ADP	PRP	AdpType=Prep	14	case	_	_
14	dawk	_	DET	PD	PronType=Dem	12	obl	_	_
15	ta'	_	ADP	PRP	AdpType=Prep	16	case	_	_
16	tamparhom	_	NOUN	NN	_	14	nmod	_	_
17	.	_	PUNCT	PUN	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nsubj:pass	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Dan	_	DET	PD	PronType=Dem	2	det	_	_
2	kollu	_	DET	PI	PronType=Ind	3	nsubj:pass	_	_
3	jsir	_	VERB	VV	_	0	root	_	_
4	permezz	_	ADV	MV	_	3	advmod	_	_
5	ta'	_	ADP	PRP	AdpType=Prep	6	case	_	_
6	tim	_	NOUN	NN	_	3	obl	_	_
7	ta'	_	ADP	PRP	AdpType=Prep	9	case	_	_
8	professjonisti	_	ADJ	MJ	_	9	amod	_	_
9	mħarrġa	_	NOUN	NN	_	6	nmod	_	_
10	f'	_	ADP	PRP	AdpType=Prep	11	case	_	_
11	oqsma	_	NOUN	NN	_	9	nmod	_	_
12	differenti	_	ADJ	MJ	_	11	amod	_	_
13	u	_	CCONJ	CC	_	14	cc	_	_
14	speċjalizzati	_	ADJ	MJ	_	12	conj	_	_
15	fil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	16	case	_	SpaceAfter=No
16	kura	_	NOUN	NN	_	11	nmod	_	_
17	,	_	PUNCT	PUN	_	19	punct	_	_
18	bħal	_	CCONJ	CC	_	19	cc	_	_
19	tobba	_	NOUN	NN	_	9	appos	_	_
20	,	_	PUNCT	PUN	_	19	punct	_	_
21	infermiera	_	NOUN	NN	_	19	conj	_	_
22	u	_	CCONJ	CC	_	23	cc	_	_
23	social	_	VERB	VV	_	19	conj	_	_
24	workers	_	NOUN	NN	Foreign=Yes	23	flat	_	_
25	.	_	PUNCT	PUN	_	3	punct	_	_
26	'	_	PUNCT	PUN	_	3	punct	_	_

~~~


