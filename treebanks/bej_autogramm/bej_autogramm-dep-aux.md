---
layout: base
title:  'Statistics of aux in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `aux`

This relation is universal.

128 nodes (1%) are attached to their parents as `aux`.

127 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (122; 95% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (5; 4% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 aux	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	Gloss=lamb|RX=[N]|TokenType=Root|WordAlignmentBegin=30643|WordAlignmentEnd=30859
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=30859|WordAlignmentEnd=31075
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	Gloss=ABL|RX=[POSTP]|TokenType=Root|WordAlignmentBegin=31075|WordAlignmentEnd=31507
4	=oː	_	PRON	PRO	Case=Acc|Poss=Yes	3	dep	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=31075|WordAlignmentEnd=31507
5	ʃʔagaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	Gloss=carry_on_shoulder.CVB.MNR|MGloss=carry_on_shoulder-CVB.MNR-INDF.M.ACC|MSeg=ʃʔag-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=31507|WordAlignmentEnd=31831
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=31831|WordAlignmentEnd=31939
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=31939|WordAlignmentEnd=32155
8	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=32155|WordAlignmentEnd=32371
9	//	_	PUNCT	PUNCT	_	8	punct	_	TokenType=Break|WordAlignmentBegin=32371|WordAlignmentEnd=32803
10	ʔasalaːb	_	VERB	V2	Gender=Masc|VerbClass=2	1	acl:relcl	_	Gloss=grill.CVB.MNR|MGloss=grill-CVB.MNR-INDF.M.ACC|MSeg=ʔasal-aː-b|RX=[V2]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=32803|WordAlignmentEnd=33206
11	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	aux	_	Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RelRole=Obj|RX=[PNG]-[AUX].[PRF]|TokenType=Root|WordAlignmentBegin=33206|WordAlignmentEnd=33474
12	=jeːb	_	SCONJ	CONJ	Gender=Masc|PronType=Rel	10	mark	_	Gloss=REL|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=33474|WordAlignmentEnd=33609
13	/	_	PUNCT	PUNCT	_	10	punct	_	TokenType=Break|WordAlignmentBegin=33609|WordAlignmentEnd=35009

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	ontʔa	_	ADV	PTCL	_	5	discourse	_	Gloss=now|RX=[PTCL]|TokenType=Root|WordAlignmentBegin=85627|WordAlignmentEnd=85861
2	/	_	PUNCT	PUNCT	_	1	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=85861|WordAlignmentEnd=86095
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=86865|WordAlignmentEnd=87204
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=87204|WordAlignmentEnd=87374
5	tak	_	NOUN	N	Gender=Masc	6	obj	_	Gloss=man|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=87374|WordAlignmentEnd=87543
6	sakanaaman	_	VERB	V2	Number=Sing|VerbClass=2	11	acl	_	Gloss=ask_for_news.MID|MGloss=ask_for_news-MID-PFV.1SG|MSeg=sakana-am-an|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=87543|WordAlignmentEnd=87798
7	=hoːb	_	SCONJ	CONJ	_	6	mark	_	Gloss=when|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=87798|WordAlignmentEnd=87882
8	/	_	PUNCT	PUNCT	_	6	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=87882|WordAlignmentEnd=88221
9	naː	_	NOUN	N	Gender=Fem	11	obj	_	Gloss=thing|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=88221|WordAlignmentEnd=88365
10	=t	_	DET	DET	Gender=Fem	9	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=88365|WordAlignmentEnd=88508
11	rhat	_	NOUN	V2	_	0	root	_	Gloss=see.VN|MGloss=see-VN|MSeg=rh-at|RX=[V2]-[N].[V]|TokenType=Root|WordAlignmentBegin=88508|WordAlignmentEnd=88795
12	arib	_	AUX	AUX.CONTR	Aspect=Perf|Number=Sing|Polarity=Neg	11	aux	_	Gloss=refuse|MGloss=1SG-refuse\PFV|MSeg=a-rib|RX=[PNG]-[AUX].[NEG].[CONTR]|TokenType=Root|WordAlignmentBegin=88795|WordAlignmentEnd=88987
13	=t	_	CCONJ	CONJ	_	11	cc	_	Gloss=COORD|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=88987|WordAlignmentEnd=89082
14	/	_	PUNCT	PUNCT	_	11	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=89082|WordAlignmentEnd=89369

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 aux	color:blue
1	rhistaː	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	Gloss=see.CAUS|MGloss=see-CAUS-PFV.2SG.M|MSeg=rhi-s-taː|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=189417|WordAlignmentEnd=189657
2	=hoːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1	1	obj	_	Gloss=OBJ|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=189657|WordAlignmentEnd=189737
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=189737|WordAlignmentEnd=190057
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=190057|WordAlignmentEnd=190217
5	tak	_	NOUN	N	Gender=Masc	1	reparandum	_	Gloss=man|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=190217|WordAlignmentEnd=190377
6	/	_	PUNCT	PUNCT	_	1	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=190377|WordAlignmentEnd=190697
7	hinin	_	PRON	PRO	Case=Nom|Number=Plur|Person=1	10	nsubj	_	Gloss=1PL|RX=[PRO]|TokenType=Root|WordAlignmentBegin=190697|WordAlignmentEnd=190936
8	ʃibi#	_	X	FS	_	12	advcl	_	RX=[FS]|TokenType=Root|WordAlignmentBegin=190936|WordAlignmentEnd=191176
9	##	_	PUNCT	PUNCT	_	8	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Root|WordAlignmentBegin=191176|WordAlignmentEnd=191416
10	ʃibiba	_	VERB	V1	VerbClass=1	8	reparandum	_	Gloss=look.CVB.MNR|MGloss=look-CVB.MNR|MSeg=ʃibib-a|RX=[V1]-.|TokenType=Root|WordAlignmentBegin=191416|WordAlignmentEnd=191751
11	dieː	_	AUX	AUX.VOL	_	8	aux	_	Gloss=say.CVB.SMLT|MGloss=say-CVB.SMLT|MSeg=di-eː|RX=[AUX].[VOL]-.|TokenType=Root|WordAlignmentBegin=191751|WordAlignmentEnd=192087
12	eːdna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	31	dep:conj	_	Gloss=say|MGloss=3-say\IPFV-PL|MSeg=eː-d-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root|WordAlignmentBegin=192087|WordAlignmentEnd=192338
13	=aːt	_	CCONJ	CONJ	_	12	cc	_	Gloss=COORD|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=192338|WordAlignmentEnd=192422
14	/	_	PUNCT	PUNCT	_	12	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=192422|WordAlignmentEnd=193085
15	ɖaːbeːti	_	VERB	V2	VerbClass=2	31	dep:conj	_	Gloss=run.CVB.GNRL|MGloss=run-CVB.GNRL|MSeg=ɖaːb-eːti|RX=[V2]-.|TokenType=Root|WordAlignmentBegin=193085|WordAlignmentEnd=193365
16	ijajna	_	AUX	AUX.EMPH	Aspect=Imp|Number=Plur	15	aux	_	Gloss=take|MGloss=3-take\IPFV-PL|MSeg=i-jaj-na|RX=[PNG]-[AUX].[EMPH]-[PNG]|TokenType=Root|WordAlignmentBegin=193365|WordAlignmentEnd=193575
17	=aːt	_	CCONJ	CONJ	_	15	cc	_	Gloss=COORD|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=193575|WordAlignmentEnd=193646
18	/	_	PUNCT	PUNCT	_	15	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=193646|WordAlignmentEnd=193927
19	tʔa	_	PART	PTCL	_	31	discourse	_	Gloss=now|RX=[PTCL]|TokenType=Root|WordAlignmentBegin=193927|WordAlignmentEnd=194090
20	areː	_	CCONJ	PTCL	_	31	cc	_	Gloss=then|RX=[PTCL]|TokenType=Root|WordAlignmentBegin=194090|WordAlignmentEnd=194253
21	/	_	PUNCT	PUNCT	_	31	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=194253|WordAlignmentEnd=195136
22	malia	_	ADJ	NUM	_	23	amod	_	Gloss=two.ORD|MGloss=two-ORD|MSeg=mali-a|RX=[NUM]-[NUM]|TokenType=Root|WordAlignmentBegin=195136|WordAlignmentEnd=195392
23	doːr	_	NOUN	N	Gender=Masc	31	obl:mod	_	Gloss=time|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=195392|WordAlignmentEnd=195648
24	/	_	PUNCT	PUNCT	_	23	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=195648|WordAlignmentEnd=196068
25	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	26	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=196068|WordAlignmentEnd=196138
26	jaːs	_	NOUN	N	_	28	dep	_	Gloss=dog|RX=[N]|TokenType=Root|WordAlignmentBegin=196138|WordAlignmentEnd=196208
27	=i	_	ADP	CASE	Case=Gen	26	case	_	Gloss=GEN|RX==[CASE]|TokenType=Clit|WordAlignmentBegin=196208|WordAlignmentEnd=196278
28	=d	_	ADP	POSTP	_	31	obl:arg	_	Gloss=DIR|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=196278|WordAlignmentEnd=196348
29	hus	_	NOUN	N	Gender=Masc	30	xcomp	_	Gloss=voice|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=196348|WordAlignmentEnd=196628
30	aka	_	VERB	LV	Gender=Masc|Number=Sing|VerbType=Light	31	ccomp	_	Gloss=become|MGloss=become-IMP.SG.M|MSeg=ak-a|Reported=Yes|RX=[LV]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=196628|WordAlignmentEnd=196908
31	ijadna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	Gloss=say|MGloss=3-say\IPFV-PL|MSeg=i-jad-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root|WordAlignmentBegin=196908|WordAlignmentEnd=197188
32	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	31	discourse	_	Gloss=say|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=197188|WordAlignmentEnd=197468
33	//	_	PUNCT	PUNCT	_	31	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=197468|WordAlignmentEnd=197749

~~~


