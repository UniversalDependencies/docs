---
layout: base
title:  'Statistics of csubj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (1; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 csubj	color:blue
1	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=4456|AlignEnd=4561|GE=[DEF].[SG].[M].[NOM]|RX=[DET]|TokenType=Clit
2	doːr	_	NOUN	N	Gender=Masc	14	obl:mod	_	AlignBegin=4561|AlignEnd=4666|GE=time|RX=[N].[M]|TokenType=Root
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=4666|AlignEnd=4877|GE=[/]|TokenType=Break
4	ʔasir	_	NOUN	N	Gender=Masc	2	acl:relcl	_	AlignBegin=4877|AlignEnd=5067|GE=afternoon|RX=[N].[M]|TokenType=Root
5	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	4	csubj	_	AlignBegin=5067|AlignEnd=5257|GE=[COP].[3SG]|RX=[PRED].[N]|TokenType=Clit
6	/	_	PUNCT	_	_	4	punct	_	AlignBegin=5257|AlignEnd=5637|GE=[/]|TokenType=Break
7	difa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	13	dep:conj	_	AlignBegin=6894|AlignEnd=7194|GE=leave[IMP].[SG].[M]|MGloss=leave[IMP].[SG].[M]|MSeg=dif-a|RX=[V1][TAM].[PNG]|TokenType=Root
8	=t	_	CCONJ	CONJ	_	7	cc	_	AlignBegin=7194|AlignEnd=7344|GE=[COORD]|RX=[CONJ]|TokenType=Clit
9	/	_	PUNCT	_	_	7	punct	_	AlignBegin=7344|AlignEnd=7793|GE=[/]|TokenType=Break
10	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	det	_	AlignBegin=9047|AlignEnd=9189|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
11	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=9189|AlignEnd=9330|GE=camel|RX=[N]|TokenType=Root
12	haːj	_	ADP	POSTP	Case=Com	13	dep	_	AlignBegin=9330|AlignEnd=9613|GE=[COM]|RX=[POSTP]|TokenType=Root
13	mʔa	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	14	parataxis	_	AlignBegin=9613|AlignEnd=9896|GE=come[IMP].[SG].[M]|MGloss=come[IMP].[SG].[M]|MSeg=mʔ-a|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
14	idiːn	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Plur|VerbClass=1	0	root	_	AlignBegin=9896|AlignEnd=10109|GE=[3]say\PFV[PL]|MGloss=[3]say\PFV[PL]|MSeg=i-diː-n|RX=[PNG][V1].[IRG]|TokenType=Root
15	=heːb	_	PRON	PRO	Number=Sing|Person=1	14	obj	_	AlignBegin=10109|AlignEnd=10179|GE=[OBJ].[1SG]|RX=[PRO]|TokenType=Clit
16	//	_	PUNCT	_	_	14	punct	_	AlignBegin=10179|AlignEnd=10462|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 csubj	color:blue
1	tuːt	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	AlignBegin=216597|AlignEnd=216828|GE=[PROX].[SG].[F].[NOM]|RX=[DEM]|TokenType=Root
2	t=	_	DET	DET	Definite=Def|Gender=Fem	3	det	_	AlignBegin=216828|AlignEnd=216886|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
3	ʔaːdeː	_	NOUN	N	Gender=Fem	16	dislocated:subj	_	AlignBegin=216886|AlignEnd=216944|GE=human_skin|RX=[SBJ].[N].[F]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=216944|AlignEnd=217002|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
5	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=217002|AlignEnd=217059|GE=[POSS].[1SG].[NOM]|RX=[PRO]|TokenType=Clit
6	naː	_	NOUN	N	Gender=Fem	11	obj	_	AlignBegin=217059|AlignEnd=217175|GE=thing|RX=[N].[F]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=217175|AlignEnd=217290|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	/	_	PUNCT	_	_	7	punct	_	AlignBegin=217290|AlignEnd=217521|GE=[/]|TokenType=Break
9	matig	_	VERB	V1	VerbClass=1	11	csubj	_	AlignBegin=217973|AlignEnd=218230|GE=[N].[AC]be_heavy|MGloss=[N].[AC]be_heavy|MSeg=ma-tig|RX=[N].[V][V1]|TokenType=Root
10	/	_	PUNCT	_	_	9	punct	_	AlignBegin=218230|AlignEnd=218487|GE=[/]|TokenType=Break
11	iːfi	_	VERB	V1	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	12	dep:comp	_	AlignBegin=218937|AlignEnd=219145|GE=[3SG].[M]be_there\AOR|MGloss=[3SG].[M]be_there\AOR|MSeg=iː-fi|RX=[PNG][V1].[IRG]|TokenType=Root
12	=jeːt	_	SCONJ	CONJ.REL	Gender=Fem|PronType=Rel	14	acl:relcl	_	AlignBegin=219145|AlignEnd=219248|GE=[REL].[F]|RX=[CONJ]|TokenType=Clit
13	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	14	det	_	AlignBegin=219248|AlignEnd=219404|GE=[DEF].[SG].[F].[ACC]|RX=[DET]|TokenType=Clit
14	na	_	NOUN	CONJ	_	16	obj	_	AlignBegin=219404|AlignEnd=219559|GE=thing|RX=[N.F]|TokenType=Root
15	/	_	PUNCT	_	_	14	punct	_	AlignBegin=219559|AlignEnd=219869|GE=[/]|TokenType=Break
16	timiːr	_	VERB	V1	Aspect=Aor|Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=219869|AlignEnd=220073|GE=[3SG].[F]find\AOR|MGloss=[3SG].[F]find\AOR|MSeg=ti-miːr|RX=[PNG][V1]|TokenType=Root
17	//	_	PUNCT	_	_	16	punct	_	AlignBegin=220073|AlignEnd=220276|GE=[//]|TokenType=Break

~~~


