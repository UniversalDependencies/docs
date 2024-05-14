---
layout: base
title:  'Statistics of nsubj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nsubj`

This relation is universal.

233 nodes (4%) are attached to their parents as `nsubj`.

231 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.07296137339056.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (179; 77% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (32; 14% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=2092|AlignEnd=2370|GE=disappear-[PFV].[3SG].[M]|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	naːn	_	PRON	PRO	_	3	nsubj	_	AlignBegin=132837|AlignEnd=133174|GE=what|Gloss=what|RX=[PRO].[Q]|TokenType=Root
2	haːj	_	ADP	POSTP	Case=Com	3	dep	_	AlignBegin=133174|AlignEnd=133511|GE=[COM]|RX=[POSTP]|TokenType=Root
3	jʔaː	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=133511|AlignEnd=133623|GE=come-[CVB].[MNR]|Gloss=come|MGloss=come-CVB.MNR|MSeg=jʔ-aː|RX=[V2].[IRG]-[PRF]|TokenType=Root
4	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133623|AlignEnd=133679|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
5	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	3	obj	_	AlignBegin=133679|AlignEnd=133735|GE==[POSS].[2SG].[ACC]|RX==[PRO]|TokenType=Clit
6	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=133735|AlignEnd=133791|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=133791|AlignEnd=133848|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
8	?	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=133848|AlignEnd=134339|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj	color:blue
1	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	3	dep:conj	_	AlignBegin=17218|AlignEnd=17413|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Root
2	=wa	_	CCONJ	CONJ	_	1	cc	_	AlignBegin=17413|AlignEnd=17608|GE=[COORD]|RX=[CONJ]|TokenType=Clit
3	ahamad	_	PROPN	N	_	8	nsubj	_	AlignBegin=17608|AlignEnd=17803|GE=[Ahmed]|RX=[SBJ].[N].[PROP]|TokenType=Root
4	=wa	_	CCONJ	CONJ	_	3	cc	_	AlignBegin=17803|AlignEnd=17998|GE=[COORD]|RX=[CONJ]|TokenType=Clit
5	/	_	PUNCT	_	_	3	punct	_	AlignBegin=17998|AlignEnd=18387|GE=[/]|TokenType=Break
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	det	_	AlignBegin=18493|AlignEnd=18649|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
7	mhiːn	_	NOUN	N	Gender=Masc	8	obj	_	AlignBegin=18649|AlignEnd=18805|GE=place|RX=[N].[M]|TokenType=Root
8	neːmhi	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	AlignBegin=18805|AlignEnd=19117|GE=[1PL]be_in_morning\IPFV|MGloss=[1PL]be_in_morning\IPFV|MSeg=neː-mhi|RX=[PNG][V1]|TokenType=Root
9	//	_	PUNCT	_	_	8	punct	_	AlignBegin=19117|AlignEnd=19428|GE=[//]|TokenType=Break

~~~


