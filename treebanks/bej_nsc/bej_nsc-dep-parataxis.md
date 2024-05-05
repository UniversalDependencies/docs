---
layout: base
title:  'Statistics of parataxis in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="bej_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

136 nodes (2%) are attached to their parents as `parataxis`.

135 instances of `parataxis` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36029411764706.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (118; 87% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 parataxis	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 parataxis	color:blue
1	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	2	dep:comp	_	AlignBegin=217611|AlignEnd=217747|GE=[3SG].[M]say\IPFV|MGloss=[3SG].[M]say\IPFV|MSeg=i-ndi|RX=[PNG][V1].[IRG]|TokenType=Root
2	=hoːb	_	SCONJ	CONJ	_	10	dep	_	AlignBegin=217747|AlignEnd=217815|GE=when|RX=[CONJ]|TokenType=Clit
3	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=217815|AlignEnd=218018|GE=[//]|TokenType=Break
4	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=218018|AlignEnd=218231|GE=[PROX].[SG].[M].[NOM]|RX=[DEM]|TokenType=Root
5	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	AlignBegin=218231|AlignEnd=218444|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=218444|AlignEnd=218656|GE=[/]|TokenType=Break
7	ʤaːntaːji	_	NOUN	N	_	10	parataxis	_	AlignBegin=218917|AlignEnd=219008|GE=jinni|RX=[N]|TokenType=Root
8	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	AlignBegin=219008|AlignEnd=219099|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
9	=i	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	AlignBegin=219099|AlignEnd=219189|GE=[COP].[1SG]|RX=[PRED].[N]|TokenType=Clit
10	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=219189|AlignEnd=219461|GE=[3SG].[M]say\IPFV|MGloss=[3SG].[M]say\IPFV|MSeg=i-ndi|RX=[PNG][V1].[IRG]|TokenType=Root
11	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	10	discourse	_	AlignBegin=219461|AlignEnd=219733|GE=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=219733|AlignEnd=220007|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	daːjiː	_	ADJ	ADJ	_	4	parataxis	_	AlignBegin=71055|AlignEnd=71142|GE=good|RX=[ADJ]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=71142|AlignEnd=71229|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
3	=i	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	1	cop	_	AlignBegin=71229|AlignEnd=71317|GE=[COP].[3SG]|RX=[PRED].[N]|TokenType=Clit
4	diːtiːt	_	VERB	V1	VerbClass=1	10	advcl	_	AlignBegin=71317|AlignEnd=71579|GE=say[CVB].[SEQ]|MGloss=say[CVB].[SEQ]|MSeg=diː-tiːt|RX=[V1].[IRG]|TokenType=Root
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=71579|AlignEnd=71840|GE=[/]|TokenType=Break
6	j=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	AlignBegin=71840|AlignEnd=71971|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
7	ʔar	_	NOUN	N	_	10	nsubj	_	AlignBegin=71971|AlignEnd=72102|GE=child|RX=[SBJ].[N]|TokenType=Root
8	han	_	PART	PTCL	_	7	advmod	_	AlignBegin=72102|AlignEnd=72364|GE=also|RX=[PTCL].[FOC]|TokenType=Root
9	hus	_	NOUN	N	Gender=Masc	10	obj	_	AlignBegin=72364|AlignEnd=72626|GE=voice|RX=[N].[M]|TokenType=Root
10	ikatina	_	VERB	LV	Aspect=Imp|Gender=Masc|Number=Plur|VerbType=Light	0	root	_	AlignBegin=72626|AlignEnd=72888|GE=[3]become\IPFV[PL]|MGloss=[3]become\IPFV[PL]|MSeg=i-kati-na|RX=[PNG][LV][PNG]|TokenType=Root
11	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=72888|AlignEnd=73148|GE=[/]|TokenType=Break

~~~


