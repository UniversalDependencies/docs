---
layout: base
title:  'Statistics of acl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="bej_nsc-dep-acl-relcl.html">acl:relcl</a></tt>.

2 nodes (0%) are attached to their parents as `acl`.

2 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 acl	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 acl	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=76156|AlignEnd=76440|GE=[DIST].[SG].[M].[NOM]|RX=[DEM]|TokenType=Root
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	AlignBegin=76440|AlignEnd=76582|GE=[DEF].[PL].[M].[NOM]=|RX=[DET]=|TokenType=Clit
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	AlignBegin=76582|AlignEnd=76724|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
4	eːjaːn	_	VERB	V2,IRG	Aspect=Pfv|Number=Plur|VerbClass=2	13	acl	_	AlignBegin=76724|AlignEnd=76914|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\PFV-3PL|MSeg=eːjaː-n|RX=[V2].[IRG]-[PNG]|TokenType=Root
5	=eːb	_	SCONJ	CONJ	ExtPos=SCONJ|Gender=Masc|Number=Sing	4	mark	_	AlignBegin=76914|AlignEnd=77009|GE==[REL].[SG].[M]|Idiom=Yes|RX==[CONJ]|TokenType=Clit
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	fixed	_	AlignBegin=77009|AlignEnd=77151|GE=[DEF].[SG].[M].[ACC]=|InIdiom=Yes|RX=[DET]=|TokenType=Clit
7	doːr	_	NOUN	N	Gender=Masc	5	fixed	_	AlignBegin=77151|AlignEnd=77293|GE=time|Gloss=time|InIdiom=Yes|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=77293|AlignEnd=78459|TokenType=Break
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=78459|AlignEnd=78599|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
10	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=78599|AlignEnd=78739|GE=camel|Gloss=camel|RX=[N]|TokenType=Root
11	=i	_	PRON	PRO	Case=Acc|Number=Sing	10	nmod:poss	_	AlignBegin=78739|AlignEnd=78880|GE==[POSS1].[SG].[ACC]|RX==[PRO]|TokenType=Clit
12	jam	_	NOUN	N	Gender=Masc|Number=Plur	13	obj	_	AlignBegin=78880|AlignEnd=79301|GE=water|Gloss=water|RX=[N].[PL].[M]|TokenType=Root
13	gʷʔasaː	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=79301|AlignEnd=79553|GE=drink-[CAUS]-[CVB].[MNR]|Gloss=drink|MGloss=drink-CAUS-CVB.MNR|MSeg=gʷʔa-s-aː|RX=[V2]-[V2].[DER]-[PRF]|TokenType=Root
14	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	13	det	_	AlignBegin=79553|AlignEnd=79637|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
15	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	13	cop	_	AlignBegin=79637|AlignEnd=79722|GE==[COP].[1SG]|RX==[PRED].[N]|TokenType=Clit
16	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=79722|AlignEnd=80500|TokenType=Break

~~~


