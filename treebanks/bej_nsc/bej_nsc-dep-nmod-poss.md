---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nmod.html">nmod</a></tt>.

23 nodes (2%) are attached to their parents as `nmod:poss`.

23 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26086956521739.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (19; 83% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 9% instances).


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
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 nmod:poss	color:blue
1	laːkin	_	CCONJ	PTCL	_	6	cc	_	AlignBegin=26604|AlignEnd=27006|GE=but|nWord=1|RX=[PTCL].[BORR].[ARA]|TokenType=Root
2	/	_	PUNCT	_	_	6	punct	_	AlignBegin=27006|AlignEnd=27408|GE=[/]|nWord=2|TokenType=Break
3	mhaj	_	NUM	NUM	_	5	nummod	_	AlignBegin=27544|AlignEnd=27726|GE=three|nWord=4|RX=[NUM]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=27726|AlignEnd=27907|GE=[INDF].[F]|nWord=4|RX=[DET]|TokenType=Clit
5	ʃartijaː	_	NOUN	N	Gender=Fem	6	obj	_	AlignBegin=27907|AlignEnd=28270|GE=line[PL]|MGloss=line[PL]|MSeg=ʃarti-jaː|nWord=5|RX=[N].[F]|TokenType=Root
6	dʔiti	_	NOUN	V1	_	21	parataxis:conj	_	AlignBegin=28270|AlignEnd=28633|GE=do[CVB].[GNRL]|MGloss=do[CVB].[GNRL]|MSeg=dʔi-ti|nWord=6|RX=[V1].[IRG]|TokenType=Root
7	aniːw	_	AUX	AUX.BENF	Number=Sing	6	aux	_	AlignBegin=28633|AlignEnd=28875|GE=[1SG]give|MGloss=[1SG]give|MSeg=a-niːw|nWord=7|RX=[PNG][AUX].[BENF]|TokenType=Root
8	=hoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2	6	iobj	_	AlignBegin=28875|AlignEnd=28996|GE=[OBJ].[2SG]|nWord=7|RX=[PRO]|TokenType=Clit
9	/	_	PUNCT	_	_	6	punct	_	AlignBegin=28996|AlignEnd=29358|GE=[/]|nWord=8|TokenType=Break
10	eːt	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Fem|Number=Plur|PronType=Dem	12	dislocated:det	_	AlignBegin=29358|AlignEnd=29708|GE=[PROX].[PL].[F].[ACC]|nWord=1|RX=[DEM]|TokenType=Root
11	ti=	_	DET	DET	Definite=Def|Gender=Fem	12	det	_	AlignBegin=29708|AlignEnd=29825|GE=[DEF].[F]|nWord=2|RX=[DET]|TokenType=Clit
12	ʃartijaː	_	NOUN	N	Gender=Fem	21	obj	_	AlignBegin=29825|AlignEnd=30058|GE=line[PL]|MGloss=line[PL]|MSeg=ʃarti-jaː|nWord=2|RX=[N].[F]|TokenType=Root
13	/	_	PUNCT	_	_	12	punct	_	AlignBegin=30058|AlignEnd=30408|GE=[/]|nWord=3|TokenType=Break
14	mhaj	_	NUM	NUM	_	12	nmod	_	AlignBegin=30408|AlignEnd=30594|GE=three|nWord=4|RX=[NUM]|TokenType=Root
15	=t	_	DET	DET	Gender=Fem	14	det	_	AlignBegin=30594|AlignEnd=30779|GE=[INDF].[F]|nWord=4|RX=[DET]|TokenType=Clit
16	koː	_	ADJ	ADJ	_	12	nmod	_	AlignBegin=30779|AlignEnd=30903|GE=all|nWord=5|RX=[ADJ]|TokenType=Root
17	=t	_	DET	DET	Gender=Fem	16	det	_	AlignBegin=30903|AlignEnd=31027|GE=[INDF].[F]|nWord=5|RX=[DET]|TokenType=Clit
18	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	16	nmod:poss	_	AlignBegin=31027|AlignEnd=31150|GE=[POSS].[3PL].[ACC]|nWord=5|RX=[PRO]|TokenType=Clit
19	/	_	PUNCT	_	_	12	punct	_	AlignBegin=31150|AlignEnd=31520|GE=[/]|nWord=6|TokenType=Break
20	ka=	_	PART	PTCL	Aspect=Imp	21	advmod	_	AlignBegin=31620|AlignEnd=31724|GE=[NEG].[IPFV]|nWord=8|RX=[PTCL]|TokenType=Clit
21	hasamtaː	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	22	parataxis	_	AlignBegin=31724|AlignEnd=31931|GE=go_past[PFV].[2SG].[M]|MGloss=go_past[PFV].[2SG].[M]|MSeg=hasam-taː|nWord=8|RX=[V2][TAM].[PNG]|TokenType=Root
22	id	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	24	parataxis	_	AlignBegin=31931|AlignEnd=32139|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-d|nWord=9|RX=[PNG][V1].[IRG]|TokenType=Root
23	=heːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	22	obj	_	AlignBegin=32139|AlignEnd=32242|GE=[OBJ].[1SG]|nWord=9|RX=[PRO]|TokenType=Clit
24	ini	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=32242|AlignEnd=32553|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ni|nWord=10|RX=[PNG][V1].[IRG]|TokenType=Root
25	//	_	PUNCT	_	_	24	punct	_	AlignBegin=32553|AlignEnd=32864|GE=[//]|nWord=11|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod:poss	color:blue
1	ti=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=53157|AlignEnd=53282|GE=[DEF].[F]|nWord=1|RX=[DET]|TokenType=Clit
2	ʃartijaː	_	NOUN	N	Gender=Fem	11	dislocated	_	AlignBegin=53282|AlignEnd=53533|GE=line[PL]|MGloss=line[PL]|MSeg=ʃarti-jaː|nWord=1|RX=[N].[F]|TokenType=Root
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=53533|AlignEnd=53910|GE=[/]|nWord=2|TokenType=Break
4	kaːmi	_	NOUN	N	_	5	nmod	_	AlignBegin=54098|AlignEnd=54415|GE=camel[GEN]|MGloss=camel[GEN]|MSeg=kaːm-i|nWord=4|RX=[N][CASE]|TokenType=Root
5	meːs	_	NOUN	_	_	6	dep:comp	_	GE=race_distance|RX=[N].[M]|TokenType=Root
6	=iːt	_	ADP	DET	Gender=Fem	11	dep	_	AlignBegin=54627|AlignEnd=54732|GE=[SIMIL.SG]|nWord=5|RX=[POSTP]|TokenType=Clit
7	/	_	PUNCT	_	_	6	punct	_	AlignBegin=54732|AlignEnd=55050|GE=[/]|nWord=6|TokenType=Break
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=55050|AlignEnd=55170|GE=[DEF].[M]|nWord=7|RX=[DET]|TokenType=Clit
9	nafs	_	PRON	PRO	Reflex=Yes	11	nsubj	_	AlignBegin=55170|AlignEnd=55290|GE=self|nWord=7|RX=[SBJ].[PRO].[REFL]|TokenType=Root
10	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=55290|AlignEnd=55410|GE=[POSS].[1SG].[NOM]|nWord=7|RX=[PRO]|TokenType=Clit
11	hasama	_	VERB	V2	VerbClass=2	13	dep:conj	_	AlignBegin=55410|AlignEnd=55650|GE=go_past[CVB].[MNR]|MGloss=go_past[CVB].[MNR]|MSeg=hasam-a|nWord=8|RX=[V2][PRF]|TokenType=Root
12	=b	_	DET	DET	Case=Acc|Gender=Masc	11	det	_	AlignBegin=55650|AlignEnd=55770|GE=[INDF].[M].[ACC]|nWord=8|RX=[DET]|TokenType=Clit
13	akajeː	_	AUX	AUX	Aspect=Perf	14	ccomp	_	AlignBegin=55770|AlignEnd=56130|GE=become[CVB].[SMLT]|MGloss=become[CVB].[SMLT]|MSeg=aka-jeː|nWord=9|RX=[AUX].[PRF]|TokenType=Root
14	amri	_	VERB	V1	Number=Sing|VerbClass=1	0	root	_	AlignBegin=56130|AlignEnd=56490|GE=[1SG]find|MGloss=[1SG]find|MSeg=a-mri|nWord=10|RX=[PNG][V1]|TokenType=Root
15	/	_	PUNCT	_	_	14	punct	_	AlignBegin=56490|AlignEnd=56852|GE=[/]|nWord=11|TokenType=Break

~~~


