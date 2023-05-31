---
layout: base
title:  'Statistics of advcl:cleft in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_fqb-dep-advcl.html">advcl</a></tt>.

17 nodes (0%) are attached to their parents as `advcl:cleft`.

17 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29411764705882.

The following 2 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt> (16; 94% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl:cleft	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	_	1	nsubj	_	_
4	que	que	PRON	_	PronType=Rel	7	obj	_	_
5	Chostakovitch	Chostakovitch	PROPN	_	_	7	nsubj	_	_
6	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	_
7	écrit	écrire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	advcl:cleft	_	_
8	pour	pour	ADP	_	_	9	case	_	_
9	Rostropovitch	Rostropovitch	PROPN	_	_	7	obl:mod	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 advcl:cleft	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	_	1	nsubj	_	_
4	qui	qui	PRON	_	PronType=Rel	6	nsubj	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	responsable	responsable	NOUN	_	Number=Sing	1	advcl:cleft	_	_
7	de	de	ADP	_	_	9	case	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	cheveux	cheveux	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	_
10	gris	gris	ADJ	_	Gender=Masc	9	amod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


