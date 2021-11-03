---
layout: base
title:  'Statistics of dep:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

7 nodes (1%) are attached to their parents as `dep:aff`.

7 instances of `dep:aff` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85714285714286.

The following 2 pairs of parts of speech are connected with `dep:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (6; 86% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 dep:aff	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	2	nsubj:aff	_	AlignBegin=81414|AlignEnd=81535|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
2	skʷi	_	VERB	V1	Aspect=Perf|VerbClass=1	5	parataxis:coord	_	AlignBegin=81535|AlignEnd=81656|GE=pursue\[PFV]|Gloss=pursue|RX=[V1]|TokenType=Stem
3	-i	_	X	NP	_	2	dep:aff	_	AlignBegin=81656|AlignEnd=81778|GE=-[L]|ProperName=-L|TokenType=InflAff
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	AlignBegin=81778|AlignEnd=81899|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
5	gʷoːj	_	VERB	V1	Aspect=Perf|VerbClass=1	9	dep:conj	_	AlignBegin=81899|AlignEnd=82021|GE=be_unable\[INT].[PFV]|Gloss=be_unable|RX=[V1].[DER]|TokenType=Stem
6	=t	_	CCONJ	CCONJ	_	5	cc	_	AlignBegin=82021|AlignEnd=82143|GE==[COORD]|RX==[CONJ]|TokenType=Clit
7	//	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=82143|AlignEnd=82850|TokenType=Break
8	hoːj	_	PRON	PRO	Case=Abl	9	iobj	_	AlignBegin=82850|AlignEnd=83108|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
9	ɖaːb	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=83108|AlignEnd=83194|GE=run|Gloss=run|RX=[V2]|TokenType=Stem
10	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=83194|AlignEnd=83280|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
11	-i	_	X	-L	_	9	dep:aff	_	AlignBegin=83280|AlignEnd=83367|GE=-[L]|ProperName=-L|TokenType=InflAff
12	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=83367|AlignEnd=83496|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
13	ha	_	AUX	AUX,EMPH	Aspect=Aor	9	cop	_	AlignBegin=83496|AlignEnd=83625|GE=take\[AOR]|Gloss=take|RX=[AUX].[EMPH]|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=83625|AlignEnd=84523|TokenType=Break

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 dep:aff	color:blue
1	doːr	_	NOUN	N	Gender=Masc	8	obl:mod	_	AlignBegin=28614|AlignEnd=28792|GE=time|Gloss=time|RX=[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=28792|AlignEnd=29410|TokenType=Break
3	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	det	_	AlignBegin=29410|AlignEnd=29552|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
4	meːk	_	NOUN	N	_	8	obj	_	AlignBegin=29552|AlignEnd=29695|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
5	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	AlignBegin=29695|AlignEnd=29981|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Stem
6	ba=	_	AUX	PTCL	Mood=Opt	8	aux	_	AlignBegin=29981|AlignEnd=30076|GE=[OPT]=|RX=[PTCL]=|TokenType=Clit
7	a-	_	PRON	PNG	Number=Sing|Person=1	8	nsubj:aff	_	AlignBegin=30076|AlignEnd=30171|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
8	akaj	_	VERB	V1,IRG,NEG	Mood=Opt|Polarity=Neg|VerbClass=1	10	acl:relcl	_	AlignBegin=30171|AlignEnd=30267|GE=become\[NEG].[OPT]|Gloss=become|RX=[V1].[IRG]|TokenType=Stem
9	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=30267|AlignEnd=30553|TokenType=Break
10	kaːm	_	NOUN	N	_	12	obj	_	AlignBegin=30553|AlignEnd=30772|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
11	han	_	PART	PTCL	_	10	advmod	_	AlignBegin=30772|AlignEnd=30991|GE=also|Gloss=also|RX=[PTCL].[FOC]|TokenType=Stem
12	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	17	parataxis	_	AlignBegin=30991|AlignEnd=31045|GE=ride\[MID]|Gloss=ride|RX=[V1].[DER]|TokenType=Stem
13	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	12	mark:aff	_	AlignBegin=31045|AlignEnd=31100|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=DerAff
14	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	12	det	_	AlignBegin=31100|AlignEnd=31155|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
15	=i	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	12	aux	_	AlignBegin=31155|AlignEnd=31210|GE==[COP].[1SG]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
16	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	17	nsubj:aff	_	AlignBegin=31210|AlignEnd=31319|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
17	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	AlignBegin=31319|AlignEnd=31429|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
18	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=31429|AlignEnd=31649|TokenType=Break
19	mhaj	_	NUM	NUM	_	20	nummod:det	_	AlignBegin=31649|AlignEnd=31929|GE=three|Gloss=three|RX=[NUM]|TokenType=Stem
20	nafar	_	NOUN	N	Foreign=Yes|Gender=Masc	28	dislocated	_	AlignBegin=31929|AlignEnd=32069|GE=person|Gloss=person|RX=[N].[M].[BORR].[ARA]|TokenType=Stem
21	-a	_	PART	_	Number=Plur	20	dep:aff	_	AlignBegin=32069|AlignEnd=32209|GE=-[PL]|TokenType=InflAff
22	nuːn	_	PART	PTCL	_	20	advmod	_	AlignBegin=32209|AlignEnd=32489|GE=only|Gloss=only|RX=[PTCL]|TokenType=Stem
23	/	_	PUNCT	PUNCT	_	20	punct	_	AlignBegin=32489|AlignEnd=33247|TokenType=Break
24	naː	_	NOUN	N	Gender=Fem	28	nsubj	_	AlignBegin=33247|AlignEnd=33441|GE=thing|Gloss=thing|RX=[SBJ].[N].[F]|TokenType=Stem
25	=t	_	DET	DET	Definite=Ind|Gender=Fem	24	det	_	AlignBegin=33441|AlignEnd=33635|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
26	bi=	_	AUX	PTCL	Mood=Opt	28	aux	_	AlignBegin=33635|AlignEnd=33732|GE=[OPT]=|RX=[PTCL]=|TokenType=Clit
27	t-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	28	nsubj:aff	_	AlignBegin=33732|AlignEnd=33829|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
28	ʔam	_	VERB	V1,NEG	Mood=Opt|Polarity=Neg|VerbClass=1|Voice=Mid	10	acl:relcl	_	AlignBegin=33829|AlignEnd=33926|GE=ride\[MID].[NEG].[OPT]|Gloss=ride|RX=[V1].[DER]|TokenType=Stem
29	=eːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	28	mark	_	AlignBegin=33926|AlignEnd=34024|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
30	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=34024|AlignEnd=35599|GE=//|RX=PUNCT|TokenType=Break

~~~


