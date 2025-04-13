---
layout: base
title:  'Statistics of nmod:poss in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-nmod.html">nmod</a></tt>.

305 nodes (3%) are attached to their parents as `nmod:poss`.

300 instances of `nmod:poss` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.27213114754098.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (269; 88% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (20; 7% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (11; 4% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=190|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|Gloss=camel|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|Gloss=1SG.DAT|RX=[PRO]|TokenType=Root
7	kʷiɖja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	8	ccomp	_	AlignBegin=2092|AlignEnd=2370|Gloss=disappear|MGloss=disappear-PFV.3SG.M|MSeg=kʷiɖ-ja|Reported=Yes|ReportedSpeech=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
8	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=2370|AlignEnd=2648|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 nmod:poss	color:blue
1	winneːt	_	ADV	ADV	_	2	advmod	_	AlignBegin=5699|AlignEnd=5959|Gloss=plenty|RX=[ADV]|TokenType=Root
2	ʔareːji	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=5959|AlignEnd=6219|Gloss=like|MGloss=like-AOR.3SG.M|MSeg=ʔareː-ji|RX=[V2]-[TAM].[PNG]|TokenType=Root
3	eːn	_	VERB	V1	Number=Plur|Person=3|VerbClass=1	2	discourse	_	AlignBegin=6219|AlignEnd=6479|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=6479|AlignEnd=6739|Gloss=/|TokenType=Break
5	ʔakra	_	VERB	V1	VerbClass=1	6	acl	_	AlignBegin=6739|AlignEnd=7020|Gloss=be_strong|MGloss=be_strong-CVB.MNR|MSeg=ʔakr-a|RX=[V1]|TokenType=Root
6	reːr	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	AlignBegin=7020|AlignEnd=7301|Gloss=love|RX=[N].[M]|TokenType=Root
7	//	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=7301|AlignEnd=7583|Gloss=//|TokenType=Break
8	mhaj	_	NUM	NUM	_	9	nummod	_	AlignBegin=7699|AlignEnd=8009|Gloss=three|RX=[NUM]|TokenType=Root
9	koː	_	ADJ	ADJ	_	12	amod	_	AlignBegin=8009|AlignEnd=8164|Gloss=all|RX=[ADJ]|TokenType=Root
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	nmod:poss	_	AlignBegin=8164|AlignEnd=8319|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
11	j=	_	DET	DET	Definite=Def|Gender=Masc	12	det	_	AlignBegin=8319|AlignEnd=8422|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
12	ʔar	_	NOUN	N	_	2	dislocated:obj	_	AlignBegin=8422|AlignEnd=8525|Gloss=child|RX=[N]|TokenType=Root
13	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	12	nmod:poss	_	AlignBegin=8525|AlignEnd=8629|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
14	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=8629|AlignEnd=8937|Gloss=//|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	nsubj	_	AlignBegin=227447|AlignEnd=227691|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
2	i=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=227691|AlignEnd=227772|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
3	kna	_	PRON	PRO	Reflex=Yes	1	nmod	_	AlignBegin=227772|AlignEnd=227854|Gloss=owner|RX=[SBJ].[PRO].[REFL]|TokenType=Root
4	=ji	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=227854|AlignEnd=227936|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=227936|AlignEnd=228466|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
6	doːr	_	NOUN	N	Gender=Masc	7	obl:mod	_	AlignBegin=228466|AlignEnd=228761|Gloss=time|RX=[N].[M]|TokenType=Root
7	ʔamaːb	_	VERB	V1	Gender=Masc|VerbClass=1	9	ccomp	_	AlignBegin=228761|AlignEnd=228982|Gloss=ride\MID|MGloss=ride\MID-CVB.MNR-INDF.M.ACC|MSeg=ʔam-aː-b|RX=[V1].[DER]-[PRF]-[DET]|TokenType=Root
8	=i	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	AlignBegin=228982|AlignEnd=229056|Gloss==COP.1SG|Reported=Yes|RX==[PRED].[N]|TokenType=Clit
9	ini	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=229056|AlignEnd=229351|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
10	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=229351|AlignEnd=229646|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


