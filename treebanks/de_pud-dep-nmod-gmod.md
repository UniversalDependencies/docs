---
layout: base
title:  'Statistics of nmod:gmod in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `nmod:gmod`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="de_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:gmod`.

1 instances of `nmod:gmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `nmod:gmod`: <tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_pud-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 nmod:gmod	color:blue
1	Vier	_	NUM	CD	NumType=Card	2	nummod	_	_
2	Studenten	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	11	nsubj	_	_
3	von	_	ADP	IN	_	5	case	_	_
4	der	_	DET	DT	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|Person=3	5	det	_	_
5	Universität	_	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing|Person=3	2	nmod	_	_
6	Roma	_	PROPN	NNP	Case=Nom|Number=Sing|Person=3	5	appos	_	_
7	Tre	_	PROPN	NNP	Case=Nom|Number=Sing|Person=3	6	flat:name	_	_
8	haben	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres	11	aux	_	_
9	einen	_	DET	DT	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|Person=3	10	det	_	_
10	Motorradhelm	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obj	_	_
11	entwickelt	_	VERB	VBN	Tense=Past	0	root	_	SpaceAfter=No
12	,	_	PUNCT	,	_	16	punct	_	_
13	der	_	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3	16	nsubj	_	_
14	„	_	PUNCT	``	_	16	punct	_	SpaceAfter=No
15	Gedanken	_	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	16	obj	_	_
16	lesen	_	VERB	VB	_	10	acl:relcl	_	SpaceAfter=No
17	“	_	PUNCT	''	_	16	punct	_	_
18	und	_	CCONJ	CC	_	23	cc	_	_
19	die	_	DET	DT	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|Person=3	20	det	_	_
20	Handlungen	_	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	23	obj	_	_
21	des	_	DET	DT	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3	22	det	_	_
22	Fahrer	_	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	20	nmod:gmod	_	_
23	vorhersehen	_	VERB	VB	_	16	conj	_	_
24	kann	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	aux	_	SpaceAfter=No
25	.	_	PUNCT	.	_	11	punct	_	_

~~~


