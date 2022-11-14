---
layout: base
title:  'Statistics of mark in UD_Italian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParlaMint: Relations: `mark`

This relation is universal.

726 nodes (4%) are attached to their parents as `mark`.

723 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.75895316804408.

The following 9 pairs of parts of speech are connected with `mark`: <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (334; 46% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-SCONJ.html">SCONJ</a></tt> (313; 43% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-SCONJ.html">SCONJ</a></tt> (29; 4% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-SCONJ.html">SCONJ</a></tt> (27; 4% instances), <tt><a href="it_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="it_parlamint-pos-ADV.html">ADV</a></tt> (11; 2% instances), <tt><a href="it_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="it_parlamint-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="it_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="it_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_parlamint-pos-AUX.html">AUX</a></tt>-<tt><a href="it_parlamint-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	Se	se	SCONJ	CS	_	4	mark	_	_
2	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	testo	testo	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	_
4	rimane	rimanere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	advcl	_	_
5	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	4	obj	_	_
6	di	di	ADP	E	_	8	case	_	_
7	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	8	det	_	_
8	emendamento	emendamento	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	4	punct	_	_
10	va	andare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	bene	bene	ADV	B	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	Accetto	accettare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	proposta	proposta	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	riformulazione	riformulazione	NOUN	S	Gender=Fem|Number=Sing	3	nmod	_	_
5	perché	perché	SCONJ	CS	_	10	mark	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tema	tema	NOUN	S	Gender=Masc|Number=Sing	10	nsubj	_	_
8	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	troppo	troppo	ADV	B	_	10	advmod	_	_
10	importante	importante	ADJ	A	Number=Sing	1	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	SpacesAfter=\n

~~~


