---
layout: base
title:  'Statistics of expl:impers in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_isdt-dep-expl-pass.html">expl:pass</a></tt>.

424 nodes (0%) are attached to their parents as `expl:impers`.

401 instances of `expl:impers` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47405660377358.

The following 3 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (422; 100% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:impers	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
2	stata	essere	AUX	VA	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	3:cop	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	0:root|7:obj	_
4	che	che	PRON	PR	PronType=Rel	7	obj	3:ref	_
5	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	7	expl	7:expl	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl:impers	7:expl:impers	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	3:acl:relcl	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:impers	color:blue
1	In	in	ADP	E	_	3	case	3:case	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	discorsi	discorso	NOUN	S	Gender=Masc|Number=Plur	10	obl	10:obl:in	_
4	e	e	CCONJ	CC	_	7	cc	7:cc	_
5	in	in	ADP	E	_	7	case	7:case	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	7:det	_
7	saggi	saggio	NOUN	S	Gender=Masc|Number=Plur	3	conj	3:conj:e|10:obl:in	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl:impers	10:expl:impers	_
9	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	soliti	solito	ADJ	A	Gender=Masc|Number=Plur	0	root	0:root	_
11	ridur	ridurre	VERB	V	VerbForm=Inf	10	xcomp	10:xcomp	_
12	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	11:obj	_
13	ormai	ormai	ADV	B	_	11	advmod	11:advmod	_
14	a	a	ADP	E	_	17	case	17:case	_
15	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	17	det	17:det	_
16	sola	solo	ADJ	A	Gender=Fem|Number=Sing	17	amod	17:amod	_
17	parola	parola	NOUN	S	Gender=Fem|Number=Sing	11	obl	11:obl:a	SpaceAfter=No
18	.	.	PUNCT	FS	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 expl:impers	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	3	det	3:det	SpaceAfter=No
2	ultima	ultimo	ADJ	A	Gender=Fem|Number=Sing	3	amod	3:amod	_
3	volta	volta	NOUN	S	Gender=Fem|Number=Sing	15	nmod	15:nmod	_
4	che	che	SCONJ	CS	_	9	mark	9:mark	_
5	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	_
6	foglia	foglia	NOUN	S	Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
7	d'	di	ADP	E	_	8	case	8:case	SpaceAfter=No
8	acero	acero	NOUN	S	Gender=Masc|Number=Sing	6	nmod	6:nmod:di	_
9	volò	volare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	acl	3:acl:che	_
10	in	in	ADP	E	_	11	case	11:case	_
11	cielo	cielo	NOUN	S	Gender=Masc|Number=Sing	9	obl	9:obl:in	_
12	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl:impers	15:expl:impers	_
13	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	15:cop	_
14	a	a	ADP	E	_	15	case	15:case	_
15	Seul	Seul	PROPN	SP	_	0	root	0:root	SpaceAfter=No
16	,	,	PUNCT	FF	_	15	punct	15:punct	_
17	sette	sette	NUM	N	NumType=Card	18	nummod	18:nummod	_
18	anni	anno	NOUN	S	Gender=Masc|Number=Plur	15	nmod	15:nmod	_
19	fa	fa	ADV	B	_	18	advmod	18:advmod	SpaceAfter=No
20	:	:	PUNCT	FC	_	15	punct	15:punct	_

~~~


