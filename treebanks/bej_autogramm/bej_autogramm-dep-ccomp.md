---
layout: base
title:  'Statistics of ccomp in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `ccomp`

This relation is universal.

328 nodes (3%) are attached to their parents as `ccomp`.

327 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08536585365854.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (296; 90% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (12; 4% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|Gloss=1SG.DAT|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	AlignBegin=2092|AlignEnd=2370|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp	color:blue
1	daːjiː	_	ADJ	ADJ	_	4	ccomp	_	AlignBegin=71055|AlignEnd=71142|Gloss=good|RX=[ADJ]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=71142|AlignEnd=71229|Gloss==INDF.F|RX==[DET]|TokenType=Clit
3	=i	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	1	cop	_	AlignBegin=71229|AlignEnd=71317|Gloss==COP.3SG|Reported=Yes|RX==[PRED].[N]|TokenType=Clit
4	diːtiːt	_	VERB	V1	VerbClass=1	10	advcl	_	AlignBegin=71317|AlignEnd=71579|Gloss=say|MGloss=say-CVB.SEQ|MSeg=diː-tiːt|RX=[V1].[IRG]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=71579|AlignEnd=71840|Gloss=/|TokenType=Break
6	j=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	AlignBegin=71840|AlignEnd=71971|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
7	ʔar	_	NOUN	N	_	10	nsubj	_	AlignBegin=71971|AlignEnd=72102|Gloss=child|RX=[SBJ].[N]|TokenType=Root
8	han	_	PART	PTCL	_	7	advmod	_	AlignBegin=72102|AlignEnd=72364|Gloss=also|RX=[PTCL].[FOC]|TokenType=Root
9	hus	_	NOUN	N	Gender=Masc	10	obj	_	AlignBegin=72364|AlignEnd=72626|Gloss=voice|RX=[N].[M]|TokenType=Root
10	ikatina	_	VERB	LV	Aspect=Imp|Gender=Masc|Number=Plur|VerbType=Light	0	root	_	AlignBegin=72626|AlignEnd=72888|Gloss=become\IPFV|MGloss=3-become\IPFV-PL|MSeg=i-kati-na|RX=[PNG]-[LV]-[PNG]|TokenType=Root
11	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=72888|AlignEnd=73148|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
1	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	2	dep:comp	_	AlignBegin=217611|AlignEnd=217747|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
2	=hoːb	_	SCONJ	CONJ	_	10	dep	_	AlignBegin=217747|AlignEnd=217815|Gloss==when|RX==[CONJ]|TokenType=Clit
3	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=217815|AlignEnd=218018|Gloss=//|TokenType=Break
4	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=218018|AlignEnd=218231|Gloss=PROX.SG.M.NOM|RX=[DEM]|TokenType=Root
5	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	AlignBegin=218231|AlignEnd=218444|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=218444|AlignEnd=218656|Gloss=/|TokenType=Break
7	ʤaːntaːji	_	NOUN	N	_	10	ccomp	_	AlignBegin=218917|AlignEnd=219008|Gloss=jinni|RX=[N]|TokenType=Root
8	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	AlignBegin=219008|AlignEnd=219099|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
9	=i	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	AlignBegin=219099|AlignEnd=219189|Gloss==COP.1SG|Reported=Yes|RX==[PRED].[N]|TokenType=Clit
10	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=219189|AlignEnd=219461|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
11	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	10	discourse	_	AlignBegin=219461|AlignEnd=219733|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=219733|AlignEnd=220007|Gloss=//|TokenType=Break

~~~


