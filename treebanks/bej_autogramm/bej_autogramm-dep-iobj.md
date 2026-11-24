---
layout: base
title:  'Statistics of iobj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `iobj`

This relation is universal.

93 nodes (1%) are attached to their parents as `iobj`.

49 instances of `iobj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08602150537634.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (74; 80% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (19; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=0|WordAlignmentEnd=190
2	/	_	PUNCT	PUNCT	_	1	punct	_	TokenType=Break|WordAlignmentBegin=190|WordAlignmentEnd=879
3	kaːm	_	NOUN	N	_	7	nsubj	_	Gloss=camel|RX=[SBJ].[N]|TokenType=Root|WordAlignmentBegin=879|WordAlignmentEnd=982
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=982|WordAlignmentEnd=1085
5	/	_	PUNCT	PUNCT	_	3	punct	_	TokenType=Break|WordAlignmentBegin=1085|WordAlignmentEnd=1815
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	Gloss=1SG|RX=[PRO]|TokenType=Root|WordAlignmentBegin=1815|WordAlignmentEnd=2092
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=2092|WordAlignmentEnd=2370
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=2370|WordAlignmentEnd=2648
9	//	_	PUNCT	PUNCT	_	8	punct	_	TokenType=Break|WordAlignmentBegin=2648|WordAlignmentEnd=2926

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 iobj	color:blue
1	beːn	_	DET	DEM	Case=Nom|Deixis=Remt|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Gloss=DIST|RX=[DEM]|TokenType=Root|WordAlignmentBegin=76156|WordAlignmentEnd=76440
2	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=76440|WordAlignmentEnd=76582
3	nda	_	NOUN	N	Gender=Masc|Number=Plur	4	nsubj	_	Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=76582|WordAlignmentEnd=76724
4	ʔeːjaːn	_	VERB	V2,IRG	Aspect=Perf|Number=Plur|VerbClass=2	13	advcl	_	Gloss=come|MGloss=come\PFV-3PL|MSeg=ʔeːjaː-n|RelRole=Obj|RX=[V2].[IRG]-[PNG]|TokenType=Root|WordAlignmentBegin=76724|WordAlignmentEnd=76914
5	=eːb	_	SCONJ	CONJ	ExtPos=SCONJ|Gender=Masc|PronType=Rel	4	mark	_	Gloss=REL|Idiom=Yes|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=76914|WordAlignmentEnd=77009
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	fixed	_	Gloss=DEF|InIdiom=Yes|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=77009|WordAlignmentEnd=77151
7	doːr	_	NOUN	N	Gender=Masc	5	fixed	_	Gloss=time|InIdiom=Yes|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=77151|WordAlignmentEnd=77293
8	/	_	PUNCT	PUNCT	_	4	punct	_	TokenType=Break|WordAlignmentBegin=77293|WordAlignmentEnd=78459
9	i=	_	DET	DET	Definite=Def|Gender=Masc	10	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=78459|WordAlignmentEnd=78599
10	kaːm	_	NOUN	N	_	13	iobj	_	Gloss=camel|RX=[N]|TokenType=Root|WordAlignmentBegin=78599|WordAlignmentEnd=78739
11	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	10	nmod	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=78739|WordAlignmentEnd=78880
12	jam	_	NOUN	N	Gender=Masc|Number=Plur	13	obj	_	Gloss=water|RX=[N].[PL].[M]|TokenType=Root|WordAlignmentBegin=78880|WordAlignmentEnd=79301
13	gʷʔasaːb	_	VERB	V2	Gender=Masc|VerbClass=2	0	root	_	Gloss=drink.CAUS.CVB.MNR|MGloss=drink-CAUS-CVB.MNR-INDF.M.ACC|MSeg=gʷʔa-s-aː-b|RX=[V2]-[V2].[DER]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=79301|WordAlignmentEnd=79637
14	=u	_	AUX	N,COP	Number=Sing|Person=1|VerbType=Cop	13	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=79637|WordAlignmentEnd=79722
15	/	_	PUNCT	PUNCT	_	13	punct	_	TokenType=Break|WordAlignmentBegin=79722|WordAlignmentEnd=80500

~~~


