---
layout: base
title:  'Statistics of dep in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep`

This relation is universal.
There are 3 language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

2 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `dep`: <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dep	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	AlignBegin=68424|AlignEnd=68690|GE=plenty|Gloss=plenty|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=68690|AlignEnd=69484|TokenType=Break
3	naʃʃalama	_	ADJ	ADJ	_	4	amod	_	AlignBegin=69484|AlignEnd=69874|GE=athletic-[PL]|Gloss=athletic|MGloss=athletic-PL|MSeg=naʃʃalam-a|RX=[ADJ]|TokenType=Stem
4	kam	_	NOUN	N	Number=Plur	12	obj	_	AlignBegin=69874|AlignEnd=70265|GE=camel\[PL]|Gloss=camel|RX=[N]|TokenType=Stem
5	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=70265|AlignEnd=71814|TokenType=Break
6	aː#	_	X	FS	_	8	dep	_	AlignBegin=71814|AlignEnd=72145|GE=[FS]|RX=[FS]|TokenType=Unfinished
7	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	6	reparandum	_	AlignBegin=72145|AlignEnd=72311|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
8	kina	_	PRON	PRO	Reflex=Yes	9	nmod	_	AlignBegin=72311|AlignEnd=72477|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
9	mittia	_	NOUN	N	Number=Plur	4	nmod	_	AlignBegin=72477|AlignEnd=72698|GE=pure_breed-[PL]|Gloss=pure_breed|MGloss=pure_breed-PL|MSeg=mitti-a|RX=[N]|TokenType=Stem
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	9	det	_	AlignBegin=72698|AlignEnd=72809|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=72809|AlignEnd=73141|TokenType=Break
12	iːbirin	_	VERB	V1,IRG	Aspect=Aor|Number=Plur|VerbClass=1	0	root	_	AlignBegin=73141|AlignEnd=73388|GE=[3]-have\[AOR]-[PL]|Gloss=have|MGloss=3-have\AOR-PL|MSeg=iː-biri-n|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Stem
13	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=73388|AlignEnd=73636|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	AlignBegin=132837|AlignEnd=133174|GE=what|Gloss=what|RX=[PRO].[Q]|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|GE=[COM]|RX=[POSTP]|TokenType=Stem
3	jʔaː	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133623|GE=come-[CVB].[MNR]|Gloss=come|MGloss=come-CVB.MNR|MSeg=jʔ-aː|RX=[V2].[IRG]-[PRF]|TokenType=Stem
4	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133623|AlignEnd=133679|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
5	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|GE==[POSS].[2SG].[ACC]|RX==[PRO]|TokenType=Clit
6	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133735|AlignEnd=133791|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
8	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339

~~~


