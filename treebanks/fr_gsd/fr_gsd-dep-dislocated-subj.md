---
layout: base
title:  'Statistics of dislocated:subj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `dislocated:subj`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="fr_gsd-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="fr_gsd-dep-dislocated-obj.html">dislocated:obj</a></tt>.

19 nodes (0%) are attached to their parents as `dislocated:subj`.

19 instances of `dislocated:subj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.73684210526316.

The following 7 pairs of parts of speech are connected with `dislocated:subj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (5; 26% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (4; 21% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (4; 21% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 11% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dislocated:subj	color:blue
1	Nous	nous	PRON	_	Emph=Yes|Number=Plur|Person=1|PronType=Prs	5	dislocated:subj	_	wordform=nous
2	aussi	aussi	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	_
5	avoue	avouer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 dislocated:subj	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	wordform=le
2	seul	seul	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	point	point	NOUN	_	Gender=Masc|Number=Sing	9	dislocated:subj	_	Exponence[Gender]=Inherent
4	negatif	négatif	ADJ	_	Gender=Masc|Number=Sing|Typo=Yes	3	amod	_	CorrectForm=négatif|SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	toilettes	toilette	NOUN	_	Gender=Fem|Number=Plur	0	root	_	Exponence[Gender]=Inherent|SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 dislocated:subj	color:blue
1	«	«	PUNCT	_	_	12	punct	_	_
2	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	wordform=la
3	réalité	réalité	NOUN	_	Gender=Fem|Number=Sing	12	dislocated:subj	_	Exponence[Gender]=Inherent|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj:outer	_	SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
7	qu'	que	SCONJ	_	_	12	mark	_	SpaceAfter=No
8	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
9	n'	ne	ADV	_	Polarity=Neg	12	advmod	_	SpaceAfter=No
10	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	_
11	pas	pas	ADV	_	Polarity=Neg	12	advmod	_	_
12	aligné	aligner	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Tense[denom]=Past
13	trois	trois	NUM	_	Number=Plur	14	nummod	_	Exponence[Number]=Inherent
14	passes	passe	NOUN	_	Gender=Fem|Number=Plur	12	obj	_	Exponence[Gender]=Inherent
15	de	de	ADP	_	_	16	case	_	_
16	suite	suite	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	Exponence[Gender]=Inherent|SpaceAfter=No
17	,	,	PUNCT	_	_	22	punct	_	_
18	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	22	nsubj	_	_
19	n'	ne	ADV	_	Polarity=Neg	22	advmod	_	SpaceAfter=No
20	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	aux:tense	_	_
21	pas	pas	ADV	_	Polarity=Neg	22	advmod	_	_
22	tiré	tirer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	12	conj	_	Tense[denom]=Past
23	à	à	ADP	_	_	25	case	_	_
24	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	but	but	NOUN	_	Gender=Masc|Number=Sing	22	obl:mod	_	Exponence[Gender]=Inherent|SpaceAfter=No
26	.	.	PUNCT	_	_	12	punct	_	_

~~~


