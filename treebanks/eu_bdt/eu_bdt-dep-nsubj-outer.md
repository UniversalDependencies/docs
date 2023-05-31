---
layout: base
title:  'Statistics of nsubj:outer in UD_Basque-BDT'
udver: '2'
---

## Treebank Statistics: UD_Basque-BDT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="eu_bdt-dep-nsubj.html">nsubj</a></tt>.

6 nodes (0%) are attached to their parents as `nsubj:outer`.

6 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.66666666666667.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-DET.html">DET</a></tt> (1; 17% instances), <tt><a href="eu_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="eu_bdt-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	Nafarren	nafar	NOUN	_	Animacy=Anim|Case=Gen|Definite=Def|Number=Plur	2	nmod	_	_
2	helburua	helburu	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	9	nsubj:outer	_	_
3	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	9	cop	_	_
4	Europako	Europa	PROPN	_	Case=Loc|Definite=Def|Number=Sing	5	nmod	_	_
5	Superkoparako	Superkopa	PROPN	_	Case=Loc|Definite=Def|Number=Sing	7	obl	_	_
6	Hombrados	Hombrados	PROPN	_	_	9	nsubj	_	_
7	jokatzeko	jokatu	VERB	_	Case=Abs|Definite=Ind|VerbForm=Fin	9	advcl	_	_
8	prest	prest	ADV	_	_	9	advmod	_	_
9	egotea	egon	VERB	_	Case=Abs|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 15 nsubj:outer	color:blue
1	Horregatik	horregatik	ADV	_	_	4	advmod	_	_
2	Bozak	boz	NOUN	_	Case=Abs|Definite=Def|Number=Plur	3	obj	_	_
3	deitu	deitu	VERB	_	VerbForm=Part	4	xcomp	_	_
4	beharko	behar_izan	VERB	_	VerbForm=Fin	0	root	_	_
5	lituzkete	edun	AUX	_	Mood=Cnd|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=3|VerbForm=Fin	4	aux	_	ReconstructedLemma=Yes
6	egun	egun	NOUN	_	_	3	obl	_	_
7	berean	bera	DET	_	Case=Ine|Number=Sing	6	det	_	SpaceAfter=No
8	,	,	PUNCT	_	_	6	punct	_	_
9	Serbiako	Serbia	PROPN	_	Case=Loc|Definite=Def|Number=Sing	11	nmod	_	_
10	beste	beste	DET	_	_	11	det	_	_
11	lurraldeek	lurralde	NOUN	_	Case=Erg	3	obl	_	_
12	bezala	bezala	ADP	_	Definite=Def|Number=Plur	11	case	_	SpaceAfter=No
13	,	,	PUNCT	_	_	26	punct	_	_
14	eta	eta	CCONJ	_	_	26	cc	_	_
15	hori	hori	DET	_	Case=Abs|Definite=Def|Number=Sing	26	nsubj:outer	_	_
16	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	26	cop	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	hain	hain	ADV	_	_	26	advmod	_	_
19	zuzen	zuzen	ADJ	_	Case=Abs|Definite=Ind	18	fixed	_	SpaceAfter=No
20	,	,	PUNCT	_	_	18	punct	_	_
21	bertako	bertako	ADJ	_	_	22	amod	_	_
22	agintariek	agintari	NOUN	_	Animacy=Anim|Case=Erg|Definite=Def|Number=Plur	26	nsubj	_	_
23	Nazio	nazio	NOUN	_	_	25	nmod	_	_
24	Batuen	batu	ADJ	_	Case=Gen|Definite=Def|Number=Plur	23	amod	_	_
25	Erakundeari	erakunde	NOUN	_	Case=Dat|Definite=Def|Number=Sing	26	iobj	_	_
26	eskatu	eskatu	VERB	_	Aspect=Perf|VerbForm=Part	4	conj	_	_
27	diotena	edun	AUX	_	Case=Abs|Definite=Def|Mood=Ind|Number=Sing|Number[abs]=Sing|Number[dat]=Sing|Number[erg]=Plur|Person[abs]=3|Person[dat]=3|Person[erg]=3|VerbForm=Fin	26	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:outer	color:blue
1	Wilma	Wilma	PROPN	_	Case=Abs|Definite=Def|Number=Sing	6	nsubj:outer	_	_
2	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3|VerbForm=Fin	6	cop	_	_
3	Jojok	Jojo	PROPN	_	Case=Erg|Definite=Def|Number=Sing	6	nsubj	_	_
4	kontratua	kontratu	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
5	azkena	azken	ADJ	_	NumType=Ord	6	obl	_	_
6	luzatzen	luzatu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
7	diona	edun	AUX	_	Case=Abs|Definite=Def|Mood=Ind|Number=Sing|Number[abs]=Sing|Number[dat]=Sing|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3|VerbForm=Fin	6	aux	_	ReconstructedLemma=Yes|SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


