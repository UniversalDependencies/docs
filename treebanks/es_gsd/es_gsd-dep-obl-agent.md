---
layout: base
title:  'Statistics of obl:agent in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="es_gsd-dep-obl-arg.html">obl:arg</a></tt>.

1541 nodes (0%) are attached to their parents as `obl:agent`.

1492 instances of `obl:agent` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58922777417262.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NOUN.html">NOUN</a></tt> (1015; 66% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PROPN.html">PROPN</a></tt> (448; 29% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-SYM.html">SYM</a></tt> (42; 3% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-PRON.html">PRON</a></tt> (32; 2% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:agent	color:blue
1	Aun	aun	ADV	_	_	2	advmod	_	_
2	hay	haber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	otros	otro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	2	obj	_	_
4	reclutados	reclutar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	_
5	por	por	ADP	_	_	7	case	_	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	Ejército	ejército	NOUN	_	_	4	obl:agent	_	_
8	Blanco	blanco	PROPN	_	_	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	_	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obl:agent	color:blue
1	Ae	ae	DET	_	Gender=Masc|Number=Sing|PronType=Ind	3	det	_	_
2	Fond	fond	PROPN	_	_	3	amod	_	_
3	Kiss	kiss	PROPN	_	_	7	nsubj	_	SpaceAfter=No
4	...	...	PUNCT	_	PunctType=Elip	3	punct	_	_
5	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	película	película	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
8	dirigida	dirigir	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	7	acl	_	_
9	por	por	ADP	_	_	10	case	_	_
10	Ken	ken	PROPN	_	_	8	obl:agent	_	_
11	Loach	loach	PROPN	_	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	_	PunctType=Peri	7	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 32 obl:agent	color:blue
1	A	a	ADP	_	_	15	mark	_	_
2	pesar	pesar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Fin	1	fixed	_	_
3	que	que	SCONJ	_	_	1	fixed	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
5	95	95	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
6	%	%	SYM	_	_	15	nsubj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	habitantes	habitante	NOUN	_	Number=Plur	6	nmod	_	_
10	de	de	ADP	_	_	12	case	_	_
11	Santo	santo	PROPN	_	_	12	amod	_	_
12	Tomé	tomé	PROPN	_	_	9	nmod	_	_
13	y	y	CCONJ	_	_	14	cc	_	_
14	Príncipe	príncipe	PROPN	_	_	12	conj	_	_
15	hablan	hablar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	26	advcl	_	_
16	portugués	portugués	NOUN	_	_	15	xcomp	_	SpaceAfter=No
17	,	,	PUNCT	_	PunctType=Comm	15	punct	_	_
18	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	19	det	_	_
19	lenguaje	lenguaje	NOUN	_	Gender=Masc|Number=Sing	26	nsubj	_	_
20	nacional	nacional	ADJ	_	Number=Sing	19	amod	_	_
21	de	de	ADP	_	_	23	case	_	_
22	las	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	23	det	_	_
23	islas	isla	NOUN	_	Gender=Fem|Number=Plur	19	nmod	_	_
24	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	cop	_	_
25	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	forro	forro	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
27	(	(	PUNCT	_	PunctSide=Ini|PunctType=Brck	28	punct	_	SpaceAfter=No
28	hablado	hablar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	26	parataxis	_	_
29	por	por	ADP	_	_	32	case	_	_
30	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	32	det	_	_
31	85	85	NUM	_	NumForm=Digit|NumType=Card	32	nummod	_	_
32	%	%	SYM	_	_	28	obl:agent	_	SpaceAfter=No
33	)	)	PUNCT	_	PunctSide=Fin|PunctType=Brck	28	punct	_	SpaceAfter=No
34	.	.	PUNCT	_	PunctType=Peri	26	punct	_	_

~~~


