---
layout: base
title:  'Statistics of xcomp in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `xcomp`

This relation is universal.

180 nodes (1%) are attached to their parents as `xcomp`.

180 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.48888888888889.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (122; 68% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt> (44; 24% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt> (11; 6% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	_	_
2	nuclei	nucleo	NOUN	S	Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	6	punct	_	_
4	a	a	ADP	E	_	6	case	_	_
5	quel	quello	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	6	det	_	_
6	punto	punto	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	andremmo	andare	VERB	V	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	a	a	ADP	E	_	10	mark	_	_
10	scardinare	scardinare	VERB	V	VerbForm=Inf	8	xcomp	_	SpaceAfter=No
11	?	?	PUNCT	FS	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	_	_
2	dev'	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	SpaceAfter=No
3	essere	essere	AUX	VA	VerbForm=Inf	4	aux	_	_
4	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	salvo	salvo	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 xcomp	color:blue
1	Glie	gli	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl	_	_
2	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	chiedo	chiedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	perché	perché	SCONJ	CS	_	6	mark	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	sembra	sembrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
7	più	più	ADV	B	_	6	advmod	_	_
8	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Ministro	ministro	NOUN	S	Gender=Masc|Number=Sing	6	xcomp	_	_
10	di	di	ADP	E	_	12	case	_	_
11	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Repubblica	repubblica	NOUN	S	Gender=Fem|Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	3	punct	_	_

~~~


