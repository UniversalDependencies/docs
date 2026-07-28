---
layout: base
title:  'Statistics of det in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="cpg_amgic-dep-det-poss.html">det:poss</a></tt>.

72 nodes (9%) are attached to their parents as `det`.

72 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22222222222222.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-DET.html">DET</a></tt> (67; 93% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cpg_amgic-pos-NUM.html">NUM</a></tt>-<tt><a href="cpg_amgic-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	fikirsúzis	fikirsúzis	ADJ	ADJ	Case=Voc|Gender=Masc|Number=Sing	3	amod	_	Orig=fikirsiz|OrigLang=tr
2	mu	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
3	ádras	ádras	NOUN	NOUN	Case=Voc|Gender=Masc|Number=Sing	8	vocative	_	_
4	tiyá	tiás	DET	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	5	det	_	_
5	kalaǰí	kalaǰí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
6	ne	ne	PRON	Ques	PronType=Int	7	obl	_	Foreign=Yes|Lang=tr
7	deyí	deyí	ADP	_	_	8	case	_	Foreign=Yes|Lang=tr
8	ípis	léγu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	ta	(e)γó	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	#weak_clitic_form_double_cliting
10	mi	mi	AUX	_	_	8	aux:q	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=QPart|Orig=mI|OrigLang=tr|SpaceAfter=No
11	?	?	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 det	color:blue
1	Tučá	tučá	ADV	ADV	_	8	advmod	_	_
2	op	op	ADP	ADP	_	6	case	_	_
3	ro	ro	PRON	PRON	PronType=Dem	6	det	_	#According to Dawkins 1916:51 an indeclinable demonstrative from εδώ 'here'
4	tes	(o)	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
5	triz	triz	NUM	NUM	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	6	nummod	_	_
6	líres	líra	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	_
7	χem	χem	CCONJ	_	_	8	cc	_	LC=Yes|MorphSynC=FrGrEl|MorphSynSC=ConjCo
8	qazánǰisi	qazanǰó	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	OrigLang=tr
9	ombrín	(ombrí?)	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
10	du	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	8	punct	_	_
12	χem	χem	CCONJ	_	_	13	cc	_	_
13	qazánǰisi	qazandó	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	conj	_	_
14	polá	(polís)	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Plur	15	amod	_	_
15	pará	pará	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	13	obj	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	13	punct	_	_
17	χem	χem	CCONJ	_	_	21	cc	_	_
18	perín	perí	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	21	obj	_	(#final -n euphonic or from -ion ending?)
19	du	(e)γó	PRON	PRON	Case=Gen|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	18	nmod	_	_
20	ren	ren	PART	Neg	_	21	advmod	_	_
21	skótisi	skotónu	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	conj	_	SpaceAfter=No
22	.	.	PUNCT	PUNCT	_	21	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
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


