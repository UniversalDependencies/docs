---
layout: base
title:  'Statistics of discourse in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

4 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PART.html">PART</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Amá	amá	ADV	_	_	4	discourse	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjCo|Orig=ama|OrigLang=tr|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	či	či	PART	_	_	4	advmod	_	_
4	cimáse	cimáse	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	_
6	An	an	SCONJ	_	_	8	mark	_	_
7	íse	ímu	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	astenár	astenár	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	advcl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	as	as	PART	_	_	11	mark	_	_
11	férum	férno	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
12	to	o	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	LC=Yes|MorphSynC=L|MorphSynSC=LGen
13	χecím	χecím	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	Orig=hekim|OrigLang=tr|SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	Ce	ce	CCONJ	CCONJ	_	5	cc	_	_
2	to	o	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	mikró	mikrós	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	_
4	ce	ce	CCONJ	CCONJ	_	5	discourse	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=DiscM
5	leχ	leχ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	Na	na	AUX	Subj	_	8	aux	_	_
8	par	pérno	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin	5	ccomp	_	_
9	ce	ce	CCONJ	CCONJ	_	10	cc	_	_
10	sas	(e)γó	PRON	PRON	Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obj	_	_
11	to	o	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	δyávolos	δyávolos	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	LC=Yes|MorphSynC=L|MorphSynSC=LGen|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 discourse	color:blue
1	amán	amán	INTJ	INTJ	_	9	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	javrú	javrú	NOUN	NOUN	Case=Voc|Gender=Neut|Number=Sing	9	vocative	_	SpaceAfter=No
4	m	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	teté	teté	NOUN	NOUN	Case=Voc|Gender=Fem|Number=Sing	3	conj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	5	punct	_	_
7	óči	óči	PRON	SCONJ	PronType=Rel	9	obj	_	_
8	gai	gai	ADV	ADV	_	9	advmod	_	_
9	píkis	poíko	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
10	pike	poíko	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	7	acl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


