---
layout: base
title:  'Statistics of iobj in UD_Italian-Valico'
udver: '2'
---

## Treebank Statistics: UD_Italian-Valico: Relations: `iobj`

This relation is universal.

59 nodes (1%) are attached to their parents as `iobj`.

52 instances of `iobj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40677966101695.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-PRON.html">PRON</a></tt> (58; 98% instances), <tt><a href="it_valico-pos-VERB.html">VERB</a></tt>-<tt><a href="it_valico-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
2	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	di	di	ADP	E	_	5	case	_	_
5	no	no	ADV	BN	PronType=Neg	3	advmod	_	_
6	intrometer	intrometere	VERB	V	VerbForm=Inf	3	xcomp	_	_
7	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	6	expl	_	_
8	in	in	ADP	E	_	11	case	_	_
9	la	la	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
10	sua	suo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det:poss	_	_
11	discussione	discussione	NOUN	S	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	Paola	Paola	PROPN	SP	_	4	nsubj	_	_
3	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	detto	dire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	ragazzo	ragazzo	NOUN	S	Gender=Masc|Number=Sing	4	iobj	_	_
6	che	che	SCONJ	CS	_	10	mark	_	_
7	Luca	Luca	PROPN	SP	_	10	nsubj	_	_
8	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
9	suo	suo	DET	AP	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	fidanzato	fidanzato	NOUN	S	Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	4	punct	_	SpacesAfter=\n

~~~


