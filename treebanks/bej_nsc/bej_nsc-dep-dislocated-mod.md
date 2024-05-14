---
layout: base
title:  'Statistics of dislocated:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated:mod`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

18 nodes (0%) are attached to their parents as `dislocated:mod`.

17 instances of `dislocated:mod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5.

The following 5 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (8; 44% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (6; 33% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (2; 11% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 dislocated:mod	color:blue
1	ɖa~ɖibti	_	VERB	V2	VerbClass=2	5	ccomp	_	AlignBegin=128097|AlignEnd=128381|GE=[PLAC~fall][N].[AC]|MGloss=[PLAC~fall][N].[AC]|MSeg=ɖa~ɖib-ti|RX=[V2].[DER][N].[V]|TokenType=Root
2	=eːk	_	PRON	PRO	Case=Acc|Number=Plur|Person=2|Poss=Yes	1	obl:mod	_	AlignBegin=128381|AlignEnd=128522|GE=[POSS].[2PL].[ACC]|RX=[PRO]|TokenType=Clit
3	wari	_	NOUN	N	_	1	obl:mod	_	AlignBegin=128522|AlignEnd=128734|GE=other|RX=[N]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=128734|AlignEnd=128947|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
5	hariwa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=128947|AlignEnd=129372|GE=seek[IMP].[SG].[M]|MGloss=seek[IMP].[SG].[M]|MSeg=hariw-a|RX=[V1][TAM].[PNG]|TokenType=Root
6	naː	_	NOUN	N	Gender=Fem	8	obj	_	AlignBegin=129372|AlignEnd=129584|GE=thing|RX=[N].[F]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=129584|AlignEnd=129797|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	teːtgiːm	_	VERB	V1	Aspect=Imp|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=129797|AlignEnd=130115|GE=[2SG][MID]ignore\IPFV|MGloss=[2SG][MID]ignore\IPFV|MSeg=teː-t-giːm|RX=[PNG][V1].[DER][V1]|TokenType=Root
9	=eːk	_	SCONJ	CONJ	_	5	dislocated:mod	_	AlignBegin=130115|AlignEnd=130222|GE=if|RX=[CONJ]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=130222|AlignEnd=130648|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 dislocated:mod	color:blue
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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 15 dislocated:mod	color:blue
1	kʷaɖaːɖa	_	ADJ	ADJ	_	3	nmod	_	AlignBegin=197784|AlignEnd=198036|GE=round[CVB].[MNR]|MGloss=round[CVB].[MNR]|MSeg=kʷaɖaːɖ-a|RX=[ADJ]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=198036|AlignEnd=198162|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
3	ʔalba	_	NOUN	N	Gender=Fem	9	obj	_	AlignBegin=198162|AlignEnd=198540|GE=can|RX=[N].[F]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=198540|AlignEnd=198918|GE=[/]|TokenType=Break
5	nihaːs	_	NOUN	N	Gender=Masc	6	dep:comp	_	AlignBegin=199136|AlignEnd=199269|GE=copper|RX=[N].[M]|TokenType=Root
6	=i	_	ADP	CASE	Case=Gen	3	nmod	_	AlignBegin=199269|AlignEnd=199402|GE=[GEN]|RX=[CASE]|TokenType=Clit
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=199402|AlignEnd=199534|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	sikʷti	_	VERB	V1	VerbClass=1	9	advcl	_	AlignBegin=199534|AlignEnd=199932|GE=pull[CVB].[GNRL]|MGloss=pull[CVB].[GNRL]|MSeg=sikʷ-ti|RX=[V1]|TokenType=Root
9	fanrʔi	_	VERB	V1	Aspect=Imp|Number=Sing|Person=3|VerbClass=1	0	root	_	AlignBegin=199932|AlignEnd=200330|GE=take_out\IPFV[.3SG]|RX=[V1]|TokenType=Root
10	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=200330|AlignEnd=200728|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
11	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	12	det	_	AlignBegin=200728|AlignEnd=200927|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
12	doːr	_	NOUN	N	Gender=Masc	9	dislocated:obj	_	AlignBegin=200927|AlignEnd=201126|GE=time|RX=[N].[M]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=201126|AlignEnd=201522|GE=[/]|TokenType=Break
14	winneːt	_	ADV	ADV	_	15	advmod	_	AlignBegin=201522|AlignEnd=201851|GE=plenty|RX=[ADV]|TokenType=Root
15	tiga	_	ADJ	ADJ	_	3	dislocated:mod	_	AlignBegin=201851|AlignEnd=202015|GE=heavy|RX=[ADJ]|TokenType=Root
16	=t	_	DET	DET	Gender=Fem	15	det	_	AlignBegin=202015|AlignEnd=202180|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
17	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=202180|AlignEnd=202510|GE=[//]|TokenType=Break

~~~


