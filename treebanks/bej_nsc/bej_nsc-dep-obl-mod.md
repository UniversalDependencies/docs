---
layout: base
title:  'Statistics of obl:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-arg.html">obl:arg</a></tt>.

9 nodes (1%) are attached to their parents as `obl:mod`.

9 instances of `obl:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.66666666666667.

The following 2 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (8; 89% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	da	_	NOUN	N	Gender=Masc|Number=Plur	5	nsubj	_	AlignBegin=52560|AlignEnd=52754|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=52754|AlignEnd=53717|TokenType=Break
3	bʔeː	_	NOUN	N	Gender=Masc	5	obl:mod	_	AlignBegin=53717|AlignEnd=53884|GE=day|Gloss=day|RX=[N].[M]|TokenType=Stem
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=53884|AlignEnd=54051|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	eːjaːn	_	VERB	V2,IRG	Aspect=Pfv|Number=Plur|VerbClass=2	7	parataxis	_	AlignBegin=54051|AlignEnd=54273|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\[PFV]-3PL|MSeg=eːjaː-n|ReportedSpeech=Yes|RX=[V2].[IRG]-[PNG]|TokenType=Stem
6	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	AlignBegin=54273|AlignEnd=54385|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
7	ini	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54385|AlignEnd=54719|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\[PFV]|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
8	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=54719|AlignEnd=55636|TokenType=Break

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 obl:mod	color:blue
1	areː	_	ADV	PTCL	_	8	discourse	_	AlignBegin=48704|AlignEnd=48951|GE=then|Gloss=then|RX=[PTCL]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=48951|AlignEnd=50650|TokenType=Break
3	bʔaɖaɖ	_	NOUN	N	Gender=Masc	6	dep:conj	_	AlignBegin=50650|AlignEnd=50893|GE=sword|Gloss=sword|RX=[N].[M]|TokenType=Stem
4	=wa	_	CCONJ	CCONJ	_	3	cc	_	AlignBegin=50893|AlignEnd=51137|GE==[COORD]|RX==[CONJ]|TokenType=Clit
5	i=	_	DET	DET	Definite=Def|Gender=Masc	6	det	_	AlignBegin=51137|AlignEnd=51299|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
6	koːlej	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=51299|AlignEnd=51461|GE=stick|Gloss=stick|RX=[N].[M]|TokenType=Stem
7	=wa	_	CCONJ	CCONJ	_	6	cc	_	AlignBegin=51461|AlignEnd=51624|GE==[COORD]|RX==[CONJ]|TokenType=Clit
8	sallamja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	14	dep:conj	_	AlignBegin=51624|AlignEnd=51867|GE=give-[PFV].[3SG].[M]|Gloss=give|MGloss=give-PFV.3SG.M|MSeg=sallam-ja|RX=[V2]-[TAM].[PNG]|TokenType=Stem
9	=ajt	_	CCONJ	CONJ	_	8	cc	_	AlignBegin=51867|AlignEnd=51989|GE==[CSL]|RX==[CONJ]|TokenType=Clit
10	=heːb	_	PRON	PRO	Number=Sing|Person=1	8	obj	_	AlignBegin=51989|AlignEnd=52111|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=52111|AlignEnd=52598|TokenType=Break
12	daːji	_	ADJ	ADJ	_	14	obl:mod	_	AlignBegin=52598|AlignEnd=52741|GE=good|Gloss=good|RX=[ADJ]|TokenType=Stem
13	=t	_	DET	DET	Definite=Ind|Gender=Fem	12	det	_	AlignBegin=52741|AlignEnd=52885|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
14	ʔabkin	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	15	parataxis	_	AlignBegin=52885|AlignEnd=53173|GE=take-[IMP].[SG].[F]-[EMPH]|Gloss=take|MGloss=take-IMP.SG.F-EMPH|MSeg=ʔabk-i-n|ReportedSpeech=Yes|RX=[V1]-[TAM].[PNG]-[SUFX]|TokenType=Stem
15	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	21	advcl	_	AlignBegin=53173|AlignEnd=53316|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\[PFV]|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
16	=oː	_	PRON	PRO	Number=Sing|Person=1	15	obj	_	AlignBegin=53316|AlignEnd=53388|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
17	=hoːb	_	SCONJ	CONJ	_	15	mark	_	AlignBegin=53388|AlignEnd=53460|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=53460|AlignEnd=53748|TokenType=Break
19	hoːj	_	PRON	PRO	Case=Abl	20	iobj	_	AlignBegin=53748|AlignEnd=54050|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
20	sallamaman	_	VERB	V2	Number=Sing|VerbClass=2	21	parataxis	_	AlignBegin=54050|AlignEnd=54353|GE=give-[MID]-[PFV].[1SG]|Gloss=give|MGloss=give-MID-PFV.1SG|MSeg=sallam-am-an|ReportedSpeech=Yes|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Stem
21	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54353|AlignEnd=54656|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\[PFV]|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
22	//	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=54656|AlignEnd=56172|TokenType=Break

~~~


