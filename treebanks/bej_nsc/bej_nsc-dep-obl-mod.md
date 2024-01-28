---
layout: base
title:  'Statistics of obl:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-arg.html">obl:arg</a></tt>.

9 nodes (1%) are attached to their parents as `obl:mod`.

7 instances of `obl:mod` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44444444444444.

The following 5 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-PART.html">PART</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 11% instances).


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
5	eːjaːn	_	VERB	V2,IRG	Aspect=Pfv|Number=Plur|VerbClass=2	7	parataxis	_	AlignBegin=54051|AlignEnd=54273|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\PFV-3PL|MSeg=eːjaː-n|ReportedSpeech=Yes|RX=[V2].[IRG]-[PNG]|TokenType=Root
6	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	AlignBegin=54273|AlignEnd=54385|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
7	ini	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54385|AlignEnd=54719|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=54719|AlignEnd=55636|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl:mod	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=16991|AlignEnd=17113|GE=[DEF].[M]|nWord=1|RX=[DET]|TokenType=Clit
2	finʤan	_	NOUN	N	Gender=Masc	7	obj	_	AlignBegin=17113|AlignEnd=17234|GE=cup|nWord=1|RX=[N].[M]|TokenType=Root
3	mhaj	_	NUM	NUM	_	2	nmod	_	AlignBegin=17234|AlignEnd=17477|GE=three|nWord=2|RX=[NUM]|TokenType=Root
4	/	_	PUNCT	_	_	5	punct	_	AlignBegin=17477|AlignEnd=17720|GE=[/]|nWord=3|TokenType=Break
5	koː	_	ADJ	ADJ	_	2	appos	_	AlignBegin=17720|AlignEnd=17928|GE=all|nWord=4|RX=[ADJ]|TokenType=Root
6	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	5	obl:mod	_	AlignBegin=17928|AlignEnd=18137|GE=[POSS].[3PL].[ACC]|nWord=4|RX=[PRO]|TokenType=Clit
7	ʃaw~waw	_	VERB	V1	VerbClass=1	12	dep:conj	_	AlignBegin=18137|AlignEnd=18345|GE=[gather~PLAC]|nWord=5|RX=[V1].[DER]|TokenType=Root
8	-iːtiːt	_	AUX	_	_	7	aux	_	AlignBegin=18345|AlignEnd=18554|DerPos=NOUN|GE=[CVB].[SEQ]|nWord=5|TokenType=DerAff
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=18554|AlignEnd=18693|GE=[DEF].[M]|nWord=6|RX=[DET]|TokenType=Clit
10	findikʷ	_	NOUN	N	Gender=Masc	11	dep:comp	_	AlignBegin=18693|AlignEnd=18832|GE=mortar|nWord=6|RX=[N].[M]|TokenType=Root
11	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	12	obl:arg	_	AlignBegin=18832|AlignEnd=18971|GE=[LOC].[SG]|nWord=6|RX=[POSTP]|TokenType=Clit
12	gid	_	VERB	V1	VerbClass=1	15	dep:conj	_	AlignBegin=18971|AlignEnd=19179|GE=throw|nWord=7|RX=[V1]|TokenType=Root
13	-tiːt	_	AUX	_	_	12	aux	_	AlignBegin=19179|AlignEnd=19388|DerPos=NOUN|GE=[CVB].[SEQ]|nWord=7|TokenType=DerAff
14	/	_	PUNCT	_	_	12	punct	_	AlignBegin=19388|AlignEnd=19803|GE=[/]|nWord=8|TokenType=Break
15	inʈhiːm	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=20785|AlignEnd=21167|GE=[3SG].[M]grind|MGloss=[3SG].[M]grind|MSeg=i-nʈhiːm|nWord=10|RX=[PNG][V1]|TokenType=Root
16	eːn	_	VERB	V1	VerbClass=1	15	discourse	_	AlignBegin=21167|AlignEnd=21549|GE=say|nWord=11|RX=[V1].[IRG]|TokenType=Root
17	ifi#	_	X	FS	_	19	reparandum	_	AlignBegin=21549|AlignEnd=21931|GE=[FS]|nWord=12|RX=[FS]|TokenType=Unfinished
18	i=	_	DET	DET	Definite=Def|Gender=Masc	19	det	_	AlignBegin=21931|AlignEnd=22058|GE=[DEF].[M]|nWord=13|RX=[DET]|TokenType=Clit
19	finʤan	_	NOUN	N	Gender=Masc	15	obj	_	AlignBegin=22058|AlignEnd=22185|GE=cup|nWord=13|RX=[N].[M]|TokenType=Root
20	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	19	nmod:poss	_	AlignBegin=22185|AlignEnd=22313|GE=[POSS].[3PL].[ACC]|nWord=13|RX=[PRO]|TokenType=Clit
21	ʤuwwaː	_	ADP	POSTP	_	15	obl:arg	_	AlignBegin=22313|AlignEnd=22504|GE=inside|nWord=14|RX=[POSTP].[BORR].[ARA]|TokenType=Root
22	=b	_	DET	DET	Case=Acc|Gender=Masc	21	det	_	AlignBegin=22504|AlignEnd=22695|GE=[INDF].[M].[ACC]|nWord=14|RX=[DET]|TokenType=Clit
23	//	_	PUNCT	_	_	15	punct	_	AlignBegin=22695|AlignEnd=23078|GE=[//]|nWord=15|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:mod	color:blue
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


