---
layout: base
title:  'Statistics of parataxis in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-coord.html">parataxis:coord</a></tt>, <tt><a href="bej_nsc-dep-parataxis-mod.html">parataxis:mod</a></tt>.

45 nodes (4%) are attached to their parents as `parataxis`.

44 instances of `parataxis` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.48888888888889.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (41; 91% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 parataxis	color:blue
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	AlignBegin=2092|AlignEnd=2231|GE=disappear|Gloss=disappear|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=2231|AlignEnd=2370|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	AlignBegin=2370|AlignEnd=2509|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=2509|AlignEnd=2648|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 6 parataxis	color:blue
1	ʃamat	_	VERB	V2	VerbClass=2	6	acl	_	AlignBegin=144041|AlignEnd=144120|GE=blame|Gloss=blame|RX=[V2]|TokenType=Stem
2	-ta	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Fem|Number=Sing|Person=3	1	nsubj:aff	_	AlignBegin=144120|AlignEnd=144200|GE=-[PFV].[3SG].[F]|RX=-[TAM].[PNG]|TokenType=InflAff
3	-n	_	X	-L	_	1	dep:aff	_	AlignBegin=144200|AlignEnd=144279|GE=-[L]|ProperName=-L|TokenType=InflAff
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	1	obj	_	AlignBegin=144279|AlignEnd=144359|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	=ji	_	SCONJ	CONJ	_	1	mark	_	AlignBegin=144359|AlignEnd=144439|GE==[REL]|RX==[CONJ]|TokenType=Clit
6	ʃamat	_	NOUN	N	Gender=Masc	13	parataxis	_	AlignBegin=144439|AlignEnd=144571|GE=blame|Gloss=blame|RX=[N].[M]|TokenType=Stem
7	-eː	_	PART	CASE	Case=Gen|Number=Plur	6	case:aff	_	AlignBegin=144571|AlignEnd=144704|GE=-[GEN].[PL]|RX=-[CASE]|TokenType=InflAff
8	=ka	_	ADP	POSTP	Case=Dis	6	case	_	AlignBegin=144704|AlignEnd=144837|GE==[DISTR]|RX==[POSTP]|TokenType=Clit
9	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	13	nsubj	_	AlignBegin=144837|AlignEnd=145236|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
10	i=	_	DET	DET	Definite=Def|Gender=Masc	11	det	_	AlignBegin=145236|AlignEnd=145368|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
11	mhiːn	_	NOUN	N	Gender=Masc	13	iobj	_	AlignBegin=145368|AlignEnd=145501|GE=place|Gloss=place|RX=[N].[M]|TokenType=Stem
12	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	AlignBegin=145501|AlignEnd=145634|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
13	naː	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=145634|AlignEnd=145833|GE=spend_the_night|Gloss=spend_the_night|RX=[V2]|TokenType=Stem
14	-jeː	_	SCONJ	CVB	VerbForm=Conv	13	mark:aff	_	AlignBegin=145833|AlignEnd=146033|GE=-[CVB].[SMLT]|TokenType=InflAff
15	mh	_	VERB	V2	VerbClass=2	13	advcl	_	AlignBegin=146033|AlignEnd=146232|GE=be_in_morning|Gloss=be_in_morning|RX=[V2]|TokenType=Stem
16	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	15	nsubj:aff	_	AlignBegin=146232|AlignEnd=146431|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
17	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=146431|AlignEnd=147206|TokenType=Break

~~~


~~~ conllu
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 37 parataxis	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=19067|AlignEnd=19150|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
2	ʔoːr	_	NOUN	N	_	8	nsubj	_	AlignBegin=19150|AlignEnd=19233|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Stem
3	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=19233|AlignEnd=19988|TokenType=Break
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=19988|AlignEnd=20204|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
5	meːk	_	NOUN	N	_	7	obj	_	AlignBegin=20204|AlignEnd=20420|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
6	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=20420|AlignEnd=20636|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
7	fidin	_	VERB	V1	Aspect=Pfv|VerbClass=1	8	compound:svc	_	AlignBegin=20636|AlignEnd=20852|GE=move_away\[PFV]|Gloss=move_away|RX=[V1]|TokenType=Stem
8	galeːl	_	VERB	V2	VerbClass=2	27	parataxis	_	AlignBegin=20852|AlignEnd=20996|GE=drive_cattle|Gloss=drive_cattle|RX=[V2]|TokenType=Stem
9	-tan	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Fem|Number=Sing|Person=3	8	nsubj:aff	_	AlignBegin=20996|AlignEnd=21140|GE=-[PFV].[3SG].[F]|RX=-[TAM].[PNG]|TokenType=InflAff
10	=hoːb	_	SCONJ	CONJ	_	8	mark	_	AlignBegin=21140|AlignEnd=21284|GE==when|Gloss==when|ReportedSpeech=Yes|RX==[CONJ]|TokenType=Clit
11	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=21284|AlignEnd=22302|TokenType=Break
12	doːr	_	NOUN	N	Gender=Masc	22	nmod	_	AlignBegin=22302|AlignEnd=22492|GE=time|Gloss=time|RX=[N].[M]|TokenType=Stem
13	han	_	ADV	ADV	_	22	advmod	_	AlignBegin=22492|AlignEnd=22683|GE=[Q].[PLR]|RX=[ADV].[Q]|TokenType=Stem
14	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=22683|AlignEnd=22874|TokenType=Break
15	hoːb	_	NOUN	N	Gender=Masc	22	vocative	_	AlignBegin=22874|AlignEnd=22999|GE=grand-father|Gloss=grand-father-father|RX=[N].[M]|TokenType=Stem
16	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Polite=Form|Poss=Yes	15	nmod:poss	_	AlignBegin=22999|AlignEnd=23125|GE==[POSS].[1PL].[NOM]|RX==[PRO].[POL]|TokenType=Clit
17	-ej	_	PART	CASE	Case=Voc	15	case:aff	_	AlignBegin=23125|AlignEnd=23251|GE=-[VOC]|RX=-[CASE]|TokenType=InflAff
18	iraːnaj	_	INTJ	_	_	22	discourse	_	AlignBegin=23251|AlignEnd=23628|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
19	/	_	PUNCT	PUNCT	_	18	punct	_	AlignBegin=23628|AlignEnd=24200|TokenType=Break
20	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	21	det	_	AlignBegin=24200|AlignEnd=24358|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
21	meːk	_	NOUN	N	_	22	obj	_	AlignBegin=24358|AlignEnd=24517|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
22	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	27	parataxis	_	AlignBegin=24517|AlignEnd=24596|GE=ride\[MID]|Gloss=ride|RX=[V1].[DER]|TokenType=Stem
23	-a	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	22	mark:aff	_	AlignBegin=24596|AlignEnd=24675|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=DerAff
24	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	22	det	_	AlignBegin=24675|AlignEnd=24754|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
25	=wa	_	AUX	N,COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	22	aux	_	AlignBegin=24754|AlignEnd=24834|GE==[COP].[2SG].[M]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
26	ti-	_	PRON	PNG	Gender=Fem|Number=Sing|Person=3	27	nsubj:aff	_	AlignBegin=24834|AlignEnd=24939|GE=[3SG].[F]-|RX=[PNG]-|TokenType=InflAff
27	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	41	advcl	_	AlignBegin=24939|AlignEnd=25045|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
28	=hoːb	_	SCONJ	CONJ	_	27	mark	_	AlignBegin=25045|AlignEnd=25151|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
29	?	_	PUNCT	PUNCT	_	27	punct	_	AlignBegin=25151|AlignEnd=25469|RX=[?]
30	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	37	nsubj	_	AlignBegin=25469|AlignEnd=25766|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
31	i=	_	DET	DET	Definite=Def|Gender=Masc	32	det	_	AlignBegin=25766|AlignEnd=25865|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
32	meːk	_	NOUN	N	_	35	obl:mod	_	AlignBegin=25865|AlignEnd=25964|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
33	-i	_	PART	CASE	Case=Gen	32	case:aff	_	AlignBegin=25964|AlignEnd=26064|GE=-[GEN]|RX=-[CASE]|TokenType=InflAff
34	m-	_	SCONJ	N	_	35	mark:aff	_	AlignBegin=26064|AlignEnd=26163|GE=[N].[AC]-|RX=[N].[V]-|TokenType=DerAff
35	ʔam	_	VERB	V1	VerbClass=1|Voice=Mid	37	ccomp	_	AlignBegin=26163|AlignEnd=26262|GE=ride\[MID]|Gloss=ride|RX=[V1].[DER]|TokenType=Stem
36	=eː	_	SCONJ	CONJ	_	35	mark	_	AlignBegin=26262|AlignEnd=26362|GE==[REL]|RX==[CONJ]|TokenType=Clit
37	sagi	_	ADJ	ADJ	_	41	parataxis	_	AlignBegin=26362|AlignEnd=26461|GE=far|Gloss=far|RX=[ADJ]|TokenType=Stem
38	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	37	det	_	AlignBegin=26461|AlignEnd=26560|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
39	=i	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	37	cop	_	AlignBegin=26560|AlignEnd=26660|GE==[COP].[1SG]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
40	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	41	nsubj:aff	_	AlignBegin=26660|AlignEnd=26809|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
41	di	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	43	discourse	_	AlignBegin=26809|AlignEnd=26958|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
42	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	43	nsubj:aff	_	AlignBegin=26958|AlignEnd=27107|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
43	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	AlignBegin=27107|AlignEnd=27256|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
44	//	_	PUNCT	PUNCT	_	43	punct	_	AlignBegin=27256|AlignEnd=28614|TokenType=Break

~~~


