---
layout: base
title:  'Statistics of cop in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `cop`

This relation is universal.

220 nodes (2%) are attached to their parents as `cop`.

128 instances of `cop` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.89090909090909.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (96; 44% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (80; 36% instances), <tt><a href="br_keb-pos-PRON.html">PRON</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (18; 8% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (10; 5% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (6; 3% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (5; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop	color:blue
1	Dav	dav	ADJ	adj	_	0	root	_	_
2	e	e	AUX	vpart	_	1	aux	_	_
3	vije	bezañ	AUX	vblex	Number=Sing|Person=3	1	cop	_	SpaceAfter=No
4	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Poent	poent	NOUN	n	Gender=Masc|Number=Sing	0	root	_	_
2	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	d	da	ADP	pr	_	4	case	_	_
4	in	indirect	PRON	prn	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obl	_	_
5	mont	mont	VERB	vblex	VerbForm=Inf	1	csubj	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Cheñchamantoù	cheñchamant	NOUN	n	Gender=Masc|Number=Plur	6	nsubj	_	_
2	bras	bras	ADJ	adj	_	1	amod	_	_
3	a	a	AUX	vpart	_	6	aux	_	_
4	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	cop	_	_
5	evid	evit	ADP	pr	_	6	case	_	_
6	oc'h	indirect	PRON	prn	Case=Acc|Number=Plur|Person=2|PronType=Prs	0	root	_	_
7	,	,	PUNCT	cm	_	12	punct	_	_
8	met	met	CCONJ	cnjcoo	_	12	cc	_	_
9	ne	ne	ADV	adv	Polarity=Neg	12	advmod	_	_
10	vint	bezañ	AUX	vblex	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	12	aux:pass	_	_
11	ket	ket	ADV	adv	_	12	advmod	_	_
12	graet	ober	VERB	vblex	Tense=Past|VerbForm=Part	6	conj	_	_
13	trumm	trumm	ADJ	adj	_	12	advmod	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	6	punct	_	_

~~~


