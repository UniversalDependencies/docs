---
layout: base
title:  'Statistics of dep:conj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:conj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

17 nodes (2%) are attached to their parents as `dep:conj`.

17 instances of `dep:conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.35294117647059.

The following 2 pairs of parts of speech are connected with `dep:conj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (16; 94% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 dep:conj	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=38507|AlignEnd=38641|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
2	his	_	NOUN	N	Gender=Masc	4	obj	_	AlignBegin=38641|AlignEnd=38775|GE=voice|Gloss=voice|RX=[N].[M]|TokenType=Stem
3	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	AlignBegin=38775|AlignEnd=38910|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
4	gajjar	_	VERB	V2	VerbClass=2	9	dep:conj	_	AlignBegin=38910|AlignEnd=39044|GE=change|Gloss=change|RX=[V2]|TokenType=Stem
5	-an	_	PRON	TAM,PNG	Aspect=Perf|Number=Sing|Person=1	4	nsubj:aff	_	AlignBegin=39044|AlignEnd=39178|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
6	=t	_	CCONJ	CCONJ	_	4	cc	_	AlignBegin=39178|AlignEnd=39312|GE==[COORD]|RX==[CONJ]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=39312|AlignEnd=39715|TokenType=Break
8	hoːj	_	PRON	PRO	Case=Abl	9	iobj	_	AlignBegin=39715|AlignEnd=40053|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
9	sallam	_	VERB	V2	VerbClass=2	13	parataxis	_	AlignBegin=40053|AlignEnd=40165|GE=give|Gloss=give|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
10	-am	_	AUX	V2	VerbClass=2|Voice=Mid	9	aux:aff	_	AlignBegin=40165|AlignEnd=40278|GE=-[MID]|RX=-[V2].[DER]|TokenType=DerAff
11	-an	_	PRON	TAM,PNG	Aspect=Perf|Number=Sing|Person=1	9	nsubj:aff	_	AlignBegin=40278|AlignEnd=40391|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
12	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	AlignBegin=40391|AlignEnd=40560|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
13	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=40560|AlignEnd=40729|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=40729|AlignEnd=42616|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dep:conj	color:blue
1	areː	_	ADV	PTCL	_	8	discourse	_	AlignBegin=48704|AlignEnd=48951|GE=then|Gloss=then|RX=[PTCL]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=48951|AlignEnd=50650|TokenType=Break
3	bʔaɖaɖ	_	NOUN	N	Gender=Masc	6	dep:conj	_	AlignBegin=50650|AlignEnd=50893|GE=sword|Gloss=sword|RX=[N].[M]|TokenType=Stem
4	=wa	_	CCONJ	CCONJ	_	3	cc	_	AlignBegin=50893|AlignEnd=51137|GE==[COORD]|RX==[CONJ]|TokenType=Clit
5	i=	_	DET	DET	Definite=Def|Gender=Masc	6	det	_	AlignBegin=51137|AlignEnd=51299|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
6	koːlej	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=51299|AlignEnd=51461|GE=stick|Gloss=stick|RX=[N].[M]|TokenType=Stem
7	=wa	_	CCONJ	CCONJ	_	6	cc	_	AlignBegin=51461|AlignEnd=51624|GE==[COORD]|RX==[CONJ]|TokenType=Clit
8	sallam	_	VERB	V2	VerbClass=2	15	dep:conj	_	AlignBegin=51624|AlignEnd=51745|GE=give|Gloss=give|RX=[V2]|TokenType=Stem
9	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	8	nsubj:aff	_	AlignBegin=51745|AlignEnd=51867|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
10	=ajt	_	CCONJ	CONJ	_	8	cc	_	AlignBegin=51867|AlignEnd=51989|GE==[CSL]|RX==[CONJ]|TokenType=Clit
11	=heːb	_	PRON	PRO	Number=Sing|Person=1	8	obj	_	AlignBegin=51989|AlignEnd=52111|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
12	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=52111|AlignEnd=52598|TokenType=Break
13	daːji	_	ADJ	ADJ	_	15	obl:mod	_	AlignBegin=52598|AlignEnd=52741|GE=good|Gloss=good|RX=[ADJ]|TokenType=Stem
14	=t	_	DET	DET	Definite=Ind|Gender=Fem	13	det	_	AlignBegin=52741|AlignEnd=52885|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
15	ʔabk	_	VERB	V1	VerbClass=1	19	parataxis	_	AlignBegin=52885|AlignEnd=52981|GE=take|Gloss=take|ReportedSpeech=Yes|RX=[V1]|TokenType=Stem
16	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	15	nsubj:aff	_	AlignBegin=52981|AlignEnd=53077|GE=-[IMP].[SG].[F]|RX=-[TAM].[PNG]|TokenType=InflAff
17	-n	_	AUX	SUFX	_	15	aux:aff	_	AlignBegin=53077|AlignEnd=53173|GE=-[EMPH]|RX=-[SUFX]|TokenType=InflAff
18	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	19	nsubj:aff	_	AlignBegin=53173|AlignEnd=53244|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
19	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	28	advcl	_	AlignBegin=53244|AlignEnd=53316|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
20	=oː	_	PRON	PRO	Number=Sing|Person=1	19	obj	_	AlignBegin=53316|AlignEnd=53388|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
21	=hoːb	_	SCONJ	CONJ	_	19	mark	_	AlignBegin=53388|AlignEnd=53460|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
22	//	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=53460|AlignEnd=53748|TokenType=Break
23	hoːj	_	PRON	PRO	Case=Abl	24	iobj	_	AlignBegin=53748|AlignEnd=54050|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
24	sallam	_	VERB	V2	VerbClass=2	28	parataxis	_	AlignBegin=54050|AlignEnd=54151|GE=give|Gloss=give|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
25	-am	_	AUX	V2	VerbClass=2|Voice=Mid	24	aux:aff	_	AlignBegin=54151|AlignEnd=54252|GE=-[MID]|RX=-[V2].[DER]|TokenType=DerAff
26	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	24	nsubj:aff	_	AlignBegin=54252|AlignEnd=54353|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
27	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	28	nsubj:aff	_	AlignBegin=54353|AlignEnd=54504|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
28	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=54504|AlignEnd=54656|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
29	//	_	PUNCT	PUNCT	_	28	punct	_	AlignBegin=54656|AlignEnd=56172|TokenType=Break

~~~


