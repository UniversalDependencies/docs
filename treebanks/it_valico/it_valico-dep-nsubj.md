---
layout: base
title:  'Statistics of nsubj in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="it_valico-dep-nsubj-pass.html">nsubj:pass</a></tt>.

396 nodes (6%) are attached to their parents as `nsubj`.

355 instances of `nsubj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.70707070707071.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (158; 40% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (125; 32% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (49; 12% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (29; 7% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (10; 3% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_valico-pos-ADV.html">ADV</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-PRON.html">PRON</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nsubj	color:blue
1	A	a	ADP	E	_	3	case	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	contrario	contrario	NOUN	S	Gender=Masc|Number=Sing	8	obl	_	LOC=adv|SpaceAfter=No
4	,	,	PUNCT	FF	_	3	punct	_	_
5	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	donna	donna	NOUN	S	Gender=Fem|Number=Sing	8	nsubj	_	_
7	stava	stare	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux	_	_
8	piangendo	piangere	VERB	V	VerbForm=Ger	0	root	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	8	punct	_	_
10	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	testa	testa	NOUN	S	Gender=Fem|Number=Sing	8	parataxis	_	_
12	in	in	ADP	E	_	14	case	_	_
13	le	le	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	14	det	_	_
14	mani	mano	NOUN	S	Gender=Fem|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	8	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Matteo	Matteo	PROPN	SP	_	4	nsubj	_	_
2	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
3	poteva	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
4	veder	vedere	VERB	V	VerbForm=Inf	0	root	_	_
5	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
6	senza	senza	SCONJ	CS	_	7	mark	_	_
7	fare	fare	VERB	V	VerbForm=Inf	4	advcl	_	_
8	niente	niente	PRON	PI	PronType=Ind	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


