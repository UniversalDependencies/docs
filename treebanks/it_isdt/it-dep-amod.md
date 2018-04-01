---
layout: base
title:  'Statistics of amod in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `amod`

This relation is universal.

16100 nodes (5%) are attached to their parents as `amod`.

11122 instances of `amod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26701863354037.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (15340; 95% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (404; 3% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (148; 1% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (99; 1% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (67; 0% instances), <tt><a href="it-pos-NUM.html">NUM</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (21; 0% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="it-pos-SYM.html">SYM</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	_	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	_	ExtraSubj=Yes
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	_	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	di	di	ADP	E	_	9	mark	_	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	_	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	_	_
9	più	più	ADV	B	_	5	xcomp	_	_
10	di	di	ADP	E	_	11	case	_	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	_	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	_	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	E	e	CCONJ	CC	_	9	cc	_	_
2	come	come	ADV	B	_	9	advmod	_	_
3	no	no	INTJ	I	Polarity=Neg	2	discourse	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	5	punct	_	_
5	come	come	ADV	B	_	2	conj	_	_
6	no	no	INTJ	I	Polarity=Neg	5	discourse	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	2	punct	_	_
8	caro	caro	ADJ	A	Gender=Masc|Number=Sing	9	amod	_	_
9	Ante	Ante	PROPN	SP	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Quale	quale	DET	DQ	Number=Sing|PronType=Int	2	det	_	_
2	animale	animale	ADJ	A	Number=Sing	3	nsubj	_	_
3	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
5	impronte	impronta	NOUN	S	Gender=Fem|Number=Plur	3	obj	_	_
6	digitali	digitale	ADJ	A	Number=Plur	5	amod	_	_
7	simili	simile	ADJ	A	Number=Plur	5	amod	_	_
8	a	a	ADP	E	_	9	case	_	_
9	quelle	quello	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	7	obl	_	_
10	umane	umano	ADJ	A	Gender=Fem|Number=Plur	9	amod	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	3	punct	_	_

~~~


