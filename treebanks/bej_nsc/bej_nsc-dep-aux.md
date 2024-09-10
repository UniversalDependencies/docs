---
layout: base
title:  'Statistics of aux in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `aux`

This relation is universal.

52 nodes (1%) are attached to their parents as `aux`.

50 instances of `aux` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.78846153846154.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (48; 92% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (4; 8% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 aux	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL]|RX=[POSTP]|TokenType=Root
4	=oː	_	PRON	PRO	Case=Acc	3	obl:mod	_	AlignBegin=31075|AlignEnd=31507|GE=[=POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
5	ʃʔagaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31723|GE=carry_on_shoulder-[CVB].[MNR]|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR|MSeg=ʃʔag-aː|RX=[V1]-[PRF]|TokenType=Root
6	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	5	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
8	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
11	ʔasalaː	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=33071|GE=grill-[CVB].[MNR]|Gloss=grill|MGloss=grill-CVB.MNR|MSeg=ʔasal-aː|RX=[V2]-[PRF]|TokenType=Root
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	11	aux	_	AlignBegin=33206|AlignEnd=33474|GE=[3SG].[M]-become\[AOR]|Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
14	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	11	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
15	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 aux	color:blue
1	ontʔa	_	ADV	PTCL	_	5	discourse	_	AlignBegin=85627|AlignEnd=85861|GE=now|RX=[PTCL]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=85861|AlignEnd=86095|GE=[/]|TokenType=Break
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=86865|AlignEnd=87204|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=87204|AlignEnd=87374|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
5	tak	_	NOUN	N	Gender=Masc	6	obj	_	AlignBegin=87374|AlignEnd=87543|GE=man|RX=[N].[M]|TokenType=Root
6	sakanaaman	_	VERB	V2	Number=Sing|VerbClass=2	7	dep:comp	_	AlignBegin=87543|AlignEnd=87798|GE=ask_for_news[MID][PFV].[1SG]|MGloss=ask_for_news[MID][PFV].[1SG]|MSeg=sakana-am-an|RX=[V2][V2].[DER][TAM].[PNG]|TokenType=Root
7	=hoːb	_	SCONJ	CONJ	_	11	dep	_	AlignBegin=87798|AlignEnd=87882|GE=when|RX=[CONJ]|TokenType=Clit
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=87882|AlignEnd=88221|GE=[/]|TokenType=Break
9	naː	_	NOUN	N	Gender=Fem	11	obj	_	AlignBegin=88221|AlignEnd=88365|GE=thing|RX=[N].[F]|TokenType=Root
10	=t	_	DET	DET	Gender=Fem	9	det	_	AlignBegin=88365|AlignEnd=88508|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
11	rhat	_	NOUN	V2	_	0	root	_	AlignBegin=88508|AlignEnd=88795|GE=see[VN]|MGloss=see[VN]|MSeg=rh-at|RX=[V2][N].[V]|TokenType=Root
12	arib	_	AUX	AUX.CONTR	Aspect=Perf|Number=Sing|Polarity=Neg	11	aux	_	AlignBegin=88795|AlignEnd=88987|GE=[1SG]refuse\PFV|MGloss=[1SG]refuse\PFV|MSeg=a-rib|RX=[PNG][AUX].[NEG].[CONTR]|TokenType=Root
13	=t	_	CCONJ	CONJ	_	11	cc	_	AlignBegin=88987|AlignEnd=89082|GE=[COORD]|RX=[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=89082|AlignEnd=89369|GE=[/]|TokenType=Break

~~~


