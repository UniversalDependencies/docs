---
layout: base
title:  'Statistics of acl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="bej_nsc-dep-acl-relcl.html">acl:relcl</a></tt>.

8 nodes (0%) are attached to their parents as `acl`.

8 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.625.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (7; 88% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 acl	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 acl	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=76156|AlignEnd=76440|GE=[DIST].[SG].[M].[NOM]|RX=[DEM]|TokenType=Root
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	AlignBegin=76440|AlignEnd=76582|GE=[DEF].[PL].[M].[NOM]=|RX=[DET]=|TokenType=Clit
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	AlignBegin=76582|AlignEnd=76724|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
4	ʔeːjaːn	_	VERB	V2,IRG	Aspect=Perf|Number=Plur|VerbClass=2	13	acl	_	AlignBegin=76724|AlignEnd=76914|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\PFV-3PL|MSeg=ʔeːjaː-n|RX=[V2].[IRG]-[PNG]|TokenType=Root
5	=eːb	_	SCONJ	CONJ	ExtPos=SCONJ|Gender=Masc|PronType=Rel	4	mark	_	AlignBegin=76914|AlignEnd=77009|GE==[REL].[M]|Idiom=Yes|RX==[CONJ]|TokenType=Clit
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	fixed	_	AlignBegin=77009|AlignEnd=77151|GE=[DEF].[SG].[M].[ACC]=|InIdiom=Yes|RX=[DET]=|TokenType=Clit
7	doːr	_	NOUN	N	Gender=Masc	5	fixed	_	AlignBegin=77151|AlignEnd=77293|GE=time|Gloss=time|InIdiom=Yes|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=77293|AlignEnd=78459|TokenType=Break
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=78459|AlignEnd=78599|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
10	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=78599|AlignEnd=78739|GE=camel|Gloss=camel|RX=[N]|TokenType=Root
11	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	10	nmod:poss	_	AlignBegin=78739|AlignEnd=78880|GE==[POSS1].[SG].[ACC]|RX==[PRO]|TokenType=Clit
12	jam	_	NOUN	N	Gender=Masc|Number=Plur	13	obj	_	AlignBegin=78880|AlignEnd=79301|GE=water|Gloss=water|RX=[N].[PL].[M]|TokenType=Root
13	gʷʔasaː	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=79301|AlignEnd=79553|GE=drink-[CAUS]-[CVB].[MNR]|Gloss=drink|MGloss=drink-CAUS-CVB.MNR|MSeg=gʷʔa-s-aː|RX=[V2]-[V2].[DER]-[PRF]|TokenType=Root
14	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	13	det	_	AlignBegin=79553|AlignEnd=79637|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
15	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	13	cop	_	AlignBegin=79637|AlignEnd=79722|GE==[COP].[1SG]|RX==[PRED].[N]|TokenType=Clit
16	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=79722|AlignEnd=80500|TokenType=Break

~~~


