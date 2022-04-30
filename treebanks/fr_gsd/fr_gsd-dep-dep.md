---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="fr_gsd-dep-dep-comp.html">dep:comp</a></tt>.

8 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.625.

The following 6 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 25% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 25% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 13% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep	color:blue
1	Jean-Pascal	Jean-Pascal	PROPN	_	_	0	root	_	_
2	Simonin	Simonin	PROPN	_	_	1	flat:name	_	_
3	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
4	sous	sous	ADP	_	_	6	case	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	direction	direction	NOUN	_	Gender=Fem|Number=Sing	1	parataxis	_	_
7	de	de	ADP	_	_	6	dep	_	SpaceAfter=No
8	)	)	PUNCT	_	_	6	punct	_	_
9	:	:	PUNCT	_	_	10	punct	_	_
10	Jean-Edmond	Jean-Edmond	PROPN	_	_	1	parataxis	_	_
11	Briaune	Briaune	PROPN	_	_	10	flat:name	_	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	cultivateur	cultivateur	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	agronome	agronome	NOUN	_	Gender=Masc|Number=Sing	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	économiste	économiste	NOUN	_	Gender=Masc|Number=Sing	13	conj	_	_
18	(	(	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	Presses	Presses	PROPN	_	_	10	nmod	_	_
20	de	de	ADP	_	_	22	case	_	_
21	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	22	det	_	SpaceAfter=No
22	université	université	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	_
23	d'	de	ADP	_	_	24	case	_	SpaceAfter=No
24	Angers	Angers	PROPN	_	_	22	nmod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	2006	2006	NUM	_	Number=Plur	19	nmod	_	SpaceAfter=No
27	,	,	PUNCT	_	_	26	punct	_	_
28	440	440	NUM	_	Number=Plur	29	nummod	_	_
29	pages	page	NOUN	_	Gender=Fem|Number=Plur	19	nmod	_	SpaceAfter=No
30	)	)	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 dep	color:blue
1	Son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	2	det	_	wordform=son
2	nom	nom	NOUN	_	Gender=Masc|Number=Sing	27	nsubj:pass	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	espèce	espèce	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	composé	composer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	_
7	de	de	ADP	_	_	8	case	_	_
8	daiyun	daiyun	X	_	_	6	obl:arg	_	_
9	et	et	CCONJ	_	_	12	cc	_	_
10	de	de	ADP	_	_	12	case	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	suffixe	suffixe	NOUN	_	Gender=Masc|Number=Sing	8	conj	_	_
13	latin	latin	ADJ	_	Gender=Masc|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	17	punct	_	_
15	«	«	PUNCT	_	_	17	punct	_	_
16	qui	qui	PRON	_	PronType=Rel	17	nsubj	_	InTitle=Yes
17	vit	vivre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	appos	_	ExtPos=PROPN|Title=Yes
18	dans	dans	ADP	_	_	17	dep	_	InTitle=Yes|SpaceAfter=No
19	,	,	PUNCT	_	_	21	punct	_	InTitle=Yes
20	qui	qui	PRON	_	PronType=Rel	21	nsubj	_	InTitle=Yes
21	habite	habiter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	InTitle=Yes
22	»	»	PUNCT	_	_	17	punct	_	SpaceAfter=No
23	,	,	PUNCT	_	_	17	punct	_	_
24	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	iobj	_	_
25	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	aux:tense	_	_
26	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	27	aux:pass	_	_
27	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
28	en	en	ADP	_	_	29	case	_	_
29	référence	référence	NOUN	_	Gender=Fem|Number=Sing	27	obl:mod	_	_
30	à	à	ADP	_	_	32	case	_	_
31	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	_
33	de	de	ADP	_	_	35	case	_	_
34	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	35	det	_	_
35	découverte	découverte	NOUN	_	Gender=Fem|Number=Sing	32	nmod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 35	bgColor:blue
# visual-style 35	fgColor:white
# visual-style 35 37 dep	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	histoire	histoire	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	souvent	souvent	ADV	_	_	6	advmod	_	_
5	très	très	ADV	_	_	6	advmod	_	_
6	similaire	similaire	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	et	et	CCONJ	_	_	9	cc	_	_
9	met	mettre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
10	en	en	ADP	_	_	11	case	_	_
11	scène	scène	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	_
12	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
13	beau	beau	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
14	cheval	cheval	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	_
15	blême	blême	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	_
16	apparaissant	apparaître	VERB	_	Tense=Pres|VerbForm=Part	14	acl	_	_
17	à	à	ADP	_	_	19	case	_	_
18	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	milieu	milieu	NOUN	_	Gender=Masc|Number=Sing	16	obl:mod	_	_
20	de	de	ADP	_	_	22	case	_	_
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	nuit	nuit	NOUN	_	Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	26	punct	_	_
24	qui	qui	PRON	_	PronType=Rel	26	nsubj	_	_
25	se	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	26	obj	_	_
26	laisse	laisser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	acl:relcl	_	_
27	gentiment	gentiment	ADV	_	_	26	advmod	_	_
28	chevaucher	chevaucher	VERB	_	VerbForm=Inf	26	xcomp	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	avant	avant	ADV	_	_	26	advmod	_	_
31	d'	de	ADP	_	_	32	mark	_	SpaceAfter=No
32	échapper	échapper	VERB	_	VerbForm=Inf	30	ccomp	_	_
33	à	à	ADP	_	_	35	case	_	_
34	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	35	det	_	_
35	contrôle	contrôle	NOUN	_	Gender=Masc|Number=Sing	32	obl:arg	_	_
36	de	de	ADP	_	_	37	dep:comp	_	_
37	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	35	dep	_	_
38	ou	ou	CCONJ	_	_	41	cc	_	_
39	de	de	ADP	_	_	41	case	_	_
40	ses	son	DET	_	Number=Plur|Number[psor]=Sing|Person[psor]=3|PronType=Prs	41	det	_	_
41	cavaliers	cavalier	NOUN	_	Gender=Masc|Number=Plur	37	conj	_	SpaceAfter=No
42	.	.	PUNCT	_	_	6	punct	_	_

~~~


