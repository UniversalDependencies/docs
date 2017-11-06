---
layout: base
title:  'Statistics of ccomp in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `ccomp`

This relation is universal.

684 nodes (1%) are attached to their parents as `ccomp`.

668 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.15350877192982.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (495; 72% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (67; 10% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (62; 9% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (27; 4% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Öeldakse	ütlema	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z	_	4	punct	_	_
3	et	et	SCONJ	J	_	4	mark	_	_
4	kusepeatus	kuse_peatus	NOUN	S	Case=Nom|Number=Sing	1	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Eks	eks	ADV	D	_	4	advmod	_	_
2	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	_
3	siis	siis	ADV	D	_	4	advmod	_	_
4	tähendab	tähendama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	et	et	SCONJ	J	_	9	mark	_	_
7	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	obl	_	_
8	jaoks	jaoks	ADP	K	AdpType=Post	7	case	_	_
9	halb	halb	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	ccomp	_	SpaceAfter=No
10	!	!	PUNCT	Z	_	4	punct	_	_

~~~


