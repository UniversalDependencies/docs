---
layout: base
title:  'Statistics of nmod in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="fo_farpahc-dep-nmod-poss.html">nmod:poss</a></tt>.

70 nodes (0%) are attached to their parents as `nmod`.

61 instances of `nmod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.61428571428571.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (48; 69% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (9; 13% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (6; 9% instances), <tt><a href="fo_farpahc-pos-NUM.html">NUM</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="fo_farpahc-pos-ADV.html">ADV</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fo_farpahc-pos-AUX.html">AUX</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fo_farpahc-pos-DET.html">DET</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
1	um	_	ADP	P	_	3	case	_	_
2	seg	_	PRON	PRO-A	Case=Acc	3	nmod	_	_
3	sjálvan	_	PRON	PRO-A	Case=Acc	6	obl	_	_
4	ella	_	CCONJ	CONJ	_	6	cc	_	_
5	um	_	ADP	P	_	6	case	_	_
6	onkran	_	DET	Q-A	Case=Acc	0	root	_	_
7	annan	_	PRON	OTHER-A	Case=Acc	6	det	_	SpaceAfter=No
8	?	?	PUNCT	.	_	7	punct	_	SpaceAfter=No
9	"	_	PUNCT	"	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 nmod	color:blue
1	Trúgvið	_	VERB	VBI	Mood=Imp	0	root	_	_
2	mær	_	PRON	PRO-D	Case=Dat	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	at	_	SCONJ	C	_	5	mark	_	_
5	eg	_	PRON	PRO-N	Case=Nom	1	xcomp	_	_
6	eri	_	AUX	BEPI	Mood=Ind|Tense=Pres	5	cop	_	_
7	í	_	ADP	P	_	8	case	_	_
8	faðirinum	_	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	og	_	CCONJ	CONJ	_	11	cc	_	_
11	faðirin	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	conj	_	_
12	í	_	ADP	P	_	13	case	_	_
13	mær	_	PRON	PRO-D	Case=Dat	11	obl	_	SpaceAfter=No
14	;	;	PUNCT	.	_	13	punct	_	_
15	men	_	CCONJ	CONJ	_	20	cc	_	_
16	um	_	ADP	P	_	17	case	_	_
17	ikki	_	ADV	NEG	_	20	obl	_	SpaceAfter=No
18	,	,	PUNCT	,	_	17	punct	_	_
19	tá	_	ADV	ADV	Degree=Pos	20	advmod	_	_
20	trúgvið	_	VERB	VBI	Mood=Imp	1	conj	_	OriginalHead=0
21	mær	_	PRON	PRO-D	Case=Dat	20	obj	_	_
22	fyri	_	ADP	P	_	25	case	_	_
23	sjálva	_	PRON	PRO-G	Case=Gen	24	nmod	_	_
24	gerninganna	_	NOUN	NS-G	Case=Gen|Definite=Ind|Number=Plur	25	nmod:poss	_	_
25	skuld	_	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	20	obl	_	SpaceAfter=No
26	!	!	PUNCT	.	_	25	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 nmod	color:blue
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


