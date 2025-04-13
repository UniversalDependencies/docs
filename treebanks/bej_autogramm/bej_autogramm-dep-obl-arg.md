---
layout: base
title:  'Statistics of obl:arg in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_autogramm-dep-obl-mod.html">obl:mod</a></tt>.

473 nodes (4%) are attached to their parents as `obl:arg`.

467 instances of `obl:arg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06553911205074.

The following 12 pairs of parts of speech are connected with `obl:arg`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (433; 92% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (19; 4% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:arg	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:arg	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=103460|AlignEnd=103660|Gloss=DEF.SG.M=|RX=[DET]=|TokenType=Clit
2	haːʃ	_	NOUN	N	Gender=Masc	4	obl:arg	_	AlignBegin=103660|AlignEnd=103860|Gloss=land|RX=[N].[M]|TokenType=Root
3	oːnaːj	_	DET	DEM	Case=Gen|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	AlignBegin=103860|AlignEnd=104260|Gloss=PROX.SG.M.GEN|RX=[DEM]|TokenType=Root
4	giːgeːtiːt	_	VERB	V2	VerbClass=2	9	advcl	_	AlignBegin=104260|AlignEnd=104660|Gloss=leave|MGloss=leave-CVB.SEQ|MSeg=giːg-eːtiːt|RX=[V2]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=104660|AlignEnd=105059|Gloss=/|TokenType=Break
6	weːr	_	ADJ	ADJ	_	7	amod	_	AlignBegin=105059|AlignEnd=105274|Gloss=other|RX=[ADJ]|TokenType=Root
7	mhiːn	_	NOUN	N	Gender=Masc	9	obj	_	AlignBegin=105274|AlignEnd=105489|Gloss=place|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=105489|AlignEnd=105703|Gloss=/|TokenType=Break
9	eːbiːna	_	VERB	V1	Aspect=Perf|Number=Plur|VerbClass=1	0	root	_	AlignBegin=105882|AlignEnd=106088|Gloss=go\INT.IPFV|MGloss=3-go\INT.IPFV-PL|MSeg=eː-biː-na|RX=[PNG]-[V1].[DER].[IRG]-[PNG]|TokenType=Root
10	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=106088|AlignEnd=106294|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=106294|AlignEnd=106501|Gloss=//|TokenType=Break

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 obl:arg	color:blue
1	ʃakeː	_	NOUN	N	Gender=Masc	3	xcomp	_	AlignBegin=163445|AlignEnd=163631|Gloss=precipice|RX=[N].[M]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Gender=Masc	1	det	_	AlignBegin=163631|AlignEnd=163816|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
3	akaːt	_	VERB	V1	Gender=Fem|VerbClass=1	5	acl	_	AlignBegin=163816|AlignEnd=164187|Gloss=become|MGloss=become-CVB.MNR-INDF.F|MSeg=ak-aː-t|RX=[V1].[IRG]-[DET]|TokenType=Root
4	t=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	AlignBegin=164187|AlignEnd=164261|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
5	ʔabaː	_	NOUN	N	Gender=Fem	0	root	_	AlignBegin=164261|AlignEnd=164335|Gloss=river_branch|RX=[N].[F]|TokenType=Root
6	=t	_	DET	DET	Gender=Fem	5	det	_	AlignBegin=164335|AlignEnd=164409|Gloss==INDF.F|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	AlignBegin=164409|AlignEnd=164483|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
8	=it	_	SCONJ	CONJ	_	5	dep	_	AlignBegin=164483|AlignEnd=164558|Gloss==CSL|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	_	_	5	punct	_	AlignBegin=164558|AlignEnd=164928|Gloss=//|TokenType=Break
10	t=	_	DET	DET	Definite=Def|Gender=Fem	11	det	_	AlignBegin=165241|AlignEnd=165315|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
11	ʔabaː	_	NOUN	N	Gender=Fem	13	dep:comp	_	AlignBegin=165315|AlignEnd=165389|Gloss=river_branch|RX=[N].[F]|TokenType=Root
12	=t	_	DET	DET	Gender=Fem	11	det	_	AlignBegin=165389|AlignEnd=165463|Gloss==INDF.F|RX==[DET]|TokenType=Clit
13	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	5	obl:arg	_	AlignBegin=165463|AlignEnd=165537|Gloss==LOC.SG|RX==[POSTP]|TokenType=Clit
14	//	_	PUNCT	_	_	5	punct	_	AlignBegin=165537|AlignEnd=165832|Gloss=//|TokenType=Break

~~~


