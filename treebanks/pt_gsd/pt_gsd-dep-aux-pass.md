---
layout: base
title:  'Statistics of aux:pass in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-aux.html">aux</a></tt>.

2446 nodes (1%) are attached to their parents as `aux:pass`.

2445 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06091578086672.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2441; 100% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pt_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Os	o	DET	DET	_	2	det	_	_
2	cuidados	cuidado	NOUN	NOUN	_	7	nsubj:pass	_	_
3	de	_	ADP	ADP	_	4	mark	_	_
4	sempre	sempre	ADV	ADV	_	2	nmod	_	_
5	estão	estar	AUX	AUX	_	7	aux	_	_
6	sendo	ser	AUX	AUX	_	7	aux:pass	_	_
7	tomados	tomar	VERB	VERB	_	0	root	_	_
8	por	por	ADP	ADP	_	10	case	_	_
9	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	consumidor	consumidor	NOUN	NOUN	_	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Muitas	_	DET	DET	_	2	det	_	_
2	soluções	solução	NOUN	NOUN	_	4	nsubj:pass	_	_
3	foram	_	AUX	AUX	_	4	aux:pass	_	_
4	propostas	_	NOUN	NOUN	_	0	root	_	_
5	para	_	ADP	ADP	_	6	mark	_	_
6	compensarem	compensar	VERB	VERB	_	4	advcl	_	_
7	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	vítimas	vítima	NOUN	NOUN	_	6	obj	_	_
9	enquanto	_	CCONJ	CONJ	_	11	mark	_	_
10	não	não	ADV	ADV	Polarity=Neg	11	advmod	_	_
11	quebrando	quebrar	VERB	VERB	_	6	advcl	_	_
12	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Chisso	_	PROPN	PNOUN	_	11	obj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 aux:pass	color:blue
1	A	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	decisão	decisão	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
3	de	de	ADP	_	_	5	case	_	_
4	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	treinador	treinador	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
6	Avram	Avram	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	5	appos	_	_
7	Grant	Grant	PROPN	_	Number=Sing	6	flat:name	_	_
8	acabou	acabar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
9	sendo	ser	AUX	_	VerbForm=Ger	11	aux:pass	_	_
10	bastante	bastante	ADV	_	_	11	advmod	_	_
11	criticada	criticado	ADJ	_	Gender=Fem|Number=Sing	8	xcomp	_	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	_	_
13	pois	pois	SCONJ	_	_	16	mark	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	francês	francês	NOUN	_	Gender=Masc|Number=Sing	16	nsubj	_	_
16	perderia	perder	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	11	advcl	_	_
17	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	pênalti	pênalti	NOUN	_	Gender=Masc|Number=Sing	16	obj	_	_
19	decisivo	decisivo	ADJ	_	Gender=Masc|Number=Sing	18	amod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	8	punct	_	SpaceAfter=No

~~~


