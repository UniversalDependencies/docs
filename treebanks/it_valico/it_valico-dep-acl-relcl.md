---
layout: base
title:  'Statistics of acl:relcl in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="it_valico-dep-acl.html">acl</a></tt>.

83 nodes (1%) are attached to their parents as `acl:relcl`.

83 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.13253012048193.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (66; 80% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (12; 14% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	e	e	CCONJ	CC	_	2	cc	_	_
2	piccia	picciare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	l'	lo	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	uomo	uomo	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	_
5	che	che	PRON	PR	PronType=Rel	6	nsubj	_	_
6	aveva	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	acl:relcl	_	_
7	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	rabbia	rabbia	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	2	punct	_	_
10	con	con	ADP	E	_	13	case	_	_
11	i	i	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
12	suoi	suo	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	pugni	pugno	NOUN	S	Gender=Masc|Number=Plur	2	obl	_	SpaceAfter=No
14	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 acl:relcl	color:blue
1	Crede	credere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	6	mark	_	_
3	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	6	nsubj	_	_
5	fosse	essere	AUX	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	alegre	alegre	ADJ	A	Number=Sing	1	ccomp	_	_
7	ma	ma	CCONJ	CC	_	10	cc	_	_
8	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	6	conj	_	_
11	che	che	PRON	PR	PronType=Rel	12	nsubj	_	_
12	pasò	pasare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	Non	non	ADV	BN	PronType=Neg	3	advmod	_	_
2	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	felice	felice	ADJ	A	Number=Sing	0	root	_	_
4	con	con	ADP	E	_	5	case	_	_
5	che	che	PRON	PR	PronType=Rel	8	obl	_	_
6	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	8	obj	_	_
7	aveva	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


