---
layout: base
title:  'Statistics of nmod in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="fi_ood-dep-nmod-gobj.html">nmod:gobj</a></tt>, <tt><a href="fi_ood-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="fi_ood-dep-nmod-poss.html">nmod:poss</a></tt>.

242 nodes (1%) are attached to their parents as `nmod`.

197 instances of `nmod` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62809917355372.

The following 22 pairs of parts of speech are connected with `nmod`: <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (130; 54% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (23; 10% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (19; 8% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (18; 7% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (7; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod	color:blue
1	Hb	Hb	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	nsubj:cop	_	Gen=Hemoglobiini|Gen_desc=rautapitoisuus
2	matala	matala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	saanut	saada	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	conj	_	_
5	punasoluja	puna#solu	NOUN	_	Case=Par|Number=Plur	8	nmod	_	_
6	paineella	paine	NOUN	_	Case=Ade|Number=Sing	8	obl	_	_
7	8	8	NUM	_	NumType=Card	8	nummod	_	_
8	pussia	pussi	NOUN	_	Case=Par|Number=Sing	4	obj	_	_
9	sekä	sekä	CCONJ	_	_	10	cc	_	_
10	jääplasmaa	jää#plasma	NOUN	_	Case=Par|Number=Sing	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	Sai	saada	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	Tenox	Tenox	PROPN	_	Case=Nom|Number=Sing	4	nmod	_	Gen_desc=lääke
3	20	20	NUM	_	NumType=Card	4	nummod	_	_
4	mg	mg	NOUN	_	Abbr=Yes|Case=Par|Number=Sing	1	obj	_	_
5	illalla	ilta	NOUN	_	Case=Ade|Number=Sing	1	obl	_	_
6	ja	ja	CCONJ	_	_	7	cc	_	_
7	nukkunut	nukkua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	conj	_	_
8	yön	yö	NOUN	_	Case=Gen|Number=Sing	7	obl	_	_
9	erittäin	erittäin	ADV	_	_	10	advmod	_	_
10	hyvin	hyvin	ADV	_	_	7	advmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Euroopassa	Eurooppa	PROPN	_	Case=Ine|Number=Sing	2	obl	_	_
2	juodaan	juoda	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	maanosista	maan#osa	NOUN	_	Case=Ela|Number=Plur	4	nmod	_	_
4	eniten	eniten	ADV	_	_	2	advmod	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n\n

~~~


