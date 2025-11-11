---
layout: base
title:  'Statistics of nummod in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `nummod`

This relation is universal.

49 nodes (1%) are attached to their parents as `nummod`.

47 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6734693877551.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (45; 92% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (3; 6% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 nummod	color:blue
1	Yo	yo	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj:pass	_	_
2	he	haber	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	ganado	ganar	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	por	por	ADP	_	_	5	case	_	_
5	ahí	ahí	ADV	_	_	3	advmod	_	SpaceAfter=No
6	...	...	PUNCT	_	PunctType=Comm	5	punct	_	_
7	pues	pues	SCONJ	_	_	9	discourse	_	_
8	si	si	SCONJ	_	_	9	mark	_	_
9	quiere	querer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
10	por	por	ADP	_	_	11	case	_	_
11	ahí	ahí	ADV	_	_	9	advmod	_	_
12	unos	uno	DET	_	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	13	det	_	_
13	cincuenta	cincuenta	NUM	_	Number=Plur|NumType=Card	9	obj	_	SpaceAfter=No
14	,	,	PUNCT	_	PunctType=Comm	15	punct	_	_
15	dos	dos	NUM	_	Number=Plur|NumType=Card	16	nummod	_	_
16	cincuenta	cincuenta	NUM	_	NumType=Card	9	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	PunctType=Comm	16	punct	_	_
18	por	por	ADP	_	_	19	case	_	_
19	ahí	ahí	ADV	_	_	21	advmod	_	_
20	tres	tres	NUM	_	Number=Plur|NumType=Card	21	nummod	_	_
21	pesos	pesos	NOUN	_	NumForm=Digit	9	obl	_	SpaceAfter=No
22	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	He	haber	AUX	vmip1s0	Mood=Ind|Number=Sing|Person=2|VerbForm=Fin	2	aux	_	_
2	criao	criar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	Ortho=criado
3	cinco	cinco	NUM	az0000	Number=Plur|NumType=Card	2	nummod	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
5	eh	eh	INTJ	i	_	2	discourse:filler	_	SpaceAfter=No
6	;	;	PUNCT	fx	PunctType=Semi	5	punct	_	_
7	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	8	det	_	_
8	mujer	mujer	NOUN	ncfs000	Gender=Fem|Number=Sing	11	nsubj:pass	_	_
9	no	no	ADV	rn	Polarity=Neg	11	advmod	_	_
10	ha	haber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	trabajao	trabajar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	advcl	_	Ortho=trabajado|SpaceAfter=No
12	...	...	PUNCT	_	PunctType=Comm	11	punct	_	_
13	O	o	CCONJ	cc	_	11	discourse	_	SpaceAfter=No
14	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
15	joé	joé	INTJ	i	_	11	discourse	_	SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	20	punct	_	_
17	que	que	SCONJ	pr0cn000	_	20	mark	_	_
18	no	no	ADV	rn	Polarity=Neg	20	advmod	_	_
19	ha	haber	AUX	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux:pass	_	_
20	trabajao	trabajar	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	11	advcl	_	Ortho=trabajado|SpaceAfter=No
21	...	...	PUNCT	_	PunctType=Comm	20	punct	_	_
22	¿	¿	PUNCT	_	PunctSide=Ini|PunctType=Qest	25	punct	_	SpaceAfter=No
23	Por	por	ADP	_	_	24	case	_	_
24	dónde	dónde	PRON	_	PronType=Int	25	obl	_	_
25	está	estar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	parataxis	_	SpaceAfter=No
26	?	?	PUNCT	_	PunctSide=Fin|PunctType=Qest	2	punct	_	_

~~~


