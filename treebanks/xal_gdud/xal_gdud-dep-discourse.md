---
layout: base
title:  'Statistics of discourse in UD_Kalmyk-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Kalmyk-GDUD: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="xal_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xal_gdud-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="xal_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="xal_gdud-pos-INTJ.html">INTJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	a	a	CCONJ	_	_	5	cc	_	_
2	b	b	ADV	_	_	5	discourse	_	_
3	42	42	NUM	_	_	5	nmod	_	_
4	godə	god	NOUN	_	_	3	nmod	_	Case=Ext
5	äärm-də	äärm	NOUN	_	Case=Dat	6	obl	_	_
6	od-ad	od	VERB	_	_	0	root	_	Deriv=CvAnt

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Буйн	buyn	INTJ	_	_	2	discourse	_	_
2	болтха	bolt	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	5	parataxis	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	келсән	kels	VERB	_	Tense=Past|VerbForm=Part	5	acl	_	_
5	давтхнт	davtx	VERB	_	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
6	бас	bas	ADV	_	_	5	advmod	_	_
7	нег	neg	NUM	_	NumType=Card	5	nummod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


