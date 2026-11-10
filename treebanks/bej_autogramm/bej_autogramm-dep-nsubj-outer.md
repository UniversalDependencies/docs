---
layout: base
title:  'Statistics of nsubj:outer in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-nsubj.html">nsubj</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.8.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (3; 60% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:outer	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj:outer	_	Gloss=what|RX=[PRO].[Q]|TokenType=Root|WordAlignmentBegin=132837|WordAlignmentEnd=133174
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	Gloss=COM|RX=[POSTP]|TokenType=Root|WordAlignmentBegin=133174|WordAlignmentEnd=133511
3	jʔaːt	_	VERB	V2,IRG	Gender=Fem|VerbClass=2	0	root	_	Gloss=come.CVB.MNR|MGloss=come-CVB.MNR-INDF.F|MSeg=jʔ-aː-t|RX=[V2].[IRG]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=133511|WordAlignmentEnd=133679
4	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=133679|WordAlignmentEnd=133735
5	-t	_	PRON	DET	Definite=Ind|Gender=Fem	3	dep	_	Gloss=-INDF|MGloss=-INDF.F|MSeg=-t|RX=-[DET]|TokenType=InflAff|WordAlignmentBegin=133735|WordAlignmentEnd=133791|wordform==t
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=133791|WordAlignmentEnd=133848
7	?	_	PUNCT	PUNCT	_	3	punct	_	TokenType=Break|WordAlignmentBegin=133848|WordAlignmentEnd=134339

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 3 nsubj:outer	color:blue
1	tuːt	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=262748|WordAlignmentEnd=263080
2	tuː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=263080|WordAlignmentEnd=263246
3	na	_	NOUN	N	Gender=Fem	18	nsubj:outer	_	Gloss=thing|RX=[SBJ].[N].[F]|TokenType=Root|WordAlignmentBegin=263246|WordAlignmentEnd=263412
4	ti=	_	PRON	REL	Definite=Def|Gender=Fem|PronType=Rel	5	obj	_	Gloss=DEF|RX=[REL]=|TokenType=Clit|WordAlignmentBegin=263412|WordAlignmentEnd=263495
5	tifirʔa	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	3	acl:relcl	_	Gloss=take_out|MGloss=2SG.M-take_out\PFV|MSeg=ti-firʔa|RelRole=Obj|RX=[PNG]-[V1]|TokenType=Root|WordAlignmentBegin=263495|WordAlignmentEnd=263661
6	=jeːt	_	SCONJ	CONJ.REL	Gender=Fem|PronType=Rel	5	mark	_	Gloss=REL|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=263661|WordAlignmentEnd=263744
7	/	_	PUNCT	PUNCT	_	3	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=263744|WordAlignmentEnd=264077
8	alif	_	NUM	NUM	_	11	obl:arg	_	Gloss=thousand|RX=[NUM]|TokenType=Root|WordAlignmentBegin=264077|WordAlignmentEnd=264257
9	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	8	case	_	Gloss=ABL|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=264257|WordAlignmentEnd=264437
10	ba=	_	PART	PTCL	Mood=Opt	11	advmod	_	Gloss=OPT|RX=[PTCL]=|TokenType=Clit|WordAlignmentBegin=264437|WordAlignmentEnd=264557
11	amraːj	_	VERB	V1	Mood=Opt|Number=Sing|VerbClass=1	12	acl:relcl	_	Gloss=find|MGloss=1SG-find\NEG.OPT|MSeg=a-mraːj|RelRole=Obj|RX=[PNG]-[V1].[DER]|TokenType=Root|WordAlignmentBegin=264557|WordAlignmentEnd=264798
12	na	_	NOUN	N	Gender=Fem	18	nsubj	_	Gloss=thing|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=264798|WordAlignmentEnd=265159
13	/	_	PUNCT	PUNCT	_	12	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=265159|WordAlignmentEnd=265707
14	ti=	_	DET	DET	Definite=Def|Gender=Fem	15	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=265707|WordAlignmentEnd=265827
15	dijja	_	NOUN	N	Gender=Fem	18	obl:arg	_	Gloss=lower_world|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=265827|WordAlignmentEnd=265947
16	=t	_	DET	DET	Gender=Fem	15	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=265947|WordAlignmentEnd=266067
17	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	15	case	_	Gloss=LOC|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=266067|WordAlignmentEnd=266187
18	tikati	_	VERB	V1	Aspect=Imp|Gender=Fem|Number=Sing|VerbClass=1	25	advcl	_	Gloss=become|MGloss=3SG.F-become\IPFV|MSeg=ti-kati|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=266187|WordAlignmentEnd=266507
19	=jeːk	_	SCONJ	CONJ	_	18	mark	_	Gloss=if|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=266507|WordAlignmentEnd=266667
20	//	_	PUNCT	PUNCT	_	18	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=266667|WordAlignmentEnd=267757
21	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	Gloss=PROX|RX=[DEM]|TokenType=Root|WordAlignmentBegin=267757|WordAlignmentEnd=268026
22	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	25	nsubj	_	Gloss=1SG|RX=[SBJ].[PRO]|TokenType=Root|WordAlignmentBegin=268026|WordAlignmentEnd=268295
23	naː	_	NOUN	N	Gender=Fem	25	obj	_	Gloss=thing|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=268295|WordAlignmentEnd=268429
24	=t	_	DET	DET	Gender=Fem	23	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=268429|WordAlignmentEnd=268564
25	firʔaaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	Gloss=take_out.CVB.MNR|MGloss=take_out-CVB.MNR-INDF.M.ACC|MSeg=firʔa-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=268564|WordAlignmentEnd=268833
26	ka=	_	PART	PTCL	Aspect=Imp	25	advmod	_	Gloss=NEG|RX=[PTCL]=|TokenType=Clit|WordAlignmentBegin=268833|WordAlignmentEnd=268922
27	aki	_	AUX	AUX	Aspect=Perf|Number=Sing	25	aux	_	Gloss=become|MGloss=1SG-become\PFV|MSeg=a-ki|RX=[PNG]-[AUX].[NEG]|TokenType=Root|WordAlignmentBegin=268922|WordAlignmentEnd=269102
28	//	_	PUNCT	PUNCT	_	25	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=269102|WordAlignmentEnd=269989

~~~


