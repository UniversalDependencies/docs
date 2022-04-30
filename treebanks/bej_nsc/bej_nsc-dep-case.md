---
layout: base
title:  'Statistics of case in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="bej_nsc-dep-case-aff.html">case:aff</a></tt>.

19 nodes (2%) are attached to their parents as `case`.

15 instances of `case` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.47368421052632.

The following 3 pairs of parts of speech are connected with `case`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (14; 74% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (4; 21% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 case	color:blue
1	oːn	_	PRON	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	8	discourse	_	AlignBegin=80500|AlignEnd=80927|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Stem
2	hallaːn	_	ADV	ADV	_	8	discourse	_	AlignBegin=80927|AlignEnd=81355|GE=now|Gloss=now|RX=[ADV]|TokenType=Stem
3	hasara	_	ADV	PTCL	_	8	advmod	_	AlignBegin=81355|AlignEnd=81783|GE=[ADVS]|RX=[PTCL]|TokenType=Stem
4	t=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	AlignBegin=81783|AlignEnd=81890|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
5	ʔabaː	_	NOUN	N	Gender=Fem	8	obl:arg	_	AlignBegin=81890|AlignEnd=81997|GE=river_branch|Gloss=river_branch|RX=[N].[F]|TokenType=Stem
6	=t	_	DET	DET	Definite=Ind|Gender=Fem	5	det	_	AlignBegin=81997|AlignEnd=82104|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
7	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	5	case	_	AlignBegin=82104|AlignEnd=82211|GE==[LOC].[SG]|RX==[POSTP]|TokenType=Clit
8	kirif	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=82211|AlignEnd=82318|GE=cut_off|Gloss=cut_off|RX=[V1]|TokenType=Stem
9	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	8	mark:aff	_	AlignBegin=82318|AlignEnd=82425|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	8	det	_	AlignBegin=82425|AlignEnd=82532|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	8	aux	_	AlignBegin=82532|AlignEnd=82639|GE==[COP].[1SG]|RX==[PRED].[N]|TokenType=Clit
12	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=82639|AlignEnd=83812|TokenType=Break

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	bak	_	ADV	DEICT	_	5	advmod	_	AlignBegin=156541|AlignEnd=156863|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
2	tʔi	_	VERB	V1,IRG	VerbClass=1	5	acl:relcl	_	AlignBegin=156863|AlignEnd=156970|GE=resemble|Gloss=resemble|RX=[V1].[IRG]|TokenType=Stem
3	-it	_	SCONJ	N	_	2	mark:aff	_	AlignBegin=156970|AlignEnd=157078|DerPOS=NOUN|GE=-[VN]|RX=-[N].[V]|TokenType=DerAff
4	=eːt	_	SCONJ	CONJ	Gender=Fem	2	mark	_	AlignBegin=157078|AlignEnd=157186|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
5	ʔiːbaːb	_	NOUN	N	Gender=Fem	10	nsubj	_	AlignBegin=157186|AlignEnd=157509|GE=travel\[N].[AC]|Gloss=travel|RX=[N].[V].[F]|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=157509|AlignEnd=158686|TokenType=Break
7	dh	_	ADP	POSTP	_	8	case	_	AlignBegin=158686|AlignEnd=158783|GE=[DIR]|RX=[POSTP]|TokenType=Stem
8	=eː	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	10	obl:arg	_	AlignBegin=158783|AlignEnd=158881|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
9	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	10	nsubj:aff	_	AlignBegin=158881|AlignEnd=158978|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
10	ki	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	12	parataxis	_	AlignBegin=158978|AlignEnd=159076|GE=become\[PFV]|Gloss=become|ReportedSpeech=Yes|RX=[V1].[IRG]|TokenType=Stem
11	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	12	nsubj:aff	_	AlignBegin=159076|AlignEnd=159173|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
12	di	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=159173|AlignEnd=159271|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
13	eːn	_	VERB	V1,IRG	Aspect=Pfv|Number=Plur|Person=3|VerbClass=1	12	discourse	_	AlignBegin=159271|AlignEnd=159466|GE=say\[PFV].[3PL]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=159466|AlignEnd=160103|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	beːn	_	ADV	ADV	_	7	iobj	_	AlignBegin=2926|AlignEnd=3046|GE=there|Gloss=there|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=3046|AlignEnd=3398|TokenType=Break
3	i=	_	DET	DET	Definite=Def|Gender=Masc	4	det	_	AlignBegin=3398|AlignEnd=3530|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
4	ʃarg	_	PROPN	NP	_	1	reparandum	_	AlignBegin=3530|AlignEnd=3662|GE=[Sharg]|ProperName=Sharg|RX=[N].[PROP]|TokenType=Stem
5	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	4	case	_	AlignBegin=3662|AlignEnd=3794|GE==[LOC].[SG]|RX==[POSTP]|TokenType=Clit
6	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=3794|AlignEnd=3926|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
7	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	AlignBegin=3926|AlignEnd=4058|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
8	=ajt	_	CCONJ	CCONJ	_	7	cc	_	AlignBegin=4058|AlignEnd=4190|GE==[COORD]|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=4190|AlignEnd=5569|TokenType=Break
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	AlignBegin=5569|AlignEnd=5666|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
11	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=5666|AlignEnd=5763|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
12	=iji	_	PRON	PRO	Case=Gen|Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	AlignBegin=5763|AlignEnd=5860|GE==[POSS].[1SG].[GEN]|RX==[PRO]|TokenType=Clit
13	haraw	_	VERB	V1	VerbClass=1	17	advcl	_	AlignBegin=5860|AlignEnd=6006|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
14	-a	_	SCONJ	CVB	VerbForm=Conv	13	mark:aff	_	AlignBegin=6006|AlignEnd=6152|GE=-[CVB].[MNR]|TokenType=InflAff
15	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=6152|AlignEnd=6713|TokenType=Break
16	a-	_	PRON	PNG	Number=Sing|Person=1	17	nsubj:aff	_	AlignBegin=6713|AlignEnd=6799|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
17	dif	_	VERB	V1	Aspect=Perf|VerbClass=1	24	advcl	_	AlignBegin=6799|AlignEnd=6885|GE=leave\[PFV]|Gloss=leave|RX=[V1]|TokenType=Stem
18	=hoːb	_	SCONJ	CONJ	_	17	mark	_	AlignBegin=6885|AlignEnd=6972|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
19	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=6972|AlignEnd=7232|TokenType=Break
20	biri	_	NOUN	N	Gender=Masc	24	nsubj	_	AlignBegin=7232|AlignEnd=7478|GE=rain|Gloss=rain|RX=[N].[M]|TokenType=Stem
21	dh	_	ADP	POSTP	_	24	iobj	_	AlignBegin=7478|AlignEnd=7601|GE=[DIR]|RX=[POSTP]|TokenType=Stem
22	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	20	nmod:poss	_	AlignBegin=7601|AlignEnd=7724|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
23	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	24	nsubj:aff	_	AlignBegin=7724|AlignEnd=7847|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
24	jaːm	_	VERB	V1	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=7847|AlignEnd=7970|GE=rain\[INT].[PFV]|Gloss=rain|RX=[V1].[DER]|TokenType=Stem
25	//	_	PUNCT	PUNCT	_	24	punct	_	AlignBegin=7970|AlignEnd=9063|TokenType=Break

~~~


