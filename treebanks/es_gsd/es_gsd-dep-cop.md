---
layout: base
title:  'Statistics of cop in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `cop`

This relation is universal.

5584 nodes (1%) are attached to their parents as `cop`.

5180 instances of `cop` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8506446991404.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (3257; 58% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (1771; 32% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (335; 6% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (88; 2% instances), <tt><a href="es_gsd-pos-DET.html">DET</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (38; 1% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (34; 1% instances), <tt><a href="es_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (17; 0% instances), <tt><a href="es_gsd-pos-X.html">X</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="es_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (13; 0% instances), <tt><a href="es_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (13; 0% instances), <tt><a href="es_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="es_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	Su	su	DET	_	Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	gentilicio	gentilicio	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
3	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	Chinonais	chinonais	PROPN	_	_	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cop	color:blue
1	Ambos	ambos	PRON	_	Gender=Masc|Number=Plur|NumType=Card|PronType=Tot	4	nsubj	_	_
2	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	químicamente	químicamente	ADV	_	_	4	advmod	_	_
4	idénticos	idéntico	ADJ	_	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 cop	color:blue
1	Lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	0	root	_	_
2	que	que	SCONJ	_	_	3	mark	_	_
3	tenéis	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	que	que	CCONJ	_	_	5	mark	_	_
5	hacer	hacer	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
7	pagar	pagar	VERB	_	VerbForm=Inf	1	csubj	_	_
8	a	a	ADP	_	_	10	case	_	_
9	la	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	gente	gente	NOUN	_	Gender=Fem|Number=Sing	7	obl:arg	_	_
11	y	y	CCONJ	_	_	13	cc	_	_
12	no	no	ADV	_	Polarity=Neg	13	advmod	_	_
13	engañar	engañar	VERB	_	VerbForm=Inf	7	conj	_	_
14	tanto	tanto	PRON	_	NumType=Card|PronType=Dem	13	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_

~~~


