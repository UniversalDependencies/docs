---
layout: base
title:  'Statistics of discourse in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `discourse`

This relation is universal.

23 nodes (0%) are attached to their parents as `discourse`.

22 instances of `discourse` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.04347826086957.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (15; 65% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (3; 13% instances), <tt><a href="fo_farpahc-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (2; 9% instances), <tt><a href="fo_farpahc-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt>-<tt><a href="fo_farpahc-pos-INTJ.html">INTJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 discourse	color:blue
1	Og	_	CCONJ	CONJ	_	3	cc	_	_
2	hann	_	PRON	PRO-N	Case=Nom	3	nsubj	_	_
3	svaraði	_	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	SpaceAfter=No
4	:	:	PUNCT	,	_	3	punct	_	_
5	"	_	PUNCT	"	_	4	punct	_	_
6	Nei	_	INTJ	INTJ	_	3	discourse	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	SpaceAfter=No
8	"	_	PUNCT	"	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 9 discourse	color:blue
1	Teir	_	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	rópaðu	_	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	tá	_	ADV	ADV	Degree=Pos	2	advmod	_	_
4	aftur	_	ADV	ADV	Degree=Pos	2	advmod	_	_
5	og	_	CCONJ	CONJ	_	6	cc	_	_
6	sögdu	_	VERB	VBDI	Mood=Ind|Tense=Past	2	conj	_	OriginalHead=0|SpaceAfter=No
7	:	:	PUNCT	,	_	6	punct	_	_
8	"	_	PUNCT	"	_	7	punct	_	_
9	Nei	_	INTJ	INTJ	_	15	discourse	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	ikki	_	ADV	NEG	_	15	advmod	_	_
12	honum	_	PRON	PRO-D	Case=Dat	15	nmod	_	SpaceAfter=No
13	,	,	PUNCT	,	_	12	punct	_	_
14	men	_	CCONJ	CONJ	_	15	cc	_	_
15	Barabbasi	_	PROPN	NPR-D	Case=Dat|Definite=Ind|Number=Sing	6	dep	_	SpaceAfter=No
16	.	.	PUNCT	.	_	15	punct	_	SpaceAfter=No
17	"	_	PUNCT	"	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse	color:blue
1	Nei	_	INTJ	INTJ	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	ikki	_	ADV	NEG	_	7	advmod	_	_
4	skal	_	AUX	MDPI	Mood=Ind|Tense=Pres	7	aux	_	_
5	tað	_	PRON	PRO-N	Case=Nom	7	nsubj	_	_
6	vera	_	AUX	BE	VerbForm=Inf	7	cop	_	_
7	so	_	ADV	ADV	Degree=Pos	0	root	_	SpaceAfter=No
8	,	,	PUNCT	.	_	7	punct	_	_
9	men	_	CCONJ	CONJ	_	10	cc	_	_
10	komi	_	VERB	VBPS	Mood=Sub|Tense=Pres	7	conj	_	OriginalHead=0
11	teir	_	PRON	PRO-N	Case=Nom	10	nsubj	_	_
12	sjálvir	_	PRON	PRO-N	Case=Nom	11	appos	_	_
13	og	_	CCONJ	CONJ	_	14	cc	_	_
14	föri	_	VERB	VBPS	Mood=Sub|Tense=Pres	7	conj	_	OriginalHead=0
15	okkum	_	PRON	PRO-A	Case=Acc	14	obj	_	_
16	út	_	ADP	RP	_	14	compound:prt	_	SpaceAfter=No
17	!	!	PUNCT	.	_	16	punct	_	SpaceAfter=No
18	"	_	PUNCT	"	_	17	punct	_	_

~~~


