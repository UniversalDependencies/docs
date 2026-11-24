---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_gsd-dep-parataxis-insert.html">parataxis:insert</a></tt>.

1 nodes (0%) are attached to their parents as `parataxis:parenth`.

1 instances of `parataxis:parenth` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 parataxis:parenth	color:blue
1	Pour	pour	ADP	_	_	4	case	_	wordform=pour
2	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	4	det	_	_
3	dernière	dernier	ADJ	_	Gender=Fem|Number=Sing	4	amod	_	_
4	participation	participation	NOUN	_	Gender=Fem|Number=Sing	17	obl:mod	_	Exponence[Gender]=Inherent
5	à	à	ADP	_	_	7	case	_	_
6	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tournoi	tournoi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	Exponence[Gender]=Inherent
8	interzonal	interzonal	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	à	à	ADP	_	_	11	case	_	_
11	Moscou	Moscou	PROPN	_	_	17	obl:mod	_	_
12	en	en	ADP	_	_	13	case	_	_
13	1982	1982	NUM	_	ExtPos=PROPN|Number=Sing	17	obl:mod	_	Exponence[Number]=Inherent|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	_
15	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	17	nsubj:pass	_	_
16	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	17	aux:pass	_	_
17	éliminé	éliminer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Status[Tense]=Denom
18	par	par	ADP	_	_	23	case	_	_
19	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|Poss=Yes|PronType=Prs	23	det	_	_
20	5e	5e	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	23	amod	_	_
21	-	-	PUNCT	_	_	22	punct	_	_
22	6e	6e	ADJ	_	Gender=Fem|Number=Sing|NumType=Ord	20	conj	_	_
23	place	place	NOUN	_	Gender=Fem|Number=Sing	17	obl:agent	_	Exponence[Gender]=Inherent
24	(	(	PUNCT	_	_	25	punct	_	SpaceAfter=No
25	+	+	SYM	_	_	23	parataxis:parenth	_	SpaceAfter=No
26	4	4	NUM	_	ExtPos=PRON|Number=Sing	25	dep	_	Exponence[Number]=Inherent
27	-	-	SYM	_	_	25	conj	_	SpaceAfter=No
28	2	2	NUM	_	ExtPos=PRON	27	dep	_	_
29	=	=	SYM	_	_	25	conj	_	SpaceAfter=No
30	7	7	NUM	_	ExtPos=PROPN	29	dep	_	SpaceAfter=No
31	)	)	PUNCT	_	_	25	punct	_	SpaceAfter=No
32	.	.	PUNCT	_	_	17	punct	_	_

~~~


