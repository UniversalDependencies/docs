---
layout: base
title:  'Statistics of ccomp in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `ccomp`

This relation is universal.

20 nodes (2%) are attached to their parents as `ccomp`.

15 instances of `ccomp` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.75.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt> (13; 65% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt> (2; 10% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (2; 10% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 ccomp	color:blue
1	mána	mána	NOUN	NOUN	Case=Voc|Gender=Fem|Number=Sing	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	χásis	χánu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ta	(e)γó	PRON	PRON	Case=Acc|Clitic=Yes|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	#form probably in singular
5	m'	mi	AUX	Ques	_	3	aux:q	_	LC=Yes|MorphSynC=FrGrEl|MorphSynT=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	3	punct	_	_
7	páli	páli	ADV	ADV	_	8	advmod	_	_
8	séliz	sélu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	parataxis	_	_
9	na	na	AUX	Subj	_	11	aux	_	_
10	s'	(e)γó	PRON	PRON	Case=Acc|Number=Sing|Person=2|PronType=Prs	11	iobj	_	_
11	píši	ftšánu	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	ccomp	_	_
12	eziétza	_	NOUN	NOUN	_	11	obj	_	#Meaning not clear, translated as "torture" (Noun)
13	mi	mi	AUX	Ques	_	11	aux:q	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
14	?	PUNCT	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 20 ccomp	color:blue
1	Amá	amá	CCONJ	CCONJ	_	2	cc	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjCo|OrigLang=tr
2	tránis	tranó	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_#na-less subjunctive instead of infinitive?
3	op	op	ADP	ADP	_	5	case	_	_
4	tu	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	stóma	stóma	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obl	_	_
6	su	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=2|Poss=Yes|PronType=Prs	5	nmod	_	_
7	mi	mi	PART	Neg	_	8	advmod	_	_
8	pis	léγu	VERB	VERB	Aspect=Perf|Mood=Sub|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	ccomp	_	_
9	óči	óči	SCONJ	SCONJ	_	14	mark	_	_
10	ro	ro	PRON	PRON	PronType=Dem	12	det	_	#According to Dawkins 1916:51 an indeclinable demonstrative from εδώ 'here'
11	t	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	zenginí	zenginí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	14	nsubj	_	_
13	"	"	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
14	ko	ko	ADJ	_	_	8	ccomp	_	_
15	mu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=1|Poss=Yes|PronType=Prs	14	nmod	_	_
16	ne	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=EnCop|SpaceAfter=No
17	"	"	PUNCT	PUNCT	_	16	punct	_	_
18	ya	ya	CCONJ	CCONJ	_	8	cc	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjCo|OrigLang=tr
19	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
20	ko	ko	ADJ	_	_	24	ccomp	_	_
21	mas	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Plur|Person=1|Poss=Yes|PronType=Prs	20	nmod	_	_
22	éni	ímu	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	SpaceAfter=No
23	"	"	PUNCT	PUNCT	_	22	punct	_	_
24	pe	léγu	VERB	VERB	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 ccomp	color:blue
1	Ešís	Ešís	PRON	PRON	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	fóški	afóški	ADV	ADV	_	3	advmod	_	<gr. αφώς + και/κι
3	klóθete	klóθο	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	to	to	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	pu	pu	ADV	ADV	_	9	ccomp	_	_
7	índe	ímu	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
8	nútlaka	nútlaka	ADV	ADV	_	9	advmod	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=AdvMod|Orig=mutlaka|OrigLang=tr
9	ksévreté	ksévrum	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
10	to	to	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


