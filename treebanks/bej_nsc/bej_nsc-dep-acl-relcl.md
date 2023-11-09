---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-acl.html">acl</a></tt>.

21 nodes (2%) are attached to their parents as `acl:relcl`.

11 instances of `acl:relcl` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.28571428571429.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (14; 67% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (6; 29% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl:relcl	color:blue
1	hoː	_	NOUN	N	_	4	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːsoː	_	PRON	PRO	Case=Abl	4	dep:comp	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL].[3]|RX=[PRO]|TokenType=Root
4	ʃʔagaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31723|GE=carry_on_shoulder-[CVB].[MNR]|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR|MSeg=ʃʔag-aː|RX=[V1]-[PRF]|TokenType=Root
5	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	4	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	4	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	4	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
10	ʔasalaː	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=33071|GE=grill-[CVB].[MNR]|Gloss=grill|MGloss=grill-CVB.MNR|MSeg=ʔasal-aː|RX=[V2]-[PRF]|TokenType=Root
11	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
12	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	cop	_	AlignBegin=33206|AlignEnd=33474|GE=[3SG].[M]-become\[AOR]|Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
13	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	10	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 18 acl:relcl	color:blue
1	mali	_	PART	PTCL	_	5	obl:arg	_	AlignBegin=24022|AlignEnd=24178|GE=two|nWord=1|RX=[PTCL]|TokenType=Root
2	-a	_	NUM	NUM	NumType=Ord	1	obl:mod	_	AlignBegin=24178|AlignEnd=24335|GE=[ORD]|nWord=1|RX=[NUM]|TokenType=InflAff
3	muːnai	_	PROPN	N	_	4	dep:comp	_	AlignBegin=24335|AlignEnd=24648|GE=[Mouna][GEN]|MGloss=[Mouna][GEN]|MSeg=muːna-i|nWord=2|RX=[N].[PROP][CASE]|TokenType=Root
4	geːb	_	ADP	POSTP	_	5	obl:arg	_	AlignBegin=24648|AlignEnd=24961|GE=beside|nWord=3|RX=[POSTP]|TokenType=Root
5	gʷʔaa	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	6	parataxis	_	AlignBegin=24961|AlignEnd=25274|GE=drink[IMP].[SG].[M]|MGloss=drink[IMP].[SG].[M]|MSeg=gʷʔa-a|nWord=4|RX=[V2][TAM].[PNG]|TokenType=Root
6	indi	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=25274|AlignEnd=25587|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ndi|nWord=5|RX=[PNG][V1].[IRG]|TokenType=Root
7	eːn	_	VERB	V1	VerbClass=1	6	discourse	_	AlignBegin=25587|AlignEnd=25900|GE=say|nWord=6|RX=[V1].[IRG]|TokenType=Root
8	/	_	PUNCT	_	_	20	punct	_	AlignBegin=25900|AlignEnd=26214|GE=[/]|nWord=7|TokenType=Break
9	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	10	det	_	AlignBegin=26214|AlignEnd=26330|GE=[DEF].[SG].[M].[ACC]|nWord=8|RX=[DET]|TokenType=Clit
10	buːn	_	NOUN	N	Gender=Masc	19	xcomp	_	AlignBegin=26330|AlignEnd=26445|GE=coffee|nWord=8|RX=[N].[M]|TokenType=Root
11	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	AlignBegin=26445|AlignEnd=26676|GE=[PROX].[SG].[M].[ACC]|nWord=9|RX=[DEM]|TokenType=Root
12	/	_	PUNCT	_	_	11	punct	_	AlignBegin=26676|AlignEnd=26908|GE=[/]|nWord=10|TokenType=Break
13	tʔa	_	PART	PTCL	_	16	reparandum	_	AlignBegin=27430|AlignEnd=27596|GE=now|nWord=12|RX=[PTCL]|TokenType=Root
14	/	_	PUNCT	_	_	16	punct	_	AlignBegin=27596|AlignEnd=27763|GE=[/]|nWord=13|TokenType=Break
15	i=	_	DET	DET	Definite=Def|Gender=Masc	16	det	_	AlignBegin=29504|AlignEnd=29688|GE=[DEF].[M]|nWord=15|RX=[DET]|TokenType=Clit
16	tʔa	_	PART	PTCL	_	17	obl:mod	_	AlignBegin=29688|AlignEnd=29872|GE=now|nWord=15|RX=[PTCL]|TokenType=Root
17	gʷʔataːn	_	VERB	V2	Number=Plur|VerbClass=2	18	dep:comp	_	AlignBegin=29872|AlignEnd=30118|GE=drink[PFV].[2PL]|MGloss=drink[PFV].[2PL]|MSeg=gʷʔa-taːn|nWord=16|RX=[V2][TAM].[PNG]|TokenType=Root
18	=eːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	10	acl:relcl	_	AlignBegin=30118|AlignEnd=30240|GE=[REL].[SG].[M]|nWord=16|RX=[CONJ]|TokenType=Clit
19	ikati	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	20	dep:comp	_	AlignBegin=30240|AlignEnd=30486|GE=[3SG].[M]become|MGloss=[3SG].[M]become|MSeg=i-kati|nWord=17|RX=[PNG][V1].[IRG]|TokenType=Root
20	=jeːk	_	SCONJ	CONJ	_	6	dep	_	AlignBegin=30486|AlignEnd=30608|GE=if|nWord=17|RX=[CONJ]|TokenType=Clit
21	//	_	PUNCT	_	_	6	punct	_	AlignBegin=30608|AlignEnd=30978|GE=[//]|nWord=18|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl:relcl	color:blue
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


