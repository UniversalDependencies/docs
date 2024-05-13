---
layout: base
title:  'Statistics of appos in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `appos`

This relation is universal.

20 nodes (0%) are attached to their parents as `appos`.

20 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.85.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (8; 40% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (2; 10% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 appos	color:blue
1	Sí	sí	INTJ	rg	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	pero	pero	CCONJ	cc	_	5	cc	_	_
4	en	en	ADP	sps00	_	5	case	_	_
5	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	5	punct	_	_
7	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
8	padres	padre	NOUN	ncmp000	Gender=Masc|Number=Plur	5	appos	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	8	punct	_	_
10	no	no	ADV	rn	Polarity=Neg	13	advmod	_	_
11	en	en	ADP	sps00	_	13	case	_	_
12	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	colegio	colegio	NOUN	ncms000	Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 appos	color:blue
1	Te	tú	PRON	_	Case=Acc,Dat|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	2	obl:arg	_	_
2	cuento	contar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	lo	él	PRON	da0ns0	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	obj	_	_
4	de	de	ADP	sps00	_	6	case	_	_
5	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	madre	madre	NOUN	ncfs000	Gender=Fem|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	8	punct	_	_
8	eh	eh	INTJ	i	_	3	discourse:filler	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	8	punct	_	_
10	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	caso	caso	NOUN	ncms000	Gender=Masc|Number=Sing	3	appos	_	_
12	de	de	ADP	sps00	_	14	case	_	_
13	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	14	det	_	_
14	madre	madre	NOUN	ncfs000	Gender=Fem|Number=Sing	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
16	porque	porque	SCONJ	cs	_	17	mark	_	_
17	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	parataxis	_	_
18	no	no	ADV	rn	Polarity=Neg	17	advmod	_	SpaceAfter=No
19	.	.	PUNCT	fp	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 appos	color:blue
1	a	a	ADP	sps00	_	3	case	_	_
2	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	sobrino	sobrino	NOUN	ncms000	Gender=Masc|Number=Sing	0	root	_	_
4	mío	mío	DET	ap1ms0	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	3	det	_	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	7	punct	_	_
6	a	a	ADP	sps00	_	7	case	_	_
7	NP	NP	PROPN	_	_	3	appos	_	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	3	punct	_	_

~~~


