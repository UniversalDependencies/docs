---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-name.html">flat:name</a></tt>.

73 nodes (0%) are attached to their parents as `flat:foreign`.

73 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13698630136986.

The following 2 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (72; 99% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:foreign	color:blue
1	Outro	outro	DET	_	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
2	«	«	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	serial	serial	X	_	ExtPos=NOUN|Gender=Masc|Number=Sing	0	root	_	_
4	killer	killer	X	_	Gender=Masc|Number=Sing	3	flat:foreign	_	SpaceAfter=No
5	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	em	em	ADP	_	_	9	case	_	_
8	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	retrato	retrato	NOUN	_	Gender=Masc|Number=Sing	3	nmod	_	_
10	habitual	habitual	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat:foreign	color:blue
1	Por	por	ADP	_	_	3	case	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	grupo	grupo	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
4	brazuca	brazuca	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	ainda	ainda	ADV	_	_	8	advmod	_	_
7	estarão	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	8	cop	_	_
8	presentes	presente	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
9	Tyes	Tyes	PROPN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
10	e	e	CCONJ	_	_	11	cc	_	_
11	Caio	Caio	PROPN	_	Gender=Masc|Number=Sing	9	conj	_	_
12	(	(	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	Rio	Rio	PROPN	_	Gender=Masc|Number=Sing	9	appos	_	_
14	de	de	ADP	_	_	15	case	_	_
15	Janeiro	Janeiro	PROPN	_	Number=Sing	13	flat:name	_	SpaceAfter=No
16	)	)	PUNCT	_	_	13	punct	_	_
17	e	e	CCONJ	_	_	19	cc	_	_
18	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	especialista	especialista	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_
20	em	em	ADP	_	_	22	case	_	_
21	«	«	PUNCT	_	_	22	punct	_	SpaceAfter=No
22	body	body	NOUN	_	ExtPos=NOUN	19	nmod	_	_
23	piercing	piercing	NOUN	_	_	22	flat:foreign	_	SpaceAfter=No
24	»	»	PUNCT	_	_	22	punct	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	André	André	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	19	appos	_	_
27	Meyer	Meyer	PROPN	_	Number=Sing	26	flat:name	_	_
28	(	(	PUNCT	_	_	29	punct	_	SpaceAfter=No
29	São	São	PROPN	_	ExtPos=PROPN|Gender=Masc|Number=Sing	26	appos	_	_
30	Paulo	Paulo	PROPN	_	Number=Sing	29	flat:name	_	SpaceAfter=No
31	)	)	PUNCT	_	_	29	punct	_	SpaceAfter=No
32	.	.	PUNCT	_	_	8	punct	_	_

~~~


