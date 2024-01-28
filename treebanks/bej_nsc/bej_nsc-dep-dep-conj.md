---
layout: base
title:  'Statistics of dep:conj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:conj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 2 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

26 nodes (2%) are attached to their parents as `dep:conj`.

26 instances of `dep:conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.07692307692308.

The following 5 pairs of parts of speech are connected with `dep:conj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (21; 81% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dep:conj	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=38507|AlignEnd=38641|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
2	his	_	NOUN	N	Gender=Masc	4	obj	_	AlignBegin=38641|AlignEnd=38775|GE=voice|Gloss=voice|RX=[N].[M]|TokenType=Root
3	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	AlignBegin=38775|AlignEnd=38910|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
4	gajjaran	_	VERB	V2	Number=Sing|VerbClass=2	8	dep:conj	_	AlignBegin=38910|AlignEnd=39178|GE=change-[PFV].[1SG]|Gloss=change|MGloss=change-PFV.1SG|MSeg=gajjar-an|RX=[V2]-[TAM].[PNG]|TokenType=Root
5	=t	_	CCONJ	CCONJ	_	4	cc	_	AlignBegin=39178|AlignEnd=39312|GE==[COORD]|RX==[CONJ]|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=39312|AlignEnd=39715|TokenType=Break
7	hoːj	_	PRON	PRO	Case=Abl	8	iobj	_	AlignBegin=39715|AlignEnd=40053|GE=[ABL].[3]|RX=[PRO]|TokenType=Root
8	sallamaman	_	VERB	V2	Number=Sing|VerbClass=2	9	parataxis	_	AlignBegin=40053|AlignEnd=40391|GE=give-[MID]-[PFV].[1SG]|Gloss=give|MGloss=give-MID-PFV.1SG|MSeg=sallam-am-an|ReportedSpeech=Yes|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
9	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=40391|AlignEnd=40729|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=40729|AlignEnd=42616|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 dep:conj	color:blue
1	areː	_	ADV	PTCL	_	8	discourse	_	AlignBegin=48704|AlignEnd=48951|GE=then|Gloss=then|RX=[PTCL]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=48951|AlignEnd=50650|TokenType=Break
3	bʔaɖaɖ	_	NOUN	N	Gender=Masc	6	dep:conj	_	AlignBegin=50650|AlignEnd=50893|GE=sword|Gloss=sword|RX=[N].[M]|TokenType=Root
4	=wa	_	CCONJ	CCONJ	_	3	cc	_	AlignBegin=50893|AlignEnd=51137|GE==[COORD]|RX==[CONJ]|TokenType=Clit
5	i=	_	DET	DET	Definite=Def|Gender=Masc	6	det	_	AlignBegin=51137|AlignEnd=51299|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
6	koːlej	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=51299|AlignEnd=51461|GE=stick|Gloss=stick|RX=[N].[M]|TokenType=Root
7	=wa	_	CCONJ	CCONJ	_	6	cc	_	AlignBegin=51461|AlignEnd=51624|GE==[COORD]|RX==[CONJ]|TokenType=Clit
8	sallamja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	14	dep:conj	_	AlignBegin=51624|AlignEnd=51867|GE=give-[PFV].[3SG].[M]|Gloss=give|MGloss=give-PFV.3SG.M|MSeg=sallam-ja|RX=[V2]-[TAM].[PNG]|TokenType=Root
9	=ajt	_	CCONJ	CONJ	_	8	cc	_	AlignBegin=51867|AlignEnd=51989|GE==[CSL]|RX==[CONJ]|TokenType=Clit
10	=heːb	_	PRON	PRO	Number=Sing|Person=1	8	obj	_	AlignBegin=51989|AlignEnd=52111|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=52111|AlignEnd=52598|TokenType=Break
12	daːji	_	ADJ	ADJ	_	14	obl:mod	_	AlignBegin=52598|AlignEnd=52741|GE=good|Gloss=good|RX=[ADJ]|TokenType=Root
13	=t	_	DET	DET	Definite=Ind|Gender=Fem	12	det	_	AlignBegin=52741|AlignEnd=52885|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
14	ʔabkin	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	15	parataxis	_	AlignBegin=52885|AlignEnd=53173|GE=take-[IMP].[SG].[F]-[EMPH]|Gloss=take|MGloss=take-IMP.SG.F-EMPH|MSeg=ʔabk-i-n|ReportedSpeech=Yes|RX=[V1]-[TAM].[PNG]-[SUFX]|TokenType=Root
15	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	21	advcl	_	AlignBegin=53173|AlignEnd=53316|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
16	=oː	_	PRON	PRO	Number=Sing|Person=1	15	obj	_	AlignBegin=53316|AlignEnd=53388|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
17	=hoːb	_	SCONJ	CONJ	_	15	mark	_	AlignBegin=53388|AlignEnd=53460|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=53460|AlignEnd=53748|TokenType=Break
19	hoːj	_	PRON	PRO	Case=Abl	20	iobj	_	AlignBegin=53748|AlignEnd=54050|GE=[ABL].[3]|RX=[PRO]|TokenType=Root
20	sallamaman	_	VERB	V2	Number=Sing|VerbClass=2	21	parataxis	_	AlignBegin=54050|AlignEnd=54353|GE=give-[MID]-[PFV].[1SG]|Gloss=give|MGloss=give-MID-PFV.1SG|MSeg=sallam-am-an|ReportedSpeech=Yes|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
21	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54353|AlignEnd=54656|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
22	//	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=54656|AlignEnd=56172|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 dep:conj	color:blue
1	ti=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=53157|AlignEnd=53282|GE=[DEF].[F]|nWord=1|RX=[DET]|TokenType=Clit
2	ʃartijaː	_	NOUN	N	Gender=Fem	11	dislocated	_	AlignBegin=53282|AlignEnd=53533|GE=line[PL]|MGloss=line[PL]|MSeg=ʃarti-jaː|nWord=1|RX=[N].[F]|TokenType=Root
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=53533|AlignEnd=53910|GE=[/]|nWord=2|TokenType=Break
4	kaːmi	_	NOUN	N	_	5	nmod	_	AlignBegin=54098|AlignEnd=54415|GE=camel[GEN]|MGloss=camel[GEN]|MSeg=kaːm-i|nWord=4|RX=[N][CASE]|TokenType=Root
5	meːs	_	NOUN	_	_	6	dep:comp	_	GE=race_distance|RX=[N].[M]|TokenType=Root
6	=iːt	_	ADP	DET	Gender=Fem	11	dep	_	AlignBegin=54627|AlignEnd=54732|GE=[SIMIL.SG]|nWord=5|RX=[POSTP]|TokenType=Clit
7	/	_	PUNCT	_	_	6	punct	_	AlignBegin=54732|AlignEnd=55050|GE=[/]|nWord=6|TokenType=Break
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=55050|AlignEnd=55170|GE=[DEF].[M]|nWord=7|RX=[DET]|TokenType=Clit
9	nafs	_	PRON	PRO	Reflex=Yes	11	nsubj	_	AlignBegin=55170|AlignEnd=55290|GE=self|nWord=7|RX=[SBJ].[PRO].[REFL]|TokenType=Root
10	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=55290|AlignEnd=55410|GE=[POSS].[1SG].[NOM]|nWord=7|RX=[PRO]|TokenType=Clit
11	hasama	_	VERB	V2	VerbClass=2	13	dep:conj	_	AlignBegin=55410|AlignEnd=55650|GE=go_past[CVB].[MNR]|MGloss=go_past[CVB].[MNR]|MSeg=hasam-a|nWord=8|RX=[V2][PRF]|TokenType=Root
12	=b	_	DET	DET	Case=Acc|Gender=Masc	11	det	_	AlignBegin=55650|AlignEnd=55770|GE=[INDF].[M].[ACC]|nWord=8|RX=[DET]|TokenType=Clit
13	akajeː	_	AUX	AUX	Aspect=Perf	14	ccomp	_	AlignBegin=55770|AlignEnd=56130|GE=become[CVB].[SMLT]|MGloss=become[CVB].[SMLT]|MSeg=aka-jeː|nWord=9|RX=[AUX].[PRF]|TokenType=Root
14	amri	_	VERB	V1	Number=Sing|VerbClass=1	0	root	_	AlignBegin=56130|AlignEnd=56490|GE=[1SG]find|MGloss=[1SG]find|MSeg=a-mri|nWord=10|RX=[PNG][V1]|TokenType=Root
15	/	_	PUNCT	_	_	14	punct	_	AlignBegin=56490|AlignEnd=56852|GE=[/]|nWord=11|TokenType=Break

~~~


