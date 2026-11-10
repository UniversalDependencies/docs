---
layout: base
title:  'Statistics of ccomp in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `ccomp`

This relation is universal.

362 nodes (3%) are attached to their parents as `ccomp`.

360 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19889502762431.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (317; 88% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (12; 3% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (10; 3% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 ccomp	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=0|WordAlignmentEnd=190
2	/	_	PUNCT	PUNCT	_	1	punct	_	TokenType=Break|WordAlignmentBegin=190|WordAlignmentEnd=879
3	kaːm	_	NOUN	N	_	7	nsubj	_	Gloss=camel|RX=[SBJ].[N]|TokenType=Root|WordAlignmentBegin=879|WordAlignmentEnd=982
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=982|WordAlignmentEnd=1085
5	/	_	PUNCT	PUNCT	_	3	punct	_	TokenType=Break|WordAlignmentBegin=1085|WordAlignmentEnd=1815
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	Gloss=1SG|RX=[PRO]|TokenType=Root|WordAlignmentBegin=1815|WordAlignmentEnd=2092
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=2092|WordAlignmentEnd=2370
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=2370|WordAlignmentEnd=2648
9	//	_	PUNCT	PUNCT	_	8	punct	_	TokenType=Break|WordAlignmentBegin=2648|WordAlignmentEnd=2926

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 ccomp	color:blue
1	daːjiː	_	ADJ	ADJ	_	4	ccomp	_	Gloss=good|Reported=Yes|RX=[ADJ]|TokenType=Root|WordAlignmentBegin=71055|WordAlignmentEnd=71142
2	=t	_	DET	DET	Gender=Fem	1	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=71142|WordAlignmentEnd=71229
3	=i	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	1	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=71229|WordAlignmentEnd=71317
4	diːtiːt	_	VERB	V1	VerbClass=1	10	advcl	_	Gloss=say.CVB.SEQ|MGloss=say-CVB.SEQ|MSeg=diː-tiːt|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=71317|WordAlignmentEnd=71579
5	/	_	PUNCT	PUNCT	_	4	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=71579|WordAlignmentEnd=71840
6	j=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=71840|WordAlignmentEnd=71971
7	ʔar	_	NOUN	N	_	10	nsubj	_	Gloss=child|RX=[SBJ].[N]|TokenType=Root|WordAlignmentBegin=71971|WordAlignmentEnd=72102
8	han	_	PART	PTCL	_	7	advmod	_	Gloss=also|RX=[PTCL].[FOC]|TokenType=Root|WordAlignmentBegin=72102|WordAlignmentEnd=72364
9	hus	_	NOUN	N	Gender=Masc	10	obj	_	Gloss=voice|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=72364|WordAlignmentEnd=72626
10	ikatina	_	VERB	LV	Aspect=Imp|Gender=Masc|Number=Plur|VerbType=Light	0	root	_	Gloss=become|MGloss=3-become\IPFV-PL|MSeg=i-kati-na|RX=[PNG]-[LV]-[PNG]|TokenType=Root|WordAlignmentBegin=72626|WordAlignmentEnd=72888
11	/	_	PUNCT	PUNCT	_	10	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=72888|WordAlignmentEnd=73148

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
1	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	10	advcl	_	Gloss=say|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=217611|WordAlignmentEnd=217747
2	=hoːb	_	SCONJ	CONJ	_	1	mark	_	Gloss=when|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=217747|WordAlignmentEnd=217815
3	//	_	PUNCT	PUNCT	_	1	punct	_	Gloss=//|TokenType=Break|WordAlignmentBegin=217815|WordAlignmentEnd=218018
4	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=218018|WordAlignmentEnd=218231
5	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	Gloss=1SG|RX=[SBJ].[PRO]|TokenType=Root|WordAlignmentBegin=218231|WordAlignmentEnd=218444
6	/	_	PUNCT	PUNCT	_	5	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=218444|WordAlignmentEnd=218656
7	ʤaːntaːji	_	NOUN	N	_	10	ccomp	_	Gloss=jinni|Reported=Yes|RX=[N]|TokenType=Root|WordAlignmentBegin=218917|WordAlignmentEnd=219008
8	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=219008|WordAlignmentEnd=219099
9	=i	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=219099|WordAlignmentEnd=219189
10	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=say|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=219189|WordAlignmentEnd=219461
11	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	10	discourse	_	Gloss=say|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=219461|WordAlignmentEnd=219733
12	//	_	PUNCT	PUNCT	_	10	punct	_	Gloss=//|TokenType=Break|WordAlignmentBegin=219733|WordAlignmentEnd=220007

~~~


