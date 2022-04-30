---
layout: base
title:  'Statistics of obl:mod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `obl:mod`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_nsc-dep-obl-arg.html">obl:arg</a></tt>.

9 nodes (1%) are attached to their parents as `obl:mod`.

9 instances of `obl:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 2 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (7; 78% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	da	_	NOUN	N	Gender=Masc|Number=Plur	5	nsubj	_	AlignBegin=52560|AlignEnd=52754|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=52754|AlignEnd=53717|TokenType=Break
3	bʔeː	_	NOUN	N	Gender=Masc	5	obl:mod	_	AlignBegin=53717|AlignEnd=53884|GE=day|Gloss=day|RX=[N].[M]|TokenType=Stem
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=53884|AlignEnd=54051|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	eːjaː	_	VERB	V2,IRG	Aspect=Pfv|VerbClass=2	9	parataxis	_	AlignBegin=54051|AlignEnd=54162|GE=come\[PFV]|Gloss=come|ReportedSpeech=Yes|RX=[V2].[IRG]|TokenType=Stem
6	-n	_	PRON	PNG	Number=Plur|Person=3	5	nsubj:aff	_	AlignBegin=54162|AlignEnd=54273|GE=-[3PL]|RX=-[PNG]|TokenType=InflAff
7	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	AlignBegin=54273|AlignEnd=54385|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
8	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=54385|AlignEnd=54552|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
9	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	AlignBegin=54552|AlignEnd=54719|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=54719|AlignEnd=55636|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl:mod	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	3	nsubj:aff	_	AlignBegin=85022|AlignEnd=85127|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
2	s-	_	AUX	V1	VerbClass=1|Voice=Cau	3	aux:aff	_	AlignBegin=85127|AlignEnd=85233|GE=[CAUS]-|RX=[V1].[DER]-|TokenType=DerAff
3	ganif	_	VERB	V1	Aspect=Pfv|VerbClass=1	32	parataxis	_	AlignBegin=85233|AlignEnd=85339|GE=kneel\[PFV]|Gloss=kneel|ReportedSpeech=Yes|RX=[V1]|TokenType=Stem
4	daːji	_	ADJ	ADJ	_	7	obl:mod	_	AlignBegin=85339|AlignEnd=85497|GE=good|Gloss=good|RX=[ADJ]|TokenType=Stem
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	4	det	_	AlignBegin=85497|AlignEnd=85656|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
6	si-	_	AUX	V1	VerbClass=1|Voice=Cau	7	aux:aff	_	AlignBegin=85656|AlignEnd=85761|GE=[CAUS]-|RX=[V1].[DER]-|TokenType=DerAff
7	ganf	_	VERB	V1	VerbClass=1	3	ccomp	_	AlignBegin=85761|AlignEnd=85867|GE=make_kneel|Gloss=make_kneel|RX=[V1]|TokenType=Stem
8	-oːj	_	SCONJ	N	_	7	mark:aff	_	AlignBegin=85867|AlignEnd=85973|GE=-[N].[AC]|RX=-[N].[V]|TokenType=DerAff
9	aːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	10	det	_	AlignBegin=85973|AlignEnd=86290|GE=[PROX].[PL].[M].[NOM]|RX=[DEM]|TokenType=Stem
10	hinin	_	PRON	PRO	Case=Nom|Number=Plur|Person=1	13	nsubj	_	AlignBegin=86290|AlignEnd=86607|GE=[1PL].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
11	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=86607|AlignEnd=86925|TokenType=Break
12	barijoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	13	dep:comp	_	AlignBegin=86925|AlignEnd=87328|GE=[POSS].[2SG].[ACC]|RX=[PRO]|TokenType=Stem
13	ribi	_	VERB	V1	VerbClass=1	28	parataxis	_	AlignBegin=87328|AlignEnd=87428|GE=load|Gloss=load|RX=[V1]|TokenType=Stem
14	-jaː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	13	mark:aff	_	AlignBegin=87428|AlignEnd=87529|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
15	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	13	det	_	AlignBegin=87529|AlignEnd=87630|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
16	=a	_	AUX	N,COP	Number=Plur|Person=1|VerbType=Cop	13	aux	_	AlignBegin=87630|AlignEnd=87731|GE==[COP].[1PL]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=87731|AlignEnd=88965|TokenType=Break
18	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	19	det	_	AlignBegin=88965|AlignEnd=89181|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
19	kaːm	_	NOUN	N	_	21	obj	_	AlignBegin=89181|AlignEnd=89398|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
20	ni-	_	PRON	PNG	Number=Plur|Person=1	21	nsubj:aff	_	AlignBegin=89398|AlignEnd=89542|GE=[1PL]-|RX=[PNG]-|TokenType=InflAff
21	ʃabb	_	VERB	V1	Aspect=Pfv|VerbClass=1	23	ccomp	_	AlignBegin=89542|AlignEnd=89687|GE=look\[INT].[PFV]|Gloss=look|RX=[V1].[DER]|TokenType=Stem
22	=eːt	_	SCONJ	CONJ	Gender=Fem	21	mark	_	AlignBegin=89687|AlignEnd=89832|GE==[REL].[F]|RX==[CONJ]|TokenType=Clit
23	areː	_	VERB	V2	VerbClass=2	13	advcl	_	AlignBegin=89832|AlignEnd=89976|GE=like|Gloss=like|RX=[V2]|TokenType=Stem
24	-na	_	PRON	TAM,PNG	Aspect=Pfv|Number=Plur|Person=1	23	nsubj:aff	_	AlignBegin=89976|AlignEnd=90120|GE=-[PFV].[1PL]|RX=-[TAM].[PNG]|TokenType=InflAff
25	=aj	_	SCONJ	CONJ	_	23	mark	_	AlignBegin=90120|AlignEnd=90265|GE==[CSL]|RX==[CONJ]|TokenType=Clit
26	/	_	PUNCT	PUNCT	_	23	punct	_	AlignBegin=90265|AlignEnd=90942|TokenType=Break
27	i-	_	PRON	PNG	_	28	nsubj:aff	_	AlignBegin=90942|AlignEnd=91026|GE=[3]-|RX=[PNG]-|TokenType=InflAff
28	diː	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	32	parataxis	_	AlignBegin=91026|AlignEnd=91110|GE=say\[PFV]|Gloss=say|ReportedSpeech=Yes|RX=[V1].[IRG]|TokenType=Stem
29	-n	_	PRON	PNG	Number=Plur	28	nsubj:aff	_	AlignBegin=91110|AlignEnd=91194|GE=-[PL]|RX=-[PNG]|TokenType=InflAff
30	=heːb	_	PRON	PRO	Number=Sing|Person=1	28	obj	_	AlignBegin=91194|AlignEnd=91279|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
31	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	32	nsubj:aff	_	AlignBegin=91279|AlignEnd=91447|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
32	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	AlignBegin=91447|AlignEnd=91616|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
33	//	_	PUNCT	PUNCT	_	32	punct	_	AlignBegin=91616|AlignEnd=92425|TokenType=Break

~~~


