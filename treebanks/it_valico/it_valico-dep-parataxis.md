---
layout: base
title:  'Statistics of parataxis in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `parataxis`

This relation is universal.

89 nodes (1%) are attached to their parents as `parataxis`.

68 instances of `parataxis` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.79775280898876.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (52; 58% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (18; 20% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="it_valico-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	Ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	tentato	tentare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
3	per	per	ADP	E	_	4	mark	_	_
4	parlare	parlare	VERB	V	VerbForm=Inf	2	advcl	_	_
5	con	con	ADP	E	_	6	case	_	_
6	ragazza	ragazza	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl	_	_
8	chiama	chiamare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
9	Rosa	Rosa	PROPN	SP	_	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 parataxis	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 parataxis	color:blue
1	È	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	mio	mio	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	_	_
6	Lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	amo	amare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	7	punct	_	SpacesAfter=\n

~~~


