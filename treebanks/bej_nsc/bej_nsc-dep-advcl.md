---
layout: base
title:  'Statistics of advcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `advcl`

This relation is universal.

30 nodes (3%) are attached to their parents as `advcl`.

27 instances of `advcl` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.4.

The following 2 pairs of parts of speech are connected with `advcl`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (27; 90% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (3; 10% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 11 advcl	color:blue
1	ontʔa	_	PART	PTCL	_	4	discourse	_	Gloss= now|RX= PTCL|Times= 35009, 35339|TokenType=Stem
2	//	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 35339, 35670
3	bak	_	ADV	DEICT	_	4	advmod	_	Gloss= thus|RX= DEICT,MNR|Times= 35670, 35939|TokenType=Stem
4	ʔabk	_	VERB	V1	VerbClass=1	11	parataxis	_	Gloss= take|ReportedSpeech=Yes|RX= V1|Times= 35939, 36028|TokenType=Stem
5	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	4	nsubj:aff	_	GE= -IMP,SG,F|RX= -TAM,PNG|Times= 36028, 36118|TokenType=Aff
6	-n	_	AUX	SUFX	_	4	aux:aff	_	GE= -EMPH|RX= -SUFX|Times= 36118, 36208|TokenType=Aff
7	/	_	PUNCT	PUNCT	_	4	punct	_	GE= PUNCT|RX= PUNCT|Times= 36208, 36736
8	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	9	det	_	GE= DEF,SG,M=|RX= DET=|Times= 36736, 36853|TokenType=Clit
9	hi	_	NOUN	N	_	4	obj	_	Gloss= lamb|RX= N|Times= 36853, 36971|TokenType=Stem
10	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	11	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 36971, 37030|TokenType=Aff
11	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	18	advcl	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 37030, 37089|TokenType=Stem
12	=oː	_	PRON	PRO	Number=Sing|Person=1	11	obj	_	GE= =OBJ,1SG|RX= =PRO|Times= 37089, 37148|TokenType=Clit
13	=hoːb	_	SCONJ	CONJ	_	11	mark	_	Gloss= =when|RX= =CONJ|Times= 37148, 37207|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	11	punct	_	GE= PUNCT|RX= PUNCT|Times= 37207, 37443
15	ajwa	_	PART	PTCL	_	18	parataxis	_	Gloss= yes|ReportedSpeech=Yes|RX= PTCL|Times= 37443, 37774|TokenType=Stem
16	/	_	PUNCT	PUNCT	_	15	punct	_	GE= PUNCT|RX= PUNCT|Times= 37774, 38105
17	a-	_	PRON	PNG	Number=Sing|Person=1	18	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 38105, 38239|TokenType=Aff
18	di	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 38239, 38373|TokenType=Stem
19	=t	_	CCONJ	CCONJ	_	18	cc	_	GE= =COORD|RX= CCONJ|Times= 38373, 38507|TokenType=Clit

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advcl	color:blue
1	hamil	_	VERB	V2	VerbClass=2	5	dep:comp	_	Gloss= let|RX= V2|Times= 94772, 94898|TokenType=Stem
2	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	1	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 94898, 95025|TokenType=Aff
3	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 95025, 95152|TokenType=Clit
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 95152, 95279|TokenType=Aff
5	kati	_	VERB	AUX	Aspect=Imp	7	acl:relcl	_	GE= IPFV|Gloss= become|RX= AUX,PRF|Times= 95279, 95406|TokenType=Stem
6	=jeː	_	SCONJ	CONJ	_	5	mark	_	Gloss= =REL|RX= =CONJ|Times= 95406, 95533|TokenType=Clit
7	kaːm	_	NOUN	N	_	8	nsubj	_	Gloss= camel|RX= SBJ,N|Times= 95533, 95723|TokenType=Stem
8	=u	_	AUX	PRO	_	14	advcl	_	GE= =COP,3SG|RX= =PRED.NOM|Times= 95723, 95914|TokenType=Clit
9	=it	_	SCONJ	PRO	_	8	mark	_	GE= =CSL|RX= =CONJ|Times= 95723, 95914|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	GE= PUNCT|RX= PUNCT|Times= 95914, 96295
11	haraw	_	VERB	V1	VerbClass=1	14	dep:comp	_	Gloss= seek|RX= V1|Times= 96295, 96441|TokenType=Stem
12	-aː	_	SCONJ	CVB	VerbForm=Conv	11	mark:aff	_	GE= -CVB,MNR|Times= 96441, 96587|TokenType=Aff
13	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 96587, 96733|TokenType=Clit
14	haraw	_	VERB	V1	VerbClass=1	0	root	_	Gloss= seek|RX= V1|Times= 96733, 96842|TokenType=Stem
15	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	14	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 96842, 96952|TokenType=Aff
16	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	14	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 96952, 97061|TokenType=Clit
17	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	14	aux	_	GE= =COP,3SG|RX= =PRED,N|Times= 97061, 97171|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	14	punct	_	GE= PUNCT|RX= PUNCT|Times= 97171, 97609

~~~


