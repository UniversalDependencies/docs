---
layout: base
title:  'Statistics of iobj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `iobj`

This relation is universal.

95 nodes (1%) are attached to their parents as `iobj`.

51 instances of `iobj` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07368421052632.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (76; 80% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (19; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|Gloss=1SG.DAT|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	AlignBegin=2092|AlignEnd=2370|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 iobj	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=76156|AlignEnd=76440|Gloss=DIST.SG.M.NOM|RX=[DEM]|TokenType=Root
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	AlignBegin=76440|AlignEnd=76582|Gloss=DEF.PL.M.NOM=|RX=[DET]=|TokenType=Clit
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	AlignBegin=76582|AlignEnd=76724|Gloss=man\PL|RX=[SBJ].[N].[M]|TokenType=Root
4	ʔeːjaːn	_	VERB	V2,IRG	Aspect=Perf|Number=Plur|VerbClass=2	5	dep:comp	_	AlignBegin=76724|AlignEnd=76914|Gloss=come\PFV|MGloss=come\PFV-3PL|MSeg=ʔeːjaː-n|RX=[V2].[IRG]-[PNG]|TokenType=Root
5	=eːb	_	SCONJ	CONJ	ExtPos=SCONJ|Gender=Masc|PronType=Rel	13	dep	_	AlignBegin=76914|AlignEnd=77009|Gloss==REL.M|Idiom=Yes|RX==[CONJ]|TokenType=Clit
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	fixed	_	AlignBegin=77009|AlignEnd=77151|Gloss=DEF.SG.M.ACC=|InIdiom=Yes|RX=[DET]=|TokenType=Clit
7	doːr	_	NOUN	N	Gender=Masc	5	fixed	_	AlignBegin=77151|AlignEnd=77293|Gloss=time|InIdiom=Yes|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=77293|AlignEnd=78459|TokenType=Break
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	AlignBegin=78459|AlignEnd=78599|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
10	kaːm	_	NOUN	N	_	13	iobj	_	AlignBegin=78599|AlignEnd=78739|Gloss=camel|RX=[N]|TokenType=Root
11	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	10	nmod:poss	_	AlignBegin=78739|AlignEnd=78880|Gloss==POSS1.SG.ACC|RX==[PRO]|TokenType=Clit
12	jam	_	NOUN	N	Gender=Masc|Number=Plur	13	obj	_	AlignBegin=78880|AlignEnd=79301|Gloss=water|RX=[N].[PL].[M]|TokenType=Root
13	gʷʔasaːb	_	VERB	V2	Gender=Masc|VerbClass=2	0	root	_	AlignBegin=79301|AlignEnd=79637|Gloss=drink|MGloss=drink-CAUS-CVB.MNR-INDF.M.ACC|MSeg=gʷʔa-s-aː-b|RX=[V2]-[V2].[DER]-[PRF]-[DET]|TokenType=Root
14	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	13	cop	_	AlignBegin=79637|AlignEnd=79722|Gloss==COP.1SG|RX==[PRED].[N]|TokenType=Clit
15	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=79722|AlignEnd=80500|TokenType=Break

~~~


