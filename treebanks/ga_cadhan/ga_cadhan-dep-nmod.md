---
layout: base
title:  'Statistics of nmod in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="ga_cadhan-dep-nmod-poss.html">nmod:poss</a></tt>.

352 nodes (7%) are attached to their parents as `nmod`.

343 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90056818181818.

The following 18 pairs of parts of speech are connected with `nmod`: <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (190; 54% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (58; 16% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (27; 8% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (21; 6% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (15; 4% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-PART.html">PART</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Nior	níor	PART	_	PartType=Vb|Polarity=Neg|Tense=Past	2	advmod	_	_
2	chualas	clois	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	0	root	_	_
3	guth	guth	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	obj	_	_
4	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	cuaiche	cuach	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	_
6	fós	fós	ADV	_	_	2	advmod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Siodhmall	Siodhmall	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	mac	mac	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	appos	_	_
3	Cairbre	Cairbre	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	2	nmod	_	_
4	chruim	crom	ADJ	_	Case=Gen|Form=Len|Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	mic	mac	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	3	appos	_	_
7	Ealcmhair	Ealcmhar	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	mic	mac	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	7	appos	_	_
10	Dealbhaoith	Dealbhaoth	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	Bhí	bí	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	canna	canna	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
3	mór	mór	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	2	amod	_	_
4	leanna	leann	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
5	taobh	taobh	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	xcomp:pred	_	_
6	thiar	thiar	ADV	_	_	5	advmod	_	_
7	dhíom	de	ADP	_	Form=Len|Number=Sing|Person=1	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


