---
layout: base
title:  'Statistics of root in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `root`

This relation is universal.

380 nodes (6%) are attached to their parents as `root`.

380 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.0763157894737.

The following 7 pairs of parts of speech are connected with `root`: -<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (362; 95% instances), -<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (11; 3% instances), -<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), -<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), -<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 0% instances), -<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), -<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=2092|AlignEnd=2370|GE=disappear-[PFV].[3SG].[M]|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 11 root	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	jaː	_	PART	PTCL	_	2	vocative	_	AlignBegin=382634|AlignEnd=382898|GE=[ADRF]|RX=[PTCL]|TokenType=Root
2	iraːnaj	_	INTJ	_	_	7	discourse	_	AlignBegin=382898|AlignEnd=383162|GE=gosh|RX=[EXCL]|TokenType=Root
3	bak	_	PART	DEICT	_	4	advmod	_	AlignBegin=383162|AlignEnd=383426|GE=thus|RX=[DEICT].[MNR]|TokenType=Root
4	tʔiit	_	NOUN	V1	_	5	dep:comp	_	AlignBegin=383426|AlignEnd=383558|GE=resemble[VN]|MGloss=resemble[VN]|MSeg=tʔi-it|RX=[V1].[IRG][N].[V]|TokenType=Root
5	=eː	_	SCONJ	CONJ.REL	PronType=Rel	6	acl:relcl	_	AlignBegin=383558|AlignEnd=383624|GE=[REL]|RX=[CONJ]|TokenType=Clit
6	=na	_	NOUN	CONJ	_	7	obj	_	AlignBegin=383624|AlignEnd=383690|GE=thing|RX=[N.F]|TokenType=Clit
7	hadran	_	VERB	V2	Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=383690|AlignEnd=383954|GE=attend[PFV].[1SG]|MGloss=attend[PFV].[1SG]|MSeg=hadr-an|RX=[V2][TAM].[PNG]|TokenType=Root
8	adi	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=383954|AlignEnd=384130|GE=[1SG]say\PFV|MGloss=[1SG]say\PFV|MSeg=a-di|RX=[PNG][V1].[IRG]|TokenType=Root
9	=hoːb	_	SCONJ	CONJ	_	0	root	_	AlignBegin=384130|AlignEnd=384218|GE=when|RX=[CONJ]|TokenType=Clit
10	/	_	PUNCT	_	_	9	punct	_	AlignBegin=384218|AlignEnd=384483|GE=[/]|TokenType=Break

~~~


