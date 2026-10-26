---
layout: base
title:  'Statistics of xcomp in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `xcomp`

This relation is universal.

2 nodes (0%) are attached to their parents as `xcomp`.

2 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	kupaná	kupanó	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_#article_paradigm_defective
3	χódza	χódzas	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	SpaceAfter=No|OrigLang=tr
4	,	,	PUNCT	PUNCT	_	1	punct	_	_
5	píki	ftšánu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	_	_
6	psémata	pséma	NOUN	NOUN	_	5	xcomp	_	#Noun_used_in_adverbial_sense_as_in_MG_(το_κάνει_ψέματα)
7	limóri	limóri	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	5	obj	_	_
8	dəyí	deyí	SCONJ	_	_	5	mark	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjSub|Orig=diye(<deyü)|OrigLang=tr|#Variation_in_phonetic_transcription

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 xcomp	color:blue
1	Etó	Etó	DET	DET	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	det	_	_
2	to	to	PRON	PRON	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Rel	3	nsubj	_	_
3	(é)rχete	érχumu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	LC=Yes|MorphSynC=SynIn|MorphSynSC=RelCl
4	to	o	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	peδí	peδí	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	12	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	emís	emís	PRON	PRON	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	dom	dom	PART	PART	Polarity=Neg	9	advmod	_	Orig=δεν|OrigLang=ell
9	uškam	uška	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
10	na	na	AUX	Subj	_	12	aux	_	_
11	to	to	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
12	fam	tróo	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


