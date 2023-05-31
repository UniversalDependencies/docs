---
layout: base
title:  'Statistics of nmod in UD_Wolof-WTB'
udver: '2'
---

## Treebank Statistics: UD_Wolof-WTB: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="wo_wtb-dep-nmod-poss.html">nmod:poss</a></tt>.

1823 nodes (4%) are attached to their parents as `nmod`.

1808 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.64015359297861.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (1132; 62% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (490; 27% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (53; 3% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (45; 2% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (34; 2% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (29; 2% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (18; 1% instances), <tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="wo_wtb-pos-ADV.html">ADV</a></tt>-<tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-DET.html">DET</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="wo_wtb-pos-NUM.html">NUM</a></tt>-<tt><a href="wo_wtb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod	color:blue
1	Ñu	mu	PRON	PRON	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	_	_
2	nekkoon	nekk	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	nag	nag	ADV	ADV	_	2	advmod	_	_
4	ci	ci	ADP	PREP	_	6	case	_	_
5	ron	ron	ADP	PREP	_	6	case	_	_
6	kiliftéefug	kiliftéef	NOUN	NOUN	Case=Gen|Number=Sing	2	obl	_	_
7	imbraatóor	imbraatóor	NOUN	NOUN	_	6	nmod	_	_
8	gu	gu	ADP	PREP	_	9	case	_	_
9	Gana	Gana	PROPN	NAME	_	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Ci	ci	ADP	PREP	_	2	case	_	_
2	bëj-gànnaaru	bëj-gànnaar	NOUN	NOUN	Case=Gen|Number=Sing	9	obl	_	_
3	Wuli	Wuli	PROPN	NAME	_	2	nmod	_	_
4	la	la	AUX	INFL	FocusType=Compl|Mood=Ind|Number=Sing|Person=3	9	aux	_	_
5	nguuri	nguur	NOUN	NOUN	Case=Gen|Number=Plur	9	nsubj	_	_
6	Goy	Goy	PROPN	NAME	_	5	nmod	_	_
7	ak	ak	CCONJ	CONJ	_	8	cc	_	_
8	Kamera	Kamera	PROPN	NAME	_	6	conj	_	_
9	nekkoon	nekk	VERB	VERB	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
1	Seen	sama	DET	DET	Number=Sing|Person=2,3|Poss=Yes|PronType=Prs	2	det	_	_
2	këru	kër	NOUN	NOUN	Case=Gen|Number=Sing	5	nsubj	_	_
3	diine	diine	NOUN	NOUN	_	2	nmod	_	_
4	di	di	AUX	COP	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	Kambereen	Kambereen	PROPN	NAME	_	0	root	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	ca	ca	ADP	PREP	_	8	case	_	_
8	Yoff	Yoff	PROPN	NAME	_	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


