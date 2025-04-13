---
layout: base
title:  'Statistics of nsubj:outer in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-nsubj.html">nsubj</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (3; 60% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:outer	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj:outer	_	AlignBegin=132837|AlignEnd=133174|Gloss=what|RX=[PRO].[Q]|TokenType=Root
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|Gloss=COM|RX=[POSTP]|TokenType=Root
3	jʔaːt	_	VERB	V2,IRG	Gender=Fem|VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133679|Gloss=come|MGloss=come-CVB.MNR-INDF.F|MSeg=jʔ-aː-t|RX=[V2].[IRG]-[PRF]-[DET]|TokenType=Root
4	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|Gloss==POSS.2SG.ACC|RX==[PRO]|TokenType=Clit
5	-t	_	PRON	DET	Definite=Ind|Gender=Fem	3	dep	_	AlignBegin=133735|AlignEnd=133791|Gloss=-INDF.F|MGloss=-INDF.F|MSeg=-t|RX=-[DET]|TokenType=InflAff|wordform==t
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
7	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 3 nsubj:outer	color:blue
1	tuːt	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	AlignBegin=262748|AlignEnd=263080|Gloss=PROX.SG.F.NOM|RX=[DEM]|TokenType=Root
2	tuː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	det	_	AlignBegin=263080|AlignEnd=263246|Gloss=DEF.SG.F.NOM=|RX=[DET]=|TokenType=Clit
3	na	_	NOUN	N	Gender=Fem	18	nsubj:outer	_	AlignBegin=263246|AlignEnd=263412|Gloss=thing|RX=[SBJ].[N].[F]|TokenType=Root
4	ti=	_	PRON	REL	Definite=Def|Gender=Fem|PronType=Rel	5	obj	_	AlignBegin=263412|AlignEnd=263495|Gloss=DEF.F=|RX=[REL]=|TokenType=Clit
5	tifirʔa	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	6	dep:comp	_	AlignBegin=263495|AlignEnd=263661|Gloss=take_out\PFV|MGloss=2SG.M-take_out\PFV|MSeg=ti-firʔa|RX=[PNG]-[V1]|TokenType=Root
6	=jeːt	_	SCONJ	CONJ.REL	Gender=Fem|PronType=Rel	3	acl:relcl	_	AlignBegin=263661|AlignEnd=263744|Gloss==REL.F|RX==[CONJ]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=263744|AlignEnd=264077|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
8	alif	_	NUM	NUM	_	9	dep:comp	_	AlignBegin=264077|AlignEnd=264257|Gloss=thousand|RX=[NUM]|TokenType=Root
9	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	11	obl:arg	_	AlignBegin=264257|AlignEnd=264437|Gloss==ABL.SG|RX==[POSTP]|TokenType=Clit
10	ba=	_	PART	PTCL	Mood=Opt	11	advmod	_	AlignBegin=264437|AlignEnd=264557|Gloss=OPT=|RX=[PTCL]=|TokenType=Clit
11	amraːj	_	VERB	V1	Mood=Opt|Number=Sing|VerbClass=1	12	acl:relcl	_	AlignBegin=264557|AlignEnd=264798|Gloss=find\NEG.OPT|MGloss=1SG-find\NEG.OPT|MSeg=a-mraːj|RX=[PNG]-[V1].[DER]|TokenType=Root
12	na	_	NOUN	N	Gender=Fem	18	nsubj	_	AlignBegin=264798|AlignEnd=265159|Gloss=thing|RX=[N].[F]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=265159|AlignEnd=265707|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
14	ti=	_	DET	DET	Definite=Def|Gender=Fem	15	det	_	AlignBegin=265707|AlignEnd=265827|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
15	dijja	_	NOUN	N	Gender=Fem	17	dep:comp	_	AlignBegin=265827|AlignEnd=265947|Gloss=lower_world|RX=[N].[F]|TokenType=Root
16	=t	_	DET	DET	Gender=Fem	15	det	_	AlignBegin=265947|AlignEnd=266067|Gloss==INDF.F|RX==[DET]|TokenType=Clit
17	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	18	obl:arg	_	AlignBegin=266067|AlignEnd=266187|Gloss==LOC.SG|RX==[POSTP]|TokenType=Clit
18	tikati	_	VERB	V1	Aspect=Imp|Gender=Fem|Number=Sing|VerbClass=1	19	dep:comp	_	AlignBegin=266187|AlignEnd=266507|Gloss=become\IPFV|MGloss=3SG.F-become\IPFV|MSeg=ti-kati|RX=[PNG]-[V1].[IRG]|TokenType=Root
19	=jeːk	_	SCONJ	CONJ	_	25	dep	_	AlignBegin=266507|AlignEnd=266667|Gloss==if|RX==[CONJ]|TokenType=Clit
20	//	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=266667|AlignEnd=267757|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
21	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	22	det	_	AlignBegin=267757|AlignEnd=268026|Gloss=PROX.SG.M.NOM|RX=[DEM]|TokenType=Root
22	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	25	nsubj	_	AlignBegin=268026|AlignEnd=268295|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
23	naː	_	NOUN	N	Gender=Fem	25	obj	_	AlignBegin=268295|AlignEnd=268429|Gloss=thing|RX=[N].[F]|TokenType=Root
24	=t	_	DET	DET	Gender=Fem	23	det	_	AlignBegin=268429|AlignEnd=268564|Gloss==INDF.F|RX==[DET]|TokenType=Clit
25	firʔaaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	AlignBegin=268564|AlignEnd=268833|Gloss=take_out|MGloss=take_out-CVB.MNR-INDF.M.ACC|MSeg=firʔa-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root
26	ka=	_	PART	PTCL	Aspect=Imp	25	advmod	_	AlignBegin=268833|AlignEnd=268922|Gloss=NEG.IPFV=|RX=[PTCL]=|TokenType=Clit
27	aki	_	AUX	AUX	Aspect=Perf|Number=Sing	25	aux	_	AlignBegin=268922|AlignEnd=269102|Gloss=become\PFV|MGloss=1SG-become\PFV|MSeg=a-ki|RX=[PNG]-[AUX].[NEG]|TokenType=Root
28	//	_	PUNCT	PUNCT	_	25	punct	_	AlignBegin=269102|AlignEnd=269989|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


