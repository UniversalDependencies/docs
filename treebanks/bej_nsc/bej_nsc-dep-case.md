---
layout: base
title:  'Statistics of case in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `case`

This relation is universal.

22 nodes (3%) are attached to their parents as `case`.

17 instances of `case` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59090909090909.

The following 4 pairs of parts of speech are connected with `case`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (15; 68% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (4; 18% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (2; 9% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	iki	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	7	advcl	_	AlignBegin=124427|AlignEnd=124771|GE=[3SG].[M]-become\[PFV]|Gloss=become|MGloss=3SG.M-become\PFV|MSeg=i-ki|RX=[PNG]-[V1].[IRG]|TokenType=Stem
2	saroːj	_	NOUN	V1	_	1	nsubj	_	AlignBegin=124771|AlignEnd=125000|GE=be_awake\[MID]-[N].[AC]|Gloss=be_awake|MGloss=be_awake\MID-N.AC|MSeg=sar-oːj|RX=[V1].[DER]-[N].[V]|TokenType=Stem
3	=ka	_	ADP	POSTP	Case=Dis	2	case	_	AlignBegin=125000|AlignEnd=125115|GE==[DISTR]|RX==[POSTP]|TokenType=Clit
4	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=125115|AlignEnd=126003|TokenType=Break
5	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	6	det	_	AlignBegin=126003|AlignEnd=126233|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
6	hanʤar	_	NOUN	N	Gender=Masc	7	obj	_	AlignBegin=126233|AlignEnd=126464|GE=dagger|Gloss=dagger|RX=[N].[M]|TokenType=Stem
7	sallaman	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=126464|AlignEnd=126926|GE=give-[PFV].[1SG]|Gloss=give|MGloss=give-PFV.1SG|MSeg=sallam-an|RX=[V2]-[TAM].[PNG]|TokenType=Stem
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=126926|AlignEnd=128062|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=156541|AlignEnd=156863|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
2	tʔiit	_	NOUN	V1,IRG	_	4	acl:relcl	_	AlignBegin=156863|AlignEnd=157078|GE=resemble-[VN]|Gloss=resemble|MGloss=resemble-VN|MSeg=tʔi-it|RX=[V1].[IRG]-[N].[V]|TokenType=Stem
3	=eːt	_	SCONJ	CONJ	Gender=Fem	2	case	_	AlignBegin=157078|AlignEnd=157186|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
4	ʔiːbaːb	_	NOUN	N	Gender=Fem	8	nsubj	_	AlignBegin=157186|AlignEnd=157509|GE=travel\[N].[AC]|Gloss=travel|RX=[N].[V].[F]|TokenType=Stem
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=157509|AlignEnd=158686|TokenType=Break
6	dh	_	ADP	POSTP	_	7	case	_	AlignBegin=158686|AlignEnd=158783|GE=[DIR]|RX=[POSTP]|TokenType=Stem
7	=eː	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	obl:arg	_	AlignBegin=158783|AlignEnd=158881|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
8	tiki	_	VERB	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	9	parataxis	_	AlignBegin=158881|AlignEnd=159076|GE=[3SG].[F]-become\[PFV]|Gloss=become|MGloss=3SG.F-become\PFV|MSeg=ti-ki|ReportedSpeech=Yes|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=159076|AlignEnd=159271|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Stem
10	eːn	_	VERB	V1,IRG	Aspect=Pfv|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=159271|AlignEnd=159466|GE=say\[PFV].[3PL]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=159466|AlignEnd=160103|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=156541|AlignEnd=156863|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
2	tʔiit	_	NOUN	V1,IRG	_	4	acl:relcl	_	AlignBegin=156863|AlignEnd=157078|GE=resemble-[VN]|Gloss=resemble|MGloss=resemble-VN|MSeg=tʔi-it|RX=[V1].[IRG]-[N].[V]|TokenType=Stem
3	=eːt	_	SCONJ	CONJ	Gender=Fem	2	case	_	AlignBegin=157078|AlignEnd=157186|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
4	ʔiːbaːb	_	NOUN	N	Gender=Fem	8	nsubj	_	AlignBegin=157186|AlignEnd=157509|GE=travel\[N].[AC]|Gloss=travel|RX=[N].[V].[F]|TokenType=Stem
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=157509|AlignEnd=158686|TokenType=Break
6	dh	_	ADP	POSTP	_	7	case	_	AlignBegin=158686|AlignEnd=158783|GE=[DIR]|RX=[POSTP]|TokenType=Stem
7	=eː	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	obl:arg	_	AlignBegin=158783|AlignEnd=158881|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
8	tiki	_	VERB	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	9	parataxis	_	AlignBegin=158881|AlignEnd=159076|GE=[3SG].[F]-become\[PFV]|Gloss=become|MGloss=3SG.F-become\PFV|MSeg=ti-ki|ReportedSpeech=Yes|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=159076|AlignEnd=159271|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Stem
10	eːn	_	VERB	V1,IRG	Aspect=Pfv|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=159271|AlignEnd=159466|GE=say\[PFV].[3PL]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=159466|AlignEnd=160103|TokenType=Break

~~~


