---
layout: base
title:  'Statistics of nmod:appos in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-nmod.html">nmod</a></tt>.

115 nodes (0%) are attached to their parents as `nmod:appos`.

115 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5304347826087.

The following 7 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (99; 86% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:appos	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	foire	foire	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	d'	de	ADP	_	_	4	case	_	SpaceAfter=No
4	empoigne	empoigne	NOUN	_	Gender=Fem|Number=Sing	2	nmod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	procès	procès	NOUN	_	Gender=Masc	2	nmod	_	_
8	Colonna	Colonna	PROPN	_	_	7	nmod:appos	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 nmod:appos	color:blue
1	euh	euh	INTJ	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
5	direction	direction	ADP	_	_	7	case	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	piscine	piscine	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	euh	euh	INTJ	_	_	7	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	entrée	entrée	NOUN	_	Gender=Fem|Number=Sing	7	nmod	_	_
12	nord	nord	NOUN	_	Gender=Masc|Number=Sing	11	nmod:appos	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 nmod:appos	color:blue
1	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	suis	suivre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	ligne	ligne	NOUN	_	Gender=Fem|Number=Sing	2	obj	_	_
5	de	de	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tram	tram	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	jusqu'	jusque	ADP	_	_	9	dep:comp	_	SpaceAfter=No
9	à	à	ADP	_	_	2	dep	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	jusqu'	jusque	ADP	_	_	12	dep:comp	_	SpaceAfter=No
12	à	à	ADP	_	_	9	reparandum	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	ben	ben	INTJ	_	_	12	discourse	_	SpaceAfter=No
15	,	,	PUNCT	_	_	19	punct	_	_
16	jusqu'	jusque	ADP	_	_	19	case	_	SpaceAfter=No
17	à	à	ADP	_	_	19	case	_	_
18	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	Nef	Nef	PROPN	_	Gender=Fem|Number=Sing	12	reparandum	_	_
20	Chavant	Chavant	PROPN	_	_	19	nmod:appos	_	SpaceAfter=No
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


