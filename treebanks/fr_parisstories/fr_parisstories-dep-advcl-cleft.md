---
layout: base
title:  'Statistics of advcl:cleft in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `advcl:cleft`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-advcl.html">advcl</a></tt>.

40 nodes (0%) are attached to their parents as `advcl:cleft`.

39 instances of `advcl:cleft` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.625.

The following 7 pairs of parts of speech are connected with `advcl:cleft`: <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (20; 50% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (8; 20% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (7; 18% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 advcl:cleft	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	me	se	PRON	_	_	4	expl:comp	_	_
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
13	gonfler	gonfler	VERB	_	VerbForm=Inf	11	xcomp	_	SpaceAfter=No|Subject=ObjRaising
14	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl:cleft	color:blue
1	euh	euh	INTJ	_	_	3	discourse	_	_
2	qu'	que	PRON	_	Person=3|PronType=Int	3	xcomp	_	SpaceAfter=No
3	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
4	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	expl:subj	_	_
5	qu'	que	SCONJ	_	_	8	dep:comp	_	SpaceAfter=No
6	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
7	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
8	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	advcl:cleft	_	_
9	bah	bah	INTJ	_	_	3	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 advcl:cleft	color:blue
1	de	de	ADP	_	_	3	case	_	AlignBegin=92195|AlignEnd=92341|wordform=du
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	coup	coup	NOUN	_	Gender=Masc|Number=Sing	9	discourse	_	AlignBegin=92341|AlignEnd=92487|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=92487|AlignEnd=92487
5	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	expl:subj	_	AlignBegin=92487|AlignEnd=92633|SpaceAfter=No
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	AlignBegin=92633|AlignEnd=92779
7	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=92779|AlignEnd=92925
8	première	premier	ADJ	_	Gender=Fem|Number=Sing	9	amod	_	AlignBegin=92925|AlignEnd=93071
9	fois	fois	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=93071|AlignEnd=93218
10	de	de	ADP	_	_	12	case	_	AlignBegin=93218|AlignEnd=93364
11	ma	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	12	det	_	AlignBegin=93364|AlignEnd=93510
12	vie	vie	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	AlignBegin=93510|AlignEnd=93656
13	que	que	SCONJ	_	_	15	mark	_	AlignBegin=93656|AlignEnd=93802
14	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	15	nsubj	_	AlignBegin=93802|AlignEnd=93948
15	faisais	faire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	9	advcl:cleft	_	AlignBegin=93948|AlignEnd=94094
16	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	obj	_	AlignBegin=94094|AlignEnd=94240|SpaceAfter=No
17	.	.	PUNCT	_	_	9	punct	_	AlignBegin=94240|AlignEnd=94240

~~~


