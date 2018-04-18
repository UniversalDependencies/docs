---
layout: base
title:  'Statistics of flat in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="mt-dep-flat-name.html">flat:name</a></tt>.

11 nodes (0%) are attached to their parents as `flat`.

11 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63636363636364.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="mt-pos-X.html">X</a></tt>-<tt><a href="mt-pos-X.html">X</a></tt> (4; 36% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 36 flat	color:blue
1	Sħaħ	_	ADJ	MJ	_	2	nsubj	_	_
2	kompliet	_	VERB	VV	_	0	root	_	_
3	tispjega	_	VERB	VV	_	2	ccomp	_	_
4	li	_	SCONJ	CMP	_	8	mark	_	_
5	l-	_	DET	DDC	Definite=Def|PronType=Art	6	det	_	SpaceAfter=No
6	Moviment	_	NOUN	NN	_	8	nsubj	_	_
7	hu	_	PRON	PP	PronType=Prs	8	expl	_	_
8	ispirat	_	VERB	VP	VerbForm=Part	3	ccomp	_	_
9	minn	_	ADP	PRP	AdpType=Prep	10	case	_	_
10	valuri	_	NOUN	NN	_	8	obl	_	_
11	Nsara	_	NOUN	NN	_	10	nmod	_	_
12	,	_	PUNCT	PUN	_	8	punct	_	_
13	u	_	CCONJ	CC	_	14	cc	_	_
14	jagħmel	_	VERB	VV	_	8	conj	_	_
15	dak	_	DET	PD	PronType=Dem	17	obj	_	_
16	kollu	_	DET	PI	PronType=Ind	17	advmod	_	_
17	possibbli	_	ADJ	MJ	_	14	amod	_	_
18	biex	_	SCONJ	CS	_	19	mark	_	_
19	jipprovdi	_	VERB	VV	_	17	advcl	_	_
20	l-	_	DET	DDC	Definite=Def|PronType=Art	22	det	_	SpaceAfter=No
21	ogħla	_	ADJ	MJ	_	22	amod	_	_
22	livell	_	NOUN	NN	_	19	obj	_	_
23	possibbli	_	ADJ	MJ	_	22	amod	_	_
24	ta'	_	ADP	PRP	AdpType=Prep	25	case	_	_
25	kura	_	NOUN	NN	_	22	nmod	_	_
26	paljattiva	_	ADJ	MJ	_	25	amod	_	_
27	għall-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	28	case	_	SpaceAfter=No
28	persuni	_	NOUN	NN	_	19	obl	_	_
29	bil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	30	case	_	SpaceAfter=No
30	kanċer	_	NOUN	NN	_	28	nmod	_	_
31	,	_	PUNCT	PUN	_	30	punct	_	_
32	jew	_	CCONJ	CC	_	30	cc	_	ToDo=cc-without-conj
33	bil-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	34	case	_	SpaceAfter=No
34	motor	_	X	RFW	Foreign=Yes	30	nmod	_	_
35	neuron	_	X	RFW	Foreign=Yes	34	flat	_	_
36	disease	_	X	RFW	Foreign=Yes	34	flat	_	_
37	.	_	PUNCT	PUN	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 flat	color:blue
1	IL-	_	DET	DDC	Definite=Def|PronType=Art	2	det	_	SpaceAfter=No
2	ĠENSillum	_	NOUN	NN	_	3	nsubj	_	_
3	tkellem	_	VERB	VV	_	0	root	_	_
4	ukoll	_	ADV	MV	_	3	advmod	_	_
5	ma'	_	ADP	PRP	AdpType=Prep	6	case	_	_
6	Johanna	_	PROPN	NP	_	3	obl	_	_
7	Calleja	_	PROPN	NP	_	6	flat:name	_	_
8	,	_	PUNCT	PUN	_	6	punct	_	_
9	il-	_	DET	DDC	Definite=Def|PronType=Art	10	det	_	SpaceAfter=No
10	Fund	_	PROPN	NP	_	6	conj	_	_
11	Raising	_	PROPN	NP	Foreign=Yes	10	flat	_	_
12	Co	_	PROPN	NP	Foreign=Yes	10	flat	_	_
13	-	_	PUNCT	PUN	_	10	punct	_	SpaceAfter=No
14	ordinator	_	NOUN	NN	Foreign=Yes	10	flat	_	_
15	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	16	case	_	SpaceAfter=No
16	Moviment	_	NOUN	NN	_	10	nmod	_	_
17	.	_	PUNCT	PUN	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 flat	color:blue
1	15	_	NUM	NC	NumType=Card	2	nummod	_	_
2	gr	_	NOUN	NN	_	0	root	_	_
3	marġerina	_	VERB	VV	_	2	nmod	_	_
4	low	_	VERB	VV	_	3	amod	_	_
5	-	_	PUNCT	PUN	_	4	punct	_	SpaceAfter=No
6	fat	_	VERB	VV	Foreign=Yes	4	flat	_	_

~~~


