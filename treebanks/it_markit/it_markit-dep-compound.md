---
layout: base
title:  'Statistics of compound in UD_Italian-MarkIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-MarkIT: Relations: `compound`

This relation is universal.

33 nodes (0%) are attached to their parents as `compound`.

31 instances of `compound` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09090909090909.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (18; 55% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt> (5; 15% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt> (3; 9% instances), <tt><a href="it_markit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_markit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="it_markit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_markit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	Un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	altro	altro	ADJ	A	_	3	amod	_	_
3	autore	autore	NOUN	S	Gender=Masc|Number=Sing	13	nsubj	_	_
4	che	che	PRON	PR	_	5	nsubj	_	_
5	tratta	trarre	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl:relcl	_	_
6	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	tematica	tematica	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	di	di	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	rapporto	rapporto	NOUN	S	Gender=Masc|Number=Sing	7	nmod	_	_
11	padre-figlio	padre-figlio	NOUN	S	Gender=Masc|Number=Sing	10	compound	_	_
12	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	F.	F.	PROPN	SP	_	0	root	_	_
14	Kafka	Kafka	PROPN	SP	_	13	flat:name	_	_
15	.	[PUNCT]	PUNCT	FS	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	Questa	questo	PRON	PD	Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	via	via	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	che	che	PRON	PR	_	7	obj	_	_
6	deve	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	seguire	seguire	VERB	V	VerbForm=Inf	4	acl:relcl	_	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	moderna	moderno	ADJ	A	Gender=Fem|Number=Sing	10	amod	_	_
10	Unione	Unione	PROPN	SP	_	7	nsubj	_	_
11	Europea	Europea	PROPN	SP	_	10	compound	_	_
12	:	[PUNCT]	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 compound	color:blue
1	Ed	ed	CCONJ	CC	_	3	cc	_	_
2	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	così	così	ADV	B	_	0	root	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	ci	ci	PRON	PC	Clitic=Yes|Gender=Fem|Number=Plur|Person=1|PronType=Prs	6	expl	_	_
6	fu	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	ccomp	_	_
7	lo	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	scoppio	scoppio	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	_
9	di	di	ADP	E	_	12	case	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	Prima	primo	ADJ	NO	Gender=Fem|Number=Sing|NumType=Ord	12	amod	_	_
12	Guerra	Guerra	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	_
13	Mondiale	Mondiale	ADJ	A	Gender=Fem|Number=Sing	12	compound	_	_
14	,	[PUNCT]	PUNCT	FF	_	8	punct	_	_
15	tutto	tutto	DET	T	Gender=Masc|Number=Sing|PronType=Tot	16	det	_	_
16	questo	questo	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	8	obl	_	_
17	per	per	ADP	E	_	19	case	_	_
18	un'	un'	DET	RI	_	19	det	_	_
19	omicidio	omicidio	NOUN	S	Gender=Masc|Number=Sing	16	nmod	_	_
20	;	[PUNCT]	PUNCT	FC	_	3	punct	_	_

~~~


