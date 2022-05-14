---
layout: base
title:  'Statistics of csubj:pass in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-csubj.html">csubj</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 csubj:pass	color:blue
1	Durante	durante	ADP	E	_	3	case	3:case	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	preparazione	preparazione	NOUN	S	Gender=Fem|Number=Sing	9	obl	9:obl:durante	_
4	di	di	ADP	E	_	6	case	6:case	_
5	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	relazione	relazione	NOUN	S	Gender=Fem|Number=Sing	3	nmod	3:nmod:di	_
7	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	9:aux:pass	_
8	stato	essere	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	cop	9:cop	_
9	interessante	interessante	ADJ	A	Number=Sing	0	root	0:root	_
10	discutere	discutere	VERB	V	VerbForm=Inf	9	csubj:pass	9:csubj:pass	_
11	di	di	ADP	E	_	13	case	13:case	_
12	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	13	det	13:det	_
13	temi	tema	NOUN	S	Gender=Masc|Number=Plur	10	obl	10:obl:di	_
14	generali	generale	ADJ	A	Number=Plur	13	amod	13:amod	_
15	relativi	relativo	ADJ	A	Gender=Masc|Number=Plur	13	amod	13:amod	_
16	a	a	ADP	E	_	18	case	18:case	_
17	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	18:det	_
18	politica	politica	NOUN	S	Gender=Fem|Number=Sing	15	obl	15:obl:a	_
19	regionale	regionale	ADJ	A	Number=Sing	18	amod	18:amod	_
20	di	di	ADP	E	_	22	case	22:case	_
21	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	22	det	22:det	_
22	Unione	Unione	PROPN	SP	_	18	nmod	18:nmod:di	_
23	Europea	Europea	PROPN	SP	_	22	flat:name	22:flat:name	SpaceAfter=No
24	.	.	PUNCT	FS	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 17 csubj:pass	color:blue
1	Alcuni	alcuno	DET	DI	Gender=Masc|Number=Plur|PronType=Ind	2	det	2:det	_
2	studiosi	studioso	NOUN	S	Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
3	sostengono	sostenere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	che	che	SCONJ	CS	_	13	mark	13:mark	_
5	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	6:det	_
6	membri	membro	NOUN	S	Gender=Masc|Number=Plur	13	nsubj	13:nsubj	_
7	di	di	ADP	E	_	9	case	9:case	_
8	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	9:det	_
9	famiglia	famiglia	NOUN	S	Gender=Fem|Number=Sing	6	nmod	6:nmod:di	_
10	di	di	ADP	E	_	11	case	11:case	_
11	Shakespeare	Shakespeare	PROPN	SP	_	9	nmod	9:nmod:di	_
12	fossero	essere	AUX	VA	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	cop	13:cop	_
13	cattolici	cattolico	NOUN	S	Gender=Masc|Number=Plur	3	ccomp	3:ccomp	_
14	quando	quando	SCONJ	CS	_	19	mark	19:mark	_
15	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	17	det	17:det	SpaceAfter=No
16	essere	essere	AUX	VA	VerbForm=Inf	17	cop	17:cop	_
17	cattolico	cattolico	ADJ	A	Gender=Masc|Number=Sing	19	csubj:pass	19:csubj:pass	_
18	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	19	aux:pass	19:aux:pass	_
19	considerato	considerare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	13	advcl	13:advcl:quando	_
20	illegale	illegale	ADJ	A	Number=Sing	19	xcomp	19:xcomp	SpaceAfter=No
21	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


