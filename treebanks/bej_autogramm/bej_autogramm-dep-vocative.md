---
layout: base
title:  'Statistics of vocative in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `vocative`

This relation is universal.

28 nodes (0%) are attached to their parents as `vocative`.

27 instances of `vocative` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.78571428571429.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (10; 36% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (9; 32% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-INTJ.html">INTJ</a></tt> (2; 7% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 vocative	color:blue
1	duːr	_	NOUN	N	_	3	dep:conj	_	AlignBegin=58679|AlignEnd=58823|Gloss=uncle|RX=[N]|TokenType=Root
2	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Polite=Form|Poss=Yes	1	nmod:poss	_	AlignBegin=58823|AlignEnd=58968|Gloss==POSS.1PL.NOM|RX==[PRO].[POL]|TokenType=Clit
3	duːr	_	NOUN	N	_	5	vocative	_	AlignBegin=58968|AlignEnd=59112|Gloss=uncle|RX=[N]|TokenType=Root
4	=uːn	_	PRON	PRO	Case=Nom|Number=Plur|Person=1|Polite=Form|Poss=Yes	3	nmod:poss	_	AlignBegin=59112|AlignEnd=59257|Gloss==POSS.1PL.NOM|RX==[PRO].[POL]|TokenType=Clit
5	gada	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=59257|AlignEnd=59546|Gloss=stop|MGloss=stop-IMP.SG.M|MSeg=gad-a|RX=[V1].[IRG]-[TAM].[PNG]|TokenType=Root
6	/	_	PUNCT	_	_	5	punct	_	AlignBegin=59546|AlignEnd=59836|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 vocative	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=13911|AlignEnd=13996|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
2	ʔoːr	_	NOUN	N	_	3	dep:comp	_	AlignBegin=13996|AlignEnd=14081|Gloss=child|RX=[N]|TokenType=Root
3	=aj	_	ADP	CASE	Case=Voc	6	vocative	_	AlignBegin=14081|AlignEnd=14167|Gloss==VOC|RX==[CASE]|TokenType=Clit
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=14167|AlignEnd=14295|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
5	meːk	_	NOUN	N	_	6	obj	_	AlignBegin=14295|AlignEnd=14424|Gloss=donkey|RX=[N]|TokenType=Root
6	fidini	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	8	compound:svc	_	AlignBegin=14424|AlignEnd=14681|Gloss=move_away|MGloss=move_away-IMP.SG.F|MSeg=fidin-i|RX=[V1]-[TAM].[PNG]|TokenType=Root
7	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=14681|AlignEnd=14938|TokenType=Break
8	galeːlin	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	9	ccomp	_	AlignBegin=14938|AlignEnd=15244|Gloss=drive_cattle|MGloss=drive_cattle-IMP.SG.F-EMPH|MSeg=galeːl-i-n|Reported=Yes|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]-[SUFX]|TokenType=Root
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=15244|AlignEnd=15551|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	9	discourse	_	AlignBegin=15551|AlignEnd=15857|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=15857|AlignEnd=16164|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 vocative	color:blue
1	kʷiːkʷʔaːj	_	NOUN	N	Gender=Masc	7	vocative	_	AlignBegin=214473|AlignEnd=214746|Gloss=crow|RX=[SBJ].[N].[M]|TokenType=Root
2	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=214746|AlignEnd=214882|Gloss=DEF.SG.M=|RX=[DET]=|TokenType=Clit
3	hadal	_	ADJ	ADJ	_	1	nmod	_	AlignBegin=214882|AlignEnd=215019|Gloss=black|RX=[ADJ]|TokenType=Root
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=215019|AlignEnd=215555|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
5	ʔakra	_	VERB	V1	VerbClass=1	6	advcl	_	AlignBegin=215555|AlignEnd=215826|Gloss=be_strong|MGloss=be_strong-CVB.MNR|MSeg=ʔakr-a|RX=[V1]-.|TokenType=Root
6	aja	_	VERB	V1	VerbClass=1	7	acl	_	AlignBegin=215826|AlignEnd=216097|Gloss=die|MGloss=die-CVB.MNR|MSeg=aj-a|RX=[V1].[IRG]-.|TokenType=Root
7	dhar	_	NOUN	N	Gender=Masc	0	root	_	AlignBegin=216097|AlignEnd=216151|Gloss=chance|RX=[N].[M]|TokenType=Root
8	=i	_	ADP	CASE	Case=Gen	7	dep	_	AlignBegin=216151|AlignEnd=216205|Gloss==GEN|RX==[CASE]|TokenType=Clit
9	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	AlignBegin=216205|AlignEnd=216259|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
10	=wa	_	AUX	N.COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	7	cop	_	AlignBegin=216259|AlignEnd=216313|Gloss==COP.2SG.M|RX==[PRED].[N]|TokenType=Clit
11	=jaːj	_	PART	PTCL	_	7	discourse	_	AlignBegin=216313|AlignEnd=216368|Gloss==thus|RX==[PTCL]|TokenType=Clit
12	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=216368|AlignEnd=216858|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


