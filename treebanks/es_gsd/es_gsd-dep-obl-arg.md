---
layout: base
title:  'Statistics of obl:arg in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="es_gsd-dep-obl-agent.html">obl:agent</a></tt>.

2111 nodes (0%) are attached to their parents as `obl:arg`.

1110 instances of `obl:arg` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38891520606348.

The following 17 pairs of parts of speech are connected with `obl:arg`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1293; 61% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (559; 26% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (215; 10% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:arg	color:blue
1	Tiene	tener	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	todo	todo	DET	_	Gender=Masc|Number=Sing|PronType=Tot	3	det	_	_
3	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	1	obj	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	necesitas	necesita	VERB	_	Gender=Fem|Number=Plur|VerbForm=Fin	3	acl:relcl	_	_
6	para	para	ADP	_	_	7	mark	_	_
7	relajar	relajar	VERB	_	VerbForm=Inf	5	advcl	_	_
8	te	tú	PRON	_	Case=Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	7	obl:arg	_	_
9	y	y	CCONJ	_	_	10	cc	_	_
10	pasar	pasar	VERB	_	VerbForm=Inf	7	conj	_	_
11	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
12	buen	buen	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
13	rato	rato	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:arg	color:blue
1	Lumine	lumine	PROPN	_	_	2	nsubj	_	_
2	pertenece	pertenecer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	5	case	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	conjunto	conjunto	NOUN	_	Gender=Masc|Number=Sing	2	obl:arg	_	_
6	de	de	ADP	_	_	7	case	_	_
7	empresas	empresa	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	Caixa	caixa	PROPN	_	_	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:arg	color:blue
1	Esto	este	PRON	_	Number=Sing|PronType=Dem	2	nsubj	_	_
2	permitió	permitir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	a	a	ADP	_	_	4	case	_	_
4	Smart	smart	PROPN	_	_	2	obl:arg	_	_
5	asistir	asistir	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	a	a	ADP	_	_	8	case	_	_
7	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Pembroke	pembroke	PROPN	_	_	5	obl	_	_
9	College	college	PROPN	_	_	8	flat	_	_
10	de	de	ADP	_	_	11	case	_	_
11	Cambridge	cambridge	PROPN	_	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


