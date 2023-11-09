---
layout: base
title:  'Statistics of appos in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `appos`

This relation is universal.

3 nodes (0%) are attached to their parents as `appos`.

3 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	ʔamaːr	_	NOUN	N	Gender=Masc	4	obj	_	AlignBegin=31461|AlignEnd=31663|GE=possessions|nWord=1|RX=[N].[M]|TokenType=Root
2	=oːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1|Poss=Yes	1	nmod:poss	_	AlignBegin=31663|AlignEnd=31866|GE=[POSS].[1PL].[ACC]|nWord=1|RX=[PRO]|TokenType=Clit
3	baː=	_	PART	PTCL	Polarity=Neg	4	advmod	_	AlignBegin=31866|AlignEnd=32001|GE=[NEG].[PROH]|nWord=2|RX=[PTCL]|TokenType=Clit
4	kʷaːsa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=32001|AlignEnd=32271|GE=create[IMP].[SG].[M]|MGloss=create[IMP].[SG].[M]|MSeg=kʷaːs-a|nWord=2|RX=[V1].[IRG][TAM].[PNG]|TokenType=Root
5	samaːr	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=32271|AlignEnd=32473|GE=offspring|nWord=3|RX=[N].[M]|TokenType=Root
6	=oːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=32473|AlignEnd=32676|GE=[POSS].[1PL].[ACC]|nWord=3|RX=[PRO]|TokenType=Clit
7	//	_	PUNCT	_	_	5	punct	_	AlignBegin=33081|AlignEnd=33487|GE=[//]|nWord=5|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=16991|AlignEnd=17113|GE=[DEF].[M]|nWord=1|RX=[DET]|TokenType=Clit
2	finʤan	_	NOUN	N	Gender=Masc	7	obj	_	AlignBegin=17113|AlignEnd=17234|GE=cup|nWord=1|RX=[N].[M]|TokenType=Root
3	mhaj	_	NUM	NUM	_	2	nmod	_	AlignBegin=17234|AlignEnd=17477|GE=three|nWord=2|RX=[NUM]|TokenType=Root
4	/	_	PUNCT	_	_	5	punct	_	AlignBegin=17477|AlignEnd=17720|GE=[/]|nWord=3|TokenType=Break
5	koː	_	ADJ	ADJ	_	2	appos	_	AlignBegin=17720|AlignEnd=17928|GE=all|nWord=4|RX=[ADJ]|TokenType=Root
6	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	5	obl:mod	_	AlignBegin=17928|AlignEnd=18137|GE=[POSS].[3PL].[ACC]|nWord=4|RX=[PRO]|TokenType=Clit
7	ʃaw~waw	_	VERB	V1	VerbClass=1	12	dep:conj	_	AlignBegin=18137|AlignEnd=18345|GE=[gather~PLAC]|nWord=5|RX=[V1].[DER]|TokenType=Root
8	-iːtiːt	_	AUX	_	_	7	aux	_	AlignBegin=18345|AlignEnd=18554|DerPos=NOUN|GE=[CVB].[SEQ]|nWord=5|TokenType=DerAff
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=18554|AlignEnd=18693|GE=[DEF].[M]|nWord=6|RX=[DET]|TokenType=Clit
10	findikʷ	_	NOUN	N	Gender=Masc	11	dep:comp	_	AlignBegin=18693|AlignEnd=18832|GE=mortar|nWord=6|RX=[N].[M]|TokenType=Root
11	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	12	obl:arg	_	AlignBegin=18832|AlignEnd=18971|GE=[LOC].[SG]|nWord=6|RX=[POSTP]|TokenType=Clit
12	gid	_	VERB	V1	VerbClass=1	15	dep:conj	_	AlignBegin=18971|AlignEnd=19179|GE=throw|nWord=7|RX=[V1]|TokenType=Root
13	-tiːt	_	AUX	_	_	12	aux	_	AlignBegin=19179|AlignEnd=19388|DerPos=NOUN|GE=[CVB].[SEQ]|nWord=7|TokenType=DerAff
14	/	_	PUNCT	_	_	12	punct	_	AlignBegin=19388|AlignEnd=19803|GE=[/]|nWord=8|TokenType=Break
15	inʈhiːm	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=20785|AlignEnd=21167|GE=[3SG].[M]grind|MGloss=[3SG].[M]grind|MSeg=i-nʈhiːm|nWord=10|RX=[PNG][V1]|TokenType=Root
16	eːn	_	VERB	V1	VerbClass=1	15	discourse	_	AlignBegin=21167|AlignEnd=21549|GE=say|nWord=11|RX=[V1].[IRG]|TokenType=Root
17	ifi#	_	X	FS	_	19	reparandum	_	AlignBegin=21549|AlignEnd=21931|GE=[FS]|nWord=12|RX=[FS]|TokenType=Unfinished
18	i=	_	DET	DET	Definite=Def|Gender=Masc	19	det	_	AlignBegin=21931|AlignEnd=22058|GE=[DEF].[M]|nWord=13|RX=[DET]|TokenType=Clit
19	finʤan	_	NOUN	N	Gender=Masc	15	obj	_	AlignBegin=22058|AlignEnd=22185|GE=cup|nWord=13|RX=[N].[M]|TokenType=Root
20	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	19	nmod:poss	_	AlignBegin=22185|AlignEnd=22313|GE=[POSS].[3PL].[ACC]|nWord=13|RX=[PRO]|TokenType=Clit
21	ʤuwwaː	_	ADP	POSTP	_	15	obl:arg	_	AlignBegin=22313|AlignEnd=22504|GE=inside|nWord=14|RX=[POSTP].[BORR].[ARA]|TokenType=Root
22	=b	_	DET	DET	Case=Acc|Gender=Masc	21	det	_	AlignBegin=22504|AlignEnd=22695|GE=[INDF].[M].[ACC]|nWord=14|RX=[DET]|TokenType=Clit
23	//	_	PUNCT	_	_	15	punct	_	AlignBegin=22695|AlignEnd=23078|GE=[//]|nWord=15|TokenType=Break

~~~


