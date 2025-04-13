---
layout: base
title:  'Statistics of aux in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `aux`

This relation is universal.

127 nodes (1%) are attached to their parents as `aux`.

126 instances of `aux` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.50393700787402.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (121; 95% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (5; 4% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 aux	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	AlignBegin=30643|AlignEnd=30859|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	AlignBegin=31075|AlignEnd=31507|Gloss=ABL|RX=[POSTP]|TokenType=Root
4	=oː	_	PRON	PRO	Case=Acc	3	dep	_	AlignBegin=31075|AlignEnd=31507|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
5	ʃʔagaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31831|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR-INDF.M.ACC|MSeg=ʃʔag-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	AlignBegin=31831|AlignEnd=31939|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=31939|AlignEnd=32155|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
10	ʔasalaːb	_	VERB	V2	Gender=Masc|VerbClass=2	12	dep:comp	_	AlignBegin=32803|AlignEnd=33206|Gloss=grill|MGloss=grill-CVB.MNR-INDF.M.ACC|MSeg=ʔasal-aː-b|RX=[V2]-[PRF]-[DET]|TokenType=Root
11	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	aux	_	AlignBegin=33206|AlignEnd=33474|Gloss=become\AOR|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
12	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	1	acl:relcl	_	AlignBegin=33474|AlignEnd=33609|Gloss==REL.SG.M|RX==[CONJ]|TokenType=Clit
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	ontʔa	_	ADV	PTCL	_	5	discourse	_	AlignBegin=85627|AlignEnd=85861|Gloss=now|RX=[PTCL]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=85861|AlignEnd=86095|Gloss=/|TokenType=Break
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=86865|AlignEnd=87204|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=87204|AlignEnd=87374|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
5	tak	_	NOUN	N	Gender=Masc	6	obj	_	AlignBegin=87374|AlignEnd=87543|Gloss=man|RX=[N].[M]|TokenType=Root
6	sakanaaman	_	VERB	V2	Number=Sing|VerbClass=2	7	dep:comp	_	AlignBegin=87543|AlignEnd=87798|Gloss=ask_for_news|MGloss=ask_for_news-MID-PFV.1SG|MSeg=sakana-am-an|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
7	=hoːb	_	SCONJ	CONJ	_	11	dep	_	AlignBegin=87798|AlignEnd=87882|Gloss==when|RX==[CONJ]|TokenType=Clit
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=87882|AlignEnd=88221|Gloss=/|TokenType=Break
9	naː	_	NOUN	N	Gender=Fem	11	obj	_	AlignBegin=88221|AlignEnd=88365|Gloss=thing|RX=[N].[F]|TokenType=Root
10	=t	_	DET	DET	Gender=Fem	9	det	_	AlignBegin=88365|AlignEnd=88508|Gloss==INDF.F|RX==[DET]|TokenType=Clit
11	rhat	_	NOUN	V2	_	0	root	_	AlignBegin=88508|AlignEnd=88795|Gloss=see|MGloss=see-VN|MSeg=rh-at|RX=[V2]-[N].[V]|TokenType=Root
12	arib	_	AUX	AUX.CONTR	Aspect=Perf|Number=Sing|Polarity=Neg	11	aux	_	AlignBegin=88795|AlignEnd=88987|Gloss=refuse\PFV|MGloss=1SG-refuse\PFV|MSeg=a-rib|RX=[PNG]-[AUX].[NEG].[CONTR]|TokenType=Root
13	=t	_	CCONJ	CONJ	_	11	cc	_	AlignBegin=88987|AlignEnd=89082|Gloss==COORD|RX==[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=89082|AlignEnd=89369|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 aux	color:blue
1	rhistaː	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	AlignBegin=189417|AlignEnd=189657|Gloss=see|MGloss=see-CAUS-PFV.2SG.M|MSeg=rhi-s-taː|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
2	=hoːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1	1	obj	_	AlignBegin=189657|AlignEnd=189737|Gloss==OBJ.1PL|RX==[PRO]|TokenType=Clit
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=189737|AlignEnd=190057|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=190057|AlignEnd=190217|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
5	tak	_	NOUN	N	Gender=Masc	1	reparandum	_	AlignBegin=190217|AlignEnd=190377|Gloss=man|RX=[N].[M]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190377|AlignEnd=190697|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
7	hinin	_	PRON	PRO	Case=Nom|Number=Plur|Person=1	10	nsubj	_	AlignBegin=190697|AlignEnd=190936|Gloss=1PL.NOM|RX=[PRO]|TokenType=Root
8	ʃibi#	_	X	FS	_	12	advcl	_	AlignBegin=190936|AlignEnd=191176|RX=[FS]|TokenType=Root
9	##	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=191176|AlignEnd=191416|Gloss=PUNCT|RX=[PUNCT]|TokenType=Root
10	ʃibiba	_	VERB	V1	VerbClass=1	8	reparandum	_	AlignBegin=191416|AlignEnd=191751|Gloss=look|MGloss=look-CVB.MNR|MSeg=ʃibib-a|RX=[V1]-.|TokenType=Root
11	dieː	_	AUX	AUX.VOL	_	8	aux	_	AlignBegin=191751|AlignEnd=192087|Gloss=say|MGloss=say-CVB.SMLT|MSeg=di-eː|RX=[AUX].[VOL]-.|TokenType=Root
12	eːdna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	31	dep:conj	_	AlignBegin=192087|AlignEnd=192338|Gloss=say\IPFV|MGloss=3-say\IPFV-PL|MSeg=eː-d-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root
13	=aːt	_	CCONJ	CONJ	_	12	cc	_	AlignBegin=192338|AlignEnd=192422|Gloss==COORD|RX==[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=192422|AlignEnd=193085|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
15	ɖaːbeːti	_	VERB	V2	VerbClass=2	31	dep:conj	_	AlignBegin=193085|AlignEnd=193365|Gloss=run|MGloss=run-CVB.GNRL|MSeg=ɖaːb-eːti|RX=[V2]-.|TokenType=Root
16	ijajna	_	AUX	AUX.EMPH	Aspect=Imp|Number=Plur	15	aux	_	AlignBegin=193365|AlignEnd=193575|Gloss=take\IPFV|MGloss=3-take\IPFV-PL|MSeg=i-jaj-na|RX=[PNG]-[AUX].[EMPH]-[PNG]|TokenType=Root
17	=aːt	_	CCONJ	CONJ	_	15	cc	_	AlignBegin=193575|AlignEnd=193646|Gloss==COORD|RX==[CONJ]|TokenType=Clit
18	/	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=193646|AlignEnd=193927|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
19	tʔa	_	PART	PTCL	_	31	discourse	_	AlignBegin=193927|AlignEnd=194090|Gloss=now|RX=[PTCL]|TokenType=Root
20	areː	_	CCONJ	PTCL	_	31	cc	_	AlignBegin=194090|AlignEnd=194253|Gloss=then|RX=[PTCL]|TokenType=Root
21	/	_	PUNCT	PUNCT	_	31	punct	_	AlignBegin=194253|AlignEnd=195136|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
22	malia	_	ADJ	NUM	_	23	amod	_	AlignBegin=195136|AlignEnd=195392|Gloss=two|MGloss=two-ORD|MSeg=mali-a|RX=[NUM]-[NUM]|TokenType=Root
23	doːr	_	NOUN	N	Gender=Masc	31	obl:mod	_	AlignBegin=195392|AlignEnd=195648|Gloss=time|RX=[N].[M]|TokenType=Root
24	/	_	PUNCT	PUNCT	_	23	punct	_	AlignBegin=195648|AlignEnd=196068|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
25	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	26	det	_	AlignBegin=196068|AlignEnd=196138|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
26	jaːs	_	NOUN	N	_	27	dep:comp	_	AlignBegin=196138|AlignEnd=196208|Gloss=dog|RX=[N]|TokenType=Root
27	=i	_	ADP	CASE	Case=Gen	28	dep	_	AlignBegin=196208|AlignEnd=196278|Gloss==GEN|RX==[CASE]|TokenType=Clit
28	=d	_	ADP	POSTP	_	31	obl:arg	_	AlignBegin=196278|AlignEnd=196348|Gloss==DIR|RX==[POSTP]|TokenType=Clit
29	hus	_	NOUN	N	Gender=Masc	30	xcomp	_	AlignBegin=196348|AlignEnd=196628|Gloss=voice|RX=[N].[M]|TokenType=Root
30	aka	_	VERB	LV	Gender=Masc|Number=Sing|VerbType=Light	31	ccomp	_	AlignBegin=196628|AlignEnd=196908|Gloss=become|MGloss=become-IMP.SG.M|MSeg=ak-a|Reported=Yes|RX=[LV]-[TAM].[PNG]|TokenType=Root
31	ijadna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	AlignBegin=196908|AlignEnd=197188|Gloss=say\IPFV|MGloss=3-say\IPFV-PL|MSeg=i-jad-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root
32	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	31	discourse	_	AlignBegin=197188|AlignEnd=197468|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
33	//	_	PUNCT	PUNCT	_	31	punct	_	AlignBegin=197468|AlignEnd=197749|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


