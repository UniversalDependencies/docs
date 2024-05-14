---
layout: base
title:  'Statistics of advcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `advcl`

This relation is universal.

127 nodes (2%) are attached to their parents as `advcl`.

126 instances of `advcl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.03149606299213.

The following 4 pairs of parts of speech are connected with `advcl`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (121; 95% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advcl	color:blue
1	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	2	dep:redup	_	AlignBegin=85492|AlignEnd=86058|GE=[PASS].[INT]-[PLAC]~sit\[MID]-[CVB].[SMLT]|Gloss=sit|MGloss=PASS.INT-PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
2	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	3	dep:redup	_	AlignBegin=86058|AlignEnd=86625|GE=[PASS].[INT]-[PLAC]~sit\[MID]-[CVB].[SMLT]|Gloss=sit|MGloss=PASS.INT-PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
3	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	7	advcl	_	AlignBegin=86625|AlignEnd=87192|GE=[PASS].[INT]-[PLAC]~sit\[MID]-[CVB].[SMLT]|Gloss=sit|MGloss=PASS.INT-PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=87192|AlignEnd=88535|TokenType=Break
5	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	det	_	AlignBegin=88535|AlignEnd=88719|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
6	bri	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=88719|AlignEnd=88904|GE=rain|Gloss=rain|RX=[SBJ].[N].[M]|TokenType=Root
7	ʈa~ʈakʷi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=88904|AlignEnd=89273|GE=[PLAC]~drip-[AOR].[3SG].[M]|Gloss=drip|MGloss=PLAC~drip-AOR.3SG.M|MSeg=ʈa~ʈakʷ-i|RX=[V2].[DER]-[TAM].[PNG]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=89273|AlignEnd=89838|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 advcl	color:blue
1	hamilaː	_	VERB	V2	VerbClass=2	3	obj	_	AlignBegin=94772|AlignEnd=95025|GE=let-[CVB].[MNR]|Gloss=let|MGloss=let-CVB.MNR|MSeg=hamil-aː|RX=[V2]-[PRF]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=95025|AlignEnd=95152|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	akati	_	VERB	AUX	Aspect=Imp|Number=Sing	5	acl:relcl	_	AlignBegin=95152|AlignEnd=95406|GE=[1SG]-become\[IPFV]|Gloss=become|MGloss=1SG-become\IPFV|MSeg=a-kati|RX=[PNG]-[AUX].[PRF]|TokenType=Root
4	=jeː	_	SCONJ	CONJ	_	3	mark	_	AlignBegin=95406|AlignEnd=95533|GE==if|Gloss==ifREL|RX==[CONJ]|TokenType=Clit
5	kaːm	_	NOUN	N	_	6	nsubj	_	AlignBegin=95533|AlignEnd=95723|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
6	=u	_	AUX	PRO	Number=Sing|Person=3	11	advcl	_	AlignBegin=95723|AlignEnd=95914|GE==[COP].[3SG]|RX==[PRED].[NOM]|TokenType=Clit
7	=it	_	SCONJ	PRO	_	6	mark	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
8	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=95914|AlignEnd=96295|TokenType=Break
9	harawaː	_	VERB	V1	VerbClass=1	11	obj	_	AlignBegin=96295|AlignEnd=96587|GE=seek-[CVB].[MNR]|Gloss=seek|MGloss=seek-CVB.MNR|MSeg=haraw-aː|RX=[V1]|TokenType=Root
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	9	det	_	AlignBegin=96587|AlignEnd=96733|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	harawaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=96733|AlignEnd=96952|GE=seek-[CVB].[MNR]|Gloss=seek|MGloss=seek-CVB.MNR|MSeg=haraw-aː|RX=[V1]-[PRF]|TokenType=Root
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=96952|AlignEnd=97061|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	11	cop	_	AlignBegin=97061|AlignEnd=97171|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=97171|AlignEnd=97609|TokenType=Break
15	ki=	_	PART	PTCL	Aspect=Imp	16	advmod	_	AlignBegin=97609|AlignEnd=97703|GE=[NEG].[IPFV]=|RX=[PTCL]=|TokenType=Clit
16	haːj	_	VERB	V1	Aspect=Imp|VerbClass=1	11	dislocated:mod	_	AlignBegin=97703|AlignEnd=97798|GE=[IPFV].[[3SG].[M]]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Root
17	=wa	_	CCONJ	CONJ	_	16	cc	_	AlignBegin=97798|AlignEnd=97893|GE==[COORD]|RX==[CONJ]|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	16	punct	_	AlignBegin=97893|AlignEnd=98178|GE=[PUNCT]|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 advcl	color:blue
1	hagiteː	_	VERB	V1	VerbClass=1	2	dep:redup	_	AlignBegin=78867|AlignEnd=79207|GE=wait[CVB].[SMLT]|MGloss=wait[CVB].[SMLT]|MSeg=hagit-eː|RX=[V1]|TokenType=Root
2	hagiteː	_	VERB	V1	VerbClass=1	3	dep:redup	_	AlignBegin=79207|AlignEnd=79547|GE=wait[CVB].[SMLT]|MGloss=wait[CVB].[SMLT]|MSeg=hagit-eː|RX=[V1]|TokenType=Root
3	hagiteː	_	VERB	V1	VerbClass=1	10	advcl	_	AlignBegin=79547|AlignEnd=79887|GE=wait[CVB].[SMLT]|MGloss=wait[CVB].[SMLT]|MSeg=hagit-eː|RX=[V1]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=79887|AlignEnd=80225|GE=[/]|TokenType=Break
5	ontʔa	_	ADV	PTCL	_	8	discourse	_	AlignBegin=80642|AlignEnd=80879|GE=now|RX=[PTCL]|TokenType=Root
6	//	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=80879|AlignEnd=81116|GE=[//]|TokenType=Break
7	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=81476|AlignEnd=81654|GE=[DEF].[SG].[M]|RX=[DET]|TokenType=Clit
8	haˈwaːd	_	NOUN	N	Gender=Masc	9	nsubj	_	AlignBegin=81654|AlignEnd=81831|GE=night|RX=[SBJ].[N].[M]|TokenType=Root
9	jʔi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	10	dep:comp	_	AlignBegin=81831|AlignEnd=82067|GE=come[AOR].[3SG].[M]|MGloss=come[AOR].[3SG].[M]|MSeg=jʔ-i|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
10	=hoːb	_	SCONJ	CONJ	_	30	dep	_	AlignBegin=82067|AlignEnd=82186|GE=when|RX=[CONJ]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=82186|AlignEnd=82542|GE=[//]|TokenType=Break
12	suːriː	_	ADV	ADV	_	15	discourse	_	AlignBegin=82862|AlignEnd=83196|GE=before|RX=[ADV]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=83196|AlignEnd=83530|GE=[/]|TokenType=Break
14	i=	_	DET	DET	Definite=Def|Gender=Masc	15	det	_	AlignBegin=83530|AlignEnd=83629|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
15	kam	_	NOUN	N	Number=Plur	17	dep:comp	_	AlignBegin=83629|AlignEnd=83728|GE=camel\PL|RX=[N]|TokenType=Root
16	=ihi	_	PRON	PRO	Case=Gen|Number=Sing|Person=3|Poss=Yes	15	nmod:poss	_	AlignBegin=83728|AlignEnd=83827|GE=[POSS].[3SG].[GEN]|RX=[PRO]|TokenType=Clit
17	dhaːj	_	ADP	POSTP	_	23	dep:conj	_	AlignBegin=83827|AlignEnd=83975|GE=[DIR]|RX=[POSTP]|TokenType=Root
18	=wa	_	CCONJ	CONJ	_	17	cc	_	AlignBegin=83975|AlignEnd=84124|GE=[COORD]|RX=[CONJ]|TokenType=Clit
19	/	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=84124|AlignEnd=84421|GE=[/]|TokenType=Break
20	i=	_	DET	DET	Definite=Def|Gender=Masc	21	det	_	AlignBegin=84421|AlignEnd=84506|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
21	meːk	_	NOUN	N	_	23	dep:comp	_	AlignBegin=84506|AlignEnd=84591|GE=donkey|RX=[N]|TokenType=Root
22	=ihi	_	PRON	PRO	Case=Gen|Number=Sing|Person=3|Poss=Yes	21	nmod:poss	_	AlignBegin=84591|AlignEnd=84676|GE=[POSS].[3SG].[GEN]|RX=[PRO]|TokenType=Clit
23	=da	_	ADP	POSTP	_	31	obl:arg	_	AlignBegin=84676|AlignEnd=84761|GE=[DIR]|RX=[POSTP]|TokenType=Clit
24	=wa	_	CCONJ	CONJ	_	23	cc	_	AlignBegin=84761|AlignEnd=84845|GE=[COORD]|RX=[CONJ]|TokenType=Clit
25	/	_	PUNCT	PUNCT	_	23	punct	_	AlignBegin=84845|AlignEnd=85269|GE=[/]|TokenType=Break
26	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	27	det	_	AlignBegin=85269|AlignEnd=85377|GE=[DEF].[M].[SG]|RX=[DET]|TokenType=Clit
27	harroː	_	NOUN	N	Gender=Masc	29	obj	_	AlignBegin=85377|AlignEnd=85485|GE=sorghum|RX=[N].[M]|TokenType=Root
28	=joː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	27	nmod:poss	_	AlignBegin=85485|AlignEnd=85593|GE=[POSS].[3SG].[ACC]|RX=[PRO]|TokenType=Clit
29	imiːr	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	30	dep:comp	_	AlignBegin=85593|AlignEnd=85809|GE=[3SG].[M]find\PFV|MGloss=[3SG].[M]find\PFV|MSeg=i-miːr|RX=[PNG][V1]|TokenType=Root
30	=hoːb	_	SCONJ	CONJ	_	31	dep	_	AlignBegin=85809|AlignEnd=85917|GE=when|RX=[CONJ]|TokenType=Clit
31	dʔiːt	_	VERB	V1	VerbClass=1	32	advcl	_	AlignBegin=85917|AlignEnd=86241|GE=do\CVB.SEQ|RX=[V1].[IRG]|TokenType=Root
32	jʔi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	33	dep:comp	_	AlignBegin=86241|AlignEnd=86457|GE=come[AOR].[3SG].[M]|MGloss=come[AOR].[3SG].[M]|MSeg=jʔ-i|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
33	=ajt	_	SCONJ	CONJ	_	54	dep	_	AlignBegin=86457|AlignEnd=86565|GE=[CSL]|RX=[CONJ]|TokenType=Clit
34	/	_	PUNCT	PUNCT	_	33	punct	_	AlignBegin=86565|AlignEnd=86889|GE=[/]|TokenType=Break
35	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	36	det	_	AlignBegin=86889|AlignEnd=86980|GE=[DEF].[SG].[M]|RX=[DET]|TokenType=Clit
36	harroː	_	NOUN	N	Gender=Masc	42	dep:conj	_	AlignBegin=86980|AlignEnd=87071|GE=sorghum|RX=[N].[M]|TokenType=Root
37	=joː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	36	nmod:poss	_	AlignBegin=87071|AlignEnd=87161|GE=[POSS].[3SG].[ACC]|RX=[PRO]|TokenType=Clit
38	/	_	PUNCT	PUNCT	_	36	punct	_	AlignBegin=87161|AlignEnd=87433|GE=[/]|TokenType=Break
39	kaː#	_	X	FS	_	42	dep	_	AlignBegin=88115|AlignEnd=88496|GE=[FS]|RX=[FS]|TokenType=Root
40	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	39	reparandum	_	AlignBegin=88496|AlignEnd=88877|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
41	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	39	reparandum	_	AlignBegin=88877|AlignEnd=89258|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
42	dammʔara	_	NOUN	N	Gender=Masc	54	obj	_	AlignBegin=89258|AlignEnd=89448|GE=gold|RX=[N].[M]|TokenType=Root
43	=joː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	42	nmod:poss	_	AlignBegin=89448|AlignEnd=89639|GE=[POSS].[3SG].[ACC]|RX=[PRO]|TokenType=Clit
44	i=	_	DET	DET	Definite=Def|Gender=Masc	45	det	_	AlignBegin=89639|AlignEnd=89734|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
45	kam	_	NOUN	N	Number=Plur	47	dep:comp	_	AlignBegin=89734|AlignEnd=89829|GE=camel\PL|RX=[N]|TokenType=Root
46	=iheː	_	PRON	PRO	Case=Gen|Number=Sing|Person=3|Poss=Yes	45	nmod:poss	_	AlignBegin=89829|AlignEnd=89924|GE=[POSS].[3SG].[GEN]|RX=[PRO]|TokenType=Clit
47	=da	_	ADP	POSTP	_	52	dep:conj	_	AlignBegin=89924|AlignEnd=90020|GE=[DIR]|RX=[POSTP]|TokenType=Clit
48	/	_	PUNCT	PUNCT	_	47	punct	_	AlignBegin=90020|AlignEnd=90399|GE=[/]|TokenType=Break
49	i=	_	DET	DET	Definite=Def|Gender=Masc	50	det	_	AlignBegin=91467|AlignEnd=91603|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
50	meːk	_	NOUN	N	_	52	dep:comp	_	AlignBegin=91603|AlignEnd=91739|GE=donkey|RX=[N]|TokenType=Root
51	=ihi	_	PRON	PRO	Case=Gen|Number=Sing|Person=3|Poss=Yes	50	nmod:poss	_	AlignBegin=91739|AlignEnd=91875|GE=[POSS].[3SG].[GEN]|RX=[PRO]|TokenType=Clit
52	dhaːj	_	ADP	POSTP	_	54	obl:arg	_	AlignBegin=91875|AlignEnd=92079|GE=[DIR]|RX=[POSTP]|TokenType=Root
53	=wa	_	CCONJ	CONJ	_	52	cc	_	AlignBegin=92079|AlignEnd=92283|GE=[COORD]|RX=[CONJ]|TokenType=Clit
54	dʔitiːt	_	VERB	V1	VerbClass=1	57	advcl	_	AlignBegin=92283|AlignEnd=92691|GE=do[CVB].[SEQ]|MGloss=do[CVB].[SEQ]|MSeg=dʔi-tiːt|RX=[V1].[IRG]|TokenType=Root
55	/	_	PUNCT	PUNCT	_	54	punct	_	AlignBegin=92691|AlignEnd=93101|GE=[/]|TokenType=Break
56	haːj	_	ADP	POSTP	Case=Com	57	dep	_	AlignBegin=93101|AlignEnd=93323|GE=[COM]|RX=[POSTP]|TokenType=Root
57	jʔiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=93323|AlignEnd=93545|GE=come[IPFV].[3SG].[M]|MGloss=come[IPFV].[3SG].[M]|MSeg=jʔ-iːni|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
58	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	57	discourse	_	AlignBegin=93545|AlignEnd=93767|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
59	//	_	PUNCT	PUNCT	_	57	punct	_	AlignBegin=93767|AlignEnd=93991|GE=[//]|TokenType=Break

~~~


