---
layout: base
title:  'Statistics of nummod in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `nummod`

This relation is universal.

49 nodes (1%) are attached to their parents as `nummod`.

45 instances of `nummod` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6734693877551.

The following 5 pairs of parts of speech are connected with `nummod`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (43; 88% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (3; 6% instances), <tt><a href="es_coser-pos-DET.html">DET</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 2% instances).


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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nummod	color:blue
1	Y	y	CCONJ	_	_	3	cc	_	_
2	casualmente	casualmente	ADV	_	_	3	advmod	_	_
3	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	derroche	derroche	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	de	de	ADP	_	_	6	case	_	_
6	pólvora	pólvora	NOUN	_	Gender=Fem|Number=Sing	4	nmod	_	_
7	y	y	CCONJ	_	_	9	cc	_	_
8	de	de	ADP	_	_	9	case	_	_
9	música	música	NOUN	_	Gender=Fem|Number=Sing	6	conj	_	_
10	en	en	ADP	_	_	13	case	_	_
11	esos	ese	DET	_	Gender=Masc|Number=Plur|PronType=Dem	13	det	_	_
12	dos	dos	NUM	_	Number=Plur|NumType=Card	11	nummod	_	_
13	días	día	NOUN	_	Gender=Masc|Number=Plur	3	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


