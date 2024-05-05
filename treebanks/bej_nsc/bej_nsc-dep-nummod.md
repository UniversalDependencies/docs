---
layout: base
title:  'Statistics of nummod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nummod`

This relation is universal.

9 nodes (0%) are attached to their parents as `nummod`.

9 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55555555555556.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (8; 89% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	mhaj	_	NUM	NUM	_	2	nummod	_	AlignBegin=1025|AlignEnd=1342|GE=three|RX=[NUM]|TokenType=Root
2	ʔar	_	NOUN	N	_	3	obj	_	AlignBegin=1342|AlignEnd=1659|GE=child|RX=[N]|TokenType=Root
3	iːbri	_	VERB	V1	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=1659|AlignEnd=1976|GE=[3SG].[M]have\AOR|MGloss=[3SG].[M]have\AOR|MSeg=iː-bri|RX=[PNG][V1].[IRG]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1976|AlignEnd=2294|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	winneːt	_	ADV	ADV	_	2	advmod	_	AlignBegin=5699|AlignEnd=5959|GE=plenty|RX=[ADV]|TokenType=Root
2	ʔareːji	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=5959|AlignEnd=6219|GE=like[AOR].[3SG].[M]|MGloss=like[AOR].[3SG].[M]|MSeg=ʔareː-ji|RX=[V2][TAM].[PNG]|TokenType=Root
3	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	2	discourse	_	AlignBegin=6219|AlignEnd=6479|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=6479|AlignEnd=6739|GE=[/]|TokenType=Break
5	ʔakra	_	VERB	V1	VerbClass=1	6	acl	_	AlignBegin=6739|AlignEnd=7020|GE=be_strong[CVB].[MNR]|MGloss=be_strong[CVB].[MNR]|MSeg=ʔakr-a|RX=[V1]|TokenType=Root
6	reːr	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	AlignBegin=7020|AlignEnd=7301|GE=love|RX=[N].[M]|TokenType=Root
7	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=7301|AlignEnd=7583|GE=[//]|TokenType=Break
8	mhaj	_	NUM	NUM	_	9	nummod	_	AlignBegin=7699|AlignEnd=8009|GE=three|RX=[NUM]|TokenType=Root
9	koː	_	ADJ	ADJ	_	12	amod	_	AlignBegin=8009|AlignEnd=8164|GE=all|RX=[ADJ]|TokenType=Root
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	obl:mod	_	AlignBegin=8164|AlignEnd=8319|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
11	j=	_	DET	DET	Definite=Def|Gender=Masc	12	det	_	AlignBegin=8319|AlignEnd=8422|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
12	ʔar	_	NOUN	N	_	2	dislocated:obj	_	AlignBegin=8422|AlignEnd=8525|GE=child|RX=[N]|TokenType=Root
13	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	AlignBegin=8525|AlignEnd=8629|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=8629|AlignEnd=8937|GE=[//]|TokenType=Break

~~~


