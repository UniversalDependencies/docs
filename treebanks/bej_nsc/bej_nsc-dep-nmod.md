---
layout: base
title:  'Statistics of nmod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bej_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

86 nodes (1%) are attached to their parents as `nmod`.

44 instances of `nmod` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.23255813953488.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (23; 27% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (14; 16% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (11; 13% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (9; 10% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (8; 9% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (4; 5% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	discourse	_	AlignBegin=225754|AlignEnd=225946|GE=[PROX].[SG].[M].[NOM]|RX=[DEM]|TokenType=Root
2	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	7	dislocated:subj	_	AlignBegin=225946|AlignEnd=226138|GE=[1SG].[NOM]|RX=[SBJ].[PRO]|TokenType=Root
3	suːr	_	ADV	ADV	_	7	advmod	_	AlignBegin=226138|AlignEnd=226330|GE=before|RX=[ADV]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=226330|AlignEnd=226522|GE=[/]|TokenType=Break
5	nifri	_	NOUN	N	Gender=Masc	6	nmod	_	AlignBegin=226990|AlignEnd=227500|GE=horror[ADJZR]|MGloss=horror[ADJZR]|MSeg=nifr-i|RX=[N].[M][SUFX]|TokenType=Root
6	ʤaːntaːji	_	NOUN	N	_	7	nmod	_	AlignBegin=227500|AlignEnd=228010|GE=jinni|RX=[N]|TokenType=Root
7	atoːrbi	_	ADJ	ADJ	_	0	root	_	AlignBegin=228010|AlignEnd=228180|GE=nasty|RX=[ADJ]|TokenType=Root
8	=b	_	DET	DET	Case=Acc|Gender=Masc	7	det	_	AlignBegin=228180|AlignEnd=228350|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
9	=u	_	AUX	N.COP	Number=Sing|Person=1|VerbType=Cop	7	cop	_	AlignBegin=228350|AlignEnd=228520|GE=[COP].[1SG]|RX=[PRED].[N]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=228520|AlignEnd=229028|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	halla	_	NOUN	N	Gender=Fem	5	obj	_	AlignBegin=106501|AlignEnd=106696|GE=village|RX=[N].[F]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=106696|AlignEnd=106891|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
3	sagi	_	ADJ	ADJ	_	1	nmod	_	AlignBegin=106891|AlignEnd=107086|GE=far|RX=[ADJ]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=107086|AlignEnd=107281|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
5	beːtiːt	_	VERB	V1	VerbClass=1	11	advcl	_	AlignBegin=107281|AlignEnd=107671|GE=go[CVB].[SEQ]|MGloss=go[CVB].[SEQ]|MSeg=beː-tiːt|RX=[V1].[DER].[IRG]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=107671|AlignEnd=108063|GE=[/]|TokenType=Break
7	geː	_	PART	PTCL	_	9	discourse	_	AlignBegin=108824|AlignEnd=108968|GE=[DM]|RX=[PTCL]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=108968|AlignEnd=109113|GE=[/]|TokenType=Break
9	ʃʔaː	_	NOUN	N	Gender=Masc	11	obj	_	AlignBegin=109113|AlignEnd=109337|GE=cow|RX=[N].[M]|TokenType=Root
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	nmod:poss	_	AlignBegin=109337|AlignEnd=109560|GE=[POSS].[3PL].[ACC]|RX=[PRO]|TokenType=Clit
11	ijajna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	AlignBegin=109560|AlignEnd=110007|GE=[3]take\IPFV[PL]|MGloss=[3]take\IPFV[PL]|MSeg=i-jaj-na|RX=[PNG][V1].[IRG][PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=110007|AlignEnd=110455|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	ʃaːwi	_	PART	PTCL	_	11	discourse	_	AlignBegin=74933|AlignEnd=75343|GE=then|RX=[PTCL]|TokenType=Root
2	ʃanha	_	NOUN	N	Gender=Masc	11	obj	_	AlignBegin=75343|AlignEnd=75753|GE=work|RX=[N].[M]|TokenType=Root
3	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	4	det	_	AlignBegin=75753|AlignEnd=75958|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
4	kna	_	PRON	PRO	Reflex=Yes	2	nmod	_	AlignBegin=75958|AlignEnd=76163|GE=owner|RX=[PRO].[REFL]|TokenType=Root
5	ti=	_	DET	DET	Definite=Def|Gender=Fem	6	det	_	AlignBegin=76163|AlignEnd=76265|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
6	dirʔaː	_	NOUN	N	Gender=Fem	8	dep:comp	_	AlignBegin=76265|AlignEnd=76367|GE=field|RX=[N].[F]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=76367|AlignEnd=76469|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
8	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	11	obl:arg	_	AlignBegin=76469|AlignEnd=76573|GE=[LOC].[SG]|RX=[POSTP]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=76573|AlignEnd=76984|GE=[/]|TokenType=Break
10	ka=	_	PART	PTCL	Aspect=Imp|Polarity=Neg	11	advmod	_	AlignBegin=76984|AlignEnd=77083|GE=[NEG].[IPFV]|RX=[PTCL]|TokenType=Clit
11	ʃagaamja	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=77083|AlignEnd=77380|GE=work[MID][PFV].[3SG].[M]|MGloss=work[MID][PFV].[3SG].[M]|MSeg=ʃaga-am-ja|RX=[V2][V2].[DER][TAM].[PNG]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=77380|AlignEnd=77775|GE=[//]|TokenType=Break

~~~


