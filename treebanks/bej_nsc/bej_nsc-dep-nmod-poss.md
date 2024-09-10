---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nmod.html">nmod</a></tt>.

142 nodes (2%) are attached to their parents as `nmod:poss`.

141 instances of `nmod:poss` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25352112676056.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (127; 89% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (7; 5% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-DET.html">DET</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=2092|AlignEnd=2370|GE=disappear-[PFV].[3SG].[M]|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:poss	color:blue
1	rhaː	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=248819|AlignEnd=248981|GE=see[CVB].[MNR]|MGloss=see[CVB].[MNR]|MSeg=rh-aː|RX=[V2][PRF]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Gender=Masc	1	det	_	AlignBegin=248981|AlignEnd=249062|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
3	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	1	nsubj	_	AlignBegin=249062|AlignEnd=249305|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Root
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=249305|AlignEnd=249386|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
5	kna	_	PRON	PRO	Reflex=Yes	3	nmod	_	AlignBegin=249386|AlignEnd=249467|GE=owner|RX=[PRO].[REFL]|TokenType=Root
6	=ji	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=249467|AlignEnd=249548|GE=[POSS].[1SG].[NOM]|RX=[PRO]|TokenType=Clit
7	ka=	_	PART	PTCL	Aspect=Imp|Polarity=Neg	1	advmod	_	AlignBegin=249548|AlignEnd=249629|GE=[NEG].[IPFV]|RX=[PTCL]|TokenType=Clit
8	aki	_	AUX	AUX	Aspect=Perf|Number=Sing|Polarity=Neg	1	aux	_	AlignBegin=249629|AlignEnd=249791|GE=[1SG]become\PFV|MGloss=[1SG]become\PFV|MSeg=a-ki|RX=[PNG][AUX].[NEG]|TokenType=Root
9	nuːn	_	PART	PTCL	_	1	discourse	_	AlignBegin=249791|AlignEnd=250034|GE=only|RX=[PTCL]|TokenType=Root
10	/	_	PUNCT	_	_	1	punct	_	AlignBegin=250034|AlignEnd=250278|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:poss	color:blue
1	sagi	_	ADJ	ADJ	_	2	amod	_	AlignBegin=36708|AlignEnd=36929|GE=far|RX=[ADJ]|TokenType=Root
2	mhiːn	_	NOUN	N	Gender=Masc	12	obl:arg	_	AlignBegin=36929|AlignEnd=37150|GE=place|RX=[N].[M]|TokenType=Root
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=37150|AlignEnd=37372|GE=[/]|TokenType=Break
4	ti=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	AlignBegin=37372|AlignEnd=37491|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
5	ʃartija	_	NOUN	N	Gender=Fem|Number=Plur	12	obj	_	AlignBegin=37491|AlignEnd=37728|GE=line[PL]|MGloss=line[PL]|MSeg=ʃarti-ja|RX=[N].[F]|TokenType=Root
6	mhaj	_	NUM	NUM	_	5	nmod	_	AlignBegin=37728|AlignEnd=37906|GE=three|RX=[NUM]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=37906|AlignEnd=38084|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	koː	_	ADJ	ADJ	_	6	nmod	_	AlignBegin=38084|AlignEnd=38203|GE=all|RX=[ADJ]|TokenType=Root
9	=t	_	DET	DET	Gender=Fem	8	det	_	AlignBegin=38203|AlignEnd=38322|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
10	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	8	nmod:poss	_	AlignBegin=38322|AlignEnd=38440|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
11	/	_	PUNCT	_	_	10	punct	_	AlignBegin=38440|AlignEnd=38795|GE=[/]|TokenType=Break
12	idʔi	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=38795|AlignEnd=39082|GE=[3SG].[M]do\PFV|MGloss=[3SG].[M]do\PFV|MSeg=i-dʔi|RX=[PNG][V1].[IRG]|TokenType=Root
13	ihi	_	AUX	AUX.BENF	Aspect=Perf|Gender=Masc|Number=Sing	12	aux	_	AlignBegin=39082|AlignEnd=39274|GE=[3SG].[M]give\PFV|MGloss=[3SG].[M]give\PFV|MSeg=i-hi|RX=[PNG][AUX].[BENF]|TokenType=Root
14	=heːb	_	PRON	PRO	Number=Sing|Person=1	12	obj	_	AlignBegin=39274|AlignEnd=39369|GE=[OBJ].[1SG]|RX=[PRO]|TokenType=Clit
15	/	_	PUNCT	_	_	12	punct	_	AlignBegin=39369|AlignEnd=39655|GE=[/]|TokenType=Break

~~~


