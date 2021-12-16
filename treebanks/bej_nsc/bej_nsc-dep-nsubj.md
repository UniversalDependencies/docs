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
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	AlignBegin=2092|AlignEnd=2231|GE=disappear|Gloss=disappear|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=2231|AlignEnd=2370|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	AlignBegin=2370|AlignEnd=2509|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=2509|AlignEnd=2648|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	AlignBegin=132837|AlignEnd=133174|GE=what|Gloss=what|RX=[PRO].[Q]|TokenType=Stem
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|GE=[COM]|RX=[POSTP]|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133567|GE=come|Gloss=come|RX=[V2].[IRG]|TokenType=Stem
4	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	3	mark:aff	_	AlignBegin=133567|AlignEnd=133623|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
5	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133623|AlignEnd=133679|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
6	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|GE==[POSS].[2SG].[ACC]|RX==[PRO]|TokenType=Clit
7	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	dep	_	AlignBegin=133735|AlignEnd=133791|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
8	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
9	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
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


