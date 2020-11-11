---
layout: base
title:  'Statistics of aux:pass in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="br_keb-dep-aux.html">aux</a></tt>.

143 nodes (1%) are attached to their parents as `aux:pass`.

106 instances of `aux:pass` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32167832167832.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (140; 98% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux:pass	color:blue
1	N'	ne	ADV	adv	Polarity=Neg	5	advmod	_	SpaceAfter=No
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	ket	ket	ADV	adv	_	5	advmod	_	_
4	bet	bezañ	AUX	vblex	Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	lazhet	lazhañ	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux:pass	color:blue
1	Un	un	DET	det	_	2	det	_	_
2	den	den	NOUN	n	Gender=Masc|Number=Sing	8	nsubj	_	_
3	a-bouez	a-bouez	ADJ	adj	_	2	amod	_	_
4	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
5	bet	bezañ	AUX	vblex	Tense=Past|VerbForm=Part	8	cop	_	_
6	e	e	ADP	pr	_	8	case	_	_
7	n	an	DET	det	_	8	det	_	_
8	istor	istor	NOUN	n	Gender=Masc|Number=Sing	0	root	_	_
9	ha	ha	CCONJ	cnjcoo	_	10	cc	_	_
10	sevenadur	sevenadur	NOUN	n	Gender=Masc|Number=Sing	8	conj	_	_
11	portugalek	portugalek	ADJ	adj	_	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux:pass	color:blue
1	Kalz	kalz	ADP	pr	_	2	case	_	_
2	distrujoù	distruj	NOUN	n	Gender=Masc|Number=Plur	7	nsubj	_	_
3	zo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
4	bet	bezañ	AUX	vblex	Tense=Past|VerbForm=Part	7	cop	_	_
5	ivez	ivez	ADV	adv	_	7	advmod	_	_
6	betek	betek	ADP	pr	_	7	case	_	_
7	1945	1945	NUM	num	Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


