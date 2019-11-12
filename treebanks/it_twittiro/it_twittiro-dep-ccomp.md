---
layout: base
title:  'Statistics of ccomp in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `ccomp`

This relation is universal.

219 nodes (1%) are attached to their parents as `ccomp`.

217 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.42922374429224.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (152; 69% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (29; 13% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt> (13; 6% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Scusate	scusare	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	sapete	sapere	VERB	V	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	chi	chi	PRON	PQ	PronType=Int	6	nsubj	_	_
5	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	ucciso	uccidere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	ccomp	_	_
7	Regeni	Regeni	PROPN	SP	_	6	obj	_	_
8	oggi	oggi	ADV	B	_	3	advmod	_	SpaceAfter=No
9	?	?	PUNCT	FS	_	3	punct	_	SpaceAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 ccomp	color:blue
1	RT	retweet	NOUN	S	_	2	dep	_	_
2	@user	@user	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	Spero	sperare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	colite	colite	NOUN	S	Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	6	punct	_	_
8	Ma	ma	CCONJ	CC	_	9	cc	_	_
9	ho	avere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	conj	_	_
10	paura	paura	NOUN	S	Gender=Fem|Number=Sing	9	obj	_	_
11	sia	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	amore	amore	NOUN	S	Gender=Masc|Number=Sing	9	advcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	'	'	PUNCT	FB	_	2	punct	_	_
2	dicono	dire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vero	vero	ADJ	A	Gender=Masc|Number=Sing	2	ccomp	_	_
6	che	che	SCONJ	CS	_	15	mark	_	_
7	quando	quando	SCONJ	CS	_	9	mark	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl:impers	_	_
9	muore	morire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	advcl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	9	punct	_	_
11	poi	poi	ADV	B	_	15	advmod	_	_
12	non	non	ADV	BN	PronType=Neg	15	advmod	_	_
13	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	15	expl	_	_
14	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl:impers	_	_
15	vede	vedere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
16	più'	più'	ADV	B	_	15	advmod	_	_

~~~


