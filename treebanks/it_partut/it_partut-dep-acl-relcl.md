---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_partut-dep-acl.html">acl</a></tt>.

531 nodes (1%) are attached to their parents as `acl:relcl`.

531 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.44821092278719.

The following 17 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (386; 73% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (79; 15% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (24; 5% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
3	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	paradigma	paradigma	NOUN	S	Gender=Masc|Number=Sing	2	nsubj	_	_
5	che	che	PRON	PR	PronType=Rel	6	obj	_	_
6	vediamo	vedere	VERB	V	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	in	in	ADP	E	_	10	case	_	_
8	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Tot	10	det:predet	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	universo	universo	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:relcl	color:blue
1	Questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	3	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	quanto	quanto	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	0	root	_	_
4	chiediamo	chiedere	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
5	oggi	oggi	ADV	B	_	4	advmod	_	_
6	a	a	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	signor	signore	NOUN	S	Gender=Masc|Number=Sing	4	obl	_	_
9	commissario	commissario	NOUN	S	Gender=Masc|Number=Sing	8	compound	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl:relcl	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	1816	1816	NUM	N	NumType=Card	5	obl	_	_
4	Balzac	Balzac	PROPN	SP	_	5	nsubj	_	_
5	entrò	entrare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	a	a	ADP	E	_	8	case	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Sorbona	Sorbona	PROPN	SP	_	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	8	punct	_	_
10	dove	dove	ADV	B	_	11	advmod	_	_
11	studiò	studiare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	_	_
12	con	con	ADP	E	_	14	case	_	_
13	tre	tre	NUM	N	NumType=Card	14	nummod	_	_
14	professori	professore	NOUN	S	Gender=Masc|Number=Plur	11	obl	_	_
15	famosi	famoso	ADJ	A	Gender=Masc|Number=Plur	14	amod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	5	punct	_	_

~~~


