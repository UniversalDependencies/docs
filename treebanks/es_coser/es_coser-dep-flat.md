---
layout: base
title:  'Statistics of flat in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `flat`

This relation is universal.

11 nodes (0%) are attached to their parents as `flat`.

11 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45454545454545.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (7; 64% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 flat	color:blue
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


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 36 37 flat	color:blue
1	Y	y	CCONJ	cc	_	2	cc	_	_
2	estuvo	estar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	don	don	NOUN	ncms000	Gender=Masc|Number=Sing	2	nsubj	_	MWE=don_NP|MWEPOS=PROPN
4	NP	NP	PROPN	_	_	3	flat	_	_
5	aquí	aquí	ADV	rg	_	3	advmod	_	_
6	en	en	ADP	sps00	_	8	case	_	_
7	esta	este	DET	dd0fs0	Gender=Fem|Number=Sing|PronType=Dem	8	det	_	_
8	casa	casa	NOUN	ncfs000	Gender=Fem|Number=Sing	2	obl	_	_
9	de	de	ADP	sps00	_	10	case	_	_
10	NP	NP	PROPN	_	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	fc	PunctType=Comm	2	punct	_	_
12	tuvo	estar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	Ortho=estuvo
13	don	don	NOUN	ncms000	Gender=Masc|Number=Sing	12	nsubj	_	MWE=don_NP|MWEPOS=PROPN
14	NP	NP	PROPN	_	_	13	flat	_	_
15	y	y	CCONJ	cc	_	17	cc	_	_
16	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	NP	NP	PROPN	_	_	13	conj	_	_
18	y	y	CCONJ	cc	_	20	cc	_	_
19	estuvo	estar	AUX	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	20	aux	_	_
20	viviendo	vivir	VERB	vmg0000	VerbForm=Ger	12	conj	_	_
21	aquí	aquí	ADV	rg	_	20	advmod	_	_
22	y	y	CCONJ	cc	_	23	cc	_	_
23	estuvo	estar	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	12	conj	_	_
24	otro	otro	DET	di0ms0	Gender=Masc|Number=Sing|PronType=Ind	25	det	_	_
25	don	don	NOUN	ncms000	Gender=Masc|Number=Sing	23	nsubj	_	MWE=don_NP|MWEPOS=PROPN
26	NP	NP	PROPN	_	_	25	flat	_	_
27	ahí	ahí	ADV	rg	_	23	advmod	_	_
28	donde	donde	ADV	pr000000	_	29	advmod	_	_
29	NP	NP	PROPN	_	_	31	nsubj	_	_
30	también	también	ADV	rg	_	31	advmod	_	_
31	viviendo	vivir	VERB	vmg0000	VerbForm=Ger	23	advcl	_	_
32	aquí	aquí	ADV	rg	_	31	advmod	_	SpaceAfter=No
33	,	,	PUNCT	fc	PunctType=Comm	36	punct	_	_
34	y	y	CCONJ	cc	_	36	cc	_	_
35	estuvo	estar	AUX	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	36	cop	_	_
36	don	don	NOUN	ncms000	Gender=Masc|Number=Sing	31	conj	_	MWE=don_NP|MWEPOS=PROPN
37	NP	NP	PROPN	_	_	36	flat	_	_

~~~


