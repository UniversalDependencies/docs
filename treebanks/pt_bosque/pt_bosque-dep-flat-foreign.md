---
layout: base
title:  'Statistics of flat:foreign in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="pt_bosque-dep-flat-name.html">flat:name</a></tt>.

75 nodes (0%) are attached to their parents as `flat:foreign`.

75 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.18666666666667.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-X.html">X</a></tt> (73; 97% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pt_bosque-pos-X.html">X</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	Malkovich	Malkovich	PROPN	_	Gender=Masc|Number=Sing	6	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	por	por	ADP	_	_	5	case	_	_
4	seu	seu	DET	_	Gender=Masc|Number=Sing|PronType=Prs	5	det	_	_
5	lado	lado	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
6	falou	falar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	em	em	ADP	_	_	9	case	_	_
8	«	«	PUNCT	_	_	9	punct	_	SpaceAfter=No
9	primitive	primitive	X	_	Gender=Masc|Number=Sing	6	obl	_	MWE=primitive_dream_paintings|MWEPOS=NOUN
10	dream	dream	X	_	_	9	flat:foreign	_	_
11	paintings	paintings	X	_	_	9	flat:foreign	_	SpaceAfter=No
12	»	»	PUNCT	_	_	9	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:foreign	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	So	so	PROPN	_	_	7	obl	_	MWE=So_What|MWEPOS=PROPN
3	what	what	PROPN	_	_	2	flat:foreign	_	SpaceAfter=No
4	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	não	não	ADV	_	Polarity=Neg	7	advmod	_	_
7	é	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	mesmo	mesmo	ADV	_	_	7	advmod	_	SpaceAfter=No
9	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 18 flat:foreign	color:blue
1	Está	estar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	longe	longe	ADV	_	_	0	root	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	constituição	constituição	NOUN	_	Gender=Fem|Number=Sing	2	nsubj	_	_
5	em	em	ADP	_	_	7	case	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Nou	Nou	PROPN	_	Gender=Masc|Number=Sing	4	nmod	_	MWE=Nou_Camp|MWEPOS=PROPN
8	Camp	Camp	PROPN	_	Number=Sing	7	flat:name	_	_
9	de	de	ADP	_	_	13	case	_	_
10	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
11	novo	novo	ADJ	_	Gender=Masc|Number=Sing	13	amod	_	_
12	«	«	PUNCT	_	_	13	punct	_	SpaceAfter=No
13	dream	dream	X	_	_	4	nmod	_	MWE=dream_team|MWEPOS=NOUN
14	team	team	X	_	_	13	flat:foreign	_	SpaceAfter=No
15	»	»	PUNCT	_	_	13	punct	_	SpaceAfter=No
16	,	,	PUNCT	_	_	13	punct	_	_
17	como	como	ADP	_	_	13	case	_	_
18	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	13	flat:foreign	_	_
19	de	de	ADP	_	_	20	case	_	_
20	Romário	Romário	PROPN	_	Gender=Masc|Number=Sing	13	nmod	_	_
21	e	e	CCONJ	_	_	22	cc	_	_
22	Stoichkov	Stoichkov	PROPN	_	Gender=Masc|Number=Sing	20	conj	_	SpaceAfter=No
23	,	,	PUNCT	_	_	13	punct	_	_
24	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	2	appos	_	_
25	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Rel	27	nsubj	_	_
26	já	já	ADV	_	_	27	advmod	_	_
27	enerva	enervar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	acl:relcl	_	_
28	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	_
29	direcção	direcção	NOUN	_	Gender=Fem|Number=Sing	27	obj	_	SpaceAfter=No
30	.	.	PUNCT	_	_	2	punct	_	_

~~~


