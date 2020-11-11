---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

943 nodes (0%) are attached to their parents as `flat:foreign`.

943 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03817603393425.

The following 9 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (921; 98% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (6; 1% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (6; 1% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Falling	Falling	X	_	Foreign=Yes	6	nsubj	_	ExtPos=PROPN|Lang=en|PhraseType=Title
2	Out	Out	X	_	Foreign=Yes	1	flat:foreign	_	InTitle=Yes|Lang=en
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Peter	Peter	X	_	Foreign=Yes	6	nmod	_	Lang=en
9	Bjorn	Bjorn	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en
10	and	and	X	_	Foreign=Yes	9	flat:foreign	_	Lang=en
11	John	John	X	_	Foreign=Yes	10	flat:foreign	_	Lang=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Lilly	Lilly	X	_	Foreign=Yes	8	nsubj	_	Lang=en
2	Wood	Wood	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en
3	&	&	SYM	_	Foreign=Yes	2	flat:foreign	_	Lang=en
4	The	The	X	_	Foreign=Yes	3	flat:foreign	_	Lang=en
5	Prick	Prick	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
7	également	également	ADV	_	_	8	advmod	_	_
8	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Victoires	victoire	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	wordform=victoires
11	de	de	ADP	_	_	13	case	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Musique	Musique	PROPN	_	Gender=Fem|Number=Sing	10	nmod	_	_
14	2011	2011	NUM	_	Number=Plur	10	nmod	_	_
15	dans	dans	ADP	_	_	17	case	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	catégorie	catégorie	NOUN	_	Gender=Fem|Number=Sing	8	obl:mod	_	_
18	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	17	appos	_	_
20	de	de	ADP	_	_	22	case	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	public	public	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
23	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	Lilly	Lilly	X	_	Foreign=Yes	8	nsubj	_	Lang=en
2	Wood	Wood	X	_	Foreign=Yes	1	flat:foreign	_	Lang=en
3	&	&	SYM	_	Foreign=Yes	2	flat:foreign	_	Lang=en
4	The	The	X	_	Foreign=Yes	3	flat:foreign	_	Lang=en
5	Prick	Prick	X	_	Foreign=Yes	4	flat:foreign	_	Lang=en
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
7	également	également	ADV	_	_	8	advmod	_	_
8	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Victoires	victoire	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	wordform=victoires
11	de	de	ADP	_	_	13	case	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Musique	Musique	PROPN	_	Gender=Fem|Number=Sing	10	nmod	_	_
14	2011	2011	NUM	_	Number=Plur	10	nmod	_	_
15	dans	dans	ADP	_	_	17	case	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	catégorie	catégorie	NOUN	_	Gender=Fem|Number=Sing	8	obl:mod	_	_
18	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	17	appos	_	_
20	de	de	ADP	_	_	22	case	_	_
21	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	22	det	_	_
22	public	public	NOUN	_	Gender=Masc|Number=Sing	19	nmod	_	SpaceAfter=No
23	"	"	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	.	.	PUNCT	_	_	8	punct	_	_

~~~


