---
layout: base
title:  'Statistics of nmod:appos in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nmod.html">nmod</a></tt>.

4 nodes (0%) are attached to their parents as `nmod:appos`.

4 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (4; 100% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 nmod:appos	color:blue
1	euh	euh	INTJ	_	_	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	et	et	CCONJ	_	_	10	cc	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	internat	internat	NOUN	_	Gender=Masc|Number=Sing	10	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	en	en	ADP	_	_	10	discourse	_	ExtPos=ADV|Idiom=Yes
8	fait	fait	NOUN	_	Gender=Masc|Number=Sing	7	fixed	_	InIdiom=Yes|SpaceAfter=No
9	,	,	PUNCT	_	_	7	punct	_	_
10	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	en	en	ADP	_	_	12	case	_	_
12	partenariat	partenariat	NOUN	_	Gender=Masc|Number=Sing	10	obl:mod	_	_
13	avec	avec	ADP	_	_	15	case	_	_
14	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	15	det	_	SpaceAfter=No
15	organisme	organisme	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	_
16	Grandir	Grandir	PROPN	_	_	15	nmod:appos	_	_
17	Aventure	Aventure	PROPN	_	_	16	flat:name	_	SpaceAfter=No
18	.	.	PUNCT	_	_	10	punct	_	_

~~~


