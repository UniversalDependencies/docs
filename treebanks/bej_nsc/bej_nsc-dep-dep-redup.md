---
layout: base
title:  'Statistics of dep:redup in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:redup`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>.

4 nodes (0%) are attached to their parents as `dep:redup`.

4 instances of `dep:redup` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 1 pairs of parts of speech are connected with `dep:redup`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (4; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dep:redup	color:blue
1	moːk	_	VERB	V1	VerbClass=1	3	dep:redup	_	AlignBegin=23859|AlignEnd=24018|GE=take_shelter\[INT]|Gloss=take_shelter|RX=[V1].[DER]|TokenType=Stem
2	-eː	_	SCONJ	CVB	VerbForm=Conv	1	mark:aff	_	AlignBegin=24018|AlignEnd=24177|GE=-[CVB].[SMLT]|TokenType=DerAff
3	moːk	_	VERB	V1	VerbClass=1	5	dep:redup	_	AlignBegin=24177|AlignEnd=24336|GE=take_shelter\[INT]|Gloss=take_shelter|RX=[V1].[DER]|TokenType=Stem
4	-eː	_	SCONJ	CVB	VerbForm=Conv	3	mark:aff	_	AlignBegin=24336|AlignEnd=24495|GE=-[CVB].[SMLT]|TokenType=DerAff
5	moːk	_	VERB	V1	VerbClass=1	12	advcl	_	AlignBegin=24495|AlignEnd=24654|GE=take_shelter\[INT]|Gloss=take_shelter|RX=[V1].[DER]|TokenType=Stem
6	-eː	_	SCONJ	CVB	VerbForm=Conv	5	mark:aff	_	AlignBegin=24654|AlignEnd=24813|GE=-[CVB].[SMLT]|TokenType=DerAff
7	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	AlignBegin=24813|AlignEnd=25131|GE=[PROX].[SG].[M].[NOM]|RX=[DEM]|TokenType=Stem
8	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	det	_	AlignBegin=25131|AlignEnd=25290|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
9	biri	_	NOUN	N	Gender=Masc	12	nsubj	_	AlignBegin=25290|AlignEnd=25449|GE=rain|Gloss=rain|RX=[SBJ].[N].[M]|TokenType=Stem
10	/	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=25449|AlignEnd=26008|TokenType=Break
11	diːseːt	_	ADV	ADV	_	12	advmod	_	AlignBegin=26008|AlignEnd=26503|GE=slowly|Gloss=slowly|RX=[ADV]|TokenType=Stem
12	ʔit	_	VERB	V2	VerbClass=2	18	advcl	_	AlignBegin=26503|AlignEnd=26626|GE=fall_asleep|Gloss=fall_asleep|RX=[V2]|TokenType=Stem
13	-ja	_	PRON	TAM,PNG	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	12	nsubj:aff	_	AlignBegin=26626|AlignEnd=26750|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
14	-n	_	X	NP	_	12	dep:aff	_	AlignBegin=26750|AlignEnd=26874|GE=-[L]|ProperName=-L|TokenType=InflAff
15	=hoːb	_	SCONJ	CONJ	_	12	mark	_	AlignBegin=26874|AlignEnd=26998|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
16	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=26998|AlignEnd=28033|TokenType=Break
17	tak	_	NOUN	N	Gender=Masc	18	nsubj	_	AlignBegin=28033|AlignEnd=28250|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
18	eːja	_	VERB	V2,IRG	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbClass=2	21	parataxis	_	AlignBegin=28250|AlignEnd=28359|GE=come\[PFV].[3SG].[M]|Gloss=come|ReportedSpeech=Yes|RX=[V2].[IRG]|TokenType=Stem
19	=heːb	_	PRON	PRO	Number=Sing|Person=1	18	obj	_	AlignBegin=28359|AlignEnd=28468|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
20	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	21	nsubj:aff	_	AlignBegin=28468|AlignEnd=28577|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
21	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=28577|AlignEnd=28686|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
22	//	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=28686|AlignEnd=30643|TokenType=Break

~~~


