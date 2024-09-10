---
layout: base
title:  'Statistics of parataxis in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `parataxis`

This relation is universal.

37 nodes (0%) are attached to their parents as `parataxis`.

24 instances of `parataxis` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.51351351351351.

The following 14 pairs of parts of speech are connected with `parataxis`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (8; 22% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (7; 19% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (5; 14% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (3; 8% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (3; 8% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt>-<tt><a href="es_coser-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Se	él	PRON	pc0cn000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
2	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	echa	echar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	...	...	PUNCT	_	PunctType=Comm	3	punct	_	_
5	vinagre	vinagre	NOUN	ncms000	Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	3	punct	_	_
7	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	8	punct	_	SpaceAfter=No
8	sabes	saber	VERB	vmip2s0	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 parataxis	color:blue
1	Y	y	CCONJ	cc	_	4	cc	_	_
2	ahora	ahora	ADV	rg	_	4	advmod	_	_
3	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	carretera	carretera	NOUN	ncfs000	Gender=Fem|Number=Sing	7	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	4	punct	_	_
6	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	7	punct	_	SpaceAfter=No
7	hará	hacer	VERB	vmif3s0	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
8	cuatro	cuatro	NUM	az0000	Number=Plur|NumType=Card	9	nummod	_	_
9	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 parataxis	color:blue
1	Ya	ya	ADV	rg	_	2	advmod	_	_
2	mos	mos	PRON	pc1cp000	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	6	parataxis	_	Ortho=nos|SpaceAfter=No
3	...	...	PUNCT	_	PunctType=Comm	2	punct	_	_
4	¡	¡	PUNCT	faa	PunctSide=Ini|PunctType=Excl	6	punct	_	SpaceAfter=No
5	Que	que	SCONJ	cs	_	6	mark	_	_
6	vienen	viener	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	fascistas	fascista	NOUN	ncmp000	Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	6	punct	_	_
10	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	_
11	fascistas	fascista	NOUN	ncmp000	Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No
12	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
13	y	y	CCONJ	cc	_	17	cc	_	_
14	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	rojos	rojo	NOUN	ncmp000	Gender=Masc|Number=Plur	17	nsubj	_	_
16	se	él	PRON	pc0cn000	Case=Acc|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	17	expl:pv	_	_
17	van	ir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	SpaceAfter=No
18	!	!	PUNCT	fat	PunctSide=Fin|PunctType=Excl	17	punct	_	SpaceAfter=No
19	.	.	PUNCT	fp	PunctType=Peri	6	punct	_	_

~~~


