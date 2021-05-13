---
layout: base
title:  'Statistics of nsubj in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et_ewt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

3592 nodes (5%) are attached to their parents as `nsubj`.

2817 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.31542316258352.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1713; 48% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1581; 44% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (205; 6% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (33; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (24; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (8; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nsubj	color:blue
1	On	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	ja	ja	CCONJ	J	_	3	cc	3:cc	_
3	elavad	elama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	1:conj	_
4	nagu	nagu	SCONJ	J	_	5	mark	5:mark	_
5	elaksid	elama	VERB	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	3:advcl	_
6	nad	tema	PRON	P	Case=Nom|Number=Plur|Person=3|PronType=Prs	5	nsubj	5:nsubj	_
7	igavesti	igavesti	ADV	D	_	5	advmod	5:advmod	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	onia	Onia	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	fotopoe	foto_pood	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
3	peded	pede	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	_
4	korrutavad	korrutama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nagunii	nagu_nii	ADV	D	_	4	advmod	4:advmod	_
6	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	7	det	7:det	_
7	hinna	hind	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
8	2X	2X	NOUN	Y	Abbr=Yes	4	obl	4:obl	SpaceAfter=No
9	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	Kas	kas	ADV	D	_	5	advmod	5:advmod	_
2	Delfi	Delfi	PROPN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
3	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
4	võiks	võima	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	tekitada	tekitama	VERB	V	VerbForm=Inf	0	root	0:root	_
6	eraldi	eraldi	ADV	D	_	7	advmod	7:advmod	_
7	rubriiki	rubriik	NOUN	S	Case=Par|Number=Sing	5	obj	5:obj	_
8	"	"	PUNCT	Z	_	9	punct	9:punct	SpaceAfter=No
9	tehnika	tehnika	NOUN	S	Case=Nom|Number=Sing	7	appos	7:appos	SpaceAfter=No
10	"	"	PUNCT	Z	_	9	punct	9:punct	_

~~~


