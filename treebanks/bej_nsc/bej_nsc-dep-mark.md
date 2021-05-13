---
layout: base
title:  'Statistics of mark in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `mark`

This relation is universal.
There are 1 language-specific subtypes of `mark`: <tt><a href="bej_nsc-dep-mark-aff.html">mark:aff</a></tt>.

50 nodes (5%) are attached to their parents as `mark`.

49 instances of `mark` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06.

The following 3 pairs of parts of speech are connected with `mark`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (47; 94% instances), <tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (2; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 mark	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 mark	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mark	color:blue
1	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	2	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 124427, 124599|TokenType=Aff
2	ki	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	9	advcl	_	GE= PFV|Gloss= become|RX= V1,IRG|Times= 124599, 124771|TokenType=Stem
3	sar	_	VERB	V1	VerbClass=1|Voice=Mid	2	csubj	_	GE= MID|Gloss= be_awake|RX= V1,DER|Times= 124771, 124885|TokenType=Stem
4	-oːj	_	SCONJ	N	_	3	mark:aff	_	GE= -N,AC|RX= -N,V|Times= 124885, 125000|TokenType=Aff
5	=ka	_	ADP	POSTP	Case=Dis	3	mark	_	GE= =DISTR|RX= =POSTP|Times= 125000, 125115|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 125115, 126003
7	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	8	det	_	GE= DEF,SG,M=|RX= DET=|Times= 126003, 126233|TokenType=Clit
8	hanʤar	_	NOUN	N	Gender=Masc	9	obj	_	Gloss= dagger|RX= N,M|Times= 126233, 126464|TokenType=Stem
9	sallam	_	VERB	V2	VerbClass=2	0	root	_	Gloss= give|RX= V2|Times= 126464, 126695|TokenType=Stem
10	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	9	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 126695, 126926|TokenType=Aff
11	/	_	PUNCT	PUNCT	_	9	punct	_	GE= PUNCT|RX= PUNCT|Times= 126926, 128062

~~~


