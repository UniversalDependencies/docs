---
layout: base
title:  'Statistics of flat in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `flat`

This relation is universal.

230 nodes (1%) are attached to their parents as `flat`.

230 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20434782608696.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (178; 77% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (32; 14% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (7; 3% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-X.html">X</a></tt> (7; 3% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Durán	Durán	PROPN	NNP	Number=Sing	2	nsubj	2:nsubj|6:nsubj	_
2	acts	act	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	as	as	ADP	IN	_	4	case	4:case	_
4	spokesman	spokesman	NOUN	NN	Number=Sing	2	obl	2:obl:as	_
5	and	and	CCONJ	CC	_	6	cc	2.1:cc|6:cc	_
6	Ángel	Ángel	PROPN	NNP	Number=Sing	2	conj	2:conj:and|2.1:nsubj	_
7	Pintado	Pintado	PROPN	NNP	Number=Sing	6	flat	6:flat	_
8	as	as	ADP	IN	_	9	case	9:case	_
9	treasurer	treasurer	NOUN	NN	Number=Sing	6	orphan	2.1:obl:as	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	She	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj|14:nsubj:pass	_
2	next	next	ADV	RB	_	3	advmod	3:advmod	_
3	faced	face	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	defending	defend	VERB	VBG	VerbForm=Ger	5	amod	5:amod	_
5	champion	champion	NOUN	NN	Number=Sing	3	obj	3:obj	_
6	and	and	CCONJ	CC	_	8	cc	8:cc	_
7	top	top	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	seed	seed	NOUN	NN	Number=Sing	5	conj	3:obj|5:conj:and	_
9	Sara	Sara	PROPN	NNP	Number=Sing	8	flat	8:flat	_
10	Errani	Errani	PROPN	NNP	Number=Sing	8	flat	8:flat	SpaceAfter=No
11	,	,	PUNCT	,	_	14	punct	14:punct	_
12	but	but	CCONJ	CC	_	14	cc	14:cc	_
13	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	aux:pass	14:aux:pass	_
14	defeated	defeat	VERB	VBN	Tense=Past|VerbForm=Part	3	conj	3:conj:but	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	first	first	ADJ	JJ	Degree=Pos|NumType=Ord	3	amod	3:amod	_
3	king	king	NOUN	NN	Number=Sing	5	nsubj	5:nsubj	_
4	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	cop	5:cop	_
5	Mojmír	Mojmír	PROPN	NNP	Number=Sing	0	root	0:root	_
6	I	i	NUM	CD	NumType=Card	5	flat	5:flat	_
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	SpaceAfter=No
8	ruled	rule	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	parataxis	5:parataxis	_
9	830	830	NUM	CD	NumType=Card	8	obj	8:obj	SpaceAfter=No
10	–	–	ADP	IN	_	11	case	11:case	SpaceAfter=No
11	846	846	NUM	CD	NumType=Card	9	nmod	9:nmod	SpaceAfter=No
12	)	)	PUNCT	-RRB-	_	8	punct	8:punct	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


