---
layout: base
title:  'Statistics of mark in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `mark`

This relation is universal.

27 nodes (3%) are attached to their parents as `mark`.

25 instances of `mark` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.62962962962963.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt> (15; 56% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt> (4; 15% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PART.html">PART</a></tt> (3; 11% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt> (2; 7% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt>-<tt><a href="cpg_amgic-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt>-<tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 mark	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 mark	color:blue
1	tóti	tóti	ADV	ADV	_	3	advmod	_	_
2	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	ípin	lé(γ)o	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	δa	(e)γó	PRON	PRON	Case=Acc|Clitic=Yes|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	probably /da/<ta (=to), voicing after nasal, cf. 'góri' in AMGiC_17
5	s	s(e)	ADP	AsPpSp	_	7	case	_	_
6	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	vaván	vavás	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	3	iobj	_	_
8	ǰis	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nmod	_	_
9	óči	óči	SCONJ	SCONJ	_	11	mark	_	_
10	tútunu	(e)tútus	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nmod	_	_
11	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	_
12	ne	ímu	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	LC=Yes|MorphSynC=MorphIn|MorphSynSC=EnCop|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 mark	color:blue
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


