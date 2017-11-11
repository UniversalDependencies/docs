---
layout: base
title:  'Statistics of nummod in UD_Maltese'
udver: '2'
---

## Treebank Statistics: UD_Maltese: Relations: `nummod`

This relation is universal.

27 nodes (1%) are attached to their parents as `nummod`.

16 instances of `nummod` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.88888888888889.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-NUM.html">NUM</a></tt> (17; 63% instances), <tt><a href="mt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mt-pos-NUM.html">NUM</a></tt> (4; 15% instances), <tt><a href="mt-pos-VERB.html">VERB</a></tt>-<tt><a href="mt-pos-NUM.html">NUM</a></tt> (3; 11% instances), <tt><a href="mt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mt-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="mt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mt-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	225	_	NUM	NC	NumType=Card	2	nummod	_	_
2	gr	_	NOUN	NN	_	0	root	_	_
3	ħut	_	PROPN	NP	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Aħmi	_	NOUN	NN	_	0	root	_	_
2	f'	_	ADP	PRP	AdpType=Prep	4	case	_	_
3	190	_	NUM	NC	NumType=Card	4	nummod	_	_
4	C	_	PROPN	NP	_	1	nmod	_	_
5	,	_	PUNCT	PUN	_	6	punct	_	_
6	375	_	NUM	NC	NumType=Card	4	appos	_	_
7	F	_	ADJ	MJ	_	6	amod	_	_
8	,	_	PUNCT	PUN	_	6	punct	_	_
9	Gas	_	PROPN	NP	_	6	appos	_	_
10	Mark	_	PROPN	NP	_	9	flat:name	_	_
11	5	_	NUM	NC	NumType=Card	9	nummod	_	_
12	,	_	PUNCT	PUN	_	1	punct	_	_
13	għal	_	ADP	PRP	AdpType=Prep	14	case	_	_
14	25	_	NUM	NC	NumType=Card	17	nummod	_	_
15	-	_	PUNCT	PUN	_	14	punct	_	SpaceAfter=No
16	30	_	NUM	NC	NumType=Card	14	conj	_	_
17	minuta	_	NOUN	NN	_	1	advmod	_	_
18	.	_	PUNCT	PUN	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 15 nummod	color:blue
1	Se	_	PART	PAF	Aspect=Prosp	2	aux	_	_
2	ssir	_	VERB	VV	_	0	root	_	_
3	Velja	_	NOUN	NN	_	2	nsubj	_	_
4	ta'	_	ADP	PRP	AdpType=Prep	5	fixed	_	_
5	talb	_	NOUN	NN	_	3	nmod	_	_
6	fis-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	7	case	_	SpaceAfter=No
7	Seminarju	_	NOUN	NN	_	3	nmod	_	_
8	nhar	_	NOUN	NN	_	10	case	_	_
9	is-	_	DET	DDC	Definite=Def|PronType=Art	10	det	_	SpaceAfter=No
10	Sibt	_	NOUN	NN	_	2	obl	_	_
11	12	_	NUM	NC	NumType=Card	10	nummod	_	_
12	ta'	_	ADP	PRP	AdpType=Prep	13	case	_	_
13	Ġunju	_	NOUN	NN	_	11	nmod	_	_
14	fid-	_	ADP	PRPC	AdpType=Prep|Definite=Def|PronType=Art	15	case	_	SpaceAfter=No
15	9	_	NUM	NC	NumType=Card	2	nummod	_	_
16	pm	_	NOUN	NN	_	15	nmod	_	_
17	.	_	PUNCT	PUN	_	2	punct	_	_

~~~


