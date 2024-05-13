---
layout: base
title:  'Statistics of nsubj in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et-dep-nsubj-cop.html">nsubj:cop</a></tt>.

7637 nodes (7%) are attached to their parents as `nsubj`.

5243 instances of `nsubj` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07280345685479.

The following 18 pairs of parts of speech are connected with `nsubj`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (3749; 49% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (2526; 33% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1245; 16% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (31; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (18; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
1	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	teadis	teadma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ju	ju	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millist	milline	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	6	det	_	_
6	palka	palk	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	näitlejad	näitleja	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	5	obj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	teadis	teadma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ju	ju	ADV	D	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millist	milline	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	6	det	_	_
6	palka	palk	NOUN	S	Case=Par|Number=Sing	8	obj	_	_
7	näitlejad	näitleja	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	saavad	saama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


