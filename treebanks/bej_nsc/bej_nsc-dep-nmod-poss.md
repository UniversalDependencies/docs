---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nmod.html">nmod</a></tt>.

16 nodes (1%) are attached to their parents as `nmod:poss`.

16 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (15; 94% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 nmod:poss	color:blue
1	j=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=147206|AlignEnd=147301|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
2	halak	_	NOUN	N	Gender=Masc	29	ccomp	_	AlignBegin=147301|AlignEnd=147396|GE=cloth|Gloss=cloth|RX=[N].[M]|TokenType=Stem
3	-a	_	PART	_	Number=Plur	2	mark:aff	_	AlignBegin=147396|AlignEnd=147492|GE=-[PL]|TokenType=InflAff
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	2	det	_	AlignBegin=147492|AlignEnd=147587|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	=wa	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=147587|AlignEnd=147683|GE==[COORD]|RX==[CONJ]|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=147683|AlignEnd=148160|TokenType=Break
7	ji=	_	SCONJ	CONJ	Gender=Masc|Number=Plur	2	acl:relcl	_	AlignBegin=148160|AlignEnd=148239|GE=[REL].[PL].[M]=|RX=[CONJ]=|TokenType=Clit
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=148239|AlignEnd=148318|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	25	obl:arg	_	AlignBegin=148318|AlignEnd=148397|GE=man|Gloss=man|RX=[N].[M]|TokenType=Stem
10	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	9	case	_	AlignBegin=148397|AlignEnd=148476|GE==[LOC].[SG]|RX==[POSTP]|TokenType=Clit
11	areː	_	CCONJ	PTCL	_	14	cc	_	AlignBegin=148476|AlignEnd=148793|GE=then|Gloss=then|RX=[PTCL]|TokenType=Stem
12	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	AlignBegin=148793|AlignEnd=149109|GE=[PROX].[PL].[M].[ACC]|RX=[DEM]|TokenType=Stem
13	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	14	det	_	AlignBegin=149109|AlignEnd=149214|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
14	gaɖʔa	_	NOUN	N	Gender=Masc|Number=Plur	29	obj	_	AlignBegin=149214|AlignEnd=149320|GE=weapon\[PL]|Gloss=weapon|RX=[N].[M]|TokenType=Stem
15	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	14	nmod:poss	_	AlignBegin=149320|AlignEnd=149426|GE==[POSS].[3PL].[ACC]|RX==[PRO]|TokenType=Clit
16	na	_	PART	PTCL	_	14	discourse	_	AlignBegin=149426|AlignEnd=149742|GE=[CONTR]|RX=[PTCL]|TokenType=Stem
17	/	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=149742|AlignEnd=150059|TokenType=Break
18	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	29	nsubj	_	AlignBegin=150059|AlignEnd=150374|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
19	ti=	_	DET	DET	Definite=Def|Gender=Fem	20	det	_	AlignBegin=150374|AlignEnd=150453|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
20	kina	_	PRON	PRO	Reflex=Yes	18	nmod	_	AlignBegin=150453|AlignEnd=150532|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
21	=t	_	DET	DET	Definite=Ind|Gender=Fem	20	det	_	AlignBegin=150532|AlignEnd=150611|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
22	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	AlignBegin=150611|AlignEnd=150690|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
23	/	_	PUNCT	PUNCT	_	20	punct	_	AlignBegin=150690|AlignEnd=151006|TokenType=Break
24	ti=	_	DET	DET	Definite=Def|Gender=Fem	25	det	_	AlignBegin=151006|AlignEnd=151181|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
25	sitoːb	_	VERB	V1,IRG	VerbClass=1	29	dep:comp	_	AlignBegin=151181|AlignEnd=151357|GE=convey|Gloss=convey|RX=[V1].[IRG]|TokenType=Stem
26	-oːj	_	SCONJ	N	_	25	mark:aff	_	AlignBegin=151357|AlignEnd=151533|DerPOS=NOUN|GE=-[N].[AC]|RX=-[N].[V]|TokenType=DerAff
27	ti=	_	SCONJ	REL	Definite=Def|Gender=Fem	29	mark	_	AlignBegin=151533|AlignEnd=151664|GE=[DEF].[F]=|RX=[REL]=|TokenType=Clit
28	a-	_	PRON	PNG	Number=Sing|Person=1	29	nsubj:aff	_	AlignBegin=151664|AlignEnd=151796|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
29	stoːbi	_	VERB	V1,IRG	Aspect=Imp|VerbClass=1	32	ccomp	_	AlignBegin=151796|AlignEnd=151928|GE=convey\[IPFV]|Gloss=convey|RX=[V1].[IRG]|TokenType=Stem
30	=jeːt	_	SCONJ	CONJ	Gender=Fem	29	mark	_	AlignBegin=151928|AlignEnd=152060|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
31	a-	_	PRON	PNG	Number=Sing|Person=1	32	nsubj:aff	_	AlignBegin=152060|AlignEnd=152235|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
32	kteːn	_	VERB	V1,IRG	Aspect=Imp|VerbClass=1|Voice=Mid	35	advcl	_	AlignBegin=152235|AlignEnd=152411|GE=know\[MID].[IPFV]|Gloss=know|RX=[V1].[DER].[IRG]|TokenType=Stem
33	=aj	_	SCONJ	CONJ	_	32	mark	_	AlignBegin=152411|AlignEnd=152587|GE==[CSL]|RX==[CONJ]|TokenType=Clit
34	//	_	PUNCT	PUNCT	_	32	punct	_	AlignBegin=152587|AlignEnd=153596|TokenType=Break
35	sallam	_	VERB	V2	VerbClass=2	39	parataxis	_	AlignBegin=153596|AlignEnd=153739|GE=give|Gloss=give|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
36	-a	_	PRON	TAM,PNG	Gender=Masc|Mood=Imp|Number=Sing	35	nsubj:aff	_	AlignBegin=153739|AlignEnd=153882|GE=-[IMP].[SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
37	=heːb	_	PRON	PRO	Number=Sing|Person=1	35	obj	_	AlignBegin=153882|AlignEnd=154026|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
38	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	39	nsubj:aff	_	AlignBegin=154026|AlignEnd=154133|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
39	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=154133|AlignEnd=154241|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
40	=t	_	CCONJ	CCONJ	_	39	cc	_	AlignBegin=154241|AlignEnd=154348|GE==[COORD]|RX==[CONJ]|TokenType=Clit
41	=heːb	_	PRON	PRO	Number=Sing|Person=1	39	obj	_	AlignBegin=154348|AlignEnd=154456|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
42	/	_	PUNCT	PUNCT	_	39	punct	_	AlignBegin=154456|AlignEnd=154887|TokenType=Break

~~~


