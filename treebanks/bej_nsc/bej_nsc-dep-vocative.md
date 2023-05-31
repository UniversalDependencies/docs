---
layout: base
title:  'Statistics of vocative in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `vocative`

This relation is universal.

2 nodes (0%) are attached to their parents as `vocative`.

2 instances of `vocative` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 13 vocative	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=19067|AlignEnd=19150|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
2	ʔoːr	_	NOUN	N	_	7	nsubj	_	AlignBegin=19150|AlignEnd=19233|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Stem
3	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=19233|AlignEnd=19988|TokenType=Break
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=19988|AlignEnd=20204|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
5	meːk	_	NOUN	N	_	6	obj	_	AlignBegin=20204|AlignEnd=20420|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
6	tifidin	_	VERB	V1	Aspect=Pfv|Gender=Fem|Number=Sing|VerbClass=1	7	compound:svc	_	AlignBegin=20420|AlignEnd=20852|GE=[3SG].[F]-move_away\[PFV]|Gloss=move_away|MGloss=3SG.F-move_away\PFV|MSeg=ti-fidin|RX=[PNG]-[V1]|TokenType=Stem
7	galeːltan	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	22	parataxis	_	AlignBegin=20852|AlignEnd=21140|GE=drive_cattle-[PFV].[3SG].[F]|Gloss=drive_cattle|MGloss=drive_cattle-PFV.3SG.F|MSeg=galeːl-tan|RX=[V2]-[TAM].[PNG]|TokenType=Stem
8	=hoːb	_	SCONJ	CONJ	_	7	mark	_	AlignBegin=21140|AlignEnd=21284|GE==when|Gloss==when|ReportedSpeech=Yes|RX==[CONJ]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=21284|AlignEnd=22302|TokenType=Break
10	doːr	_	NOUN	N	Gender=Masc	19	advmod	_	AlignBegin=22302|AlignEnd=22492|ExtPos=ADV|GE=time|Gloss=time|Idiom=Yes|RX=[N].[M]|TokenType=Stem
11	han	_	ADV	ADV	_	10	fixed	_	AlignBegin=22492|AlignEnd=22683|GE=[Q].[PLR]|InIdiom=Yes|RX=[ADV].[Q]|TokenType=Stem
12	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=22683|AlignEnd=22874|TokenType=Break
13	hoːb-ej	_	NOUN	N	Gender=Masc	19	vocative	_	AlignBegin=22874|AlignEnd=23251|GE=grand-father-[VOC]|Gloss=grand-father|MGloss=grand-father-VOC|MSeg=hoːb-ej|RX=[N].[M]-[CASE]|TokenType=Stem
14	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Polite=Form|Poss=Yes	13	nmod:poss	_	AlignBegin=22999|AlignEnd=23125|GE==[POSS].[1PL].[NOM]|RX==[PRO].[POL]|TokenType=Clit
15	iraːnaj	_	INTJ	_	_	19	discourse	_	AlignBegin=23251|AlignEnd=23628|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
16	/	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=23628|AlignEnd=24200|TokenType=Break
17	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	18	det	_	AlignBegin=24200|AlignEnd=24358|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
18	meːk	_	NOUN	N	_	19	obj	_	AlignBegin=24358|AlignEnd=24517|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
19	ʔama	_	NOUN	V1	_	22	parataxis	_	AlignBegin=24517|AlignEnd=24675|GE=ride\[MID]-[CVB].[MNR]|Gloss=ride|MGloss=ride\MID-CVB.MNR|MSeg=ʔam-a|RX=[V1].[DER]-[PRF]|TokenType=Stem
20	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	19	det	_	AlignBegin=24675|AlignEnd=24754|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
21	=wa	_	AUX	N,COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	19	cop	_	AlignBegin=24754|AlignEnd=24834|GE==[COP].[2SG].[M]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
22	tini	_	VERB	V1,IRG	Aspect=Pfv|Gender=Fem|Number=Sing|VerbClass=1	33	advcl	_	AlignBegin=24834|AlignEnd=25045|GE=[3SG].[F]-say\[PFV]|Gloss=say|MGloss=3SG.F-say\PFV|MSeg=ti-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
23	=hoːb	_	SCONJ	CONJ	_	22	mark	_	AlignBegin=25045|AlignEnd=25151|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
24	?	_	PUNCT	PUNCT	_	22	punct	_	AlignBegin=25151|AlignEnd=25469|RX=[?]
25	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	30	nsubj	_	AlignBegin=25469|AlignEnd=25766|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
26	i=	_	DET	DET	Definite=Def|Gender=Masc	27	det	_	AlignBegin=25766|AlignEnd=25865|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
27	meːki	_	NOUN	N	_	28	nmod	_	AlignBegin=25865|AlignEnd=26064|GE=donkey-[GEN]|Gloss=donkey|MGloss=donkey-GEN|MSeg=meːk-i|RX=[N]-[CASE]|TokenType=Stem
28	mʔam	_	NOUN	V1	_	30	obj	_	AlignBegin=26064|AlignEnd=26262|GE=[N].[AC]-ride\[MID]|Gloss=ride|MGloss=N.AC-ride\MID|MSeg=m-ʔam|RX=[N].[V]-[V1].[DER]|TokenType=Stem
29	=eː	_	SCONJ	CONJ	_	28	case	_	AlignBegin=26262|AlignEnd=26362|GE==[REL]|RX==[CONJ]|TokenType=Clit
30	sagi	_	ADJ	ADJ	_	33	parataxis	_	AlignBegin=26362|AlignEnd=26461|GE=far|Gloss=far|RX=[ADJ]|TokenType=Stem
31	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	30	det	_	AlignBegin=26461|AlignEnd=26560|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
32	=i	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	30	cop	_	AlignBegin=26560|AlignEnd=26660|GE==[COP].[1SG]|ReportedSpeech=Yes|RX==[PRED].[N]|TokenType=Clit
33	idi	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	34	discourse	_	AlignBegin=26660|AlignEnd=26958|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Stem
34	ini	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=26958|AlignEnd=27256|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
35	//	_	PUNCT	PUNCT	_	34	punct	_	AlignBegin=27256|AlignEnd=28614|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=13911|AlignEnd=13996|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
2	ʔoːrej	_	NOUN	N	_	5	vocative	_	AlignBegin=13996|AlignEnd=14167|GE=child-[VOC]|Gloss=child|MGloss=child-VOC|MSeg=ʔoːr-ej|RX=[N]-[CASE]|TokenType=Stem
3	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	det	_	AlignBegin=14167|AlignEnd=14295|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
4	meːk	_	NOUN	N	_	5	obj	_	AlignBegin=14295|AlignEnd=14424|GE=donkey|Gloss=donkey|RX=[N]|TokenType=Stem
5	fidini	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	7	compound:svc	_	AlignBegin=14424|AlignEnd=14681|GE=move_away-[IMP].[SG].[F]|Gloss=move_away|MGloss=move_away-IMP.SG.F|MSeg=fidin-i|RX=[V1]-[TAM].[PNG]|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=14681|AlignEnd=14938|TokenType=Break
7	galeːlin	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=14938|AlignEnd=15244|GE=drive_cattle-[IMP].[SG].[F]-[EMPH]|Gloss=drive_cattle|MGloss=drive_cattle-IMP.SG.F-EMPH|MSeg=galeːl-i-n|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]-[SUFX]|TokenType=Stem
8	idi	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=15244|AlignEnd=15551|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	ini	_	VERB	V1,IRG	Aspect=Pfv|Gender=Masc|Number=Sing|VerbClass=1	8	discourse	_	AlignBegin=15551|AlignEnd=15857|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=15857|AlignEnd=16164|TokenType=Break

~~~


