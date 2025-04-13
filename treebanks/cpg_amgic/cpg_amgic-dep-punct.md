---
layout: base
title:  'Statistics of punct in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `punct`

This relation is universal.

78 nodes (17%) are attached to their parents as `punct`.

70 instances of `punct` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.16666666666667.

The following 7 pairs of parts of speech are connected with `punct`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (60; 77% instances), <tt><a href="cpg_amgic-pos-AUX.html">AUX</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (5; 6% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (5; 6% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances), <tt><a href="cpg_amgic-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances), <tt><a href="cpg_amgic-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances), <tt><a href="cpg_amgic-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cpg_amgic-pos-PUNCT.html">PUNCT</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 punct	color:blue
1	vréši	vréxu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	siǰím	_	X	_	_	1	nmod	_	Lang=tr
3	gibi	_	X	_	_	2	case	_	Lang=tr|LC=YES|MorphSynC=ELIs|MorphSynSC=ELIsPost|SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 punct	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	mána	mána	NOUN	NOUN	Case=Voc|Gender=Fem|Number=Sing	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	xásis	xánu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ta	(e)γó	PRON	PRON	Case=Acc|Clitic=Yes|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	#form probably in singular
5	m'	mi	AUX	Ques	_	3	aux:q	_	LC=YES|MorphSynC=FrGrEl|MorphSynT=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	3	punct	_	_
7	páli	páli	ADV	ADV	_	8	advmod	_	_
8	séliz	sélu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
9	na	na	AUX	Subj	_	11	aux	_	_
10	s'	(e)γó	PRON	PRON	Case=Acc|Number=Sing|Person=2|PronType=Prs	11	iobj	_	_
11	píši	ftšánu	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	ccomp	_	_
12	eziétza	_	NOUN	NOUN	_	11	obj	_	#Meaning not clear, translated as "torture" (Noun)
13	mi	mi	AUX	Ques	_	11	aux:q	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
14	?	PUNCT	PUNCT	_	_	11	punct	_	_

~~~


