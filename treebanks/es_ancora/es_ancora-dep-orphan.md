---
layout: base
title:  'Statistics of orphan in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `orphan`

This relation is universal.

36 nodes (0%) are attached to their parents as `orphan`.

35 instances of `orphan` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (22; 61% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (8; 22% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 orphan	color:blue
1	Juego	juego	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
2	diversión	diversión	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
4	lucidez	lucidez	NOUN	NOUN	Gender=Fem|Number=Sing	1	conj	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	PunctType=Comm	4	punct	_	_
6	espectáculo	espectáculo	NOUN	NOUN	Gender=Masc|Number=Sing	4	orphan	_	_
7	al	al	ADP	ADP	AdpType=Preppron	6	advmod	_	MWE=al_fin|MWEPOS=ADV
8	fin	fin	NOUN	NOUN	_	7	fixed	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 orphan	color:blue
1	Fran	Fran	PROPN	PROPN	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
3	Bebeto	Bebeto	PROPN	PROPN	_	1	conj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
5	Aldana	Aldana	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
7	Nando	Nando	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
9	Djukic	Djukic	PROPN	PROPN	_	3	orphan	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	PunctType=Comm	3	punct	_	_
11	Mauro	Mauro	PROPN	PROPN	_	3	orphan	_	MWE=Mauro_Silva|MWEPOS=PROPN
12	Silva	Silva	PROPN	PROPN	_	11	flat	_	SpaceAfter=No
13	...	...	PUNCT	PUNCT	PunctType=Comm	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 orphan	color:blue
1	Ni	ni	CCONJ	CCONJ	_	2	cc	_	_
2	plenos	pleno	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
3	ni	ni	CCONJ	CCONJ	_	4	cc	_	_
4	comisiones	comisión	NOUN	NOUN	Gender=Fem|Number=Plur	2	conj	_	_
5	ni	ni	CCONJ	CCONJ	_	4	cc	_	_
6	nada	nada	PRON	PRON	Number=Sing|PronType=Neg	4	orphan	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	2	punct	_	_

~~~


