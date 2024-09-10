---
layout: base
title:  'Statistics of obj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obj`

This relation is universal.

417 nodes (7%) are attached to their parents as `obj`.

308 instances of `obj` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40767386091127.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (288; 69% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (109; 26% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
1	ontʔa	_	ADV	PTCL	_	4	discourse	_	AlignBegin=35009|AlignEnd=35339|GE=now|Gloss=now|RX=[PTCL]|TokenType=Root
2	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=35339|AlignEnd=35670|TokenType=Break
3	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=35670|AlignEnd=35939|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Root
4	ʔabkin	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	8	parataxis	_	AlignBegin=35939|AlignEnd=36208|GE=take-[IMP].[SG].[F]-[EMPH]|Gloss=take|MGloss=take-IMP.SG.F-EMPH|MSeg=ʔabk-i-n|ReportedSpeech=Yes|RX=[V1]-[TAM].[PNG]-[SUFX]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=36208|AlignEnd=36736|TokenType=Break
6	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	7	det	_	AlignBegin=36736|AlignEnd=36853|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
7	hi	_	NOUN	N	_	4	obj	_	AlignBegin=36853|AlignEnd=36971|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	10	dep:comp	_	AlignBegin=36971|AlignEnd=37089|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	=oː	_	PRON	PRO	Number=Sing|Person=1	8	obj	_	AlignBegin=37089|AlignEnd=37148|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
10	=hoːb	_	SCONJ	CONJ	_	14	dep	_	AlignBegin=37148|AlignEnd=37207|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=37207|AlignEnd=37443|TokenType=Break
12	ajwa	_	PART	PTCL	_	14	parataxis	_	AlignBegin=37443|AlignEnd=37774|GE=yes|Gloss=yes|ReportedSpeech=Yes|RX=[PTCL]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=37774|AlignEnd=38105|TokenType=Break
14	adi	_	VERB	V1,IRG	Aspect=Perf|Number=Sing|VerbClass=1	0	root	_	AlignBegin=38105|AlignEnd=38373|GE=[1SG]-say\[PFV]|Gloss=say|MGloss=1SG-say\PFV|MSeg=a-di|RX=[PNG]-[V1].[IRG]|TokenType=Root
15	=t	_	CCONJ	CCONJ	_	14	cc	_	AlignBegin=38373|AlignEnd=38507|GE==[COORD]|RX==[CONJ]|TokenType=Clit

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 obj	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=16991|AlignEnd=17113|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
2	finʤan	_	NOUN	N	Gender=Masc	7	obj	_	AlignBegin=17113|AlignEnd=17234|GE=cup|RX=[N].[M]|TokenType=Root
3	mhaj	_	NUM	NUM	_	2	nmod	_	AlignBegin=17234|AlignEnd=17477|GE=three|RX=[NUM]|TokenType=Root
4	/	_	PUNCT	_	_	3	punct	_	AlignBegin=17477|AlignEnd=17720|GE=[/]|TokenType=Break
5	koː	_	ADJ	ADJ	_	2	amod	_	AlignBegin=17720|AlignEnd=17928|GE=all|RX=[ADJ]|TokenType=Root
6	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	5	obl:mod	_	AlignBegin=17928|AlignEnd=18137|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
7	ʃaw~wawiːtiːt	_	VERB	V1	VerbClass=1	11	dep:conj	_	AlignBegin=18137|AlignEnd=18554|GE=[gather~PLAC][CVB].[SEQ]|MGloss=[gather~PLAC][CVB].[SEQ]|MSeg=ʃaw~waw-iːtiːt|RX=[V1].[DER]|TokenType=Root
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=18554|AlignEnd=18693|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
9	findikʷ	_	NOUN	N	Gender=Masc	10	dep:comp	_	AlignBegin=18693|AlignEnd=18832|GE=mortar|RX=[N].[M]|TokenType=Root
10	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	11	obl:arg	_	AlignBegin=18832|AlignEnd=18971|GE=[LOC].[SG]|RX=[POSTP]|TokenType=Clit
11	gidtiːt	_	VERB	V1	VerbClass=1	13	advcl	_	AlignBegin=18971|AlignEnd=19388|GE=throw[CVB].[SEQ]|MGloss=throw[CVB].[SEQ]|MSeg=gid-tiːt|RX=[V1]|TokenType=Root
12	/	_	PUNCT	_	_	11	punct	_	AlignBegin=19388|AlignEnd=19803|GE=[/]|TokenType=Break
13	inʈhiːm	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=20785|AlignEnd=21167|GE=[3SG].[M]grind\IPFV|MGloss=[3SG].[M]grind\IPFV|MSeg=i-nʈhiːm|RX=[PNG][V1]|TokenType=Root
14	eːn	_	VERB	V1	VerbClass=1	13	discourse	_	AlignBegin=21167|AlignEnd=21549|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
15	ifi#	_	X	FS	_	13	obj	_	AlignBegin=21549|AlignEnd=21931|GE=[FS]|RX=[FS]|TokenType=Unfinished
16	i=	_	DET	DET	Definite=Def|Gender=Masc	17	det	_	AlignBegin=21931|AlignEnd=22058|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
17	finʤan	_	NOUN	N	Gender=Masc	15	reparandum	_	AlignBegin=22058|AlignEnd=22185|GE=cup|RX=[N].[M]|TokenType=Root
18	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	17	nmod:poss	_	AlignBegin=22185|AlignEnd=22313|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
19	ʤuwwaːb	_	ADV	POSTP	_	13	advmod	_	AlignBegin=22313|AlignEnd=22504|GE=inside|RX=[ADV].[BORR].[ARA]|TokenType=Root
20	//	_	PUNCT	_	_	13	punct	_	AlignBegin=22695|AlignEnd=23078|GE=[//]|TokenType=Break

~~~


