---
layout: base
title:  'Statistics of xcomp:ds in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `xcomp:ds`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-xcomp.html">xcomp</a></tt>.

81 nodes (1%) are attached to their parents as `xcomp:ds`.

80 instances of `xcomp:ds` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22222222222222.

The following 8 pairs of parts of speech are connected with `xcomp:ds`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (39; 48% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (24; 30% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 10% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp:ds	color:blue
1	Se	se	PRON	_	Case=Nom|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	_
2	saa	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	meidät	minä	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
4	palaamaan	palata	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp:ds	2:xcomp:ds	_
5	takaisin	takaisin	ADV	_	_	4	advmod	4:advmod	SpaceAfter=No
6	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp:ds	color:blue
1	En	ei	AUX	_	Number=Sing|Person=1|Polarity=Neg|VerbForm=Fin|Voice=Act	2	aux	2:aux	_
2	kutsu	kutsua	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	sitä	se	PRON	_	Case=Par|Number=Sing|PronType=Dem	2	obj	2:obj	_
4	pedoksi	peto	NOUN	_	Case=Tra|Number=Sing	2	xcomp:ds	2:xcomp:ds	_
5	kevyin	kevyt	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	6	amod	6:amod	_
6	perustein	peruste	NOUN	_	Case=Ins|Number=Plur	2	obl	2:obl	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp:ds	color:blue
1	Winstone	Winstone	NOUN	_	Case=Nom|Number=Sing	2	obj	2:obj	_
2	julistettiin	julistaa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	vararikkoiseksi	vara#rikkoinen	ADJ	_	Case=Tra|Degree=Pos|Derivation=Inen|Number=Sing	2	xcomp:ds	2:xcomp:ds	_
4	4.	4.	ADJ	_	NumType=Ord	2	obl	2:obl	_
5	lokakuuta	lokakuu	NOUN	_	Case=Par|Number=Sing	4	flat	4:flat	_
6	1988	1988	NUM	_	NumType=Card	4	flat	4:flat	_
7	ja	ja	CCONJ	_	_	9	cc	9:cc	_
8	jälleen	jälleen	ADV	_	_	9	advmod	9:advmod	_
9	19.	19.	ADJ	_	NumType=Ord	4	conj	4:conj	_
10	maaliskuuta	maaliskuu	NOUN	_	Case=Par|Number=Sing	9	flat	9:flat	_
11	1993	1993	NUM	_	NumType=Card	9	flat	9:flat	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	2:punct	_

~~~


