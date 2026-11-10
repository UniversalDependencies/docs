---
layout: base
title:  'Statistics of obl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="bej_autogramm-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="bej_autogramm-dep-obl-mod.html">obl:mod</a></tt>.

3 nodes (0%) are attached to their parents as `obl`.

2 instances of `obl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 3 pairs of parts of speech are connected with `obl`: <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 obl	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=181900|WordAlignmentEnd=181974
2	kna	_	PRON	PRO	Reflex=Yes	10	nsubj	_	Gloss=owner|RX=[SBJ].[PRO].[REFL]|TokenType=Root|WordAlignmentBegin=181974|WordAlignmentEnd=182048
3	=juːk	_	PRON	PRO	Case=Nom|Number=Sing|Person=2|Poss=Yes	2	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=182048|WordAlignmentEnd=182122
4	a#	_	X	FS	_	7	nmod	_	Gloss=FS|RX=[FS]|TokenType=Root|WordAlignmentBegin=182122|WordAlignmentEnd=182344
5	##	_	PUNCT	PUNCT	_	4	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Root|WordAlignmentBegin=182344|WordAlignmentEnd=182960
6	aja	_	VERB	V1	VerbClass=1	4	reparandum	_	Gloss=die.CVB.MNR|MGloss=die-CVB.MNR|MSeg=aj-a|RX=[V1].[IRG]-.|TokenType=Root|WordAlignmentBegin=182960|WordAlignmentEnd=183253
7	ʤhar	_	NOUN	N	Gender=Masc	10	obl	_	Gloss=chance|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=183253|WordAlignmentEnd=183311
8	=i	_	ADP	CASE	Case=Gen	7	case	_	Gloss=GEN|RX==[CASE]|TokenType=InflAff|WordAlignmentBegin=183311|WordAlignmentEnd=183370
9	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=183370|WordAlignmentEnd=183428
10	=wa	_	AUX	N.COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	0	root	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=183428|WordAlignmentEnd=183487
11	=jaːj	_	PART	PTCL	_	10	discourse	_	Gloss=thus|RX==[PTCL]|TokenType=Clit|WordAlignmentBegin=183487|WordAlignmentEnd=183546
12	//	_	PUNCT	PUNCT	_	10	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=183546|WordAlignmentEnd=183840

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 obl	color:blue
1	ti=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=257846|WordAlignmentEnd=257936
2	fatiːra	_	NOUN	N	Gender=Fem|Number=Plur	9	obl:arg	_	Gloss=pancake|MGloss=pancake-PL|MSeg=fatiːr-a|RX=[N].[F]-.|TokenType=Root|WordAlignmentBegin=257936|WordAlignmentEnd=258117
3	=t	_	DET	DET	Gender=Fem	2	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=258117|WordAlignmentEnd=258207
4	=eːb	_	ADP	POSTP	Case=Loc|Number=Plur	2	case	_	Gloss=LOC|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=258207|WordAlignmentEnd=258298
5	/	_	PUNCT	PUNCT	_	2	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=258298|WordAlignmentEnd=258750
6	firha	_	NOUN	N	Gender=Fem	9	obl	_	Gloss=joy|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=258750|WordAlignmentEnd=258880
7	=t	_	DET	DET	Gender=Fem	6	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=258880|WordAlignmentEnd=259010
8	=eː	_	ADP	CASE	Case=Gen|Number=Plur	6	case	_	Gloss=GEN|RX==[CASE]|TokenType=Clit|WordAlignmentBegin=259010|WordAlignmentEnd=259141
9	misistiːt	_	VERB	V1	VerbClass=1	15	advcl	_	Gloss=die.CVB.SEQ|MGloss=die-CVB.SEQ|MSeg=misis-tiːt|RX=[V1]-.|TokenType=Root|WordAlignmentBegin=259141|WordAlignmentEnd=259533
10	gaːt	_	NUM	NUM	Gender=Fem	15	nsubj	_	Gloss=one|RX=[SBJ].[NUM]|TokenType=Root|WordAlignmentBegin=259533|WordAlignmentEnd=259728
11	=ka	_	ADP	POSTP	Case=Dis	10	case	_	Gloss=DISTR|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=259728|WordAlignmentEnd=259924
12	fatiːraː	_	NOUN	N	Gender=Fem|Number=Plur	15	obj	_	Gloss=pancake|MGloss=pancake-PL|MSeg=fatiːr-aː|RX=[N].[F]-.|TokenType=Root|WordAlignmentBegin=259924|WordAlignmentEnd=260120
13	=t	_	DET	DET	Gender=Fem	12	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=260120|WordAlignmentEnd=260218
14	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	12	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=260218|WordAlignmentEnd=260316
15	ʔaːmeːti	_	VERB	V2	VerbClass=2	0	root	_	Gloss=take_a_mouthful.CVB.GNRL|MGloss=take_a_mouthful-CVB.GNRL|MSeg=ʔaːm-eːti|RX=[V2]-.|TokenType=Root|WordAlignmentBegin=260316|WordAlignmentEnd=260707
16	idʔana	_	AUX	AUX.EMPH	Aspect=Imp|Number=Plur	15	aux	_	Gloss=do|MGloss=3-do\IPFV-PL|MSeg=i-dʔa-na|RX=[PNG]-[AUX].[EMPH]-[PNG]|TokenType=Root|WordAlignmentBegin=260707|WordAlignmentEnd=261099
17	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	15	discourse	_	Gloss=say|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=261099|WordAlignmentEnd=261490
18	//	_	PUNCT	PUNCT	_	15	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=261490|WordAlignmentEnd=262558

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 obl	color:blue
1	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=109098|WordAlignmentEnd=109417
2	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=109417|WordAlignmentEnd=109523
3	rba	_	NOUN	N	Gender=Masc	4	dep	_	Gloss=mountain|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=109523|WordAlignmentEnd=109629
4	=i	_	ADP	CASE	Case=Gen	6	obl:arg	_	Gloss=GEN|RX==[CASE]|TokenType=Clit|WordAlignmentBegin=109629|WordAlignmentEnd=109736|wordform=-i
5	khiː	_	ADP	POSTP	_	4	dep:comp	_	Gloss=on|RX=[POSTP]|TokenType=Root|WordAlignmentBegin=109736|WordAlignmentEnd=110055
6	gadtiːt	_	VERB	V1	VerbClass=1	7	advcl	_	Gloss=stop.CVB.SEQ|MGloss=stop-CVB.SEQ|MSeg=gad-tiːt|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=110055|WordAlignmentEnd=110374
7	ʃanbiːb	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|Person=2|VerbClass=1	16	advcl	_	Gloss=look|RX=[V1]|TokenType=Root|WordAlignmentBegin=110374|WordAlignmentEnd=110534
8	=eːk	_	SCONJ	CONJ	_	7	mark	_	Gloss=if|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=110534|WordAlignmentEnd=110693
9	/	_	PUNCT	_	_	7	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=110693|WordAlignmentEnd=111014
10	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	11	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=111014|WordAlignmentEnd=111164
11	haˈwaːd	_	NOUN	N	Gender=Masc	12	nsubj	_	Gloss=night|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=111164|WordAlignmentEnd=111313
12	jʔi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	16	advcl	_	Gloss=come|MGloss=come-AOR.3SG.M|MSeg=jʔ-i|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=111313|WordAlignmentEnd=111513
13	=juːk	_	PRON	PRO	Case=Nom|Number=Sing|Person=2|Poss=Yes	12	obl	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=111513|WordAlignmentEnd=111612
14	/	_	PUNCT	_	_	12	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=111612|WordAlignmentEnd=111911
15	majʔa	_	NOUN	N	Gender=Masc	16	obl:arg	_	Gloss=light|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=112435|WordAlignmentEnd=112748
16	rhatnija	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	Gloss=see|MGloss=see-IPFV.2SG.M|MSeg=rha-tnija|RX=[V2]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=112748|WordAlignmentEnd=113061
17	/	_	PUNCT	_	_	16	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=113061|WordAlignmentEnd=113375

~~~


