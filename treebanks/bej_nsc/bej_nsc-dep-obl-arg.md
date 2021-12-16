---
layout: base
title:  'Statistics of obl:arg in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-mod.html">obl:mod</a></tt>.

11 nodes (1%) are attached to their parents as `obl:arg`.

10 instances of `obl:arg` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.90909090909091.

The following 2 pairs of parts of speech are connected with `obl:arg`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 obl:arg	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl:arg	color:blue
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


