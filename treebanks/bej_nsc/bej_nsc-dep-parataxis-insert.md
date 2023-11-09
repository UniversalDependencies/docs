---
layout: base
title:  'Statistics of parataxis:insert in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis:insert`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 2 other language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="bej_nsc-dep-parataxis-mod.html">parataxis:mod</a></tt>.

1 nodes (0%) are attached to their parents as `parataxis:insert`.

1 instances of `parataxis:insert` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 1 pairs of parts of speech are connected with `parataxis:insert`: <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis:insert	color:blue
1	umbaruːk	_	PRON	PRO	Case=Nom|Gender=Masc|Number=Sing|Person=2	2	nsubj	_	AlignBegin=14675|AlignEnd=15053|GE=[2SG].[M].[NOM]|nWord=1|RX=[SBJ].[PRO]|TokenType=Root
2	danri	_	VERB	V1	VerbClass=1	3	dep:comp	_	AlignBegin=15053|AlignEnd=15242|GE=kill|nWord=2|RX=[V1]|TokenType=Root
3	=jeːk	_	SCONJ	CONJ	_	11	dep	_	AlignBegin=15242|AlignEnd=15431|GE=if|nWord=2|RX=[CONJ]|TokenType=Clit
4	id	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	6	parataxis	_	AlignBegin=15431|AlignEnd=15683|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-d|nWord=3|RX=[PNG][V1].[IRG]|TokenType=Root
5	=heːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	4	obj	_	AlignBegin=15683|AlignEnd=15809|GE=[OBJ].[1SG]|nWord=3|RX=[PRO]|TokenType=Clit
6	ini	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	3	parataxis:insert	_	AlignBegin=15809|AlignEnd=16187|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ni|nWord=4|RX=[PNG][V1].[IRG]|TokenType=Root
7	//	_	PUNCT	_	_	3	punct	_	AlignBegin=16187|AlignEnd=16565|GE=[//]|nWord=5|TokenType=Break
8	ət#	_	X	FS	_	10	dep	_	AlignBegin=17906|AlignEnd=18384|GE=[FS]|nWord=1|RX=[FS]|TokenType=Unfinished
9	ti=	_	DET	DET	Definite=Def|Gender=Fem	8	reparandum	_	AlignBegin=18384|AlignEnd=18623|GE=[DEF].[F]|nWord=2|RX=[DET]|TokenType=Clit
10	mindikʷijaːj	_	NOUN	N	Gender=Fem	11	obj	_	AlignBegin=18623|AlignEnd=18862|GE=rifle|nWord=2|RX=[N].[F]|TokenType=Root
11	aniːw	_	VERB	V1	Number=Sing|VerbClass=1	38	parataxis	_	AlignBegin=18862|AlignEnd=19180|GE=[1SG]give|MGloss=[1SG]give|MSeg=a-niːw|nWord=3|RX=[PNG][V1].[IRG]|TokenType=Root
12	=hoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2	11	obj	_	AlignBegin=19180|AlignEnd=19340|GE=[OBJ].[2SG]|nWord=3|RX=[PRO]|TokenType=Clit
13	umbaruːk	_	PRON	PRO	Case=Nom|Gender=Masc|Number=Sing|Person=2	14	nsubj	_	AlignBegin=19340|AlignEnd=19818|GE=[2SG].[M].[NOM]|nWord=4|RX=[SBJ].[PRO]|TokenType=Root
14	danri	_	VERB	V1	VerbClass=1	15	dep:comp	_	AlignBegin=19818|AlignEnd=20057|GE=kill|nWord=5|RX=[V1]|TokenType=Root
15	=jeːk	_	SCONJ	CONJ	_	36	dep	_	AlignBegin=20057|AlignEnd=20296|GE=if|nWord=5|RX=[CONJ]|TokenType=Clit
16	/	_	PUNCT	_	_	15	punct	_	AlignBegin=20296|AlignEnd=20774|GE=[/]|nWord=6|TokenType=Break
17	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	AlignBegin=21532|AlignEnd=21671|GE=[PROX].[SG].[M].[NOM]|nWord=1|RX=[DEM]|TokenType=Root
18	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	36	dislocated:subj	_	AlignBegin=21671|AlignEnd=21810|GE=[1SG].[NOM]|nWord=2|RX=[SBJ].[PRO]|TokenType=Root
19	/	_	PUNCT	_	_	18	punct	_	AlignBegin=21810|AlignEnd=21948|GE=[/]|nWord=3|TokenType=Break
20	t=	_	DET	DET	Definite=Def|Gender=Fem	21	det	_	AlignBegin=21948|AlignEnd=22099|GE=[DEF].[F]|nWord=4|RX=[DET]|TokenType=Clit
21	ʔarabijaːj	_	NOUN	N	Foreign=Yes|Gender=Fem	25	dep:conj	_	AlignBegin=22099|AlignEnd=22250|GE=car|nWord=4|RX=[N].[F].[BORR].[ARA]|TokenType=Root
22	=wa	_	CCONJ	CONJ	_	21	cc	_	AlignBegin=22250|AlignEnd=22400|GE=[COORD]|nWord=4|RX=[CONJ]|TokenType=Clit
23	/	_	PUNCT	_	_	21	punct	_	AlignBegin=22400|AlignEnd=22851|GE=[/]|nWord=5|TokenType=Break
24	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	25	det	_	AlignBegin=22851|AlignEnd=23019|GE=[DEF].[SG].[M].[ACC]|nWord=6|RX=[DET]|TokenType=Clit
25	maːl	_	NOUN	N	Foreign=Yes|Gender=Masc	34	nmod	_	AlignBegin=23019|AlignEnd=23188|GE=treasure|nWord=6|RX=[N].[M].[BORR].[ARA]|TokenType=Root
26	w=	_	SCONJ	REL	Definite=Def|Gender=Masc|Number=Sing|PronType=Rel	25	acl:relcl	_	AlignBegin=23188|AlignEnd=23356|GE=[DEF].[SG].[M]|nWord=7|RX=[REL]|TokenType=Clit
27	haːj	_	ADP	POSTP	Case=Com	28	dep	_	AlignBegin=23356|AlignEnd=23525|GE=[COM]|nWord=7|RX=[POSTP]|TokenType=Root
28	jʔa	_	VERB	V2	VerbClass=2	30	dep:comp	_	AlignBegin=23525|AlignEnd=23749|GE=come[CVB].[MNR]|MGloss=come[CVB].[MNR]|MSeg=jʔ-a|nWord=8|RX=[V2].[IRG][PRF]|TokenType=Root
29	=b	_	DET	DET	Case=Acc|Gender=Masc	28	det	_	AlignBegin=23749|AlignEnd=23862|GE=[INDF].[M].[ACC]|nWord=8|RX=[DET]|TokenType=Clit
30	akati	_	VERB	AUX	Aspect=Perf|Number=Sing	31	dep:comp	_	AlignBegin=23862|AlignEnd=24030|GE=[1SG]become|MGloss=[1SG]become|MSeg=a-kati|nWord=9|RX=[PNG][AUX].[PRF]|TokenType=Root
31	=jeːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	26	dep:comp	_	AlignBegin=24030|AlignEnd=24114|GE=[REL].[SG].[M]|nWord=9|RX=[CONJ]|TokenType=Clit
32	=wa	_	CCONJ	CONJ	_	25	cc	_	AlignBegin=24114|AlignEnd=24199|GE=[COORD]|nWord=9|RX=[CONJ]|TokenType=Clit
33	/	_	PUNCT	_	_	25	punct	_	AlignBegin=24199|AlignEnd=24534|GE=[/]|nWord=10|TokenType=Break
34	kass	_	ADJ	DET	_	36	obj	_	AlignBegin=24534|AlignEnd=24699|GE=all|nWord=11|RX=[ADJ]|TokenType=Root
35	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	34	nmod:poss	_	AlignBegin=24699|AlignEnd=24864|GE=[POSS].[3SG].[ACC]|nWord=11|RX=[PRO]|TokenType=Clit
36	aniːw	_	VERB	V1	Number=Sing|VerbClass=1	11	reparandum	_	AlignBegin=24864|AlignEnd=25084|GE=[1SG]give|MGloss=[1SG]give|MSeg=a-niːw|nWord=12|RX=[PNG][V1].[IRG]|TokenType=Root
37	=hoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2	36	obj	_	AlignBegin=25084|AlignEnd=25194|GE=[OBJ].[2SG]|nWord=12|RX=[PRO]|TokenType=Clit
38	indi	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=25194|AlignEnd=25524|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ndi|nWord=13|RX=[PNG][V1].[IRG]|TokenType=Root
39	//	_	PUNCT	_	_	38	punct	_	AlignBegin=25524|AlignEnd=25854|GE=[//]|nWord=14|TokenType=Break

~~~


