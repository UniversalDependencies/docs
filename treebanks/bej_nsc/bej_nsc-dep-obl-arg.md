---
layout: base
title:  'Statistics of obl:arg in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:arg`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-mod.html">obl:mod</a></tt>.

32 nodes (3%) are attached to their parents as `obl:arg`.

30 instances of `obl:arg` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.625.

The following 9 pairs of parts of speech are connected with `obl:arg`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (12; 38% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (10; 31% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (4; 13% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:arg	color:blue
1	əəə	_	INTJ	HESIT	_	7	discourse	_	AlignBegin=16164|AlignEnd=16399|GE=er|Gloss=er|RX=[HESIT]|TokenType=Root
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	AlignBegin=16399|AlignEnd=16516|GE=small|Gloss=small|RX=[ADJ]|TokenType=Root
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	AlignBegin=16516|AlignEnd=16634|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	7	nsubj	_	AlignBegin=16634|AlignEnd=16869|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Root
5	geːb	_	ADP	POSTP	_	7	obl:arg	_	AlignBegin=16869|AlignEnd=17104|GE=beside|Gloss=beside|RX=[POSTP]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=17104|AlignEnd=17339|TokenType=Break
7	tiːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=17339|AlignEnd=17475|GE=[3SG].[F]-be_there\[AOR]|Gloss=be_there|MGloss=3SG.F-be_there\AOR|MSeg=tiː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	=aj	_	SCONJ	CONJ	_	7	mark	_	AlignBegin=17475|AlignEnd=17543|GE==[CSL]|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=17543|AlignEnd=19067|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl:arg	color:blue
1	ʃamattan	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	4	acl	_	AlignBegin=144041|AlignEnd=144279|GE=blame-[PFV].[3SG].[F]-[L]|Gloss=blame|MGloss=blame-PFV.3SG.F-L|MSeg=ʃamat-ta-n|RX=[V2]-[TAM].[PNG]|TokenType=Root
2	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	1	obj	_	AlignBegin=144279|AlignEnd=144359|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
3	=ji	_	SCONJ	CONJ	_	1	mark	_	AlignBegin=144359|AlignEnd=144439|GE==[REL]|RX==[CONJ]|TokenType=Clit
4	ʃamateː	_	NOUN	N	Gender=Masc|Number=Plur	10	parataxis	_	AlignBegin=144439|AlignEnd=144704|GE=blame-[GEN].[PL]|Gloss=blame|MGloss=blame-GEN.PL|MSeg=ʃamat-eː|RX=[N].[M]-[CASE]|TokenType=Root
5	=ka	_	ADP	POSTP	Case=Dis	4	case	_	AlignBegin=144704|AlignEnd=144837|GE==[DISTR]|RX==[POSTP]|TokenType=Clit
6	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	10	nsubj	_	AlignBegin=144837|AlignEnd=145236|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Root
7	i=	_	DET	DET	Definite=Def|Gender=Masc	8	det	_	AlignBegin=145236|AlignEnd=145368|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
8	mhiːn	_	NOUN	N	Gender=Masc	10	obl:arg	_	AlignBegin=145368|AlignEnd=145501|GE=place|Gloss=place|RX=[N].[M]|TokenType=Root
9	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	nmod:poss	_	AlignBegin=145501|AlignEnd=145634|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
10	naːjeː	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=145634|AlignEnd=146033|GE=spend_the_night-[CVB].[SMLT]|Gloss=spend_the_night|MGloss=spend_the_night-CVB.SMLT|MSeg=naː-jeː|RX=[V2]|TokenType=Root
11	mhan	_	VERB	V2	Number=Sing|VerbClass=2	10	advcl	_	AlignBegin=146033|AlignEnd=146431|GE=be_in_morning-[PFV].[1SG]|Gloss=be_in_morning|MGloss=be_in_morning-PFV.1SG|MSeg=mh-an|RX=[V2]-[TAM].[PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=146431|AlignEnd=147206|TokenType=Break

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:arg	color:blue
1	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=156541|AlignEnd=156863|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Root
2	tʔiit	_	NOUN	V1,IRG	_	4	acl:relcl	_	AlignBegin=156863|AlignEnd=157078|GE=resemble-[VN]|Gloss=resemble|MGloss=resemble-VN|MSeg=tʔi-it|RX=[V1].[IRG]-[N].[V]|TokenType=Root
3	=eːt	_	SCONJ	CONJ	Gender=Fem	2	case	_	AlignBegin=157078|AlignEnd=157186|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
4	ʔiːbaːb	_	NOUN	N	Gender=Fem	8	nsubj	_	AlignBegin=157186|AlignEnd=157509|GE=travel\[N].[AC]|Gloss=travel|RX=[N].[V].[F]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=157509|AlignEnd=158686|TokenType=Break
6	dh	_	ADP	POSTP	_	7	case	_	AlignBegin=158686|AlignEnd=158783|GE=[DIR]|RX=[POSTP]|TokenType=Root
7	=eː	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	obl:arg	_	AlignBegin=158783|AlignEnd=158881|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
8	tiki	_	VERB	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	9	parataxis	_	AlignBegin=158881|AlignEnd=159076|GE=[3SG].[F]-become\[PFV]|Gloss=become|MGloss=3SG.F-become\PFV|MSeg=ti-ki|ReportedSpeech=Yes|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=159076|AlignEnd=159271|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	eːn	_	VERB	V1,IRG	Aspect=Pfv|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=159271|AlignEnd=159466|GE=say\[PFV].[3PL]|Gloss=say|RX=[V1].[IRG]|TokenType=Root
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=159466|AlignEnd=160103|TokenType=Break

~~~


