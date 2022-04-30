---
layout: base
title:  'Statistics of iobj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `iobj`

This relation is universal.

21 nodes (2%) are attached to their parents as `iobj`.

21 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66666666666667.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (15; 71% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (4; 19% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	AlignBegin=2092|AlignEnd=2231|GE=disappear|Gloss=disappear|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=2231|AlignEnd=2370|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	AlignBegin=2370|AlignEnd=2509|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=2509|AlignEnd=2648|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 iobj	color:blue
1	əəə	_	INTJ	HESIT	_	8	discourse	_	AlignBegin=16164|AlignEnd=16399|GE=er|Gloss=er|RX=[HESIT]|TokenType=Stem
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	AlignBegin=16399|AlignEnd=16516|GE=small|Gloss=small|RX=[ADJ]|TokenType=Stem
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	AlignBegin=16516|AlignEnd=16634|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	8	nsubj	_	AlignBegin=16634|AlignEnd=16869|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Stem
5	geːb	_	ADP	POSTP	_	8	iobj	_	AlignBegin=16869|AlignEnd=17104|GE=beside|Gloss=beside|RX=[POSTP]|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=17104|AlignEnd=17339|TokenType=Break
7	tiː-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	8	nsubj:aff	_	AlignBegin=17339|AlignEnd=17407|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
8	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	AlignBegin=17407|AlignEnd=17475|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
9	=aj	_	SCONJ	CONJ	_	8	mark	_	AlignBegin=17475|AlignEnd=17543|GE==[CSL]|RX==[CONJ]|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=17543|AlignEnd=19067|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 iobj	color:blue
1	beːn	_	ADV	ADV	_	7	iobj	_	AlignBegin=2926|AlignEnd=3046|GE=there|Gloss=there|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=3046|AlignEnd=3398|TokenType=Break
3	i=	_	DET	DET	Definite=Def|Gender=Masc	4	det	_	AlignBegin=3398|AlignEnd=3530|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
4	ʃarg	_	PROPN	NP	_	1	reparandum	_	AlignBegin=3530|AlignEnd=3662|GE=[Sharg]|ProperName=Sharg|RX=[N].[PROP]|TokenType=Stem
5	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	4	case	_	AlignBegin=3662|AlignEnd=3794|GE==[LOC].[SG]|RX==[POSTP]|TokenType=Clit
6	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=3794|AlignEnd=3926|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
7	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	AlignBegin=3926|AlignEnd=4058|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
8	=ajt	_	CCONJ	CCONJ	_	7	cc	_	AlignBegin=4058|AlignEnd=4190|GE==[COORD]|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=4190|AlignEnd=5569|TokenType=Break
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	AlignBegin=5569|AlignEnd=5666|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
11	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=5666|AlignEnd=5763|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
12	=iji	_	PRON	PRO	Case=Gen|Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	AlignBegin=5763|AlignEnd=5860|GE==[POSS].[1SG].[GEN]|RX==[PRO]|TokenType=Clit
13	haraw	_	VERB	V1	VerbClass=1	17	advcl	_	AlignBegin=5860|AlignEnd=6006|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
14	-a	_	SCONJ	CVB	VerbForm=Conv	13	mark:aff	_	AlignBegin=6006|AlignEnd=6152|GE=-[CVB].[MNR]|TokenType=InflAff
15	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=6152|AlignEnd=6713|TokenType=Break
16	a-	_	PRON	PNG	Number=Sing|Person=1	17	nsubj:aff	_	AlignBegin=6713|AlignEnd=6799|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
17	dif	_	VERB	V1	Aspect=Perf|VerbClass=1	24	advcl	_	AlignBegin=6799|AlignEnd=6885|GE=leave\[PFV]|Gloss=leave|RX=[V1]|TokenType=Stem
18	=hoːb	_	SCONJ	CONJ	_	17	mark	_	AlignBegin=6885|AlignEnd=6972|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
19	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=6972|AlignEnd=7232|TokenType=Break
20	biri	_	NOUN	N	Gender=Masc	24	nsubj	_	AlignBegin=7232|AlignEnd=7478|GE=rain|Gloss=rain|RX=[N].[M]|TokenType=Stem
21	dh	_	ADP	POSTP	_	24	iobj	_	AlignBegin=7478|AlignEnd=7601|GE=[DIR]|RX=[POSTP]|TokenType=Stem
22	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	AlignBegin=7601|AlignEnd=7724|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
23	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	24	nsubj:aff	_	AlignBegin=7724|AlignEnd=7847|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
24	jaːm	_	VERB	V1	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=7847|AlignEnd=7970|GE=rain\[INT].[PFV]|Gloss=rain|RX=[V1].[DER]|TokenType=Stem
25	//	_	PUNCT	PUNCT	_	24	punct	_	AlignBegin=7970|AlignEnd=9063|TokenType=Break

~~~


