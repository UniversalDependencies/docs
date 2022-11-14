---
layout: base
title:  'Statistics of flat:foreign in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fr_gsd-dep-flat-name.html">flat:name</a></tt>.

1009 nodes (0%) are attached to their parents as `flat:foreign`.

1009 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63726461843409.

The following 9 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (988; 98% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	Falling	Falling	X	_	Foreign=Yes	6	nsubj	_	ExtPos=PROPN|Lang=en|Title=Yes
2	Out	Out	X	_	Foreign=Yes	1	flat:foreign	_	InTitle=Yes|Lang=en
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	deuxième	deuxième	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	album	album	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	8	case	_	_
8	Peter	Peter	X	_	Foreign=Yes	6	nmod	_	ExtPos=PROPN|Lang=en
9	Bjorn	Bjorn	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en
10	and	and	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en
11	John	John	X	_	Foreign=Yes	8	flat:foreign	_	Lang=en|SpaceAfter=No
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 flat:foreign	color:blue
1	À	à	ADP	_	_	3	case	_	wordform=à
2	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	moment	moment	NOUN	_	Gender=Masc|Number=Sing	8	obl:mod	_	_
4	donné	donner	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	Batsu	Batsu	PROPN	_	_	8	nsubj:pass	_	_
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	confronté	confronter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	à	à	ADP	_	_	10	case	_	_
10	Raizo	Raizo	PROPN	_	_	8	obl:arg	_	_
11	Imawano	Imawano	PROPN	_	_	10	flat:name	_	_
12	de	de	ADP	_	_	14	case	_	_
13	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Justice	Justice	PROPN	_	_	10	nmod	_	_
15	High	High	X	_	_	14	flat:foreign	_	_
16	School	School	X	_	_	14	flat:foreign	_	SpaceAfter=No
17	,	,	PUNCT	_	_	20	punct	_	_
18	qui	qui	PRON	_	PronType=Rel	20	nsubj	_	_
19	se	se	PRON	_	Person=3|PronType=Prs|Reflex=Yes	20	expl:pv	_	_
20	révèle	révéler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	_
21	être	être	AUX	_	VerbForm=Inf	23	cop	_	Subject=SubjRaising
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	père	père	NOUN	_	Gender=Masc|Number=Sing	20	xcomp	_	_
24	absent	absent	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	_
25	de	de	ADP	_	_	26	case	_	_
26	Batsu	Batsu	PROPN	_	_	23	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 flat:foreign	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	mot	mot	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	_
3	«	«	PUNCT	_	_	4	punct	_	_
4	mutazilisme	mutazilisme	NOUN	_	Gender=Masc|Number=Sing	2	appos	_	_
5	»	»	PUNCT	_	_	4	punct	_	_
6	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
7	en	en	ADP	_	_	8	case	_	_
8	arabe	arabe	NOUN	_	Gender=Masc|Number=Sing	10	nmod	_	_
9	:	:	PUNCT	_	_	10	punct	_	_
10	al-mu	al-mu	NOUN	_	_	4	appos	_	_
11	ʿ	ʿ	X	_	_	10	flat:foreign	_	_
12	tazila	tazila	X	_	_	10	flat:foreign	_	SpaceAfter=No
13	,	,	PUNCT	_	_	10	punct	_	SpaceAfter=No
14	)	)	PUNCT	_	_	10	punct	_	_
15	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
16	deux	deux	NUM	_	Number=Plur	17	nummod	_	_
17	sens	sens	NOUN	_	Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
18	/	/	SYM	_	_	19	cc	_	ExtPos=CCONJ|SpaceAfter=No
19	origines	origine	NOUN	_	Gender=Fem|Number=Plur	17	conj	_	_
20	possibles	possible	ADJ	_	Gender=Fem|Number=Plur	17	amod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	15	punct	_	_

~~~


