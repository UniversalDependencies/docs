---
layout: base
title:  'Statistics of aux in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="es_coser-dep-aux-pass.html">aux:pass</a></tt>.

40 nodes (0%) are attached to their parents as `aux`.

39 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.425.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (32; 80% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (4; 10% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-X.html">X</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	4	punct	_	SpaceAfter=No
2	Me	yo	PRON	pc1cs000	Case=Dat|Number=Sing|Person=1|PrepCase=Npr|PronType=Prs	4	obl:arg	_	_
3	puede	poder	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	describir	describir	VERB	vmn0000	VerbForm=Inf	0	root	_	_
5	cómo	cómo	PRON	pt000000	PronType=Int	7	obl	_	_
6	se	él	PRON	pc0cn000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	7	expl:pass	_	_
7	hace	hacer	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	_
8	una	uno	DET	di0fs0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	morcilla	morcilla	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Han	haber	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
2	sido	ser	AUX	vsp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	cop	_	_
3	muy	mucho	ADV	rg	_	4	advmod	_	_
4	amables	amable	ADJ	aq0cp0	Number=Plur	0	root	_	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	4	punct	_	_
6	entonces	entonces	ADV	rg	_	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 aux	color:blue
1	Mientras	mientras	SCONJ	cs	_	2	mark	_	_
2	descansa	descansar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	advcl	_	SpaceAfter=No
3	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
4	sube	subir	VERB	vmip3s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	13	ccomp	_	_
5	esas	ese	DET	dd0fp0	Gender=Fem|Number=Plur|PronType=Dem	6	det	_	_
6	piedras	piedra	NOUN	ncfp000	Gender=Fem|Number=Plur	4	obj	_	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	4	punct	_	_
8	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	9	punct	_	SpaceAfter=No
9	entiendes	entender	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	advcl	_	SpaceAfter=No
10	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	9	punct	_	SpaceAfter=No
11	,	,	PUNCT	fc	PunctType=Comm	9	punct	_	_
12	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	13	obl:arg	_	_
13	decía	decir	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
14	:	:	PUNCT	fd	PunctType=Colo	13	punct	_	_
15	"	"	PUNCT	_	PunctSide=Ini|PunctType=Quot	18	punct	_	SpaceAfter=No
16	Mientras	mientras	SCONJ	cs	_	17	mark	_	_
17	descansas	descansar	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	18	advcl	_	_
18	sube	subir	VERB	vmip3s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	13	ccomp	_	_
19	esas	ese	DET	dd0fp0	Gender=Fem|Number=Plur|PronType=Dem	20	det	_	_
20	piedras	piedra	NOUN	ncfp000	Gender=Fem|Number=Plur	18	obj	_	SpaceAfter=No
21	,	,	PUNCT	fc	PunctType=Comm	18	punct	_	_
22	sentao	sentado	ADJ	vmp00sm	Gender=Masc|Number=Sing|VerbForm=Part	25	xcomp	_	Ortho=sentado
23	no	no	ADV	rn	Polarity=Neg	25	advmod	_	_
24	pues	poder	AUX	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	25	aux	_	Ortho=puedes
25	estar	estar	AUX	vmn0000	VerbForm=Inf	18	conj	_	SpaceAfter=No
26	.	.	PUNCT	fp	PunctType=Peri	13	punct	_	_

~~~


