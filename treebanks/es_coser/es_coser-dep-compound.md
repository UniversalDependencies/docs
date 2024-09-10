---
layout: base
title:  'Statistics of compound in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `compound`

This relation is universal.

17 nodes (0%) are attached to their parents as `compound`.

17 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47058823529412.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-CCONJ.html">CCONJ</a></tt> (6; 35% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (6; 35% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 compound	color:blue
1	Mira	mirar	VERB	vmm02s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	mira	mirar	VERB	vmm02s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	advcl	_	_
4	si	si	SCONJ	cs	_	7	mark	_	_
5	los	él	PRON	pc1cp000	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	nsubj:pass	_	_
6	hemos	haber	AUX	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	hecho	hacer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	viejos	viejo	ADJ	aq0mp0	Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	7	punct	_	_
10	que	que	SCONJ	cs	_	13	obj	_	_
11	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
12	ya	ya	ADV	rg	_	13	advmod	_	_
13	voy	ir	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	_	_
14	en	en	ADP	sps00	_	16	case	_	_
15	ochenta	ochenta	NUM	az0000	Number=Plur|NumType=Card	16	nummod	_	_
16	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	13	obl	_	_
17	y	y	CCONJ	cc	_	18	cc	_	_
18	ella	él	PRON	pp3fs000	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	conj	_	_
19	en	en	ADP	sps00	_	20	case	_	_
20	setenta	setenta	NUM	az0000	Number=Plur|NumType=Card	18	nmod	_	MWE=setenta_y_siete|MWEPOS=NUM
21	y	y	CCONJ	cc	_	20	compound	_	_
22	siete	siete	NUM	az0000	Number=Plur|NumType=Card	20	compound	_	SpaceAfter=No
23	.	.	PUNCT	fp	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 compound	color:blue
1	Mira	mirar	VERB	vmm02s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	mira	mirar	VERB	vmm02s0	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	1	advcl	_	_
4	si	si	SCONJ	cs	_	7	mark	_	_
5	los	él	PRON	pc1cp000	Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs	7	nsubj:pass	_	_
6	hemos	haber	AUX	vmip1p0	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	hecho	hacer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	viejos	viejo	ADJ	aq0mp0	Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	7	punct	_	_
10	que	que	SCONJ	cs	_	13	obj	_	_
11	yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
12	ya	ya	ADV	rg	_	13	advmod	_	_
13	voy	ir	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	_	_
14	en	en	ADP	sps00	_	16	case	_	_
15	ochenta	ochenta	NUM	az0000	Number=Plur|NumType=Card	16	nummod	_	_
16	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	13	obl	_	_
17	y	y	CCONJ	cc	_	18	cc	_	_
18	ella	él	PRON	pp3fs000	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	conj	_	_
19	en	en	ADP	sps00	_	20	case	_	_
20	setenta	setenta	NUM	az0000	Number=Plur|NumType=Card	18	nmod	_	MWE=setenta_y_siete|MWEPOS=NUM
21	y	y	CCONJ	cc	_	20	compound	_	_
22	siete	siete	NUM	az0000	Number=Plur|NumType=Card	20	compound	_	SpaceAfter=No
23	.	.	PUNCT	fp	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 compound	color:blue
1	Bueno	bueno	INTJ	_	_	11	discourse	_	_
2	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	fiestas	fiesta	NOUN	_	Gender=Fem|Number=Plur	11	nsubj	_	_
4	patronales	patronal	ADJ	_	Number=Plur	3	amod	_	_
5	en	en	ADP	_	_	6	case	_	_
6	Rio	Rio	PROPN	_	_	3	obl	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Oro	Oro	PROPN	_	_	6	flat	_	_
9	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	11	punct	_	SpaceAfter=No
10	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	11	punct	_	SpaceAfter=No
11	incipian	incipiar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
12	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	11	punct	_	SpaceAfter=No
13	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	11	punct	_	_
14	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	treinta	treinta	NUM	_	NumType=Card	11	obl	_	_
16	de	de	ADP	_	_	17	case	_	_
17	agosto	agosto	NOUN	_	_	15	compound	_	SpaceAfter=No
18	.	.	PUNCT	_	PunctType=Peri	11	punct	_	_

~~~


