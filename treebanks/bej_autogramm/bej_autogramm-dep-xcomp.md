---
layout: base
title:  'Statistics of xcomp in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `xcomp`

This relation is universal.

51 nodes (0%) are attached to their parents as `xcomp`.

51 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.92156862745098.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (44; 86% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (3; 6% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
1	manniima	_	VERB	N	Gender=Masc|Number=Sing	2	ccomp	_	AlignBegin=292160|AlignEnd=292498|Gloss=wish|MGloss=wish-MID-IMP.SG.M|MSeg=manni-im-a|RX=[N].[M]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
2	ini	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	3	dep:comp	_	AlignBegin=292498|AlignEnd=292724|Gloss=say|MGloss=3SG.M-say|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
3	=jeːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing	6	dep:comp	_	AlignBegin=292724|AlignEnd=292836|Gloss==REL.SG.M|RX==[CONJ]|TokenType=Clit
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=292836|AlignEnd=293175|Gloss=/|TokenType=Break
5	i=	_	DET	DET	Definite=Def|Gender=Masc	6	det	_	AlignBegin=293175|AlignEnd=293269|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
6	manniimti	_	NOUN	N.V	_	7	dep:comp	_	AlignBegin=293269|AlignEnd=293551|Gloss=wish|MGloss=wish-MID-N.AC|MSeg=manni-im-ti|RX=[V2]-[V2].[DER]-[N].[V]|TokenType=Root
7	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	8	obl:arg	_	AlignBegin=293551|AlignEnd=293645|Gloss==ABL.SG|RX==[POSTP]|TokenType=Clit
8	imri	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=293645|AlignEnd=293881|Gloss=find\PFV|MGloss=3SG.M-find\PFV|MSeg=i-mri|RelRole=Obj|RX=[PNG]-[V1]|TokenType=Root
9	=jeː	_	SCONJ	CONJ.REL	PronType=Rel	10	acl:relcl	_	AlignBegin=293881|AlignEnd=293999|Gloss==REL|RX==[CONJ]|TokenType=Clit
10	=na	_	NOUN	CONJ	_	11	xcomp	_	AlignBegin=293999|AlignEnd=294115|Gloss==thing|RX==[CONJ]|TokenType=Clit
11	tikati	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=294115|AlignEnd=294585|Gloss=become|MGloss=3SG.F-become|MSeg=ti-kati|RX=[PNG]-[V1].[IRG]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=294585|AlignEnd=295055|Gloss=//|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 xcomp	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=39526|AlignEnd=39623|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
2	tak	_	NOUN	N	Gender=Masc	3	dep:comp	_	AlignBegin=39623|AlignEnd=39720|Gloss=man|RX=[N].[M]|TokenType=Root
3	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	4	dep:comp	_	AlignBegin=39720|AlignEnd=39817|Gloss==ABL.SG|RX==[POSTP]|TokenType=Clit
4	=ka	_	ADP	POSTP	Degree=Cmp	5	dep	_	AlignBegin=39817|AlignEnd=39913|Gloss==CMPR|RX==[POSTP]|TokenType=Clit
5	ʔaɖami	_	ADJ	ADJ	_	8	xcomp	_	AlignBegin=39913|AlignEnd=40042|Gloss=young|RX=[ADJ]|TokenType=Root
6	=ka	_	ADP	POSTP	Degree=Cmp	5	dep	_	AlignBegin=40042|AlignEnd=40171|Gloss==CMPR|RX==[POSTP]|TokenType=Clit
7	=b	_	DET	DET	Case=Acc|Gender=Masc	5	det	_	AlignBegin=40171|AlignEnd=40300|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
8	akajeː	_	VERB	V1	VerbClass=1	12	advcl	_	AlignBegin=40300|AlignEnd=40687|Gloss=become|MGloss=become-CVB.SMLT|MSeg=aka-jeː|RX=[V1].[IRG]|TokenType=Root
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=40687|AlignEnd=40816|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
10	nafs	_	NOUN	N	Gender=Masc	12	obj	_	AlignBegin=40816|AlignEnd=40945|Gloss=soul|RX=[SBJ].[N].[M]|TokenType=Root
11	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	10	nmod:poss	_	AlignBegin=40945|AlignEnd=41074|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
12	rhi	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=41074|AlignEnd=41461|Gloss=see|MGloss=see-AOR.1SG|MSeg=rh-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
13	/	_	PUNCT	_	_	12	punct	_	AlignBegin=41461|AlignEnd=41850|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 xcomp	color:blue
1	haːjloː	_	PART	PTCL	_	2	discourse	_	AlignBegin=52938|AlignEnd=53183|Gloss=anyway|RX=[PTCL]|TokenType=Root
2	wari	_	NOUN	N	Number=Plur	4	nmod	_	AlignBegin=53183|AlignEnd=53305|Gloss=other\PL|RX=[N]|TokenType=Root
3	=t	_	DET	DET	Gender=Fem	2	det	_	AlignBegin=53305|AlignEnd=53428|Gloss==INDF.F|RX==[DET]|TokenType=Clit
4	giɖʔa	_	NOUN	N	Gender=Fem	9	discourse	_	AlignBegin=53428|AlignEnd=53673|Gloss=shoe|RX=[N].[F]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=53673|AlignEnd=53919|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
6	ǝǝǝ	_	INTJ	HESIT	_	9	xcomp	_	AlignBegin=53919|AlignEnd=54161|Gloss=er|RX=[HESIT]|TokenType=Root
7	ʔaːwi	_	NOUN	N	Gender=Fem	6	reparandum	_	AlignBegin=54161|AlignEnd=54282|Gloss=morning|RX=[N].[F]|TokenType=Root
8	=t	_	DET	DET	Gender=Fem	7	det	_	AlignBegin=54282|AlignEnd=54404|Gloss==INDF.F|RX==[DET]|TokenType=Clit
9	akajeː	_	VERB	V1	VerbClass=1	17	advcl	_	AlignBegin=54404|AlignEnd=54646|Gloss=become|MGloss=become-CVB.SMLT|MSeg=aka-jeː|RX=[V1].[IRG]-.|TokenType=Root
10	areː	_	CCONJ	PTCL	_	9	cc	_	AlignBegin=54646|AlignEnd=54889|Gloss=then|RX=[PTCL]|TokenType=Root
11	/	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=54889|AlignEnd=56033|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
12	teːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Fem|Number=Plur|PronType=Dem	17	dep:comp	_	AlignBegin=56033|AlignEnd=56168|Gloss=PROX.PL.F.ACC|RX=[DEM]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=56168|AlignEnd=56740|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
14	tak	_	NOUN	N	Gender=Masc	17	nsubj	_	AlignBegin=56740|AlignEnd=56958|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
15	hoːj	_	ADP	POSTP	Case=Loc	17	obl:arg	_	AlignBegin=56958|AlignEnd=57177|Gloss=LOC|RX=[POSTP]|TokenType=Root
16	dilibti	_	VERB	V1	VerbClass=1	17	compound:svc	_	AlignBegin=57177|AlignEnd=57396|Gloss=buy|MGloss=buy-CVB.GNRL|MSeg=dilib-ti|RX=[V1]-.|TokenType=Root
17	iniːn	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=57396|AlignEnd=57615|Gloss=take\IPFV|MGloss=3SG.M-take\IPFV|MSeg=i-niːn|RX=[PNG]-[V1].[IRG]|TokenType=Root
18	/	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=57615|AlignEnd=57834|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
19	daːji	_	ADJ	ADJ	_	20	amod	_	AlignBegin=57834|AlignEnd=58099|Gloss=good|RX=[ADJ]|TokenType=Root
20	taman	_	NOUN	N	Gender=Masc	21	dep:comp	_	AlignBegin=58099|AlignEnd=58231|Gloss=price|RX=[N].[M]|TokenType=Root
21	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	17	dislocated	_	AlignBegin=58231|AlignEnd=58364|Gloss==ABL.SG|RX==[POSTP]|TokenType=Clit
22	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=58364|AlignEnd=59606|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


