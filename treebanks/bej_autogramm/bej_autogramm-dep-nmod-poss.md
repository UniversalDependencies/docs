---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-nmod.html">nmod</a></tt>.

298 nodes (2%) are attached to their parents as `nmod:poss`.

297 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27181208053691.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (263; 88% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (20; 7% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod:poss	color:blue
1	winneːt	_	ADV	ADV	_	2	advmod	_	Gloss=plenty|RX=[ADV]|TokenType=Root|WordAlignmentBegin=5699|WordAlignmentEnd=5959
2	ʔareːji	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	Gloss=like|MGloss=like-AOR.3SG.M|MSeg=ʔareː-ji|RX=[V2]-[TAM].[PNG]|TokenType=Root|WordAlignmentBegin=5959|WordAlignmentEnd=6219
3	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	2	discourse	_	Gloss=say|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=6219|WordAlignmentEnd=6479
4	/	_	PUNCT	PUNCT	_	2	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=6479|WordAlignmentEnd=6739
5	ʔakra	_	VERB	V1	VerbClass=1	6	acl	_	Gloss=be_strong.CVB.MNR|MGloss=be_strong-CVB.MNR|MSeg=ʔakr-a|RX=[V1]|TokenType=Root|WordAlignmentBegin=6739|WordAlignmentEnd=7020
6	reːr	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	Gloss=love|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=7020|WordAlignmentEnd=7301
7	//	_	PUNCT	PUNCT	_	6	punct	_	Gloss=//|TokenType=Break|WordAlignmentBegin=7301|WordAlignmentEnd=7583
8	mhaj	_	NUM	NUM	_	9	nummod	_	Gloss=three|RX=[NUM]|TokenType=Root|WordAlignmentBegin=7699|WordAlignmentEnd=8009
9	koː	_	ADJ	ADJ	_	12	amod	_	Gloss=all|RX=[ADJ]|TokenType=Root|WordAlignmentBegin=8009|WordAlignmentEnd=8164
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=8164|WordAlignmentEnd=8319
11	j=	_	DET	DET	Definite=Def|Gender=Masc	12	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=8319|WordAlignmentEnd=8422
12	ʔar	_	NOUN	N	_	2	dislocated:obj	_	Gloss=child|RX=[N]|TokenType=Root|WordAlignmentBegin=8422|WordAlignmentEnd=8525
13	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=8525|WordAlignmentEnd=8629
14	//	_	PUNCT	PUNCT	_	2	punct	_	Gloss=//|TokenType=Break|WordAlignmentBegin=8629|WordAlignmentEnd=8937

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	Gloss=1SG|RX=[SBJ].[PRO]|TokenType=Root|WordAlignmentBegin=227447|WordAlignmentEnd=227691
2	i=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=227691|WordAlignmentEnd=227772
3	kna	_	PRON	PRO	Reflex=Yes	1	nmod	_	Gloss=owner|RX=[SBJ].[PRO].[REFL]|TokenType=Root|WordAlignmentBegin=227772|WordAlignmentEnd=227854
4	=ji	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=227854|WordAlignmentEnd=227936
5	/	_	PUNCT	PUNCT	_	1	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=227936|WordAlignmentEnd=228466
6	doːr	_	NOUN	N	Gender=Masc	7	obl:mod	_	Gloss=time|RX=[N].[M]|TokenType=Root|WordAlignmentBegin=228466|WordAlignmentEnd=228761
7	ʔamaːb	_	VERB	V1	Gender=Masc|VerbClass=1	9	ccomp	_	Gloss=ride.CVB.MNR|MGloss=ride\MID-CVB.MNR-INDF.M.ACC|MSeg=ʔam-aː-b|Reported=Yes|RX=[V1].[DER]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=228761|WordAlignmentEnd=228982
8	=i	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=228982|WordAlignmentEnd=229056
9	ini	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=229056|WordAlignmentEnd=229351
10	//	_	PUNCT	PUNCT	_	9	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=229351|WordAlignmentEnd=229646

~~~


