---
layout: base
title:  'Statistics of aux in UD_Breton-KEB'
udver: '2'
---

## Treebank Statistics: UD_Breton-KEB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="br_keb-dep-aux-pass.html">aux:pass</a></tt>.

969 nodes (10%) are attached to their parents as `aux`.

633 instances of `aux` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65737874097007.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="br_keb-pos-VERB.html">VERB</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (867; 89% instances), <tt><a href="br_keb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (42; 4% instances), <tt><a href="br_keb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (42; 4% instances), <tt><a href="br_keb-pos-ADV.html">ADV</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="br_keb-pos-PRON.html">PRON</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="br_keb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="br_keb-pos-NUM.html">NUM</a></tt>-<tt><a href="br_keb-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	N'	ne	ADV	adv	Polarity=Neg	4	advmod	_	SpaceAfter=No
2	int	bezañ	AUX	vblex	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	ket	ket	ADV	adv	_	4	advmod	_	_
4	aet	mont	VERB	vblex	Tense=Past|VerbForm=Part	0	root	_	_
5	war-raok	war-raok	ADV	adv	_	4	advmod	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	Dav	dav	ADJ	adj	_	0	root	_	_
2	e	e	AUX	vpart	_	1	aux	_	_
3	vije	bezañ	AUX	vblex	Number=Sing|Person=3	1	cop	_	SpaceAfter=No
4	.	.	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 aux	color:blue
1	E	e	ADP	pr	_	2	case	_	_
2	Kemper	Kemper	PROPN	np	Number=Sing	0	root	_	_
3	ez	e	AUX	vpart	_	2	aux	_	_
4	eo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
5	ar	an	DET	det	_	6	det	_	_
6	stourm	stourm	NOUN	n	Gender=Masc|Number=Sing	2	nsubj	_	_
7	evit	evit	ADP	pr	_	9	case	_	_
8	ar	an	DET	det	_	9	det	_	_
9	c'helenn	kelenn	NOUN	n	Gender=Masc|Number=Sing	6	nmod	_	_
10	divyezhek	divyezhek	ADJ	adj	_	9	amod	_	_
11	a	a	AUX	vpart	_	15	aux	_	_
12	vo	bezañ	AUX	vblex	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	15	cop	_	_
13	e	e	ADP	pr	_	15	case	_	_
14	r	an	DET	det	_	15	det	_	_
15	jeu	jeu	NOUN	n	Gender=Masc|Number=Sing	9	acl	_	SpaceAfter=No
16	.	.	PUNCT	sent	_	2	punct	_	_

~~~


