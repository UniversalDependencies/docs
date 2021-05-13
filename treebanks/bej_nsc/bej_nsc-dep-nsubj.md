---
layout: base
title:  'Statistics of nsubj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="bej_nsc-dep-nsubj-aff.html">nsubj:aff</a></tt>.

38 nodes (3%) are attached to their parents as `nsubj`.

37 instances of `nsubj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5.

The following 4 pairs of parts of speech are connected with `nsubj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (30; 79% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (5; 13% instances), <tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj	color:blue
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	Gloss= man|RX= SBJ,N,M|Times= 0, 190|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX=PUNCT|Times= 190, 879
3	kaːm	_	NOUN	N	_	7	nsubj	_	Gloss= camel|RX= SBJ,N|Times= 879, 982|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	GE= =POSS,1SG,NOM|RX= =PRO|Times= 982, 1085|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX=PUNCT|Times= 1085, 1815
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	GE= 1SG,DAT|RX=PRO|Times= 1815, 2092|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	GE= V2|Gloss= disappear|ReportedSpeech=Yes|Times= 2092, 2231|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	GE= -PFV,3SG,M|RX= -TAM,PNG|Times= 2231, 2370|TokenType=Aff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 2370, 2509|TokenType=Aff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX=V1,IRG|Times= 2509, 2648|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	GE= PUNCT|RX=PUNCT|Times= 2648, 2926

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	Gloss= what|RX= PRO,Q|Times= 132837, 133174|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	GE= COM|RX= POSTP|Times= 133174, 133511|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	Gloss= come|RX= V2,IRG|Times= 133511, 133567|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 133567, 133623|TokenType=Aff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	GE= =INDF,F|RX= =DET|Times= 133623, 133679|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	GE= =POSS,2SG,ACC|RX= =PRO|Times= 133679, 133735|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	GE= =INDF,F|RX= =DET|Times= 133735, 133791|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	GE= =COP,3SG|RX= =PRED,N|Times= 133791, 133848|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 133848, 134339

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
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


