---
layout: base
title:  'Statistics of mark in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `mark`

This relation is universal.

161 nodes (2%) are attached to their parents as `mark`.

161 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36024844720497.

The following 8 pairs of parts of speech are connected with `mark`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (116; 72% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-SCONJ.html">SCONJ</a></tt> (28; 17% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-SCONJ.html">SCONJ</a></tt> (6; 4% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (4; 2% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-SCONJ.html">SCONJ</a></tt> (3; 2% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Mont	mont	VERB	vblex	VerbForm=Inf	0	root	_	_
2	a	a	AUX	vpart	_	1	aux	_	_
3	ran	ober	AUX	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	aux	_	_
4	da	da	ADP	pr	_	5	mark	_	_
5	c'hoari	c’hoari	VERB	vblex	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
1	Goulenn	goulenn	VERB	vblex	VerbForm=Inf	0	root	_	_
2	a	a	AUX	vpart	_	1	aux	_	_
3	reont	ober	AUX	vblex	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	aux	_	_
4	ma	ma	SCONJ	cnjsub	_	6	mark	_	_
5	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	6	aux	_	_
6	digoret	digoriñ	VERB	vblex	Tense=Past|VerbForm=Part	1	ccomp	_	_
7	an	an	DET	det	_	8	det	_	_
8	nor	dor	NOUN	n	Gender=Fem|Number=Sing	6	obj	_	_
9	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Yann	Yann	PROPN	np	Gender=Masc|Number=Sing	3	nsubj	_	_
2	a	a	AUX	vpart	_	3	aux	_	_
3	chomo	chom	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	e	e	ADP	pr	_	6	case	_	_
5	r	an	DET	det	_	6	det	_	_
6	ger	ger	NOUN	n	Gender=Masc|Number=Sing	3	obl	_	_
7	rak	rak	SCONJ	cnjsub	_	8	mark	_	_
8	fall	fall	ADJ	adj	_	3	advcl	_	_
9	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
10	an	an	DET	det	_	11	det	_	_
11	amzer	amzer	NOUN	n	Gender=Fem|Number=Sing	8	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	3	punct	_	_

~~~


