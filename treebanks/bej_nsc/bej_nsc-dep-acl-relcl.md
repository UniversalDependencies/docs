---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-acl.html">acl</a></tt>.

114 nodes (2%) are attached to their parents as `acl:relcl`.

76 instances of `acl:relcl` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.28947368421053.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (58; 51% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (45; 39% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 acl:relcl	color:blue
1	j=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=17963|AlignEnd=18119|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
2	ʔar	_	NOUN	N	_	8	nsubj	_	AlignBegin=18119|AlignEnd=18276|GE=child|RX=[SBJ].[N]|TokenType=Root
3	i=	_	DET	DET	Definite=Def|Gender=Masc	4	det	_	AlignBegin=18276|AlignEnd=18432|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
4	mhali	_	NUM	NUM	_	2	nmod	_	AlignBegin=18432|AlignEnd=18589|GE=two|RX=[NUM]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=18589|AlignEnd=18902|GE=[/]|TokenType=Break
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	det	_	AlignBegin=19557|AlignEnd=19708|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
7	reːw	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=19708|AlignEnd=19859|GE=cattle|RX=[N].[M]|TokenType=Root
8	iːʃkʷina	_	VERB	V1	Aspect=Aor|Number=Plur|VerbClass=1	0	root	_	AlignBegin=19859|AlignEnd=20161|GE=[3]make_graze\AOR[PL]|MGloss=[3]make_graze\AOR[PL]|MSeg=iː-ʃkʷi-na|RX=[PNG][V1].[DER][PNG]|TokenType=Root
9	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	8	discourse	_	AlignBegin=20161|AlignEnd=20463|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=20463|AlignEnd=20766|GE=[//]|TokenType=Break
11	wi=	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	12	dep:comp	_	AlignBegin=21077|AlignEnd=21186|GE=[REL].[SG].[M]|RX=[CONJ]|TokenType=Clit
12	iːbrin	_	VERB	V1	Aspect=Aor|Number=Plur|VerbClass=1	13	dep:comp	_	AlignBegin=21186|AlignEnd=21513|GE=[3]have\AOR[PL]|MGloss=[3]have\AOR[PL]|MSeg=iː-bri-n|RX=[PNG][V1].[IRG][PNG]|TokenType=Root
13	=eːb	_	SCONJ	CONJ.REL	Gender=Masc|PronType=Rel	7	acl:relcl	_	AlignBegin=21513|AlignEnd=21624|GE=[REL].[M]|RX=[CONJ]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=21624|AlignEnd=22171|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 acl:relcl	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL]|RX=[POSTP]|TokenType=Root
4	=oː	_	PRON	PRO	Case=Acc	3	obl:mod	_	AlignBegin=31075|AlignEnd=31507|GE=[=POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
5	ʃʔagaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31723|GE=carry_on_shoulder-[CVB].[MNR]|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR|MSeg=ʃʔag-aː|RX=[V1]-[PRF]|TokenType=Root
6	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	5	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
8	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
11	ʔasalaː	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=33071|GE=grill-[CVB].[MNR]|Gloss=grill|MGloss=grill-CVB.MNR|MSeg=ʔasal-aː|RX=[V2]-[PRF]|TokenType=Root
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	11	aux	_	AlignBegin=33206|AlignEnd=33474|GE=[3SG].[M]-become\[AOR]|Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
14	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	11	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
15	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

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
7	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	obl:arg	_	AlignBegin=158783|AlignEnd=158881|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
8	tiki	_	VERB	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	9	parataxis	_	AlignBegin=158881|AlignEnd=159076|GE=[3SG].[F]-become\[PFV]|Gloss=become|MGloss=3SG.F-become\PFV|MSeg=ti-ki|ReportedSpeech=Yes|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=159076|AlignEnd=159271|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	eːn	_	VERB	V1,IRG	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	9	discourse	_	AlignBegin=159271|AlignEnd=159466|GE=say\[PFV].[3PL]|Gloss=say|RX=[V1].[IRG]|TokenType=Root
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=159466|AlignEnd=160103|TokenType=Break

~~~


