---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="es_coser-dep-nsubj-outer.html">nsubj:outer</a></tt>.

16 nodes (0%) are attached to their parents as `nsubj:pass`.

14 instances of `nsubj:pass` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (11; 69% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (5; 31% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:pass	color:blue
1	Tengo	tener	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	cs	_	3	mark	_	_
3	ver	ver	VERB	vmn0000	VerbForm=Inf	1	xcomp	_	_
4	a	a	ADP	spc00	_	6	case	_	_
5	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	médico	médico	NOUN	nccs000	Gender=Masc|Number=Sing	3	obj	_	_
7	que	que	PRON	cs	PronType=Rel	10	nsubj:pass	_	_
8	me	yo	PRON	pc1cs000	Case=Acc|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	10	obl:arg	_	_
9	ha	haber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	operao	operar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	6	acl:relcl	_	Ortho=operado|SpaceAfter=No
11	.	.	PUNCT	fp	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Ha	haber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux	_	_
2	cam	cam	X	fs	_	7	reparandum	_	SpaceAfter=No
3	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
4	la	el	DET	pc3fsa00	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	vida	vida	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nsubj:pass	_	_
6	ha	haber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	cambiao	cambiar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Ortho=cambiado
8	muchísimo	mucho	ADV	_	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	10	punct	_	_
10	mucho	mucho	ADV	rg	_	7	advmod	_	SpaceAfter=No
11	,	,	PUNCT	fc	PunctType=Comm	10	punct	_	_
12	mucho	mucho	ADV	rg	_	7	advmod	_	SpaceAfter=No
13	,	,	PUNCT	fc	PunctType=Comm	12	punct	_	_
14	pero	pero	CCONJ	cc	_	15	cc	_	_
15	mucho	mucho	ADV	rg	_	7	advmod	_	SpaceAfter=No
16	.	.	PUNCT	fp	PunctType=Peri	7	punct	_	_

~~~


