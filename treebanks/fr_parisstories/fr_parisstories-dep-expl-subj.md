---
layout: base
title:  'Statistics of expl:subj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `expl:subj`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-expl.html">expl</a></tt>.

88 nodes (0%) are attached to their parents as `expl:subj`.

84 instances of `expl:subj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21590909090909.

The following 5 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (81; 92% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:subj	color:blue
1	euh	euh	INTJ	_	_	3	obj	_	_
2	qu'	que	PRON	_	Person=3|PronType=Int	3	xcomp	_	SpaceAfter=No
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	_
5	qu'	que	SCONJ	_	_	8	dep:comp	_	SpaceAfter=No
6	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	advcl:cleft	_	_
9	bah	bah	INTJ	_	_	3	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl:subj	color:blue
1	mais	mais	CCONJ	_	_	2	cc	_	_
2	qu'	que	PRON	_	Person=3|PronType=Int	0	root	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	expl:subj	_	_
5	que	que	SCONJ	_	_	7	xcomp	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
7	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:cleft	_	_
8	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 18 expl:subj	color:blue
1	en	en	ADP	_	_	9	discourse	_	ExtPos=ADV|Idiom=Yes
2	fait	faire	NOUN	_	Gender=Masc|Number=Sing	1	fixed	_	InIdiom=Yes|SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	nous	lui	PRON	_	Number=Plur|Person=1|PronType=Prs	9	dislocated	_	_
5	sur	sur	ADP	_	_	6	case	_	_
6	place	place	NOUN	_	Gender=Fem|Number=Sing	9	obl:mod	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	_
9	savait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
10	même	même	ADV	_	_	11	advmod	_	_
11	pas	pas	ADV	_	_	9	advmod	_	_
12	alors	alors	ADV	_	_	16	mark	_	ExtPos=SCONJ|Idiom=Yes
13	qu'	que	SCONJ	_	_	12	fixed	_	InIdiom=Yes|SpaceAfter=No
14	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	16	nsubj	_	_
15	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	cop	_	_
16	là	là	ADV	_	_	9	advcl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	21	punct	_	_
18	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	21	expl:subj	_	SpaceAfter=No
19	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	21	cop	_	_
20	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	21	det	_	SpaceAfter=No
21	haut-parleur	haut-parleur	NOUN	_	Gender=Masc|Number=Sing	9	parataxis	_	_
22	qui	qui	PRON	_	PronType=Rel	26	nsubj	_	_
23	nous	lui	PRON	_	Number=Plur|Person=1|PronType=Prs	26	iobj	_	_
24	l'	le	PRON	_	Number=Sing|Person=3|PronType=Prs	26	obj	_	SpaceAfter=No
25	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	26	aux	_	_
26	dit	dire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	21	advcl:cleft	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	enfin	enfin	ADV	_	_	33	discourse	_	SpaceAfter=No
29	,	,	PUNCT	_	_	33	punct	_	_
30	qu'	que	SCONJ	_	_	33	mark	_	SpaceAfter=No
31	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	33	nsubj	_	_
32	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	33	aux	_	_
33	su	savoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	reparandum	_	_
34	grâce	grâce	ADV	_	_	33	advmod	_	_
35	à	à	ADP	_	_	37	case	_	_
36	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	37	det	_	SpaceAfter=No
37	haut-parleur	haut-parleur	NOUN	_	Gender=Masc|Number=Sing	34	obj	_	SpaceAfter=No
38	.	.	PUNCT	_	_	9	punct	_	_

~~~


