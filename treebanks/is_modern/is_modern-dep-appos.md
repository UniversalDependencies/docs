---
layout: base
title:  'Statistics of appos in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `appos`

This relation is universal.

664 nodes (0%) are attached to their parents as `appos`.

664 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.53915662650602.

The following 22 pairs of parts of speech are connected with `appos`: <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (184; 28% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (144; 22% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (104; 16% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (66; 10% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (50; 8% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (34; 5% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (30; 5% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-DET.html">DET</a></tt> (14; 2% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (8; 1% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Hvað	hver	PRON	WPRO-A	Case=Acc	0	root	_	_
2	með	með	ADP	P	_	4	case	_	_
3	ungt	ungur	ADJ	ADJ-A	Case=Acc|Degree=Pos	4	amod	_	_
4	fólk	fólk	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	1	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	börnin	barn	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	4	appos	_	_
7	okkar	ég	PRON	PRO-G	Case=Gen	6	nmod:poss	_	SpaceAfter=No
8	?	?	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	Mál	mál	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	8	nsubj	_	_
2	nr.	númer	NOUN	N	Definite=Ind|Number=Sing	1	nmod:poss	_	_
3	16/1983	16/1983	NUM	NUM	_	2	nmod:poss	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	Spegilsmálið	spegilsmál	PROPN	NPR-N	_	1	appos	_	_
6	svokallaða	svokallaður	ADJ	ADJ-A	Case=Acc|Degree=Pos	5	amod	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	snerist	snúa	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
9	um	um	ADP	P	_	10	case	_	_
10	grín	grín	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 appos	color:blue
1	Frakkar	frakki	PROPN	NPRS-N	_	4	nsubj	_	_
2	hafa	hafa	AUX	HVPI	Mood=Ind|Tense=Pres	4	aux	_	_
3	tvívegis	tvívegis	ADV	ADV	Degree=Pos	4	advmod	_	_
4	orðið	verða	VERB	RDN	Tense=Past|VerbForm=Part	0	root	_	_
5	Evrópumeistarar	evrópumeistari	PROPN	NPRS-N	_	4	xcomp	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	1984	1984	NUM	NUM-A	Case=Acc	4	obl	_	_
8	og	og	CCONJ	CONJ	_	9	cc	_	_
9	árið	ár	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	7	conj	_	_
10	2000	2000	NUM	NUM-A	Case=Acc	9	appos	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


