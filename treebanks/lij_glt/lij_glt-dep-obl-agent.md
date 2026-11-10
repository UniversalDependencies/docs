---
layout: base
title:  'Statistics of obl:agent in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="lij_glt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="lij_glt-dep-obl-arg.html">obl:arg</a></tt>.

7 nodes (0%) are attached to their parents as `obl:agent`.

7 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:agent	color:blue
1	Interpretâ	interpretâ	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	da	da	ADP	_	_	4	case	_	_
3	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	_	_
4	artisti	artista	NOUN	_	Gender=Masc|Number=Plur	1	obl:agent	_	_
5	ciù	ciù	ADV	_	_	6	advmod	_	_
6	avvoxæ	avvoxou	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	anche	anche	ADV	_	_	9	advmod	_	_
9	foresti	foresto	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 obl:agent	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	l'	l'	PART	_	_	4	dep	_	SpaceAfter=No
3	à	avei	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	fæto	fâ	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	stâ	stâ	VERB	_	Tense=Pres|VerbForm=Inf	4	xcomp	_	_
6	ben	ben	ADV	_	_	5	advmod	_	_
7	tanti	tanto	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	4	obj	_	_
8	de	de	ADP	_	_	9	case	_	_
9	quelli	quello	PRON	_	Gender=Masc|Number=Plur|PronType=Dem	7	nmod	_	_
10	ch'	che	PRON	_	PronType=Rel	12	nsubj:pass	_	SpaceAfter=No
11	ean	ëse	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	12	aux:pass	_	_
12	afferræ	afferrâ	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	9	acl:relcl	_	_
13	da	da	ADP	_	_	14	case	_	_
14	uña	un	PRON	_	Gender=Fem|Number=Sing|PronType=Ind	12	obl:agent	_	_
15	ò	ò	CCONJ	_	_	19	cc	_	_
16	da	da	ADP	_	_	19	case	_	_
17	l'	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	SpaceAfter=No
18	atra	atro	DET	_	Gender=Fem|Number=Sing|PronType=Ind	19	det	_	_
19	mouttia	moutia	NOUN	_	Gender=Fem|Number=Sing|Typo=Yes	14	conj	_	CorrectForm=moutia
20	e	e	CCONJ	_	_	24	cc	_	_
21	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	nsubj	_	_
22	l'	l'	PART	_	_	24	dep	_	SpaceAfter=No
23	à	avei	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux	_	_
24	mandou	mandâ	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
25	via	via	ADV	_	_	24	advmod	_	_
26	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	muggio	muggio	NOUN	_	Gender=Masc|Number=Sing	24	obj	_	_
28	de	de	ADP	_	_	29	case	_	_
29	diäi	diao	NOUN	_	Gender=Masc|Number=Plur	27	nmod	_	SpaceAfter=No
30	;	;	PUNCT	_	_	37	punct	_	_
31	ma	ma	CCONJ	_	_	37	cc	_	_
32	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	33	det	_	_
33	diäi	diao	NOUN	_	Gender=Masc|Number=Plur	37	dislocated	_	_
34	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	37	nsubj	_	_
35	no	no	ADV	_	_	37	advmod	_	_
36	î	ô	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	37	obj	_	_
37	lasciava	lasciâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	parataxis	_	_
38	parlâ	parlâ	VERB	_	Tense=Pres|VerbForm=Inf	37	xcomp	_	SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	_
40	perché	perché	SCONJ	_	_	42	mark	_	_
41	ô	ô	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	42	obj	_	_
42	conosceivan	conosce	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	37	advcl	_	SpaceAfter=No
43	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 28 obl:agent	color:blue
1	Les	le	DET	_	Definite=Def|Foreign=Yes|Number=Plur|PronType=Art	2	det	_	Lang=fr
2	Aventures	aventure	NOUN	_	Foreign=Yes|Gender=Fem|Number=Plur	9	nsubj	_	Lang=fr
3	de	de	ADP	_	Foreign=Yes	4	case	_	Lang=fr
4	Tintin	Tintin	PROPN	_	Foreign=Yes|Gender=Masc|Number=Sing	2	nmod	_	Lang=fr
5	a	o	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	expl	_	_
6	l'	l'	PART	_	_	9	dep	_	SpaceAfter=No
7	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	unna	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	colleçion	colleçion	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
10	belga	belga	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	_
11	de	de	ADP	_	_	12	case	_	_
12	stöie	stöia	NOUN	_	Gender=Fem|Number=Plur	9	nmod	_	_
13	disegnæ	disegnou	ADJ	_	Gender=Fem|Number=Plur	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	dæta	dâ	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	9	acl	_	_
16	à	à	ADP	_	_	18	case	_	_
17	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
18	luxe	luxe	NOUN	_	Gender=Fem|Number=Sing	15	obl:arg	_	_
19	e	e	CCONJ	_	_	20	cc	_	_
20	produta	produe	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	15	conj	_	_
21	da	da	ADP	_	_	23	case	_	_
22	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	1929	1929	NUM	_	NumType=Card	15	obl	_	_
24	à	à	ADP	_	_	26	case	_	_
25	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	1983	1983	NUM	_	NumType=Card	15	obl	_	_
27	da	da	ADP	_	_	28	case	_	_
28	Hergé	Hergé	PROPN	_	Gender=Masc|Number=Sing	15	obl:agent	_	_
29	(	(	PUNCT	_	_	30	punct	_	SpaceAfter=No
30	nommiagio	nommiagio	NOUN	_	Gender=Masc|Number=Sing	28	appos	_	_
31	de	de	ADP	_	_	32	case	_	_
32	Georges	Georges	PROPN	_	Gender=Masc|Number=Sing	30	nmod	_	_
33	Remi	Remi	PROPN	_	Gender=Masc|Number=Sing	32	flat	_	SpaceAfter=No
34	)	)	PUNCT	_	_	30	punct	_	_
35	e	e	CCONJ	_	_	36	cc	_	_
36	basâ	basâ	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	15	conj	_	_
37	in	in	ADP	_	ExtPos=ADP	40	case	_	_
38	sce	sce	ADP	_	_	37	fixed	_	_
39	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	40	det	_	_
40	personaggio	personaggio	NOUN	_	Gender=Masc|Number=Sing	36	obl:arg	_	_
41	de	de	ADP	_	_	42	case	_	_
42	fantaxia	fantaxia	NOUN	_	Gender=Fem|Number=Sing	40	nmod	_	_
43	Tintin	Tintin	PROPN	_	Gender=Masc|Number=Sing	40	appos	_	SpaceAfter=No
44	,	,	PUNCT	_	_	47	punct	_	_
45	ch'	che	PRON	_	PronType=Rel	47	nsubj	_	SpaceAfter=No
46	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	47	expl	_	_
47	dà	dâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	40	acl:relcl	_	_
48	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	49	det	_	_
49	nomme	nomme	NOUN	_	Gender=Masc|Number=Sing	47	obj	_	_
50	à	à	ADP	_	_	52	case	_	_
51	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	52	det	_	_
52	collaña	collaña	NOUN	_	Gender=Fem|Number=Sing	47	obl:arg	_	_
53	mæxima	mæximo	ADJ	_	Gender=Fem|Number=Sing	52	amod	_	SpaceAfter=No
54	.	.	PUNCT	_	_	9	punct	_	SpacesAfter=\n

~~~


