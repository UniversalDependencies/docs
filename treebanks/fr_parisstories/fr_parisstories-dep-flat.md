---
layout: base
title:  'Statistics of flat in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="fr_parisstories-dep-flat-name.html">flat:name</a></tt>.

23 nodes (0%) are attached to their parents as `flat`.

23 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52173913043478.

The following 2 pairs of parts of speech are connected with `flat`: <tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_parisstories-pos-NUM.html">NUM</a></tt> (22; 96% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat	color:blue
1	Z	Z	PROPN	_	_	4	dislocated	_	AlignBegin=63211|AlignEnd=63454|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=63454|AlignEnd=63454
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	AlignBegin=63454|AlignEnd=63697|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	reparandum	_	AlignBegin=63697|AlignEnd=63941|SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	AlignBegin=63941|AlignEnd=63941
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	AlignBegin=63941|AlignEnd=64184|SpaceAfter=No
7	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=64184|AlignEnd=64427
8	quatre-vingt-seize	quatre-vingt-seize	NUM	_	_	7	obl:mod	_	AlignBegin=64427|AlignEnd=64670
9	deux	deux	NUM	_	_	8	conj	_	AlignBegin=64670|AlignEnd=64914
10	mille	mille	NUM	_	_	9	flat	_	AlignBegin=64914|AlignEnd=65157
11	quatre	quatre	NUM	_	Number=Plur	9	flat	_	AlignBegin=65157|AlignEnd=65400|SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	AlignBegin=65400|AlignEnd=65400

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 36 flat	color:blue
1	donc	donc	ADV	_	_	3	advmod	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	SpaceAfter=No
3	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	reparandum	_	_
4	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	colonie	colonie	NOUN	_	Gender=Fem|Number=Sing	3	xcomp	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
7	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	colonie	colonie	NOUN	_	Gender=Fem|Number=Sing	7	xcomp	_	_
10	euh	euh	INTJ	_	_	13	discourse	_	SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	_
12	vers	vers	ADP	_	_	13	case	_	_
13	Agen	Agen	PROPN	_	_	9	nmod	_	_
14	specialisée	specialiser	ADJ	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	26	reparandum	_	_
15	pour	pour	ADP	_	_	14	dep	_	_
16	euh	euh	INTJ	_	_	19	discourse	_	SpaceAfter=No
17	,	,	PUNCT	_	_	16	punct	_	_
18	enfin	enfin	ADV	_	_	19	discourse	_	ExtPos=INTJ
19	spécialisée	specialiser	ADJ	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	26	reparandum	_	_
20	non	non	ADV	_	Polarity=Neg	26	discourse	_	ExtPos=INTJ|SpaceAfter=No
21	,	,	PUNCT	_	_	20	punct	_	_
22	enfin	enfin	ADV	_	_	26	discourse	_	ExtPos=INTJ|wordform=fin
23	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	thème	thème	NOUN	_	Gender=Masc|Number=Sing	26	dislocated	_	_
25	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	26	nsubj	_	SpaceAfter=No
26	était	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	acl	_	_
27	euh	euh	INTJ	_	_	31	discourse	_	_
28	euh	euh	INTJ	_	_	31	discourse	_	_
29	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	30	det	_	_
30	best	best	ADJ	_	Gender=Masc|Number=Plur	26	xcomp	_	_
31	sellers	seller	NOUN	_	Gender=Masc|Number=Plur	36	reparandum	_	_
32	de	de	ADP	_	_	34	case	_	_
33	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	34	det	_	SpaceAfter=No
34	été	été	NOUN	_	Gender=Masc|Number=Sing	31	nmod	_	SpaceAfter=No
35	,	,	PUNCT	_	_	36	punct	_	_
36	colo	colo	NOUN	_	Gender=Fem|Number=Sing	30	flat	_	_
37	écrivains	écrivain	NOUN	_	Gender=Masc|Number=Plur	36	nmod	_	SpaceAfter=No
38	.	.	PUNCT	_	_	7	punct	_	_

~~~


