---
layout: base
title:  'Statistics of csubj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="et_ewt-dep-csubj-cop.html">csubj:cop</a></tt>.

89 nodes (0%) are attached to their parents as `csubj`.

78 instances of `csubj` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.71910112359551.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (70; 79% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (8; 9% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 csubj	color:blue
1	Aga	aga	CCONJ	J	_	2	cc	2:cc	_
2	arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	et	et	SCONJ	J	_	6	mark	6:mark	_
4	need	see	PRON	P	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	6:nsubj	_
5	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	nimed	nimi	NOUN	S	Case=Nom|Number=Plur	2	ccomp	2:ccomp	_
7	keda	kes	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	10	obj	10:obj	_
8	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	6:acl	_
9	meelde	meel	NOUN	S	Case=Ill|Number=Sing	10	obl	10:obl	_
10	jätta	jätma	VERB	V	VerbForm=Inf	8	csubj	8:csubj	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	0:root	_
2	veel	veel	ADV	D	_	1	advmod	1:advmod	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	7	obj	7:obj	_
5	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	7:nsubj	_
6	Toyonoshimaga	Toyonoshima	PROPN	S	Case=Com|Number=Sing	7	obl	7:obl	_
7	teevad	tegema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	1:csubj	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj	color:blue
1	Mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	2	obl	2:obl	_
2	meeldib	meeldima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	kui	kui	SCONJ	J	_	7	mark	7:mark	_
5	tema	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj:cop	7:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	mees	mees	NOUN	S	Case=Nom|Number=Sing	2	csubj	2:csubj	_
8	ja	ja	CCONJ	J	_	10	cc	10:cc	_
9	mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj:cop	10:nsubj	_
10	naine	naine	NOUN	S	Case=Nom|Number=Sing	7	conj	7:conj	SpaceAfter=No
11	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


