---
layout: base
title:  'Statistics of advcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `advcl`

This relation is universal.

31 nodes (3%) are attached to their parents as `advcl`.

28 instances of `advcl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.58064516129032.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (28; 90% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (3; 10% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 11 advcl	color:blue
1	ontʔa	_	PART	PTCL	_	4	discourse	_	AlignBegin=35009|AlignEnd=35339|GE=now|Gloss=now|RX=[PTCL]|TokenType=Stem
2	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=35339|AlignEnd=35670|TokenType=Break
3	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=35670|AlignEnd=35939|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
4	ʔabk	_	VERB	V1	VerbClass=1	11	parataxis	_	AlignBegin=35939|AlignEnd=36028|GE=take|Gloss=take|ReportedSpeech=Yes|RX=[V1]|TokenType=Stem
5	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	4	nsubj:aff	_	AlignBegin=36028|AlignEnd=36118|GE=-[IMP].[SG].[F]|RX=-[TAM].[PNG]|TokenType=InflAff
6	-n	_	AUX	SUFX	_	4	aux:aff	_	AlignBegin=36118|AlignEnd=36208|GE=-[EMPH]|RX=-[SUFX]|TokenType=InflAff
7	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=36208|AlignEnd=36736|TokenType=Break
8	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	9	det	_	AlignBegin=36736|AlignEnd=36853|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
9	hi	_	NOUN	N	_	4	obj	_	AlignBegin=36853|AlignEnd=36971|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Stem
10	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	11	nsubj:aff	_	AlignBegin=36971|AlignEnd=37030|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
11	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	18	advcl	_	AlignBegin=37030|AlignEnd=37089|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
12	=oː	_	PRON	PRO	Number=Sing|Person=1	11	obj	_	AlignBegin=37089|AlignEnd=37148|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
13	=hoːb	_	SCONJ	CONJ	_	11	mark	_	AlignBegin=37148|AlignEnd=37207|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=37207|AlignEnd=37443|GE=|TokenType=Break
15	ajwa	_	PART	PTCL	_	18	parataxis	_	AlignBegin=37443|AlignEnd=37774|GE=yes|Gloss=yes|ReportedSpeech=Yes|RX=[PTCL]|TokenType=Stem
16	/	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=37774|AlignEnd=38105|TokenType=Break
17	a-	_	PRON	PNG	Number=Sing|Person=1	18	nsubj:aff	_	AlignBegin=38105|AlignEnd=38239|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
18	di	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=38239|AlignEnd=38373|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
19	=t	_	CCONJ	CCONJ	_	18	cc	_	AlignBegin=38373|AlignEnd=38507|GE==[COORD]|RX==[CONJ]|TokenType=Clit

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advcl	color:blue
1	hamil	_	VERB	V2	VerbClass=2	5	dep:comp	_	AlignBegin=94772|AlignEnd=94898|GE=let|Gloss=let|RX=[V2]|TokenType=Stem
2	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	1	mark:aff	_	AlignBegin=94898|AlignEnd=95025|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
3	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=95025|AlignEnd=95152|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	AlignBegin=95152|AlignEnd=95279|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
5	kati	_	VERB	AUX	Aspect=Imp	7	acl:relcl	_	AlignBegin=95279|AlignEnd=95406|GE=become\[IPFV]|Gloss=become|RX=[AUX].[PRF]|TokenType=Stem
6	=jeː	_	SCONJ	CONJ	_	5	mark	_	AlignBegin=95406|AlignEnd=95533|GE==if|Gloss==ifREL|RX==[CONJ]|TokenType=Clit
7	kaːm	_	NOUN	N	_	8	nsubj	_	AlignBegin=95533|AlignEnd=95723|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
8	=u	_	AUX	PRO	_	14	advcl	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO].NOM|TokenType=Clit
9	=it	_	SCONJ	PRO	_	8	mark	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=95914|AlignEnd=96295|TokenType=Break
11	haraw	_	VERB	V1	VerbClass=1	14	dep:comp	_	AlignBegin=96295|AlignEnd=96441|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
12	-aː	_	SCONJ	CVB	VerbForm=Conv	11	mark:aff	_	AlignBegin=96441|AlignEnd=96587|GE=-[CVB].[MNR]|TokenType=InflAff
13	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=96587|AlignEnd=96733|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
14	haraw	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=96733|AlignEnd=96842|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
15	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	14	mark:aff	_	AlignBegin=96842|AlignEnd=96952|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
16	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	14	det	_	AlignBegin=96952|AlignEnd=97061|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
17	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	14	aux	_	AlignBegin=97061|AlignEnd=97171|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=97171|AlignEnd=97609|TokenType=Break

~~~


