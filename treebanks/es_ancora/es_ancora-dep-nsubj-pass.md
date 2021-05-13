---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.

52 nodes (0%) are attached to their parents as `nsubj:pass`.

33 instances of `nsubj:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.65384615384615.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (36; 69% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (8; 15% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (6; 12% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	El	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	accidente	accidente	NOUN	_	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	se	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	saldó	saldar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	sin	sin	ADP	_	_	6	case	_	_
6	heridos	herido	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:pass	color:blue
1	Tampoco	tampoco	ADV	_	_	2	advmod	_	_
2	quiso	querer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	revelar	revelar	VERB	_	VerbForm=Inf	2	xcomp	_	_
4	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	nombres	nombre	NOUN	_	Gender=Masc|Number=Plur	3	obj	_	_
6	de	de	ADP	_	_	8	case	_	_
7	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	empresas	empresa	NOUN	_	Gender=Fem|Number=Plur	5	nmod	_	_
9	que	que	PRON	_	PronType=Int,Rel	12	nsubj:pass	_	_
10	están	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
11	siendo	ser	AUX	_	VerbForm=Ger	12	aux:pass	_	_
12	investigadas	investigar	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	8	acl	_	SpaceAfter=No
13	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	REAL	real	PROPN	_	_	6	nsubj:pass	_	MWE=REAL_SOCIEDAD|MWEPOS=PROPN
3	SOCIEDAD	sociedad	PROPN	_	_	2	flat	_	_
4	NO	no	ADV	_	Polarity=Neg	6	advmod	_	_
5	SE	él	PRON	_	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	obj	_	_
6	ALEJA	aleja	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	DE	de	ADP	_	_	9	case	_	_
8	EL	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	PRECIPICIO	precipicio	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_

~~~


