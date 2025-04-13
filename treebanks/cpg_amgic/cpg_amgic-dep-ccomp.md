---
layout: base
title:  'Statistics of ccomp in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `ccomp`

This relation is universal.

14 nodes (3%) are attached to their parents as `ccomp`.

11 instances of `ccomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28571428571429.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt> (10; 71% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (2; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 ccomp	color:blue
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
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 20 ccomp	color:blue
1	Amá	amá	CCONJ	CCONJ	_	2	cc	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=ConjCo|OrigLang=tr
2	tránis	tranó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_#na-less subjunctive instead of infinitive?
3	op	op	ADP	ADP	_	5	case	_	_
4	tu	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	stóma	stóma	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
6	su	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod	_	_
7	mi	mi	PART	Neg	_	8	advmod	_	_
8	pis	léghu	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
9	óči	óči	SCONJ	SCONJ	_	14	mark	_	_
10	ro	ro	PRON	PRON	_	12	det	_	#According to Dawkins 1916:51 an indeclinable demonstrative from εδώ 'here'
11	t	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	zenginí	zenginí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	14	nsubj	_	_
13	"	"	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
14	ko	ko	ADJ	_	_	8	ccomp	_	_
15	mu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	nmod	_	_
16	ne	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=EnCop|SpaceAfter=No
17	"	"	PUNCT	PUNCT	_	16	punct	_	_
18	ya	ya	CCONJ	CCONJ	_	8	cc	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=ConjCo|OrigLang=tr
19	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
20	ko	ko	ADJ	_	_	24	ccomp	_	_
21	mas	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Plur|Person=1|Poss=Yes|PronType=Prs	20	nmod	_	_
22	éni	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	SpaceAfter=No
23	"	"	PUNCT	PUNCT	_	22	punct	_	_
24	pe	léghu	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 ccomp	color:blue
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


