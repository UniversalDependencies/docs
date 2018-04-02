---
layout: base
title:  'Statistics of appos in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `appos`

This relation is universal.

18 nodes (1%) are attached to their parents as `appos`.

18 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.11111111111111.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (8; 44% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="mt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-X.html">X</a></tt> (1; 6% instances), <tt><a href="mt-pos-NUM.html">NUM</a></tt>-<tt><a href="mt-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 appos	color:blue
1	protetta	_	VERB	VV	_	0	root	_	_
2	l-	_	DET	DDC	Definite=Def|PronType=Art	3	det	_	SpaceAfter=No
3	integrità	_	NOUN	NN	_	1	obj	_	_
4	fiżika	_	ADJ	MJ	_	3	amod	_	_
5	u	_	CCONJ	CC	_	6	cc	_	_
6	morali	_	ADJ	MJ	_	4	conj	_	_
7	ta'	_	ADP	PRP	AdpType=Prep	9	case	_	_
8	l-	_	DET	DDC	Definite=Def|PronType=Art	9	det	_	SpaceAfter=No
9	isportivi	_	NOUN	NN	_	3	nmod	_	_
10	,	_	PUNCT	PUN	_	16	punct	_	_
11	speċjalment	_	ADV	MV	_	16	advmod	_	_
12	ta'	_	ADP	PRP	AdpType=Prep	16	case	_	_
13	dawk	_	DET	PD	PronType=Dem	16	det	_	_
14	l-	_	DET	DDC	Definite=Def|PronType=Art	16	det	_	SpaceAfter=No
15	aktar	_	ADJ	MJ	_	16	amod	_	_
16	żgħażagħ	_	NOUN	NN	_	9	appos	_	_
17	fosthom	_	ADP	PRP	AdpType=Prep	16	dep	_	_
18	.	_	PUNCT	PUN	_	1	punct	_	_
19	'	_	PUNCT	PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 23 appos	color:blue
1	Il-	_	DET	DDC	Definite=Def|PronType=Art	2	det	_	SpaceAfter=No
2	Moviment	_	NOUN	NN	_	5	nsubj	_	_
3	għadu	_	VERB	VG	_	5	advmod	_	_
4	kemm	_	SCONJ	CS	_	3	fixed	_	_
5	ħareġ	_	VERB	VV	_	0	root	_	_
6	ukoll	_	ADV	MV	_	5	advmod	_	_
7	sett	_	NOUN	NN	_	5	obj	_	_
8	ta'	_	ADP	PRP	AdpType=Prep	9	case	_	_
9	kartolini	_	NOUN	NN	_	7	nmod	_	_
10	tal-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	11	case	_	SpaceAfter=No
11	Milied	_	PROPN	NP	_	9	nmod	_	_
12	,	_	PUNCT	PUN	_	13	punct	_	_
13	riprodotti	_	NOUN	NN	_	9	appos	_	_
14	minn	_	ADP	PRP	AdpType=Prep	15	case	_	_
15	pitturi	_	NOUN	NN	_	13	nmod	_	_
16	oriġinali	_	ADJ	MJ	_	15	amod	_	_
17	ta'	_	ADP	PRP	AdpType=Prep	19	case	_	_
18	ħames	_	ADJ	MJ	_	19	nummod	_	_
19	artisti	_	NOUN	NN	_	16	nmod	_	ToDo=nmod
20	lokali	_	ADJ	MJ	_	19	amod	_	_
21	magħrufa	_	ADJ	MJ	_	19	amod	_	_
22	:	_	PUNCT	PUN	_	23	punct	_	_
23	Joħn	_	PROPN	NP	_	19	appos	_	_
24	Martin	_	PROPN	NP	_	23	flat:name	_	_
25	Borġ	_	PROPN	NP	_	23	flat:name	_	_
26	,	_	PUNCT	PUN	_	23	punct	_	_
27	Daniel	_	PROPN	NP	_	23	conj	_	_
28	Joħn	_	PROPN	NP	_	27	flat:name	_	_
29	Bugeja	_	PROPN	NP	_	27	flat:name	_	_
30	,	_	PUNCT	PUN	_	23	punct	_	_
31	Miriam	_	PROPN	NP	_	23	conj	_	_
32	Ċini	_	PROPN	NP	_	31	flat:name	_	_
33	,	_	PUNCT	PUN	_	23	punct	_	_
34	Paul	_	PROPN	NP	_	23	conj	_	_
35	Galea	_	PROPN	NP	_	34	flat:name	_	_
36	u	_	CCONJ	CC	_	37	cc	_	_
37	Jane	_	PROPN	NP	_	23	conj	_	_
38	Micallef	_	PROPN	NP	_	37	flat:name	_	_
39	.	_	PUNCT	PUN	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	lill-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	2	case	_	SpaceAfter=No
2	Aġenzija	_	NOUN	NN	_	0	root	_	_
3	Sapport	_	PROPN	NP	_	2	nmod	_	_
4	(	_	PUNCT	PUN	_	5	punct	_	_
5	www	_	VERB	VV	_	2	appos	_	_
6	.	_	PUNCT	PUN	_	5	punct	_	_
7	sapport	_	NOUN	NN	_	5	compound	_	_
8	.	_	PUNCT	PUN	_	5	punct	_	_
9	gov	_	ADJ	MJ	_	5	compound	_	_
10	.	_	PUNCT	PUN	_	5	punct	_	_
11	mt	_	NOUN	NN	_	5	compound	_	_
12	)	_	PUNCT	PUN	_	5	punct	_	_
13	.	_	PUNCT	PUN	_	2	punct	_	_

~~~


