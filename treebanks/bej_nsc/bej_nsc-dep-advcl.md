---
layout: base
title:  'Statistics of advcl in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `advcl`

This relation is universal.

28 nodes (3%) are attached to their parents as `advcl`.

25 instances of `advcl` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.28571428571429.

The following 3 pairs of parts of speech are connected with `advcl`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (23; 82% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (3; 11% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advcl	color:blue
1	ontʔa	_	PART	PTCL	_	4	discourse	_	AlignBegin=35009|AlignEnd=35339|GE=now|Gloss=now|RX=[PTCL]|TokenType=Stem
2	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=35339|AlignEnd=35670|TokenType=Break
3	bak	_	ADV	DEICT	_	4	advmod	_	AlignBegin=35670|AlignEnd=35939|GE=thus|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Stem
4	ʔabkin	_	VERB	V1	Gender=Fem|Number=Sing|VerbClass=1	8	parataxis	_	AlignBegin=35939|AlignEnd=36208|GE=take-[IMP].[SG].[F]-[EMPH]|Gloss=take|MGloss=take-IMP.SG.F-EMPH|MSeg=ʔabk-i-n|ReportedSpeech=Yes|RX=[V1]-[TAM].[PNG]-[SUFX]|TokenType=Stem
5	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=36208|AlignEnd=36736|TokenType=Break
6	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	7	det	_	AlignBegin=36736|AlignEnd=36853|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
7	hi	_	NOUN	N	_	4	obj	_	AlignBegin=36853|AlignEnd=36971|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Stem
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	14	advcl	_	AlignBegin=36971|AlignEnd=37089|GE=[3SG].[M]-say\[PFV]|Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Stem
9	=oː	_	PRON	PRO	Number=Sing|Person=1	8	obj	_	AlignBegin=37089|AlignEnd=37148|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
10	=hoːb	_	SCONJ	CONJ	_	8	mark	_	AlignBegin=37148|AlignEnd=37207|GE==when|Gloss==when|RX==[CONJ]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=37207|AlignEnd=37443|GE=|TokenType=Break
12	ajwa	_	PART	PTCL	_	14	parataxis	_	AlignBegin=37443|AlignEnd=37774|GE=yes|Gloss=yes|ReportedSpeech=Yes|RX=[PTCL]|TokenType=Stem
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=37774|AlignEnd=38105|TokenType=Break
14	adi	_	VERB	V1,IRG	Aspect=Perf|Number=Sing|VerbClass=1	0	root	_	AlignBegin=38105|AlignEnd=38373|GE=[1SG]-say\[PFV]|Gloss=say|MGloss=1SG-say\PFV|MSeg=a-di|RX=[PNG]-[V1].[IRG]|TokenType=Stem
15	=t	_	CCONJ	CCONJ	_	14	cc	_	AlignBegin=38373|AlignEnd=38507|GE==[COORD]|RX==[CONJ]|TokenType=Clit

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 advcl	color:blue
1	hamilaː	_	VERB	V2	VerbClass=2	3	obj	_	AlignBegin=94772|AlignEnd=95025|GE=let-[CVB].[MNR]|Gloss=let|MGloss=let-CVB.MNR|MSeg=hamil-aː|RX=[V2]-[PRF]|TokenType=Stem
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=95025|AlignEnd=95152|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	akati	_	VERB	AUX	Aspect=Imp|Number=Sing	5	acl:relcl	_	AlignBegin=95152|AlignEnd=95406|GE=[1SG]-become\[IPFV]|Gloss=become|MGloss=1SG-become\IPFV|MSeg=a-kati|RX=[PNG]-[AUX].[PRF]|TokenType=Stem
4	=jeː	_	SCONJ	CONJ	_	3	mark	_	AlignBegin=95406|AlignEnd=95533|GE==if|Gloss==ifREL|RX==[CONJ]|TokenType=Clit
5	kaːm	_	NOUN	N	_	6	nsubj	_	AlignBegin=95533|AlignEnd=95723|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
6	=u	_	AUX	PRO	_	11	advcl	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO].NOM|TokenType=Clit
7	=it	_	SCONJ	PRO	_	6	mark	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
8	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=95914|AlignEnd=96295|TokenType=Break
9	harawaː	_	VERB	V1	VerbClass=1	11	obj	_	AlignBegin=96295|AlignEnd=96587|GE=seek-[CVB].[MNR]|Gloss=seek|MGloss=seek-CVB.MNR|MSeg=haraw-aː|RX=[V1]|TokenType=Stem
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	9	det	_	AlignBegin=96587|AlignEnd=96733|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	harawaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=96733|AlignEnd=96952|GE=seek-[CVB].[MNR]|Gloss=seek|MGloss=seek-CVB.MNR|MSeg=haraw-aː|RX=[V1]-[PRF]|TokenType=Stem
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=96952|AlignEnd=97061|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	11	cop	_	AlignBegin=97061|AlignEnd=97171|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=97171|AlignEnd=97609|TokenType=Break

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 14 advcl	color:blue
1	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=65384|AlignEnd=65579|GE=[PROX].[SG].[M].[NOM]|RX=[DEM]|TokenType=Stem
2	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=65579|AlignEnd=65676|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
3	tak	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=65676|AlignEnd=65774|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=65774|AlignEnd=66284|TokenType=Break
5	doːr	_	NOUN	N	Gender=Masc	7	advmod	_	AlignBegin=66284|AlignEnd=66611|ExtPos=ADV|GE=time|Gloss=time|Idiom=Yes|RX=[N].[M]|TokenType=Stem
6	han	_	PART	PTCL	_	5	fixed	_	AlignBegin=66611|AlignEnd=66939|GE=also|Gloss=also|InIdiom=Yes|RX=[PTCL].[FOC]|TokenType=Stem
7	kanaː	_	NOUN	V1,IRG	_	0	root	_	AlignBegin=66939|AlignEnd=67157|GE=know\[MID]-[CVB].[MNR]|Gloss=know|MGloss=know\MID-CVB.MNR|MSeg=kan-aː|RX=[V1].[DER].[IRG]-[PRF]|TokenType=Stem
8	=ji	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	7	obj	_	AlignBegin=67157|AlignEnd=67266|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
9	ki=	_	PART	PTCL,NEG	Aspect=Imp|Polarity=Neg	7	advmod	_	AlignBegin=67266|AlignEnd=67375|GE=[NEG].[IPFV]=|RX=[PTCL]=|TokenType=Clit
10	iki	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	7	aux	_	AlignBegin=67375|AlignEnd=67594|GE=[3SG].[M]-become\[PFV]|Gloss=become|MGloss=3SG.M-become\PFV|MSeg=i-ki|RX=[PNG]-[AUX].[PRF]|TokenType=Stem
11	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=67594|AlignEnd=67922|TokenType=Break
12	ti=	_	DET	DET	Definite=Def|Gender=Fem	13	det	_	AlignBegin=67922|AlignEnd=68197|GE=[DEF].[F]=|RX=[DET]=|TokenType=Clit
13	takat	_	NOUN	N	Gender=Fem	14	obj	_	AlignBegin=68197|AlignEnd=68473|GE=woman|Gloss=woman|RX=[N].[F]|TokenType=Stem
14	hiːs	_	VERB	V2	Aspect=Perf|VerbClass=2	7	advcl	_	AlignBegin=68473|AlignEnd=68656|GE=think\[PFV].[[][3SG].[M][]][3SG,M]|Gloss=think|RX=[V2]|TokenType=Stem
15	=heːb	_	PRON	PRO	Number=Sing|Person=1	14	obj	_	AlignBegin=68656|AlignEnd=68840|GE==[OBJ].[1SG]|RX==[PRO]|TokenType=Clit
16	=ajt	_	SCONJ	CONJ	_	14	mark	_	AlignBegin=68840|AlignEnd=69024|GE==[CSL]|RX==[CONJ]|TokenType=Clit
17	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=69024|AlignEnd=71270|TokenType=Break

~~~


