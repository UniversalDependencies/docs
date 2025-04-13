---
layout: base
title:  'Statistics of dislocated:mod in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `dislocated:mod`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_autogramm-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="bej_autogramm-dep-dislocated-subj.html">dislocated:subj</a></tt>.

41 nodes (0%) are attached to their parents as `dislocated:mod`.

40 instances of `dislocated:mod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.78048780487805.

The following 9 pairs of parts of speech are connected with `dislocated:mod`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (25; 61% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 dislocated:mod	color:blue
1	ɖa~ɖibti	_	NOUN	V2	_	5	obj	_	AlignBegin=128097|AlignEnd=128381|Gloss=PLAC~fall|MGloss=PLAC~fall-N.AC|MSeg=ɖa~ɖib-ti|RX=[V2].[DER]-[N].[V]|TokenType=Root
2	=eːk	_	PRON	PRO	Case=Acc|Number=Plur|Person=2|Poss=Yes	1	nmod:poss	_	AlignBegin=128381|AlignEnd=128522|Gloss==POSS.2PL.ACC|RX==[PRO]|TokenType=Clit
3	wari	_	NOUN	N	_	1	nmod	_	AlignBegin=128522|AlignEnd=128734|Gloss=other|RX=[N]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=128734|AlignEnd=128947|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	hariwa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=128947|AlignEnd=129372|Gloss=seek|MGloss=seek-IMP.SG.M|MSeg=hariw-a|RX=[V1]-[TAM].[PNG]|TokenType=Root
6	naː	_	NOUN	N	Gender=Fem	8	obj	_	AlignBegin=129372|AlignEnd=129584|Gloss=thing|RX=[N].[F]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=129584|AlignEnd=129797|Gloss==INDF.F|RX==[DET]|TokenType=Clit
8	teːtgiːm	_	VERB	V1	Aspect=Imp|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=129797|AlignEnd=130115|Gloss=ignore\IPFV|MGloss=2SG-MID-ignore\IPFV|MSeg=teː-t-giːm|RX=[PNG]-[V1].[DER]-[V1]|TokenType=Root
9	=eːk	_	SCONJ	CONJ	_	5	dislocated:mod	_	AlignBegin=130115|AlignEnd=130222|Gloss==if|RX==[CONJ]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=130222|AlignEnd=130648|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 dislocated:mod	color:blue
1	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	discourse	_	AlignBegin=235124|AlignEnd=235396|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
2	suːrn	_	ADV	ADV	_	3	dep	_	AlignBegin=235396|AlignEnd=235532|Gloss=before|MGloss=before-L|MSeg=suːr-n|RX=[ADV]-.|TokenType=Root
3	=eːt	_	ADP	POSTP	Degree=Equ|Number=Plur	8	dep	_	AlignBegin=235532|AlignEnd=235600|Gloss==SIMIL.PL|RX==[POSTP]|TokenType=Clit
4	=hoːk	_	PART	_	Case=Acc|Number=Sing|Person=2	3	discourse	_	AlignBegin=235600|AlignEnd=235668|Gloss==OBJ.2SG|RX==[DM]|TokenType=Clit
5	//	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=235668|AlignEnd=235940|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
6	majʔa	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=235940|AlignEnd=236110|Gloss=light|RX=[N].[M]|TokenType=Root
7	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	6	nmod:poss	_	AlignBegin=236110|AlignEnd=236281|Gloss==POSS.3SG.ACC|RX==[PRO]|TokenType=Clit
8	dʔitiːt	_	VERB	V1	VerbClass=1	10	advcl	_	AlignBegin=236281|AlignEnd=236622|Gloss=do|MGloss=do-CVB.SEQ|MSeg=dʔi-tiːt|RX=[V1].[IRG]-.|TokenType=Root
9	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=236622|AlignEnd=237591|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
10	indiːf	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=237591|AlignEnd=237810|Gloss=leave\IPFV|MGloss=3SG.M-leave\IPFV|MSeg=i-ndiːf|RX=[PNG]-[V1]|TokenType=Root
11	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	10	discourse	_	AlignBegin=237810|AlignEnd=238030|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=238030|AlignEnd=238250|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
13	hamniː	_	NOUN	N	Gender=Fem	15	xcomp	_	AlignBegin=238250|AlignEnd=238384|Gloss=afternoon|RX=[SBJ].[N].[F]|TokenType=Root
14	=t	_	DET	DET	Gender=Fem	13	det	_	AlignBegin=238384|AlignEnd=238518|Gloss==INDF.F|RX==[DET]|TokenType=Clit
15	akajeː	_	VERB	V1	VerbClass=1	10	dislocated:mod	_	AlignBegin=238518|AlignEnd=238786|Gloss=become|MGloss=become-CVB.SMLT|MSeg=aka-jeː|RX=[V1].[IRG]-.|TokenType=Root
16	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=238786|AlignEnd=239643|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 dislocated:mod	color:blue
1	kʷaɖaːɖat	_	ADJ	ADJ	Gender=Fem	2	amod	_	AlignBegin=197784|AlignEnd=198162|Gloss=round|MGloss=round-CVB.MNR-INDF.F|MSeg=kʷaɖaːɖ-a-t|RX=[ADJ]-[DET]|TokenType=Root
2	ʔalba	_	NOUN	N	Gender=Fem	8	obj	_	AlignBegin=198162|AlignEnd=198540|Gloss=can|RX=[N].[F]|TokenType=Root
3	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=198540|AlignEnd=198918|Gloss=/|TokenType=Break
4	nihaːs	_	NOUN	N	Gender=Masc	5	dep:comp	_	AlignBegin=199136|AlignEnd=199269|Gloss=copper|RX=[N].[M]|TokenType=Root
5	=i	_	ADP	CASE	Case=Gen	2	nmod	_	AlignBegin=199269|AlignEnd=199402|Gloss==GEN|RX==[CASE]|TokenType=Clit
6	=t	_	DET	DET	Gender=Fem	5	det	_	AlignBegin=199402|AlignEnd=199534|Gloss==INDF.F|RX==[DET]|TokenType=Clit
7	sikʷti	_	VERB	V1	VerbClass=1	8	advcl	_	AlignBegin=199534|AlignEnd=199932|Gloss=pull|MGloss=pull-CVB.GNRL|MSeg=sikʷ-ti|RX=[V1]|TokenType=Root
8	fanrʔi	_	VERB	V1	Aspect=Imp|Number=Sing|Person=3|VerbClass=1	0	root	_	AlignBegin=199932|AlignEnd=200330|Gloss=take_out\IPFV.3SG|RX=[V1]|TokenType=Root
9	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	8	discourse	_	AlignBegin=200330|AlignEnd=200728|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
10	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	det	_	AlignBegin=200728|AlignEnd=200927|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
11	doːr	_	NOUN	N	Gender=Masc	8	dislocated:obj	_	AlignBegin=200927|AlignEnd=201126|Gloss=time|RX=[N].[M]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=201126|AlignEnd=201522|Gloss=/|TokenType=Break
13	winneːt	_	ADV	ADV	_	14	advmod	_	AlignBegin=201522|AlignEnd=201851|Gloss=plenty|RX=[ADV]|TokenType=Root
14	tiga	_	ADJ	ADJ	_	2	dislocated:mod	_	AlignBegin=201851|AlignEnd=202015|Gloss=heavy|RX=[ADJ]|TokenType=Root
15	=t	_	DET	DET	Gender=Fem	14	det	_	AlignBegin=202015|AlignEnd=202180|Gloss==INDF.F|RX==[DET]|TokenType=Clit
16	//	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=202180|AlignEnd=202510|Gloss=//|TokenType=Break

~~~


