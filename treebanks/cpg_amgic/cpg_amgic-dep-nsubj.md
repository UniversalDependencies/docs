---
layout: base
title:  'Statistics of nsubj in UD_Cappadocian-AMGiC'
udver: '2'
---

## Treebank Statistics: UD_Cappadocian-AMGiC: Relations: `nsubj`

This relation is universal.

27 nodes (6%) are attached to their parents as `nsubj`.

23 instances of `nsubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07407407407407.

The following 5 pairs of parts of speech are connected with `nsubj`: <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (17; 63% instances), <tt><a href="cpg_amgic-pos-VERB.html">VERB</a></tt>-<tt><a href="cpg_amgic-pos-PRON.html">PRON</a></tt> (7; 26% instances), <tt><a href="cpg_amgic-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-ADV.html">ADV</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cpg_amgic-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Τúta	(e)tútus	PRON	PRON	Case=Nom|Gender=Neut|Number=Plur|Person=3|PronType=Dem	4	nsubj	_	_
2	xer	xer	DET	DisDet	_	3	det	_	LC=YES|MorphSynC=FrGrEl|MorphSynSC=Quant|Orig=her|OrigLang=tr|#Indeclinable_Distributive_Determiner(=MG κάθε)
3	iméra	iméra	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
4	kasinonǰískaši	kásumu	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	xoríz	xorís	ADP	ADP	_	6	case	_	_
6	zuliá	zuliá	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nsubj	color:blue
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


