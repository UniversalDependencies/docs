---
layout: base
title:  'Statistics of root in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `root`

This relation is universal.

56 nodes (7%) are attached to their parents as `root`.

56 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.4107142857143.

The following 3 pairs of parts of speech are connected with `root`: -<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (53; 95% instances), -<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), -<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 8 root	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	parataxis	_	AlignBegin=2092|AlignEnd=2370|GE=disappear-[PFV].[3SG].[M]|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Stem
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\[PFV]|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
1	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=65384|AlignEnd=65579|GE=[PROX].[SG].[M].[NOM]|RX=[DEM]|TokenType=Stem
2	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=65579|AlignEnd=65676|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
3	tak	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=65676|AlignEnd=65774|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=65774|AlignEnd=66284|TokenType=Break
5	doːr	_	NOUN	N	Gender=Masc	7	advmod	_	AlignBegin=66284|AlignEnd=66611|ExtPos=ADV|GE=time|Gloss=time|Idiom=Yes|RX=[N].[M]|TokenType=Stem
6	han	_	PART	PTCL	_	5	fixed	_	AlignBegin=66611|AlignEnd=66939|GE=also|Gloss=also|InIdiom=Yes|RX=[PTCL].[FOC]|TokenType=Stem
7	kanaː	_	NOUN	V1,IRG	_	0	root	_	AlignBegin=66939|AlignEnd=67157|GE=know\[MID]-[CVB].[MNR]|Gloss=know|MGloss=know\[MID]-CVB.MNR|MSeg=kan-aː|RX=[V1].[DER].[IRG]-[PRF]|TokenType=Stem
8	=ji	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	7	obj	_	AlignBegin=67157|AlignEnd=67266|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
9	ki=	_	PART	PTCL,NEG	Aspect=Imp|Polarity=Neg	7	advmod	_	AlignBegin=67266|AlignEnd=67375|GE=[NEG].[IPFV]=|RX=[PTCL]=|TokenType=Clit
10	iki	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	7	aux	_	AlignBegin=67375|AlignEnd=67594|GE=[3SG].[M]-become\[PFV]|Gloss=become|MGloss=3SG.M-become\[PFV]|MSeg=i-ki|RX=[PNG]-[AUX].[PRF]|TokenType=Stem
11	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=67594|AlignEnd=67922|TokenType=Break
12	ti=	_	DET	DET	Definite=Def|Gender=Fem	13	det	_	AlignBegin=67922|AlignEnd=68197|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
13	takat	_	NOUN	N	Gender=Fem	14	obj	_	AlignBegin=68197|AlignEnd=68473|GE=woman|Gloss=woman|RX=[N].[F]|TokenType=Stem
14	hiːs	_	VERB	V2	Aspect=Perf|VerbClass=2	7	advcl	_	AlignBegin=68473|AlignEnd=68656|GE=think\[PFV].[[][3SG].[M][]][3SG,M]|Gloss=think|RX=[V2]|TokenType=Stem
15	=heːb	_	PRON	PRO	Number=Sing|Person=1	14	obj	_	AlignBegin=68656|AlignEnd=68840|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
16	=ajt	_	SCONJ	CONJ	_	14	mark	_	AlignBegin=68840|AlignEnd=69024|GE==[CSL]|RX==[CONJ]|TokenType=Clit
17	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=69024|AlignEnd=71270|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	ja	_	PART	PTCL	_	4	discourse	_	AlignBegin=83812|AlignEnd=84054|GE=[ADRF]|RX=[PTCL]|TokenType=Stem
2	iraːnaj	_	INTJ	_	_	4	discourse	_	AlignBegin=84054|AlignEnd=84296|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
3	aːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	AlignBegin=84296|AlignEnd=84538|GE=[PROX].[PL].[M].[NOM]|RX=[DEM]|TokenType=Stem
4	hinin	_	PRON	PRO	Case=Nom|Number=Plur|Person=1	0	root	_	AlignBegin=84538|AlignEnd=84780|GE=[1PL].[NOM]|RX=[SBJ].[PRO]|TokenType=Stem
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=84780|AlignEnd=85022|TokenType=Break

~~~


