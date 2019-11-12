---
layout: base
title:  'Statistics of nmod:tmod in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gum-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_gum-dep-nmod-poss.html">nmod:poss</a></tt>.

287 nodes (0%) are attached to their parents as `nmod:tmod`.

267 instances of `nmod:tmod` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.91289198606272.

The following 11 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (133; 46% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (97; 34% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (26; 9% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (10; 3% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:tmod	color:blue
1	Also	also	ADV	RB	_	2	advmod	_	_
2	known	know	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
3	as	as	ADP	IN	_	5	case	_	_
4	shah	shah	PROPN	NNP	Number=Sing	5	compound	_	_
5	square	square	PROPN	NNP	Number=Sing	2	obl	_	_
6	or	or	CCONJ	CC	_	8	cc	_	_
7	imam	imam	PROPN	NNP	Number=Sing	8	compound	_	_
8	square	square	PROPN	NNP	Number=Sing	5	conj	_	_
9	-	-	PUNCT	:	_	10	punct	_	_
10	1602	@card@	NUM	CD	NumType=Card	8	nmod:tmod	_	_
11	(	(	PUNCT	-LRB-	_	13	punct	_	SpaceAfter=No
12	Meidan	Meidan	PROPN	NNP	Number=Sing	13	compound	_	_
13	Emam	Emam	PROPN	NNP	Number=Sing	8	appos	_	SpaceAfter=No
14	)	)	PUNCT	-RRB-	_	13	punct	_	SpaceAfter=No
15	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod:tmod	color:blue
1	Saturday	Saturday	PROPN	NNP	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	,	_	4	punct	_	_
3	October	October	PROPN	NNP	Number=Sing	4	compound	_	_
4	9	9	NUM	CD	NumType=Card	1	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	2010	@card@	NUM	CD	NumType=Card	4	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:tmod	color:blue
1	Wednesday	Wednesday	PROPN	NNP	Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	,	_	4	punct	_	_
3	April	April	PROPN	NNP	Number=Sing	4	nmod:tmod	_	_
4	13	@card@	NUM	CD	NumType=Card	1	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	2011	@card@	NUM	CD	NumType=Card	4	nmod:tmod	_	_

~~~


