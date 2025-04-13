---
layout: base
title:  'Statistics of aux:q in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="cpg_amgic-dep-aux.html">aux</a></tt>.

6 nodes (1%) are attached to their parents as `aux:q`.

6 instances of `aux:q` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 2 pairs of parts of speech are connected with `aux:q`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-AUX.html">AUX</a></tt> (4; 67% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-AUX.html">AUX</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 aux:q	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:q	color:blue
1	Psémata	pséma	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	_
2	mi	mi	AUX	_	_	1	aux:q	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=QPart|Orig=mI|OrigLang=tr
3	na	na	AUX	Subj	_	4	aux	_	_
4	púmi	léγo	VERB	VERB	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	yoksa	yoksa	CCONJ	_	_	7	cc	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=ConjCo|Orig=yoksa|OrigLang=tr
7	alísia	alísia	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	4	obj	_	_
8	m	mi	AUX	_	_	7	aux:q	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
9	'	'	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


