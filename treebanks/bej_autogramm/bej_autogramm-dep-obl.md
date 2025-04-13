---
layout: base
title:  'Statistics of obl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="bej_autogramm-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="bej_autogramm-dep-obl-mod.html">obl:mod</a></tt>.

2 nodes (0%) are attached to their parents as `obl`.

2 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl`: <tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 50% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 24 obl	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=36061|AlignEnd=36159|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
2	nabi	_	NOUN	N	Gender=Masc	3	dep:comp	_	AlignBegin=36159|AlignEnd=36257|Gloss=prophet|RX=[N].[M]|TokenType=Root
3	=i	_	ADP	CASE	Case=Gen	5	nmod	_	AlignBegin=36257|AlignEnd=36355|Gloss==GEN|RX==[CASE]|TokenType=Clit
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=36355|AlignEnd=36453|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	sala	_	NOUN	N	Gender=Fem	6	xcomp	_	AlignBegin=36453|AlignEnd=36845|Gloss=grilled_meat|RX=[N].[F]|TokenType=Root
6	akeːna	_	VERB	V1	Number=Plur|VerbClass=1	13	dep:conj	_	AlignBegin=36845|AlignEnd=37237|Gloss=become|MGloss=become-IMP.PL|MSeg=ak-eːna|RX=[V1].[IRG]-[TAM].[PNG]|TokenType=Root
7	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=37237|AlignEnd=37629|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=37629|AlignEnd=37706|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
9	nabi	_	NOUN	N	Gender=Masc	10	dep:comp	_	AlignBegin=37706|AlignEnd=37784|Gloss=prophet|RX=[N].[M]|TokenType=Root
10	=i	_	ADP	CASE	Case=Gen	12	nmod	_	AlignBegin=37784|AlignEnd=37861|Gloss==GEN|RX==[CASE]|TokenType=Clit
11	=t	_	DET	DET	Gender=Fem	10	det	_	AlignBegin=37861|AlignEnd=37939|Gloss==INDF.F|RX==[DET]|TokenType=Clit
12	sala	_	NOUN	N	Gender=Fem	13	xcomp	_	AlignBegin=37939|AlignEnd=38249|Gloss=grilled_meat|RX=[N].[F]|TokenType=Root
13	akeːna	_	VERB	V1	Number=Plur|VerbClass=1	14	ccomp	_	AlignBegin=38249|AlignEnd=38559|Gloss=become|MGloss=become-IMP.PL|MSeg=ak-eːna|Reported=Yes|RX=[V1].[IRG]-[TAM].[PNG]|TokenType=Root
14	tiːd	_	VERB	V1	Aspect=Aor|Gender=Fem|Number=Sing|VerbClass=1	15	dep:comp	_	AlignBegin=38559|AlignEnd=38765|Gloss=say\AOR|MGloss=3SG.F-say\AOR|MSeg=tiː-d|RX=[PNG]-[V1].[IRG]|TokenType=Root
15	=hoːb	_	SCONJ	CONJ	_	28	dep	_	AlignBegin=38765|AlignEnd=38869|Gloss==when|RX==[CONJ]|TokenType=Clit
16	/	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=38869|AlignEnd=39180|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
17	igeːsi	_	ADV	ADV	_	18	advmod	_	AlignBegin=39180|AlignEnd=39466|Gloss=immediately|RX=[ADV]|TokenType=Root
18	sala	_	NOUN	N	Gender=Fem	28	obj	_	AlignBegin=39466|AlignEnd=39609|Gloss=grilled_meat|RX=[SBJ].[N].[F]|TokenType=Root
19	=t	_	DET	DET	Gender=Fem	18	det	_	AlignBegin=39609|AlignEnd=39752|Gloss==INDF.F|RX==[DET]|TokenType=Clit
20	bass	_	PART	PTCL	Foreign=Yes	18	advmod	_	AlignBegin=39752|AlignEnd=40038|Gloss=only|Lang=ar|RX=[PTCL].[BORR].[ARA]|TokenType=Root
21	//	_	PUNCT	PUNCT	_	27	punct	_	AlignBegin=40038|AlignEnd=40324|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
22	ʔeːɖa	_	NOUN	N	Gender=Masc	24	dep:comp	_	AlignBegin=40324|AlignEnd=40422|Gloss=smoke|RX=[N].[M]|TokenType=Root
23	=t	_	DET	_	Degree=Dim|Gender=Fem	22	det	_	AlignBegin=40422|AlignEnd=40520|Gloss==INDF.F|RX==[DIM]|TokenType=Clit
24	=i	_	ADP	CASE	Case=Gen	26	obl	_	AlignBegin=40520|AlignEnd=40618|Gloss==GEN|RX==[CASE]|TokenType=Clit
25	=t	_	DET	DET	Gender=Fem	24	det	_	AlignBegin=40618|AlignEnd=40716|Gloss==INDF.F|RX==[DET]|TokenType=Clit
26	hallaːn	_	ADV	ADV	_	27	dep:comp	_	AlignBegin=40716|AlignEnd=40912|Gloss=now|RX=[ADV]|TokenType=Root
27	=eːt	_	SCONJ	_	Gender=Fem	18	acl:relcl	_	AlignBegin=40912|AlignEnd=41108|Gloss==REL.F|RX==CONJ|TokenType=Clit
28	timiːfirʔa	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=41108|AlignEnd=41500|Gloss=take_out|MGloss=3SG.F-PASS.INT.AOR-take_out|MSeg=ti-miː-firʔa|RX=[PNG]-[V1].[DER]-[V1]|TokenType=Root
29	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	28	discourse	_	AlignBegin=41500|AlignEnd=41892|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
30	//	_	PUNCT	PUNCT	_	28	punct	_	AlignBegin=41892|AlignEnd=42782|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obl	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=181900|AlignEnd=181974|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
2	kna	_	PRON	PRO	Reflex=Yes	10	nsubj	_	AlignBegin=181974|AlignEnd=182048|Gloss=owner|RX=[SBJ].[PRO].[REFL]|TokenType=Root
3	=juːk	_	PRON	PRO	Case=Nom|Number=Sing|Person=2|Poss=Yes	2	nmod:poss	_	AlignBegin=182048|AlignEnd=182122|Gloss==POSS.2SG.NOM|RX==[PRO]|TokenType=Clit
4	a#	_	X	FS	_	7	nmod	_	AlignBegin=182122|AlignEnd=182344|Gloss=FS|RX=[FS]|TokenType=Root
5	##	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=182344|AlignEnd=182960|Gloss=PUNCT|RX=[PUNCT]|TokenType=Root
6	aja	_	VERB	V1	VerbClass=1	4	reparandum	_	AlignBegin=182960|AlignEnd=183253|Gloss=die|MGloss=die-CVB.MNR|MSeg=aj-a|RX=[V1].[IRG]-.|TokenType=Root
7	ʤhar	_	NOUN	N	Gender=Masc	8	dep:comp	_	AlignBegin=183253|AlignEnd=183311|Gloss=chance|RX=[N].[M]|TokenType=Root
8	=i	_	ADP	CASE	Case=Gen	10	obl	_	AlignBegin=183311|AlignEnd=183370|Gloss==GEN|RX==[CASE]|TokenType=InflAff
9	=b	_	DET	DET	Case=Acc|Gender=Masc	8	det	_	AlignBegin=183370|AlignEnd=183428|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
10	=wa	_	AUX	N.COP	Gender=Masc|Number=Sing|Person=2|VerbType=Cop	0	root	_	AlignBegin=183428|AlignEnd=183487|Gloss==COP.2SG.M|RX==[PRED].[N]|TokenType=Clit
11	=jaːj	_	PART	PTCL	_	10	discourse	_	AlignBegin=183487|AlignEnd=183546|Gloss==thus|RX==[PTCL]|TokenType=Clit
12	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=183546|AlignEnd=183840|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


