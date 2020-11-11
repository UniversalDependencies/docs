---
layout: base
title:  'Statistics of xcomp in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `xcomp`

This relation is universal.

58 nodes (1%) are attached to their parents as `xcomp`.

57 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.32758620689655.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (45; 78% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt> (6; 10% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Mont	mont	VERB	vblex	VerbForm=Inf	0	root	_	_
2	a	a	AUX	vpart	_	1	aux	_	_
3	ran	ober	AUX	vblex	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	aux	_	_
4	da	da	ADP	pr	_	5	mark	_	_
5	c'hoari	c’hoari	VERB	vblex	VerbForm=Inf	1	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	Arabat	arabat	ADV	adv	_	0	root	_	_
2	de	da	ADP	pr	_	3	case	_	_
3	oc'h	indirect	PRON	prn	Case=Acc|Number=Plur|Person=2|PronType=Prs	1	obl	_	_
4	en	en	AUX	vpart	Reflex=Yes	6	aux	_	_
5	em	em	X	x	_	4	fixed	_	_
6	santout	santout	VERB	vblex	VerbForm=Inf	1	csubj	_	_
7	re	re	ADV	adv	_	8	advmod	_	_
8	gablus	kablus	ADJ	adj	_	6	xcomp	_	_
9	ma	ma	SCONJ	cnjsub	_	10	mark	_	_
10	rit	ober	VERB	vblex	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	advcl	_	_
11	fazioù	fazi	NOUN	n	Gender=Masc|Number=Plur	10	obj	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 xcomp	color:blue
1	Gant	gant	ADP	pr	_	3	case	_	_
2	an	an	DET	det	_	3	det	_	_
3	teatr	teatr	NOUN	n	Gender=Masc|Number=Sing	8	obl	_	_
4	hag	ha	CCONJ	cnjcoo	_	6	cc	_	_
5	an	an	DET	det	_	6	det	_	_
6	dañs	dañs	NOUN	n	Gender=Masc|Number=Sing	3	conj	_	_
7	e	e	AUX	vpart	_	8	aux	_	_
8	teu	dont	VERB	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	an	an	DET	det	_	10	det	_	_
10	nen	den	NOUN	n	Gender=Masc|Number=Sing	8	nsubj	_	_
11	da	da	ADP	pr	_	13	mark	_	_
12	vezañ	bezañ	AUX	vblex	VerbForm=Inf	13	cop	_	_
13	danvez	danvez	NOUN	n	Gender=Masc|Number=Sing	8	xcomp	_	_
14	e	e	DET	det	Gender[psor]=Masc|Poss=Yes	15	det	_	_
15	arz	arz	NOUN	n	Gender=Masc|Number=Sing	13	nmod:gen	_	SpaceAfter=No
16	.	.	PUNCT	sent	_	8	punct	_	_

~~~


