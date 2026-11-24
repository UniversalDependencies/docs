---
layout: base
title:  'Statistics of dep:comp in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dep.html">dep</a></tt>.

16 nodes (0%) are attached to their parents as `dep:comp`.

11 instances of `dep:comp` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.1875.

The following 5 pairs of parts of speech are connected with `dep:comp`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (11; 69% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-SCONJ.html">SCONJ</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 dep:comp	color:blue
1	Pourquoi	pourquoi	ADV	_	PronType=Int	4	advmod	_	wordform=pourquoi
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	lui	lui	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=3|PronType=Prs	7	dep:comp	_	_
4	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	4	nsubj	_	wordform=on
6	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
7	confiance	confiance	NOUN	_	Gender=Fem|Number=Sing	4	obj:lvc	_	Exponence[Gender]=Inherent
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 dep:comp	color:blue
1	À	à	ADP	_	_	3	case	_	wordform=à
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	occasion	occasion	NOUN	_	Gender=Fem|Number=Sing	13	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	François	François	PROPN	_	_	13	nsubj	_	_
6	Fillon	Fillon	PROPN	_	_	5	flat:name	_	_
7	alors	alors	ADV	_	_	8	advmod	_	_
8	ministre	ministre	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	Exponence[Gender]=Inherent
9	de	de	ADP	_	_	11	case	_	_
10	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	Exponence[Gender]=Absent|SpaceAfter=No
11	Éducation	éducation	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	Exponence[Gender]=Inherent|wordform=éducation
12	nationale	national	ADJ	_	Gender=Fem|Number=Sing	11	amod	_	_
13	déclare	déclarer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	que	que	SCONJ	_	_	13	dep:comp	_	SpaceAfter=No
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 dep:comp	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	3	nsubj	_	_
3	reste	rester	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	à	à	ADP	_	_	6	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	bas	bas	NOUN	_	Gender=Masc|Number=Sing	3	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	pente	pente	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	Exponence[Gender]=Inherent
10	alors	alors	ADV	_	ExtPos=SCONJ	15	mark	_	Idiom=Yes
11	que	que	SCONJ	_	_	10	fixed	_	InIdiom=Yes
12	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	second	second	NOUN	_	Gender=Masc|Number=Sing	15	nsubj	_	Exponence[Gender]=Inherent
14	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	15	expl:pv	_	SpaceAfter=No
15	approche	approcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl	_	_
16	au	au	ADP	_	ExtPos=ADV	15	advmod	_	Idiom=Yes
17	plus	plus	ADV	_	_	16	fixed	_	InIdiom=Yes
18	près	près	ADV	_	ExtPos=PRON	16	dep:comp	_	_
19	de	de	ADP	_	_	21	case	_	_
20	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	21	det	_	_
21	Saxons	Saxons	PROPN	_	Number=Plur	18	obl:arg	_	SpaceAfter=No
22	.	.	PUNCT	_	_	3	punct	_	_

~~~


