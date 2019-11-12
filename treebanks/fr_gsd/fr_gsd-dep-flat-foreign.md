---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

862 nodes (0%) are attached to their parents as `flat:foreign`.

862 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.76914153132251.

The following 6 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (844; 98% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (8; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Falling	Falling	X	_	Foreign=Yes	6	nsubj	_	EXTPOS=PROPN|Foreign=en|Type=Title
2	Out	Out	X	_	Foreign=Yes	1	flat:foreign	_	Foreign=en|INTITLE=Yes
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Peter	Peter	X	_	Foreign=Yes	6	nmod	_	Foreign=en
9	Bjorn	Bjorn	X	_	Foreign=Yes	8	flat:foreign	_	Foreign=en
10	and	and	X	_	Foreign=Yes	8	flat:foreign	_	Foreign=en
11	John	John	X	_	Foreign=Yes	8	flat:foreign	_	Foreign=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 flat:foreign	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
2	premier	premier	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	single	single	NOUN	_	Gender=Masc|Number=Sing	16	nsubj	_	_
4	extrait	extraire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	de	de	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	album	album	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	4	4	NUM	_	Foreign=Yes	3	appos	_	Foreign=en
11	Seasons	Seasons	X	_	Foreign=Yes	10	flat:foreign	_	Foreign=en
12	of	of	X	_	Foreign=Yes	10	flat:foreign	_	Foreign=en
13	Loneliness	Loneliness	X	_	Foreign=Yes	10	flat:foreign	_	Foreign=en|SpaceAfter=No
14	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
15	,	,	PUNCT	_	_	10	punct	_	_
16	sortit	sortir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
17	en	en	ADP	_	_	18	case	_	_
18	aout	août	NOUN	_	Gender=Masc|Number=Sing	16	obl	_	_
19	1997	1997	NUM	_	_	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 flat:foreign	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	élections	élection	NOUN	_	Gender=Fem|Number=Plur	18	nsubj	_	_
3	législatives	législatif	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
4	régionales	régional	ADJ	_	Gender=Fem|Number=Plur	2	amod	_	_
5	de	de	ADP	_	_	6	case	_	_
6	2000	2000	NUM	_	_	2	nmod	_	_
7	dans	dans	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Schleswig-Holstein	Schleswig-Holstein	PROPN	_	_	2	nmod	_	_
10	(	(	PUNCT	_	_	11	punct	_	SpaceAfter=No
11	Landtagswahl	Landtagswahl	X	_	Foreign=Yes	2	appos	_	Foreign=en
12	in	in	X	_	Foreign=Yes	11	flat:foreign	_	Foreign=en
13	Schleswig-Holstein	Schleswig-Holstein	X	_	Foreign=Yes	11	flat:foreign	_	Foreign=en
14	2000	2000	NUM	_	Foreign=Yes	11	flat:foreign	_	Foreign=en|SpaceAfter=No
15	)	)	PUNCT	_	_	11	punct	_	_
16	se	se	PRON	_	Person=3|PronType=Prs	18	expl:pass	_	_
17	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	18	aux:tense	_	_
18	tenues	tenir	VERB	_	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
19	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	27	27	NUM	_	_	18	obl	_	_
21	février	février	NOUN	_	Gender=Masc|Number=Sing	20	nmod	_	_
22	2000	2000	NUM	_	_	21	nmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	afin	afin	ADV	_	_	18	advmod	_	_
25	d'	de	ADP	_	_	26	mark	_	SpaceAfter=No
26	élire	élire	VERB	_	VerbForm=Inf	24	ccomp	_	_
27	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	29	det	_	_
28	soixante-quinze	soixante-quinze	NUM	_	_	29	nummod	_	_
29	députés	député	NOUN	_	Gender=Masc|Number=Plur	26	obj	_	_
30	de	de	ADP	_	_	33	case	_	_
31	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	33	det	_	_
32	quinzième	quinzième	ADJ	_	Gender=Fem|Number=Sing	33	amod	_	_
33	législature	législature	NOUN	_	Gender=Fem|Number=Sing	29	nmod	_	_
34	de	de	ADP	_	_	36	case	_	_
35	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	36	det	_	_
36	Landtag	Landtag	PROPN	_	_	33	nmod	_	_
37	de	de	ADP	_	_	38	case	_	_
38	Schleswig-Holstein	Schleswig-Holstein	PROPN	_	_	36	nmod	_	SpaceAfter=No
39	,	,	PUNCT	_	_	42	punct	_	_
40	pour	pour	ADP	_	_	42	case	_	_
41	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	42	det	_	_
42	mandat	mandat	NOUN	_	Gender=Masc|Number=Sing	26	obl	_	_
43	de	de	ADP	_	_	45	case	_	_
44	cinq	cinq	NUM	_	_	45	nummod	_	_
45	ans	an	NOUN	_	Gender=Masc|Number=Plur	42	nmod	_	SpaceAfter=No
46	.	.	PUNCT	_	_	18	punct	_	_

~~~


