---
layout: base
title:  'Statistics of parataxis:conj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis:conj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 2 other language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="bej_nsc-dep-parataxis-mod.html">parataxis:mod</a></tt>.

4 nodes (0%) are attached to their parents as `parataxis:conj`.

4 instances of `parataxis:conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.5.

The following 3 pairs of parts of speech are connected with `parataxis:conj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 parataxis:conj	color:blue
1	askʷii	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	2	parataxis:conj	_	AlignBegin=81414|AlignEnd=81778|GE=[1SG]-pursue\[PFV]-[L]|Gloss=pursue|MGloss=1SG-pursue\PFV-L|MSeg=a-skʷi-i|RX=[PNG]-[V1]|TokenType=Root
2	agʷoːj	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	6	dep:conj	_	AlignBegin=81778|AlignEnd=82021|GE=[1SG]-be_unable\[INT].[PFV]|Gloss=be_unable|MGloss=1SG-be_unable\INT.PFV|MSeg=a-gʷoːj|RX=[PNG]-[V1].[DER]|TokenType=Root
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=82021|AlignEnd=82143|GE==[COORD]|RX==[CONJ]|TokenType=Clit
4	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=82143|AlignEnd=82850|TokenType=Break
5	hoːj	_	PRON	PRO	Case=Abl	6	iobj	_	AlignBegin=82850|AlignEnd=83108|GE=[ABL].[3]|RX=[PRO]|TokenType=Root
6	ɖaːbjai	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=83108|AlignEnd=83367|GE=run-[PFV].[3SG].[M]-[L]|Gloss=run|MGloss=run-PFV.3SG.M-L|MSeg=ɖaːb-ja-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
7	iːha	_	AUX	AUX,EMPH	Aspect=Aor|Gender=Masc|Number=Sing	6	cop	_	AlignBegin=83367|AlignEnd=83625|GE=[3SG].[M]-take\[AOR]|Gloss=take|MGloss=3SG.M-take\AOR|MSeg=iː-ha|RX=[PNG]-[AUX].[EMPH]|TokenType=Root
8	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=83625|AlignEnd=84523|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis:conj	color:blue
1	daːji	_	ADJ	ADJ	_	4	parataxis:conj	_	AlignBegin=33647|AlignEnd=33765|GE=good|nWord=1|RX=[ADJ]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=33765|AlignEnd=33883|GE=[INDF].[F]|nWord=1|RX=[DET]|TokenType=Clit
3	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	1	cop	_	AlignBegin=33883|AlignEnd=34001|GE=[COP].[3SG]|nWord=1|RX=[PRED].[N]|TokenType=Clit
4	adanri	_	VERB	V1	Number=Sing|VerbClass=1	5	parataxis	_	AlignBegin=34001|AlignEnd=34355|GE=[1SG]kill|MGloss=[1SG]kill|MSeg=a-danri|nWord=2|RX=[PNG][V1]|TokenType=Root
5	adi	_	VERB	V1	Number=Sing|VerbClass=1	0	root	_	AlignBegin=34355|AlignEnd=34591|GE=[1SG]say|MGloss=[1SG]say|MSeg=a-di|nWord=3|RX=[PNG][V1].[IRG]|TokenType=Root
6	=t	_	CCONJ	CONJ	_	5	cc	_	AlignBegin=34591|AlignEnd=34709|GE=[COORD]|nWord=3|RX=[CONJ]|TokenType=Clit
7	//	_	PUNCT	_	_	5	punct	_	AlignBegin=34709|AlignEnd=35061|GE=[//]|nWord=4|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 6 parataxis:conj	color:blue
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


