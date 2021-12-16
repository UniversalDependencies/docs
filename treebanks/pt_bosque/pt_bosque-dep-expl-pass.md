---
layout: base
title:  'Statistics of expl:pass in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-expl.html">expl</a></tt>.

3 nodes (0%) are attached to their parents as `expl:pass`.

2 instances of `expl:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `expl:pass`: <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-PRON.html">PRON</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	Mas	mas	CCONJ	_	_	3	cc	_	_
2	eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	imagino	imaginar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	5	mark	_	_
5	deveria	dever	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	3	ccomp	_	_
6	se	se	PRON	_	Case=Acc|PronType=Prs	7	expl:pass	_	_
7	dotar	dotar	VERB	_	Number=Sing|Person=3|VerbForm=Inf	5	xcomp	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	por	por	ADP	_	_	13	advmod	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	fixed	_	_
11	menos	menos	ADV	_	Gender=Masc|Number=Plur	9	fixed	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	Judiciário	Judiciário	PROPN	_	Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	de	de	ADP	_	_	16	case	_	_
16	medidas	medida	NOUN	_	Gender=Fem|Number=Plur	7	obl	_	_
17	que	que	PRON	_	Gender=Fem|Number=Plur|PronType=Rel	18	nsubj	_	_
18	possibilitassem	possibilitar	VERB	_	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	16	acl:relcl	_	_
19	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	20	det	_	_
20	concessão	concessão	NOUN	_	Gender=Fem|Number=Sing	18	obj	_	_
21	de	de	ADP	_	_	23	case	_	_
22	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	perdão	perdão	NOUN	_	Gender=Masc|Number=Sing	20	nmod	_	_
24	judicial	judicial	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	_	_	3	punct	_	_

~~~


