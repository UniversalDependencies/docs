---
layout: base
title:  'Statistics of iobj in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `iobj`

This relation is universal.

6 nodes (1%) are attached to their parents as `iobj`.

4 instances of `iobj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (4; 67% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (2; 33% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 iobj	color:blue
1	tóti	tóti	ADV	ADV	_	3	advmod	_	_
2	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	ípin	lé(gh)o	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	dha	(e)γó	PRON	PRON	Case=Acc|Clitic=Yes|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	probably /da/<ta (=to), voicing after nasal, cf. 'góri' in AMGiC_17
5	s	s(e)	ADP	AsPpSp	_	7	case	_	_
6	tu	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	vaván	vavás	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	3	iobj	_	_
8	ǰis	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	nmod	_	_
9	óči	óči	SCONJ	SCONJ	_	11	mark	_	_
10	tútunu	(e)tútus	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nmod	_	_
11	kóri	kóri	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	3	ccomp	_	_
12	ne	ímu	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	LC=YES|MorphSynC=MorphIn|MorphSynSC=EnCop|SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


