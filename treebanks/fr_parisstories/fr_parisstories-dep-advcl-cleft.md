---
layout: base
title:  'Statistics of advcl:cleft in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-advcl.html">advcl</a></tt>.

25 nodes (0%) are attached to their parents as `advcl:cleft`.

25 instances of `advcl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.4.

The following 5 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (13; 52% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (6; 24% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (4; 16% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 advcl:cleft	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	le	PRON	_	_	4	dep:comp	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	aperçue	apercevoir	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	8	mark	_	_
6	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	SpaceAfter=No
7	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	ccomp	_	_
9	qui	qui	PRON	_	_	11	nsubj	_	_
10	les	le	PRON	_	Number=Plur|Person=3|PronType=Prs	11	obj	_	_
11	empêchait	empêcher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	advcl:cleft	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl:cleft	color:blue
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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 21 advcl:cleft	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	moi	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	6	dislocated	_	_
3	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
4	y	y	ADV	_	_	6	advmod	_	_
5	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	été	être	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	17	punct	_	_
8	et	et	CCONJ	_	_	17	cc	_	_
9	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	SpaceAfter=No
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
11	vraiment	vraiment	ADV	_	_	17	advmod	_	_
12	pas	pas	ADV	_	Polarity=Neg	17	advmod	_	_
13	de	de	ADP	_	_	15	case	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	tout	tout	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	12	obl:mod	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	sentiment	sentiment	NOUN	_	Gender=Masc|Number=Sing	6	conj	_	_
18	que	que	PRON	_	PronType=Rel	21	obj	_	_
19	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	21	nsubj	_	SpaceAfter=No
20	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux	_	_
21	eu	avoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	advcl:cleft	_	_
22	en	en	ADP	_	_	6	discourse	_	ExtPos=ADV|Idiom=Yes
23	fait	fait	NOUN	_	Gender=Masc|Number=Sing	22	fixed	_	InIdiom=Yes|SpaceAfter=No
24	.	.	PUNCT	_	_	6	punct	_	_

~~~


