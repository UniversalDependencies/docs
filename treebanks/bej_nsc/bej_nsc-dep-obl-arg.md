---
layout: base
title:  'Statistics of obl:arg in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-mod.html">obl:mod</a></tt>.

250 nodes (4%) are attached to their parents as `obl:arg`.

244 instances of `obl:arg` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.26.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (211; 84% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (18; 7% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:arg	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:arg	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=103460|AlignEnd=103660|GE=[DEF].[SG].[M]|RX=[DET]|TokenType=Clit
2	haːʃ	_	NOUN	N	Gender=Masc	4	obl:arg	_	AlignBegin=103660|AlignEnd=103860|GE=land|RX=[N].[M]|TokenType=Root
3	oːnaːj	_	DET	DEM	Case=Gen|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	AlignBegin=103860|AlignEnd=104260|GE=[PROX].[SG].[M].[GEN]|RX=[DEM]|TokenType=Root
4	giːgeːtiːt	_	VERB	V2	VerbClass=2	9	advcl	_	AlignBegin=104260|AlignEnd=104660|GE=leave[CVB].[SEQ]|MGloss=leave[CVB].[SEQ]|MSeg=giːg-eːtiːt|RX=[V2]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=104660|AlignEnd=105059|GE=[/]|TokenType=Break
6	weːr	_	ADJ	ADJ	_	7	amod	_	AlignBegin=105059|AlignEnd=105274|GE=other|RX=[ADJ]|TokenType=Root
7	mhiːn	_	NOUN	N	Gender=Masc	9	obj	_	AlignBegin=105274|AlignEnd=105489|GE=place|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=105489|AlignEnd=105703|GE=[/]|TokenType=Break
9	eːbiːna	_	VERB	V1	Aspect=Perf|Number=Plur|VerbClass=1	0	root	_	AlignBegin=105882|AlignEnd=106088|GE=[3]go\INT.IPFV[PL]|MGloss=[3]go\INT.IPFV[PL]|MSeg=eː-biː-na|RX=[PNG][V1].[DER].[IRG][PNG]|TokenType=Root
10	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=106088|AlignEnd=106294|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=106294|AlignEnd=106501|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:arg	color:blue
1	aːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	AlignBegin=22159|AlignEnd=22504|GE=[PROX].[PL].[M].[NOM]|RX=[DEM]|TokenType=Root
2	j=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=22504|AlignEnd=22619|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
3	ʔar	_	NOUN	N	_	11	dislocated:obj	_	AlignBegin=22619|AlignEnd=22734|GE=child|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=22734|AlignEnd=22849|GE=[POSS].[1SG].[NOM]|RX=[PRO]|TokenType=Clit
5	ti=	_	SCONJ	REL	Definite=Def|Gender=Fem|PronType=Rel	3	acl:relcl	_	AlignBegin=22849|AlignEnd=23021|GE=[DEF].[F]|RX=[REL]|TokenType=Clit
6	dhaːj	_	ADP	POSTP	_	7	obl:arg	_	AlignBegin=23021|AlignEnd=23194|GE=[DIR]|RX=[POSTP]|TokenType=Root
7	jʔeːn	_	VERB	V2	Number=Plur|VerbClass=2	5	dep:comp	_	AlignBegin=23194|AlignEnd=23366|GE=come[IPFV].[3PL]|MGloss=come[IPFV].[3PL]|MSeg=jʔ-eːn|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
8	=eːt	_	PART	PTCL	_	7	obl:arg	_	AlignBegin=23366|AlignEnd=23452|GE=[RCPT]|RX=[PTCL]|TokenType=Clit
9	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	7	obj	_	AlignBegin=23452|AlignEnd=23539|GE=[POSS].[2SG].[ACC]|RX=[PRO]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=23539|AlignEnd=23882|GE=[/]|TokenType=Break
11	hijaː	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=23882|AlignEnd=24140|GE=give[IMP].[SG].[M]|MGloss=give[IMP].[SG].[M]|MSeg=hi-jaː|RX=[V1].[IRG][TAM].[PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=24140|AlignEnd=24397|GE=[/]|TokenType=Break

~~~


