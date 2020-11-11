---
layout: base
title:  'Statistics of ccomp in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `ccomp`

This relation is universal.

28 nodes (0%) are attached to their parents as `ccomp`.

28 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.35714285714286.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (19; 68% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt> (4; 14% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-ADV.html">ADV</a></tt> (3; 11% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-PRON.html">PRON</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 ccomp	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp	color:blue
1	Me	prpers	PRON	prn	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	'	a	AUX	vpart	_	3	aux	_	SpaceAfter=No
3	lavar	lavarout	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	da	ADP	pr	_	5	case	_	_
5	oc'h	indirect	PRON	prn	Case=Acc|Number=Plur|Person=2|PronType=Prs	3	obl	_	_
6	ar	an	DET	det	_	7	det	_	_
7	marc'h	marc’h	NOUN	n	Gender=Masc|Number=Sing	12	nsubj	_	SpaceAfter=No
8	-se	se	ADV	adv	_	7	advmod	_	_
9	a	a	AUX	vpart	_	12	aux	_	_
10	oa	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	cop	_	_
11	re	re	ADV	adv	_	12	advmod	_	_
12	gozh	kozh	ADJ	adj	_	3	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	N'	ne	ADV	adv	Polarity=Neg	2	advmod	_	SpaceAfter=No
2	ouzon	gouzout	VERB	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ket	ket	ADV	adv	_	2	advmod	_	_
4	piv	piv	PRON	prn	PronType=Int	7	nsubj	_	_
5	a	a	AUX	vpart	_	7	aux	_	_
6	zo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	aze	aze	ADV	adv	_	2	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	2	punct	_	_

~~~


