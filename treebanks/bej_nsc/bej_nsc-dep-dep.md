---
layout: base
title:  'Statistics of dep in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep`

This relation is universal.
There are 4 language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

4 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-DET.html">DET</a></tt> (1; 25% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 dep	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	AlignBegin=132837|AlignEnd=133174|GE=what|Gloss=what|RX=[PRO].[Q]|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|GE=[COM]|RX=[POSTP]|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133567|GE=come|Gloss=come|RX=[V2].[IRG]|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	AlignBegin=133567|AlignEnd=133623|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133623|AlignEnd=133679|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|GE==[POSS].[2SG].[ACC]|RX==[PRO]|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	AlignBegin=133735|AlignEnd=133791|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dep	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	AlignBegin=132837|AlignEnd=133174|GE=what|Gloss=what|RX=[PRO].[Q]|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|GE=[COM]|RX=[POSTP]|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133567|GE=come|Gloss=come|RX=[V2].[IRG]|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	AlignBegin=133567|AlignEnd=133623|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133623|AlignEnd=133679|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|GE==[POSS].[2SG].[ACC]|RX==[PRO]|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	AlignBegin=133735|AlignEnd=133791|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 dep	color:blue
1	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=55636|AlignEnd=55855|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
2	dhaj	_	NOUN	N	Gender=Masc	6	nsubj	_	AlignBegin=55855|AlignEnd=56075|GE=people|Gloss=people|RX=[SBJ].[N].[COL].[M]|TokenType=Stem
3	kass	_	DET	DET	_	2	det	_	AlignBegin=56075|AlignEnd=56294|GE=all|Gloss=all|RX=[DET]|TokenType=Stem
4	=aː	_	PRON	PRO	Case=Nom|Number=Plur|Person=3|Poss=Yes	2	nmod:poss	_	AlignBegin=56294|AlignEnd=56514|GE==[POSS].[3PL].[NOM]|RX==[PRO]|TokenType=Clit
5	i-	_	PRON	PNG	_	6	nsubj:aff	_	AlignBegin=56514|AlignEnd=56623|GE=[3]-|RX=[PNG]-|TokenType=InflAff
6	ktiːn	_	VERB	V1,IRG	Aspect=Imp|VerbClass=1|Voice=Mid	9	acl:relcl	_	AlignBegin=56623|AlignEnd=56733|GE=know\[MID].[IPFV]|Gloss=know|RX=[V1].[DER].[IRG]|TokenType=Stem
7	-n	_	PRON	PNG	Number=Plur	6	dep	_	AlignBegin=56733|AlignEnd=56843|GE=-[PL]|RX=-[PNG]|TokenType=InflAff
8	=i	_	SCONJ	CONJ	_	6	mark	_	AlignBegin=56843|AlignEnd=56953|GE==[REL]|RX==[CONJ]|TokenType=Clit
9	kaːm	_	NOUN	N	_	10	nsubj	_	AlignBegin=56953|AlignEnd=57099|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
10	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	18	advcl	_	AlignBegin=57099|AlignEnd=57245|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
11	=it	_	SCONJ	CONJ	_	10	mark	_	AlignBegin=57245|AlignEnd=57392|GE==[CSL]|RX==[CONJ]|TokenType=Clit
12	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=57392|AlignEnd=57995|TokenType=Break
13	ʔajaːj	_	NOUN	N	_	14	nmod	_	AlignBegin=57995|AlignEnd=58275|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Stem
14	tak	_	NOUN	N	Gender=Masc	18	nsubj	_	AlignBegin=58275|AlignEnd=58415|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
15	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Poss=Yes	14	nmod:poss	_	AlignBegin=58415|AlignEnd=58556|GE==[POSS].[1PL].[NOM]|RX==[PRO]|TokenType=Clit
16	hoːj	_	PRON	PRO	Case=Abl	18	iobj	_	AlignBegin=58556|AlignEnd=58837|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
17	am-	_	AUX	V1	VerbClass=1|Voice=Rcp	18	aux:aff	_	AlignBegin=58837|AlignEnd=58930|GE=[RECP]-|RX=[V1].[DER]-|TokenType=DerAff
18	mar~ri	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=58930|AlignEnd=59023|GE=find~[PLAC]find~PLAC|RX=[V1].[DER]|TokenType=Stem
19	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	18	nsubj:aff	_	AlignBegin=59023|AlignEnd=59117|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
20	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	22	det	_	AlignBegin=59117|AlignEnd=59398|GE=[PROX].[PL].[M].[ACC]|RX=[DEM]|TokenType=Stem
21	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	22	det	_	AlignBegin=59398|AlignEnd=59538|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
22	nda	_	NOUN	N	Gender=Masc|Number=Plur	18	dislocated	_	AlignBegin=59538|AlignEnd=59679|GE=man\[PL]|Gloss=man|RX=[N].[M]|TokenType=Stem
23	/	_	PUNCT	PUNCT	_	18	punct	_	AlignBegin=59679|AlignEnd=60529|TokenType=Break

~~~


