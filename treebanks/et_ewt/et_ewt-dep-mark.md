---
layout: base
title:  'Statistics of mark in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `mark`

This relation is universal.

998 nodes (4%) are attached to their parents as `mark`.

994 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.3186372745491.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (616; 62% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (112; 11% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (91; 9% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (81; 8% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (31; 3% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (22; 2% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (14; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	Zopp	Zopp	PROPN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	vajab	vajama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	veel	veel	ADV	D	_	4	advmod	4:advmod	_
4	üht	üks	NUM	N	Case=Par|Number=Sing|NumType=Card	5	nummod	5:nummod	_
5	võitu	võit	NOUN	S	Case=Par|Number=Sing	2	obj	2:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	8:punct	_
7	et	et	SCONJ	J	_	8	mark	8:mark	_
8	jõuda	jõudma	VERB	V	VerbForm=Inf	2	advcl	2:advcl	_
9	põhiturniirile	põhi_turniir	NOUN	S	Case=All|Number=Sing	8	obl	8:obl	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 mark	color:blue
1	«	«	PUNCT	Z	_	7	punct	7:punct	_
2	Sest	sest	SCONJ	J	_	7	mark	7:mark	_
3	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	4:nmod	_
4	liha	liha	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	tõeline	tõeline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	roog	roog	NOUN	S	Case=Nom|Number=Sing	0	root	0:root	_
8	ja	ja	CCONJ	J	_	13	cc	13:cc	_
9	minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	nmod	10:nmod	_
10	veri	veri	NOUN	S	Case=Nom|Number=Sing	13	nsubj:cop	13:nsubj	_
11	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	13:cop	_
12	tõeline	tõeline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	13	amod	13:amod	_
13	jook	jook	NOUN	S	Case=Nom|Number=Sing	7	conj	7:conj	SpaceAfter=No
14	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 mark	color:blue
1	Ja	ja	CCONJ	J	_	4	cc	4:cc	_
2	miks	miks	ADV	D	_	4	mark	4:mark	_
3	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj	_
4	ignoreerid	ignoreerima	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	inimesi	inimene	NOUN	S	Case=Par|Number=Plur	4	obj	4:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	11	punct	11:punct	_
7	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	11	nsubj	11:nsubj	_
8	kuu	kuu	NOUN	S	Case=Gen|Number=Sing	9	nmod	9:nmod	_
9	fotodel	foto	NOUN	S	Case=Ade|Number=Plur	11	obl	11:obl	_
10	püramiide	püramiid	NOUN	S	Case=Par|Number=Plur	11	obj	11:obj	_
11	näevad	nägema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl	SpaceAfter=No
12	?	?	PUNCT	Z	_	4	punct	4:punct	_

~~~


