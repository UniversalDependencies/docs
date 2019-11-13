---
layout: base
title:  'Statistics of csubj in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="it_twittiro-dep-csubj-pass.html">csubj:pass</a></tt>.

47 nodes (0%) are attached to their parents as `csubj`.

31 instances of `csubj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.19148936170213.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (16; 34% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (15; 32% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (11; 23% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj	color:blue
1	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	expl	_	_
3	sento	sentire	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	csubj	_	_
4	fortunato	fortunato	ADJ	A	Gender=Masc|Number=Sing	3	xcomp	_	_
5	di	di	ADP	E	_	7	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	google	google	PROPN	SP	_	3	obl	_	_
8	play	play	PROPN	SP	_	7	flat:name	_	_
9	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
10	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	fantasia	fantasia	NOUN	S	Gender=Fem|Number=Sing	10	obj	_	_
13	di	di	ADP	E	_	14	case	_	_
14	merda	merda	NOUN	S	Gender=Fem|Number=Sing	12	nmod	_	_
15	:-)	:-)	SYM	SYM	_	10	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 csubj	color:blue
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


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj	color:blue
1	@user1	@user1	SYM	SYM	_	8	vocative:mention	_	_
2	@user2	@user2	SYM	SYM	_	8	vocative:mention	_	_
3	@user3	@user3	SYM	SYM	_	8	vocative:mention	_	_
4	@user4	@user4	SYM	SYM	_	8	vocative:mention	_	_
5	@user5	@user5	SYM	SYM	_	8	vocative:mention	_	_
6	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	compito	compito	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
9	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
10	facile	facile	ADJ	A	Number=Sing	8	amod	_	_
11	spacciare	spacciare	VERB	V	VerbForm=Inf	8	csubj	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	buona	buono	ADJ	A	Gender=Fem|Number=Sing	14	amod	_	_
14	scuola	scuola	NOUN	S	Gender=Fem|Number=Sing	11	obj	_	_
15	chapeau	chapeau	INTJ	I	_	8	discourse	_	SpaceAfter=\n

~~~


