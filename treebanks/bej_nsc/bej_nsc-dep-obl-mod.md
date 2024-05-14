---
layout: base
title:  'Statistics of obl:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-arg.html">obl:arg</a></tt>.

74 nodes (1%) are attached to their parents as `obl:mod`.

40 instances of `obl:mod` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.97297297297297.

The following 11 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (32; 43% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (22; 30% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (9; 12% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	da	_	NOUN	N	Gender=Masc|Number=Plur	5	nsubj	_	AlignBegin=52560|AlignEnd=52754|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=52754|AlignEnd=53717|TokenType=Break
3	bʔeː	_	NOUN	N	Gender=Masc	5	obl:mod	_	AlignBegin=53717|AlignEnd=53884|GE=day|Gloss=day|RX=[N].[M]|TokenType=Root
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=53884|AlignEnd=54051|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	eːjaːn	_	VERB	V2,IRG	Aspect=Perf|Number=Plur|VerbClass=2	7	parataxis	_	AlignBegin=54051|AlignEnd=54273|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\PFV-3PL|MSeg=eːjaː-n|ReportedSpeech=Yes|RX=[V2].[IRG]-[PNG]|TokenType=Root
6	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	AlignBegin=54273|AlignEnd=54385|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
7	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54385|AlignEnd=54719|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=54719|AlignEnd=55636|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:mod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:mod	color:blue
1	winneːt	_	ADV	ADV	_	2	advmod	_	AlignBegin=5699|AlignEnd=5959|GE=plenty|RX=[ADV]|TokenType=Root
2	ʔareːji	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=5959|AlignEnd=6219|GE=like[AOR].[3SG].[M]|MGloss=like[AOR].[3SG].[M]|MSeg=ʔareː-ji|RX=[V2][TAM].[PNG]|TokenType=Root
3	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	2	discourse	_	AlignBegin=6219|AlignEnd=6479|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=6479|AlignEnd=6739|GE=[/]|TokenType=Break
5	ʔakra	_	VERB	V1	VerbClass=1	6	acl	_	AlignBegin=6739|AlignEnd=7020|GE=be_strong[CVB].[MNR]|MGloss=be_strong[CVB].[MNR]|MSeg=ʔakr-a|RX=[V1]|TokenType=Root
6	reːr	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	AlignBegin=7020|AlignEnd=7301|GE=love|RX=[N].[M]|TokenType=Root
7	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=7301|AlignEnd=7583|GE=[//]|TokenType=Break
8	mhaj	_	NUM	NUM	_	9	nummod	_	AlignBegin=7699|AlignEnd=8009|GE=three|RX=[NUM]|TokenType=Root
9	koː	_	ADJ	ADJ	_	12	amod	_	AlignBegin=8009|AlignEnd=8164|GE=all|RX=[ADJ]|TokenType=Root
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	obl:mod	_	AlignBegin=8164|AlignEnd=8319|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
11	j=	_	DET	DET	Definite=Def|Gender=Masc	12	det	_	AlignBegin=8319|AlignEnd=8422|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
12	ʔar	_	NOUN	N	_	2	dislocated:obj	_	AlignBegin=8422|AlignEnd=8525|GE=child|RX=[N]|TokenType=Root
13	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	AlignBegin=8525|AlignEnd=8629|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=8629|AlignEnd=8937|GE=[//]|TokenType=Break

~~~


