---
layout: base
title:  'Statistics of csubj in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `csubj`

This relation is universal.

27 nodes (0%) are attached to their parents as `csubj`.

25 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (16; 59% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (5; 19% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Ret	ret	ADJ	adj	_	0	root	_	_
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	d	da	ADP	pr	_	4	case	_	_
4	it	indirect	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obl	_	_
5	dont	dont	VERB	vblex	VerbForm=Inf	1	csubj	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Tarzhañ	tarzhañ	VERB	vblex	VerbForm=Inf	3	csubj	_	_
2	ne	ne	ADV	adv	Polarity=Neg	3	advmod	_	_
3	zegaso	degas	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	mann	mann	X	x	_	5	dep	_	_
5	ebet	ebet	ADV	adv	_	3	advmod	_	_
6	de	da	ADP	pr	_	7	case	_	_
7	oc'h	indirect	PRON	prn	Case=Acc|Number=Plur|Person=2|PronType=Prs	3	obl	_	_
8	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Poent	poent	NOUN	n	Gender=Masc|Number=Sing	0	root	_	_
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	d	da	ADP	pr	_	4	case	_	_
4	in	indirect	PRON	prn	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obl	_	_
5	mont	mont	VERB	vblex	VerbForm=Inf	1	csubj	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


