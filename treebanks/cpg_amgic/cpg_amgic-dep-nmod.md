---
layout: base
title:  'Statistics of nmod in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `nmod`

This relation is universal.

28 nodes (6%) are attached to their parents as `nmod`.

22 instances of `nmod` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (22; 79% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod	color:blue
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
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 nmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod	color:blue
1	γáitzisaši	(γazdó)	VERB	VERB	_	0	root	_	Orig=kazmak|OrigLang=tr
2	ta	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
3	t'emélia	t'emélio	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	3	punct	_	_
5	meγáli	meγálos	ADJ	ADJ	Gender=Fem|Number=Sing	6	amod	_	LC=YES|MorphSynC=L|MorphSynSC=LAgr|#no genitive case ending
6	klišás	klišá	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	_
7	ta	(ο)	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	8	det	_	_
8	t'emélia	t'emélio	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	3	appos	_	_#repetition with additional information due to preceding DP

~~~


