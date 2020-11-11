---
layout: base
title:  'Statistics of dep in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="fr_gsd-dep-dep-comp.html">dep:comp</a></tt>.

94 nodes (0%) are attached to their parents as `dep`.

87 instances of `dep` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18085106382979.

The following 9 pairs of parts of speech are connected with `dep`: <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PART.html">PART</a></tt> (84; 89% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	Va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|wordform=va
2	-t	t	PART	_	_	3	dep	_	SpaceAfter=No
3	-il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	wordform=il
4	se	se	PRON	_	Person=3|PronType=Prs	5	expl:pass	_	_
5	circonscrire	circonscrire	VERB	_	VerbForm=Inf	1	xcomp:obj	_	_
6	à	à	ADP	_	_	9	case	_	_
7	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	9	det	_	_
8	seule	seul	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
9	matière	matière	NOUN	_	Gender=Fem|Number=Sing	5	obl:arg	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 dep	color:blue
1	De	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	3	det	_	wordform=de
2	nouveaux	nouveau	ADJ	_	Gender=Masc|Number=Plur	3	amod	_	_
3	propriétaires	propriétaire	NOUN	_	Gender=Masc|Number=Plur	0	root	_	_
4	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	_
5	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
6	rendu	rendre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl:relcl	_	_
7	cet	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	hôtel	hôtel	NOUN	_	Gender=Masc|Number=Sing	6	obj	_	_
9	très	très	ADV	_	_	10	advmod	_	_
10	attrayant	attrayant	ADJ	_	Gender=Masc|Number=Sing	6	xcomp:pred	_	_
11	grâce	grâce	NOUN	_	_	14	case	_	ExtPos=ADP|PhraseType=Idiom
12	à	à	ADP	_	_	11	fixed	_	_
13	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	14	det	_	_
14	chambres	chambre	NOUN	_	Gender=Fem|Number=Plur	10	obl:mod	_	_
15	joliement	joliement	ADV	_	_	16	advmod	_	_
16	rénovées	rénover	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	14	acl	_	_
17	et	et	CCONJ	_	_	22	cc	_	_
18	grâce	grâce	NOUN	_	_	22	dep	_	ExtPos=ADP|PhraseType=Idiom
19	aussi	aussi	ADV	_	_	22	advmod	_	_
20	à	à	ADP	_	_	18	dep:comp	_	InIdiom=Yes
21	leur	son	DET	_	Number=Sing|PossNumber=Plur|PossPerson=3|PronType=Prs	22	det	_	_
22	accueil	accueil	NOUN	_	Gender=Masc|Number=Sing	14	conj	_	_
23	de	de	ADP	_	_	26	case	_	_
24	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	26	det	_	_
25	plus	plus	ADV	_	_	26	advmod	_	_
26	chaleureux	chaleureux	ADJ	_	Gender=Masc|Number=Plur	22	nmod	_	_
27	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 dep	color:blue
1	Son	son	DET	_	Number=Sing|PossNumber=Sing|PossPerson=3|PronType=Prs	2	det	_	wordform=son
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
17	vit	vivre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	appos	_	ExtPos=PROPN|PhraseType=Title
18	dans	dans	ADP	_	_	17	dep	_	InTitle=Yes|SpaceAfter=No
19	,	,	PUNCT	_	_	21	punct	_	InTitle=Yes
20	qui	qui	PRON	_	PronType=Rel	21	nsubj	_	InTitle=Yes
21	habite	habiter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	_	InTitle=Yes
22	»	»	PUNCT	_	_	17	punct	_	SpaceAfter=No
23	,	,	PUNCT	_	_	17	punct	_	_
24	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	obl:arg	_	_
25	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	27	aux:tense	_	_
26	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	27	aux:pass	_	_
27	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
28	en	en	ADP	_	_	29	case	_	_
29	référence	référence	NOUN	_	Gender=Fem|Number=Sing	27	obl:mod	_	_
30	à	à	ADP	_	_	32	case	_	_
31	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
32	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	29	nmod	_	_
33	de	de	ADP	_	_	35	case	_	_
34	sa	son	DET	_	Gender=Fem|Number=Sing|PossNumber=Sing|PossPerson=3|PronType=Prs	35	det	_	_
35	découverte	découverte	NOUN	_	Gender=Fem|Number=Sing	32	nmod	_	SpaceAfter=No
36	.	.	PUNCT	_	_	27	punct	_	_

~~~


