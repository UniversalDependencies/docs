---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nmod.html">nmod</a></tt>.

16 nodes (2%) are attached to their parents as `nmod:poss`.

16 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (15; 94% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=2092|AlignEnd=2370|GE=disappear-[PFV].[3SG].[M]|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Stem
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\[PFV]|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 nmod:poss	color:blue
1	j=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=147206|AlignEnd=147301|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
2	halaka	_	NOUN	N	Gender=Masc|Number=Plur	26	obj	_	AlignBegin=147301|AlignEnd=147492|GE=cloth-[PL]|Gloss=cloth|MGloss=cloth-PL|MSeg=halak-a|RX=[N].[M]|TokenType=Stem
3	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	2	det	_	AlignBegin=147492|AlignEnd=147587|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
4	=wa	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=147587|AlignEnd=147683|GE==[COORD]|RX==[CONJ]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=147683|AlignEnd=148160|TokenType=Break
6	ji=	_	SCONJ	CONJ	Gender=Masc|Number=Plur	2	acl:relcl	_	AlignBegin=148160|AlignEnd=148239|GE=[REL].[PL].[M]=|RX=[CONJ]=|TokenType=Clit
7	i=	_	DET	DET	Definite=Def|Gender=Masc	8	det	_	AlignBegin=148239|AlignEnd=148318|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	24	obl:arg	_	AlignBegin=148318|AlignEnd=148397|GE=man|Gloss=man|RX=[N].[M]|TokenType=Stem
9	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	8	case	_	AlignBegin=148397|AlignEnd=148476|GE==[LOC].[SG]|RX==[POSTP]|TokenType=Clit
10	areː	_	CCONJ	PTCL	_	13	cc	_	AlignBegin=148476|AlignEnd=148793|GE=then|Gloss=then|RX=[PTCL]|TokenType=Stem
11	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	13	det	_	AlignBegin=148793|AlignEnd=149109|GE=[PROX].[PL].[M].[ACC]|RX=[DEM]|TokenType=Stem
12	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	13	det	_	AlignBegin=149109|AlignEnd=149214|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
13	gaɖʔa	_	NOUN	N	Gender=Masc|Number=Plur	26	obj	_	AlignBegin=149214|AlignEnd=149320|GE=weapon\[PL]|Gloss=weapon|RX=[N].[M]|TokenType=Stem
14	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	13	nmod:poss	_	AlignBegin=149320|AlignEnd=149426|GE==[POSS].[3PL].[ACC]|RX==[PRO]|TokenType=Clit
15	na	_	PART	PTCL	_	13	discourse	_	AlignBegin=149426|AlignEnd=149742|GE=[CONTR]|RX=[PTCL]|TokenType=Stem
16	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=149742|AlignEnd=150059|TokenType=Break
17	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	26	nsubj	_	AlignBegin=150059|AlignEnd=150374|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
18	ti=	_	DET	DET	Definite=Def|Gender=Fem	19	det	_	AlignBegin=150374|AlignEnd=150453|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
19	kina	_	PRON	PRO	Reflex=Yes	17	nmod	_	AlignBegin=150453|AlignEnd=150532|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
20	=t	_	DET	DET	Definite=Ind|Gender=Fem	19	det	_	AlignBegin=150532|AlignEnd=150611|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
21	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	19	nmod:poss	_	AlignBegin=150611|AlignEnd=150690|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
22	/	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=150690|AlignEnd=151006|TokenType=Break
23	ti=	_	DET	DET	Definite=Def|Gender=Fem	24	det	_	AlignBegin=151006|AlignEnd=151181|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
24	sitoːboːj	_	NOUN	V1,IRG	_	26	obj	_	AlignBegin=151181|AlignEnd=151533|GE=convey-[N].[AC]|Gloss=convey|MGloss=convey-N.AC|MSeg=sitoːb-oːj|RX=[V1].[IRG]-[N].[V]|TokenType=Stem
25	ti=	_	SCONJ	REL	Definite=Def|Gender=Fem	26	mark	_	AlignBegin=151533|AlignEnd=151664|GE=[DEF].[F]=|RX=[REL]=|TokenType=Clit
26	astoːbi	_	VERB	V1,IRG	Aspect=Imp|Number=Sing|VerbClass=1	28	ccomp	_	AlignBegin=151664|AlignEnd=151928|GE=[1SG]-convey\[IPFV]|Gloss=convey|MGloss=1SG-convey\[IPFV]|MSeg=a-stoːbi|RX=[PNG]-[V1].[IRG]|TokenType=Stem
27	=jeːt	_	SCONJ	CONJ	Gender=Fem	26	mark	_	AlignBegin=151928|AlignEnd=152060|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
28	akteːn	_	VERB	V1,IRG	Aspect=Imp|Number=Sing|VerbClass=1|Voice=Mid	31	advcl	_	AlignBegin=152060|AlignEnd=152411|GE=[1SG]-know\[MID].[IPFV]|Gloss=know|MGloss=1SG-know\[MID].[IPFV]|MSeg=a-kteːn|RX=[PNG]-[V1].[DER].[IRG]|TokenType=Stem
29	=aj	_	SCONJ	CONJ	_	28	mark	_	AlignBegin=152411|AlignEnd=152587|GE==[CSL]|RX==[CONJ]|TokenType=Clit
30	//	_	PUNCT	PUNCT	_	28	punct	_	AlignBegin=152587|AlignEnd=153596|TokenType=Break
31	sallama	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	33	parataxis	_	AlignBegin=153596|AlignEnd=153882|GE=give-[IMP].[SG].[M]|Gloss=give|MGloss=give-IMP.SG.M|MSeg=sallam-a|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Stem
32	=heːb	_	PRON	PRO	Number=Sing|Person=1	31	obj	_	AlignBegin=153882|AlignEnd=154026|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
33	tini	_	VERB	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=154026|AlignEnd=154241|GE=[3SG].[F]-say\[PFV]|Gloss=say|MGloss=3SG.F-say\[PFV]|MSeg=ti-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
34	=t	_	CCONJ	CCONJ	_	33	cc	_	AlignBegin=154241|AlignEnd=154348|GE==[COORD]|RX==[CONJ]|TokenType=Clit
35	=heːb	_	PRON	PRO	Number=Sing|Person=1	33	obj	_	AlignBegin=154348|AlignEnd=154456|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
36	/	_	PUNCT	PUNCT	_	33	punct	_	AlignBegin=154456|AlignEnd=154887|TokenType=Break

~~~


