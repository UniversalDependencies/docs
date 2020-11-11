---
layout: base
title:  'Statistics of amod in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `amod`

This relation is universal.

16682 nodes (6%) are attached to their parents as `amod`.

11613 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24595372257523.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (15951; 96% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (416; 2% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (151; 1% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (67; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (52; 0% instances), <tt><a href="it_isdt-pos-NUM.html">NUM</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (23; 0% instances), <tt><a href="it_isdt-pos-ADV.html">ADV</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="it_isdt-pos-SYM.html">SYM</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	3	det:predet	3:det:predet	_
2	gli	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	esseri	essere	NOUN	S	Gender=Masc|Number=Plur	5	nsubj	5:nsubj|9:nsubj	_
4	umani	umano	ADJ	A	Gender=Masc|Number=Plur	3	amod	3:amod	_
5	sanno	sapere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	di	di	ADP	E	_	9	mark	9:mark	_
7	poter	potere	AUX	VM	VerbForm=Inf	9	aux	9:aux	_
8	essere	essere	AUX	V	VerbForm=Inf	9	cop	9:cop	_
9	più	più	ADV	B	_	5	xcomp	5:xcomp	_
10	di	di	ADP	E	_	11	case	11:case	_
11	ciò	ciò	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	9	obl	9:obl:di|13:nsubj	_
12	che	che	PRON	PR	PronType=Rel	13	nsubj	11:ref	_
13	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	11:acl:relcl	SpaceAfter=No
14	.	.	PUNCT	FS	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	E	e	CCONJ	CC	_	9	cc	9:cc	_
2	come	come	ADV	B	_	9	advmod	9:advmod	_
3	no	no	INTJ	I	Polarity=Neg	2	discourse	2:discourse	SpaceAfter=No
4	,	,	PUNCT	FF	_	5	punct	5:punct	_
5	come	come	ADV	B	_	2	conj	2:conj|9:advmod	_
6	no	no	INTJ	I	Polarity=Neg	5	discourse	5:discourse	SpaceAfter=No
7	,	,	PUNCT	FF	_	2	punct	2:punct	_
8	caro	caro	ADJ	A	Gender=Masc|Number=Sing	9	amod	9:amod	_
9	Ante	Ante	PROPN	SP	_	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Quale	quale	DET	DQ	Number=Sing|PronType=Int	2	det	2:det	_
2	animale	animale	ADJ	A	Number=Sing	3	nsubj	3:nsubj	_
3	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	5:det	_
5	impronte	impronta	NOUN	S	Gender=Fem|Number=Plur	3	obj	3:obj	_
6	digitali	digitale	ADJ	A	Number=Plur	5	amod	5:amod	_
7	simili	simile	ADJ	A	Number=Plur	5	amod	5:amod	_
8	a	a	ADP	E	_	9	case	9:case	_
9	quelle	quello	PRON	PD	Gender=Fem|Number=Plur|PronType=Dem	7	obl	7:obl:a	_
10	umane	umano	ADJ	A	Gender=Fem|Number=Plur	9	amod	9:amod	SpaceAfter=No
11	?	?	PUNCT	FS	_	3	punct	3:punct	_

~~~


