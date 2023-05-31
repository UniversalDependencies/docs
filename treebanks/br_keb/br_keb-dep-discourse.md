---
layout: base
title:  'Statistics of discourse in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	Un	un	DET	det	_	2	det	_	_
2	torkad	torkad	NOUN	n	Gender=Masc|Number=Sing	0	root	_	_
3	bokedoù	boked	NOUN	n	Gender=Masc|Number=Plur	2	nmod:gen	_	_
4	mar	mar	X	x	_	5	dep	_	_
5	plij	plij	ADV	adv	_	2	discourse	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 discourse	color:blue
1	O	o	INTJ	ij	_	2	case	_	_
2	Breizh	Breizh	PROPN	np	Number=Sing	9	discourse	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	5	punct	_	_
4	ma	ma	DET	det	Poss=Yes	5	det	_	_
5	Bro	bro	NOUN	n	Gender=Fem|Number=Sing	2	appos	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	me	prpers	PRON	prn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	'	a	AUX	vpart	_	9	aux	_	SpaceAfter=No
9	gar	karout	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	ma	ma	DET	det	Poss=Yes	11	det	_	_
11	Bro	bro	NOUN	n	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	9	punct	_	_

~~~


