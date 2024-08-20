---
layout: base
title:  'Statistics of dislocated:obj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

29 nodes (0%) are attached to their parents as `dislocated:obj`.

20 instances of `dislocated:obj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.82758620689655.

The following 3 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (26; 90% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated:obj	color:blue
1	agar	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1|Voice=Mid	2	compound:svc	_	AlignBegin=84523|AlignEnd=84765|GE=[1SG]-come_back\[MID].[PFV]|Gloss=come_back|MGloss=1SG-come_back\MID.PFV|MSeg=a-gar|RX=[PNG]-[V1].[DER]|TokenType=Root
2	jʔan	_	VERB	V2,IRG	Number=Sing|VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84926|GE=come-[PFV].[1SG]|Gloss=come|MGloss=come-PFV.1SG|MSeg=jʔ-an|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=84926|AlignEnd=85007|GE==[COORD]|RX==[CONJ]|TokenType=Clit
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=85007|AlignEnd=85087|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
5	gaw	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	AlignBegin=85087|AlignEnd=85168|GE=house|Gloss=house|RX=[N].[M]|TokenType=Root
6	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 dislocated:obj	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=351|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|GE=elder|Gloss=elder|RX=[CN]|TokenType=Root
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Root
6	tak	_	NOUN	N	Gender=Masc	7	dep:comp	_	AlignBegin=2593|AlignEnd=2761|GE=man|RX=[N].[M]|TokenType=Root
7	=i	_	ADP	CASE	Case=Gen	1	appos	_	AlignBegin=2761|AlignEnd=2930|GE=-[GEN]|RX=-[CASE]|TokenType=Clit|wordform=-i
8	iːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	12	dep:conj	_	AlignBegin=2930|AlignEnd=3154|GE=[3SG].[M]-be_there\[AOR]|Gloss=be_there|MGloss=3SG.M-be_there\AOR|MSeg=iː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	=t	_	CCONJ	CCONJ	_	8	cc	_	AlignBegin=3154|AlignEnd=3267|GE==[COORD]|RX==[CONJ]|TokenType=Clit
10	amsi	_	ADV	ADV	_	12	advmod	_	AlignBegin=3267|AlignEnd=3603|GE=today|Gloss=today|RX=[ADV]|TokenType=Root
11	iraːnaj	_	INTJ	_	_	12	discourse	_	AlignBegin=3603|AlignEnd=3940|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Root
12	rhi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4277|GE=see-[AOR].[3SG].[M]|Gloss=see|MGloss=see-AOR.3SG.M|MSeg=rh-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
14	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	det	_	AlignBegin=4764|AlignEnd=4921|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
15	kna	_	PRON	PRO	Reflex=Yes	12	dislocated:obj	_	AlignBegin=4921|AlignEnd=5079|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Root
16	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 dislocated:obj	color:blue
1	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=0|AlignEnd=353|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
2	i=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=353|AlignEnd=471|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
3	soːk	_	PROPN	N	_	4	dep:comp	_	AlignBegin=471|AlignEnd=589|GE=[Souakin]|RX=[N].[PROP]|TokenType=Root
4	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	7	obl:arg	_	AlignBegin=589|AlignEnd=706|GE=[LOC].[SG]|RX=[POSTP]|TokenType=Clit
5	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=706|AlignEnd=1060|GE=[//]|TokenType=Break
6	kiraːj	_	NOUN	N	Gender=Masc	7	obj	_	AlignBegin=2273|AlignEnd=2545|GE=payment|RX=[N].[M]|TokenType=Root
7	ahiːt	_	VERB	V1	VerbClass=1	20	advcl	_	AlignBegin=2545|AlignEnd=2817|GE=take[CVB].[SEQ]|MGloss=take[CVB].[SEQ]|MSeg=ah-iːt|RX=[V1].[IRG]|TokenType=Root
8	gali	_	NUM	NUM	_	7	dislocated:obj	_	AlignBegin=2817|AlignEnd=2953|GE=one|RX=[NUM]|TokenType=Root
9	=b	_	DET	DET	Case=Acc|Gender=Masc	8	det	_	AlignBegin=2953|AlignEnd=3089|GE=[INDF].[M].[ACC]|RX=[DET]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=3089|AlignEnd=3360|GE=[/]|TokenType=Break
11	gaw	_	NOUN	N	Gender=Masc	15	nsubj	_	AlignBegin=3828|AlignEnd=4044|GE=house|RX=[N].[M]|TokenType=Root
12	//	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=4044|AlignEnd=4260|GE=[//]|TokenType=Break
13	dikʷkʷaːn	_	NOUN	N	Gender=Masc	11	reparandum	_	AlignBegin=5383|AlignEnd=5737|GE=shop|RX=[N].[M]|TokenType=Root
14	hoːj	_	ADP	PRO	_	15	obl:arg	_	AlignBegin=5737|AlignEnd=6091|GE=[3DAT/ABL]|RX=[PRO]|TokenType=Root
15	iːfi	_	VERB	V1	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	16	dep:comp	_	AlignBegin=6091|AlignEnd=6233|GE=[3SG].[M]be_there\AOR|MGloss=[3SG].[M]be_there\AOR|MSeg=iː-fi|RX=[PNG][V1].[IRG]|TokenType=Root
16	=jeː	_	SCONJ	CONJ.REL	PronType=Rel	17	acl:relcl	_	AlignBegin=6233|AlignEnd=6304|GE=[REL]|RX=[CONJ]|TokenType=Clit
17	=naː	_	NOUN	CONJ	_	18	dep:comp	_	AlignBegin=6304|AlignEnd=6375|GE=thing|RX=[N.F]|TokenType=Clit
18	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	20	obl:arg	_	AlignBegin=6375|AlignEnd=6445|GE=[LOC].[SG]|RX=[POSTP]|TokenType=Clit
19	//	_	PUNCT	PUNCT	_	18	punct	_	AlignBegin=6445|AlignEnd=6797|GE=[//]|TokenType=Break
20	aki	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1	21	parataxis	_	AlignBegin=7216|AlignEnd=7449|GE=[1SG]become\PFV|MGloss=[1SG]become\PFV|MSeg=a-ki|RX=[PNG][V1].[IRG]|TokenType=Root
21	ini	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=7449|AlignEnd=7682|GE=[3SG].[M]say\PFV|MGloss=[3SG].[M]say\PFV|MSeg=i-ni|RX=[PNG][V1].[IRG]|TokenType=Root
22	//	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=7682|AlignEnd=7915|GE=[//]|TokenType=Break

~~~


