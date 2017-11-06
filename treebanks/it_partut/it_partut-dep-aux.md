---
layout: base
title:  'Statistics of aux in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="it_partut-dep-aux-pass.html">aux:pass</a></tt>.

936 nodes (2%) are attached to their parents as `aux`.

931 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47649572649573.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (871; 93% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (32; 3% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (22; 2% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Vorrei	volere	AUX	VM	Mood=Cnd|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	infine	infine	ADV	B	_	3	advmod	_	_
3	soffermar	soffermare	VERB	V	VerbForm=Inf	0	root	_	_
4	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
5	su	su	ADP	E	_	8	case	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	ultimo	ultimo	ADJ	NO	Gender=Masc|Number=Sing|NumType=Ord	8	amod	_	_
8	punto	punto	NOUN	S	Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Credo	credere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	5	mark	_	_
3	dovremmo	dovere	AUX	VM	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
5	capaci	capace	ADJ	A	Number=Plur	1	ccomp	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	dir	dire	VERB	V	VerbForm=Inf	5	advcl	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	7	advmod	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	forte	forte	ADJ	A	Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
2	essere	essere	AUX	V	VerbForm=Inf	4	cop	_	_
3	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	davvero	davvero	ADV	B	_	6	advmod	_	_
6	complicata	complicato	ADJ	A	Gender=Fem|Number=Sing	4	amod	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	4	punct	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	oceano	oceano	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


