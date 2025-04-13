---
layout: base
title:  'Statistics of obl in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `obl`

This relation is universal.

18 nodes (4%) are attached to their parents as `obl`.

11 instances of `obl` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.94444444444444.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (11; 61% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (5; 28% instances), <tt><a href="cpg_amgic-pos-ADP.html">ADP</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
1	táre	táre	PRON	PRON	PronType=Ind	3	nmod	_	#MG_:τάδε?_(cf._Kostakis_1968_p196)_indeclinable
2	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	spíči	spíči	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	4	obl	_	#Locative_meaning
4	éni	ímu	VERB	VERB	_	0	root	_	#existential_meaning_"there_is"
5	éna	énas	DET	DET	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	korítsi	korítsi	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	_
7	xošá	xošás	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	6	amod	_	OrigLang=tr|#No LC-induced morphosyntactic phenomenon but interesting postposition of the adjective

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	na	na	AUX	Subj	_	2	aux	_	_
2	baγərtzísi	baγərdó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	csubj	_	_
3	kukuniós	kukuniós	NOUN	NOUN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	vráδin	vráδin	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	6	obl	_	_
6	ortá	ortá	ADV	ADV	_	2	advmod	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=Post|OrigLang=tr|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	6	punct	_	_
8	kaló	kalós	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
9	ren	ren	PART	Neg	_	8	advmod	_	_
10	'ne	ímu	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	LC=YES|MorphSynC=MorphIn|MorphSynSC=CopNeg|#Compare_Turkish:değildir

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl	color:blue
1	fikirsúzis	fikirsúzis	ADJ	ADJ	Case=Voc|Gender=Masc|Number=Sing	3	amod	_	OrigLang=tr|#Turkish_fikirsiz_derivative_morph_copied?
2	mu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
3	ádras	ádras	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	8	vocative	_	_
4	tiyá	tiás	DET	DET	Case=Acc|Gender=Neut|Number=Sing	5	det	_	_
5	kalaǰí	kalaǰí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
6	ne	ne	PRON	Ques	_	7	obl	_	Foreign=Yes|Lang=tr
7	deyí	deyí	ADP	_	_	8	case	_	Foreign=Yes|Lang=tr
8	ípis	léghu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	ta	(e)γó	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obj	_	#weak_clitic_form_double_cliting
10	mi	mi	AUX	_	_	8	aux:q	_	LC=YES|MorphSynC=Part,FrGrEl,QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
11	?	?	PUNCT	PUNCT	_	8	punct	_	_

~~~


