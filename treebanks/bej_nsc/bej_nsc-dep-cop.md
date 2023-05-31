---
layout: base
title:  'Statistics of cop in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `cop`

This relation is universal.

18 nodes (2%) are attached to their parents as `cop`.

17 instances of `cop` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72222222222222.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (13; 72% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (4; 22% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 cop	color:blue
1	hoː	_	NOUN	N	_	4	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Stem
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːsoː	_	PRON	PRO	Case=Abl	4	dep:comp	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
4	ʃʔagaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31723|GE=carry_on_shoulder-[CVB].[MNR]|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR|MSeg=ʃʔag-aː|RX=[V1]-[PRF]|TokenType=Stem
5	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	4	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	4	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	4	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
9	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
10	ʔasalaː	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=33071|GE=grill-[CVB].[MNR]|Gloss=grill|MGloss=grill-CVB.MNR|MSeg=ʔasal-aː|RX=[V2]-[PRF]|TokenType=Stem
11	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
12	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	cop	_	AlignBegin=33206|AlignEnd=33474|GE=[3SG].[M]-become\[AOR]|Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Stem
13	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	10	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 cop	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=76156|AlignEnd=76440|GE=[DIST].[SG].[M].[NOM]|RX=[DEM]|TokenType=Stem
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	AlignBegin=76440|AlignEnd=76582|GE=[DEF].[PL].[M].[NOM]=|RX=[DET]=|TokenType=Clit
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	AlignBegin=76582|AlignEnd=76724|GE=man\[PL]|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
4	eːjaːn	_	VERB	V2,IRG	Aspect=Pfv|Number=Plur|VerbClass=2	13	acl	_	AlignBegin=76724|AlignEnd=76914|GE=come\[PFV]-[3PL]|Gloss=come|MGloss=come\PFV-3PL|MSeg=eːjaː-n|RX=[V2].[IRG]-[PNG]|TokenType=Stem
5	=eːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	4	mark	_	AlignBegin=76914|AlignEnd=77009|ExtPos=SCONJ|GE==[REL].[SG].[M]|Idiom=Yes|RX==[CONJ]|TokenType=Clit
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	fixed	_	AlignBegin=77009|AlignEnd=77151|GE=[DEF].[SG].[M].[ACC]=|InIdiom=Yes|RX=[DET]=|TokenType=Clit
7	doːr	_	NOUN	N	Gender=Masc	5	fixed	_	AlignBegin=77151|AlignEnd=77293|GE=time|Gloss=time|InIdiom=Yes|RX=[N].[M]|TokenType=Stem
8	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=77293|AlignEnd=78459|TokenType=Break
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=78459|AlignEnd=78599|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
10	kaːm	_	NOUN	N	_	13	obj	_	AlignBegin=78599|AlignEnd=78739|GE=camel|Gloss=camel|RX=[N]|TokenType=Stem
11	=i	_	PRON	PRO	Case=Acc|Number=Sing	10	nmod:poss	_	AlignBegin=78739|AlignEnd=78880|GE==[POSS1].[SG].[ACC]|RX==[PRO]|TokenType=Clit
12	jam	_	NOUN	N	Gender=Masc|Number=Plur	13	obj	_	AlignBegin=78880|AlignEnd=79301|GE=water|Gloss=water|RX=[N].[PL].[M]|TokenType=Stem
13	gʷʔasaː	_	NOUN	V2	_	0	root	_	AlignBegin=79301|AlignEnd=79553|GE=drink-[CAUS]-[CVB].[MNR]|Gloss=drink|MGloss=drink-CAUS-CVB.MNR|MSeg=gʷʔa-s-aː|RX=[V2]-[V2].[DER]-[PRF]|TokenType=Stem
14	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	13	det	_	AlignBegin=79553|AlignEnd=79637|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
15	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	13	cop	_	AlignBegin=79637|AlignEnd=79722|GE==[COP].[1SG]|RX==[PRED].[N]|TokenType=Clit
16	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=79722|AlignEnd=80500|TokenType=Break

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 32 cop	color:blue
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


