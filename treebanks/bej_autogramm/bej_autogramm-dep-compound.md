---
layout: base
title:  'Statistics of compound in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="bej_nsc-dep-compound-svc.html">compound:svc</a></tt>.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 compound	color:blue
1	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=57207|AlignEnd=57378|GE=[DEF].[SG].[M].[NOM]|nWord=1|RX=[DET]|TokenType=Clit
2	jhaːm	_	NOUN	N	Gender=Masc	26	nsubj	_	AlignBegin=57378|AlignEnd=57549|GE=leopard|nWord=1|RX=[SBJ].[N].[M]|TokenType=Root
3	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	det	_	AlignBegin=57549|AlignEnd=57720|GE=[DEF].[SG].[M].[ACC]|nWord=2|RX=[DET]|TokenType=Clit
4	mhiːn	_	NOUN	N	Gender=Masc	26	obj	_	AlignBegin=57720|AlignEnd=57891|GE=place|nWord=2|RX=[N].[M]|TokenType=Root
5	w=	_	SCONJ	REL	Definite=Def|Gender=Masc|Number=Sing|PronType=Rel	9	compound	_	AlignBegin=57891|AlignEnd=58062|GE=[DEF].[SG].[M]|nWord=3|RX=[REL]|TokenType=Clit
6	ʔani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	AlignBegin=58062|AlignEnd=58233|GE=[1SG].[NOM]|nWord=3|RX=[SBJ].[PRO]|TokenType=Root
7	angaːd	_	VERB	V1	Number=Sing|VerbClass=1	8	ccomp	_	AlignBegin=58233|AlignEnd=58575|GE=[1SG]stop|MGloss=[1SG]stop|MSeg=a-ngaːd|nWord=4|RX=[PNG][V1].[IRG]|TokenType=Root
8	iːkti	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=58575|AlignEnd=58803|GE=[3SG].[M]become|MGloss=[3SG].[M]become|MSeg=iː-kti|nWord=5|RX=[PNG][V1].[IRG]|TokenType=Root
9	=jeːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	4	acl:relcl	_	AlignBegin=58803|AlignEnd=58917|GE=[REL].[SG].[M]|nWord=5|RX=[CONJ]|TokenType=Clit
10	/	_	PUNCT	_	_	4	punct	_	AlignBegin=58917|AlignEnd=59258|GE=[/]|nWord=6|TokenType=Break
11	t=	_	DET	DET	Definite=Def|Gender=Fem	12	det	_	AlignBegin=59384|AlignEnd=59535|GE=[DEF].[F]|nWord=8|RX=[DET]|TokenType=Clit
12	ʔalaːma	_	NOUN	N	Gender=Fem	4	reparandum	_	AlignBegin=59535|AlignEnd=59686|GE=mark|nWord=8|RX=[N].[F]|TokenType=Root
13	/	_	PUNCT	_	_	12	punct	_	AlignBegin=59686|AlignEnd=59988|GE=[/]|nWord=9|TokenType=Break
14	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	15	det	_	AlignBegin=59988|AlignEnd=60094|GE=[DEF].[SG].[M].[NOM]|nWord=10|RX=[DET]|TokenType=Clit
15	na	_	NOUN	N	Gender=Fem	22	nsubj	_	AlignBegin=60094|AlignEnd=60199|GE=thing|nWord=10|RX=[N].[F]|TokenType=Root
16	/	_	PUNCT	_	_	17	punct	_	AlignBegin=60199|AlignEnd=60410|GE=[/]|nWord=11|TokenType=Break
17	əgəg#	_	X	FS	_	15	discourse	_	AlignBegin=60410|AlignEnd=60764|GE=[FS]|nWord=12|RX=[FS]|TokenType=Root
18	/	_	PUNCT	_	_	15	punct	_	AlignBegin=60764|AlignEnd=61117|GE=[/]|nWord=13|TokenType=Break
19	i=	_	DET	DET	Definite=Def|Gender=Masc	20	det	_	AlignBegin=61117|AlignEnd=61279|GE=[DEF].[M]|nWord=14|RX=[DET]|TokenType=Clit
20	xawaːʤa	_	NOUN	N	Foreign=Yes|Gender=Masc	15	reparandum	_	AlignBegin=61279|AlignEnd=61440|GE=foreigner|nWord=14|RX=[SBJ].[N].[M].[BORR].[ARA]|TokenType=Root
21	dhaj	_	ADP	POSTP	_	22	dep:comp	_	AlignBegin=61440|AlignEnd=61763|GE=[DIR]|nWord=15|RX=[POSTP]|TokenType=Root
22	hijaː	_	VERB	V1	VerbClass=1	24	dep:comp	_	AlignBegin=61763|AlignEnd=62086|GE=give[CVB].[MNR]|MGloss=give[CVB].[MNR]|MSeg=hi-jaː|nWord=16|RX=[V1].[IRG][PRF]|TokenType=Root
23	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	22	aux	_	AlignBegin=62086|AlignEnd=62302|GE=[3SG].[M]become|MGloss=[3SG].[M]become|MSeg=iː-kti|nWord=17|RX=[PNG][AUX].[PRF]|TokenType=Root
24	=jeːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	12	acl:relcl	_	AlignBegin=62302|AlignEnd=62409|GE=[REL].[SG].[M]|nWord=17|RX=[CONJ]|TokenType=Clit
25	/	_	PUNCT	_	_	24	punct	_	AlignBegin=62409|AlignEnd=62731|GE=[/]|nWord=18|TokenType=Break
26	hasamjaː	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=62731|AlignEnd=63049|GE=go_past[PFV].[3SG].[M]|MGloss=go_past[PFV].[3SG].[M]|MSeg=hasam-jaː|nWord=19|RX=[V2][TAM].[PNG]|TokenType=Root
27	=ajt	_	CCONJ	CONJ	_	26	cc	_	AlignBegin=63049|AlignEnd=63208|GE=[CSL]|nWord=19|RX=[CONJ]|TokenType=Clit
28	/	_	PUNCT	_	_	26	punct	_	AlignBegin=63208|AlignEnd=63685|GE=[/]|nWord=20|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	agar	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1|Voice=Mid	2	compound	_	AlignBegin=84523|AlignEnd=84765|GE=[1SG]-come_back\[MID].[PFV]|Gloss=come_back|MGloss=1SG-come_back\MID.PFV|MSeg=a-gar|RX=[PNG]-[V1].[DER]|TokenType=Root
2	jʔan	_	VERB	V2,IRG	Number=Sing|VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84926|GE=come-[PFV].[1SG]|Gloss=come|MGloss=come-PFV.1SG|MSeg=jʔ-an|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=84926|AlignEnd=85007|GE==[COORD]|RX==[CONJ]|TokenType=Clit
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=85007|AlignEnd=85087|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
5	gaw	_	NOUN	N	Gender=Masc	2	dislocated	_	AlignBegin=85087|AlignEnd=85168|GE=house|Gloss=house|RX=[N].[M]|TokenType=Root
6	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


