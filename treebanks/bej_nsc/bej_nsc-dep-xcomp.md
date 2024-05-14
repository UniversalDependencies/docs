---
layout: base
title:  'Statistics of xcomp in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `xcomp`

This relation is universal.

14 nodes (0%) are attached to their parents as `xcomp`.

14 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92857142857143.

The following 3 pairs of parts of speech are connected with `xcomp`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (10; 71% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (3; 21% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-INTJ.html">INTJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	ʃakeː	_	NOUN	N	Gender=Masc	3	xcomp	_	AlignBegin=163445|AlignEnd=163631|GE=precipice|RX=[N].[M]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Gender=Masc	1	det	_	AlignBegin=163631|AlignEnd=163816|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
3	akaː	_	VERB	V1	VerbClass=1	6	nmod	_	AlignBegin=163816|AlignEnd=164064|GE=become[CVB].[MNR]|MGloss=become[CVB].[MNR]|MSeg=ak-aː|RX=[V1].[IRG]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=164064|AlignEnd=164187|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
5	t=	_	DET	DET	Definite=Def|Gender=Fem	6	det	_	AlignBegin=164187|AlignEnd=164261|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
6	ʔabaː	_	NOUN	N	Gender=Fem	0	root	_	AlignBegin=164261|AlignEnd=164335|GE=river_branch|RX=[N].[F]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=164335|AlignEnd=164409|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	6	cop	_	AlignBegin=164409|AlignEnd=164483|GE=[COP].[3].[SG]|RX=[PRED].[N]|TokenType=Clit
9	=it	_	SCONJ	CONJ	_	6	dep	_	AlignBegin=164483|AlignEnd=164558|GE=[CSL]|RX=[CONJ]|TokenType=Clit
10	//	_	PUNCT	_	_	6	punct	_	AlignBegin=164558|AlignEnd=164928|GE=[//]|TokenType=Break
11	t=	_	DET	DET	Definite=Def|Gender=Fem	12	det	_	AlignBegin=165241|AlignEnd=165315|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
12	ʔabaː	_	NOUN	N	Gender=Fem	14	dep:comp	_	AlignBegin=165315|AlignEnd=165389|GE=river_branch|RX=[N].[F]|TokenType=Root
13	=t	_	DET	DET	Gender=Fem	12	det	_	AlignBegin=165389|AlignEnd=165463|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
14	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	6	obl:arg	_	AlignBegin=165463|AlignEnd=165537|GE=[LOC].[SG]|RX=[POSTP]|TokenType=Clit
15	//	_	PUNCT	_	_	6	punct	_	AlignBegin=165537|AlignEnd=165832|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 xcomp	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=39526|AlignEnd=39623|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
2	tak	_	NOUN	N	Gender=Masc	3	dep:comp	_	AlignBegin=39623|AlignEnd=39720|GE=man|RX=[N].[M]|TokenType=Root
3	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	4	dep:comp	_	AlignBegin=39720|AlignEnd=39817|GE=[ABL].[SG]|RX=[POSTP]|TokenType=Clit
4	=ka	_	ADP	POSTP	Degree=Cmp	5	dep	_	AlignBegin=39817|AlignEnd=39913|GE=[CMPR]|RX=[POSTP]|TokenType=Clit
5	ʔaɖami	_	ADJ	ADJ	_	8	xcomp	_	AlignBegin=39913|AlignEnd=40042|GE=young|RX=[ADJ]|TokenType=Root
6	=ka	_	ADP	POSTP	Degree=Cmp	5	dep	_	AlignBegin=40042|AlignEnd=40171|GE=[CMPR]|RX=[POSTP]|TokenType=Clit
7	=b	_	DET	DET	Case=Acc|Gender=Masc	5	det	_	AlignBegin=40171|AlignEnd=40300|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
8	akajeː	_	VERB	V1	VerbClass=1	12	advcl	_	AlignBegin=40300|AlignEnd=40687|GE=become[CVB].[SMLT]|MGloss=become[CVB].[SMLT]|MSeg=aka-jeː|RX=[V1].[IRG]|TokenType=Root
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=40687|AlignEnd=40816|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
10	nafs	_	NOUN	N	Gender=Masc	12	obj	_	AlignBegin=40816|AlignEnd=40945|GE=soul|RX=[SBJ].[N].[M]|TokenType=Root
11	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	10	nmod:poss	_	AlignBegin=40945|AlignEnd=41074|GE=[POSS].[1SG].[NOM]|RX=[PRO]|TokenType=Clit
12	rhi	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=41074|AlignEnd=41461|GE=see[AOR].[1SG]|MGloss=see[AOR].[1SG]|MSeg=rh-i|RX=[V2][TAM].[PNG]|TokenType=Root
13	/	_	PUNCT	_	_	12	punct	_	AlignBegin=41461|AlignEnd=41850|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	oːn	_	DET	V2	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=119212|AlignEnd=119364|GE=[PROX].[SG].[M].[ACC]|RX=[DET]|TokenType=Root
2	i=	_	DET	V2	Definite=Def|Gender=Masc	3	det	_	AlignBegin=119212|AlignEnd=119364|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
3	dammʔara	_	NOUN	V2	Gender=Masc	6	obj	_	AlignBegin=119212|AlignEnd=119364|GE=gold|RX=[N].[M]|TokenType=Root
4	=joː	_	PRON	V2	Case=Acc|Number=Sing|Person=3|Poss=Yes	3	dep:comp	_	AlignBegin=119212|AlignEnd=119364|GE=[POSS].[3SG].[ACC]|RX=[PRO]|TokenType=Clit
5	bass	_	ADV	V2	_	6	advmod	_	AlignBegin=119212|AlignEnd=119364|GE=only|RX=[PTCL.BORR.ARA]|TokenType=Root
6	hisik	_	INTJ	V2	_	7	xcomp	_	AlignBegin=119212|AlignEnd=119364|GE=shh|RX=[INTJ]|TokenType=Root
7	akeːtiːt	_	VERB	V2	_	9	advcl	_	AlignBegin=119212|AlignEnd=119364|GE=become[CVB].[SEQ]|MGloss=become[CVB].[SEQ]|MSeg=ak-eːtiːt|RX=[LV]|TokenType=Root
8	/	_	PUNCT	V2	_	7	punct	_	AlignBegin=119212|AlignEnd=119364|GE=/|TokenType=Break
9	bʔeːtiːt	_	VERB	V2	VerbClass=2	15	advcl	_	AlignBegin=119212|AlignEnd=119516|GE=lie_down[CVB].[SEQ]|MGloss=lie_down[CVB].[SEQ]|MSeg=bʔ-eːtiːt|RX=[V2]|TokenType=Root
10	/	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=119516|AlignEnd=119821|GE=[/]|TokenType=Break
11	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	13	det	_	AlignBegin=119821|AlignEnd=120203|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
12	i=	_	DET	DET	Definite=Def|Gender=Masc	13	det	_	AlignBegin=120203|AlignEnd=120330|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
13	dammʔara	_	NOUN	N	Gender=Masc	15	obl:arg	_	AlignBegin=120330|AlignEnd=120457|GE=gold|RX=[N].[M]|TokenType=Root
14	=iːsoː	_	PRON	PRO	Case=Abl|Number=Sing|Person=3|Poss=Yes	13	nmod:poss	_	AlignBegin=120457|AlignEnd=120585|GE=[POSS].[3SG].[ABL]|RX=[PRO]|TokenType=Clit
15	tamiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	16	dep:conj	_	AlignBegin=120585|AlignEnd=120967|GE=eat[IPFV].[3SG].[M]|MGloss=eat[IPFV].[3SG].[M]|MSeg=tam-iːni|RX=[V2][TAM].[PNG]|TokenType=Root
16	gʷʔiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=120967|AlignEnd=121349|GE=drink[IPFV].[3SG].[M]|MGloss=drink[IPFV].[3SG].[M]|MSeg=gʷʔ-iːni|RX=[V2][TAM].[PNG]|TokenType=Root
17	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	16	discourse	_	AlignBegin=121349|AlignEnd=121731|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
18	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=121731|AlignEnd=122112|GE=[//]|TokenType=Break

~~~


