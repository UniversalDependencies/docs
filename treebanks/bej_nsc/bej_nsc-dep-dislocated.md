---
layout: base
title:  'Statistics of dislocated in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated`

This relation is universal.
There are 2 language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-det.html">dislocated:det</a></tt>, <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

10 nodes (1%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.2.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (8; 80% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 10% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	agar	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1|Voice=Mid	2	compound	_	AlignBegin=84523|AlignEnd=84765|GE=[1SG]-come_back\[MID].[PFV]|Gloss=come_back|MGloss=1SG-come_back\MID.PFV|MSeg=a-gar|RX=[PNG]-[V1].[DER]|TokenType=Root
2	jʔan	_	VERB	V2,IRG	Number=Sing|VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84926|GE=come-[PFV].[1SG]|Gloss=come|MGloss=come-PFV.1SG|MSeg=jʔ-an|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=84926|AlignEnd=85007|GE==[COORD]|RX==[CONJ]|TokenType=Clit
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=85007|AlignEnd=85087|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
5	gaw	_	NOUN	N	Gender=Masc	2	dislocated	_	AlignBegin=85087|AlignEnd=85168|GE=house|Gloss=house|RX=[N].[M]|TokenType=Root
6	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 dislocated	color:blue
1	jhaːm	_	NOUN	N	Gender=Masc	5	nsubj	_	AlignBegin=7011|AlignEnd=7279|GE=leopard|nWord=1|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	_	_	1	punct	_	AlignBegin=7279|AlignEnd=7547|GE=[/]|nWord=2|TokenType=Break
3	handii	_	NOUN	N	Gender=Masc	4	obl:arg	_	AlignBegin=7547|AlignEnd=7892|GE=tree[GEN]|MGloss=tree[GEN]|MSeg=handi-i|nWord=3|RX=[N].[M][CASE]|TokenType=Root
4	khiː	_	ADP	POSTP	_	5	obl:arg	_	AlignBegin=7892|AlignEnd=8237|GE=on|nWord=4|RX=[POSTP]|TokenType=Root
5	isni	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	7	dep:comp	_	AlignBegin=8237|AlignEnd=8409|GE=[3SG].[M]wait|MGloss=[3SG].[M]wait|MSeg=i-sni|nWord=5|RX=[PNG][V1]|TokenType=Root
6	=hoːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1	5	obj	_	AlignBegin=8409|AlignEnd=8495|GE=[OBJ].[1PL]|nWord=5|RX=[PRO]|TokenType=Clit
7	=hoːb	_	SCONJ	CONJ	_	14	dep	_	AlignBegin=8495|AlignEnd=8582|GE=when|nWord=5|RX=[CONJ]|TokenType=Clit
8	//	_	PUNCT	_	_	7	punct	_	AlignBegin=8582|AlignEnd=8928|GE=[//]|nWord=6|TokenType=Break
9	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	11	det	_	AlignBegin=9529|AlignEnd=9752|GE=[PROX].[SG].[M].[ACC]|nWord=8|RX=[DEM]|TokenType=Root
10	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	11	det	_	AlignBegin=9752|AlignEnd=9864|GE=[DEF].[SG].[M].[ACC]|nWord=9|RX=[DET]|TokenType=Clit
11	jhaːm	_	NOUN	N	Gender=Masc	13	dislocated	_	AlignBegin=9864|AlignEnd=9975|GE=leopard|nWord=9|RX=[N].[M]|TokenType=Root
12	/	_	PUNCT	_	_	11	punct	_	AlignBegin=9975|AlignEnd=10197|GE=[/]|nWord=10|TokenType=Break
13	dira	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	14	parataxis	_	AlignBegin=10197|AlignEnd=10419|GE=kill[IMP].[SG].[M]|MGloss=kill[IMP].[SG].[M]|MSeg=dir-a|nWord=11|RX=[V1].[DER][TAM].[PNG]|TokenType=Root
14	ani	_	VERB	V1	Number=Sing|VerbClass=1	15	dep:comp	_	AlignBegin=10419|AlignEnd=10567|GE=[1SG]say|MGloss=[1SG]say|MSeg=a-ni|nWord=12|RX=[PNG][V1].[IRG]|TokenType=Root
15	=hoːb	_	SCONJ	CONJ	_	28	dep	_	AlignBegin=10567|AlignEnd=10641|GE=when|nWord=12|RX=[CONJ]|TokenType=Clit
16	/	_	PUNCT	_	_	19	punct	_	AlignBegin=10641|AlignEnd=10862|GE=[/]|nWord=13|TokenType=Break
17	i=	_	DET	DET	Definite=Def|Gender=Masc	18	det	_	AlignBegin=10862|AlignEnd=10972|GE=[DEF].[M]|nWord=14|RX=[DET]|TokenType=Clit
18	xawaːʤai	_	NOUN	N	Gender=Masc	19	dep:comp	_	AlignBegin=10972|AlignEnd=11192|GE=foreigner[GEN]|MGloss=foreigner[GEN]|MSeg=xawaːʤa-i|nWord=14|RX=[N].[M].[BORR].[ARA][CASE]|TokenType=Root
19	=da	_	ADP	POSTP	_	14	dislocated	_	AlignBegin=11192|AlignEnd=11304|GE=[DIR]|nWord=14|RX=[POSTP]|TokenType=Clit
20	//	_	PUNCT	_	_	19	punct	_	AlignBegin=11304|AlignEnd=11747|GE=[//]|nWord=15|TokenType=Break
21	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	22	det	_	AlignBegin=12173|AlignEnd=12332|GE=[DEF].[SG].[M].[ACC]|nWord=1|RX=[DET]|TokenType=Clit
22	jhaːm	_	NOUN	N	Gender=Masc	25	obj	_	AlignBegin=12332|AlignEnd=12491|GE=leopard|nWord=1|RX=[N].[M]|TokenType=Root
23	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	25	nsubj	_	AlignBegin=12491|AlignEnd=12809|GE=[1SG].[NOM]|nWord=2|RX=[SBJ].[PRO]|TokenType=Root
24	ka=	_	PART	PTCL	Aspect=Imp	25	advmod	_	AlignBegin=12809|AlignEnd=12915|GE=[NEG].[IPFV]|nWord=3|RX=[PTCL]|TokenType=Clit
25	adir	_	VERB	V1	Number=Sing|VerbClass=1	26	parataxis	_	AlignBegin=12915|AlignEnd=13127|GE=[1SG]kill|MGloss=[1SG]kill|MSeg=a-dir|nWord=3|RX=[PNG][V1]|TokenType=Root
26	id	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	28	parataxis	_	AlignBegin=13127|AlignEnd=13339|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-d|nWord=4|RX=[PNG][V1].[IRG]|TokenType=Root
27	=heːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	26	obj	_	AlignBegin=13339|AlignEnd=13445|GE=[OBJ].[1SG]|nWord=4|RX=[PRO]|TokenType=Clit
28	ini	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=13445|AlignEnd=13763|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ni|nWord=5|RX=[PNG][V1].[IRG]|TokenType=Root
29	//	_	PUNCT	_	_	28	punct	_	AlignBegin=13763|AlignEnd=14079|GE=[//]|nWord=6|TokenType=Break

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 dislocated	color:blue
1	tak	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=0|AlignEnd=351|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|GE=elder|Gloss=elder|RX=[CN]|TokenType=Root
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Root
6	taki	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=2593|AlignEnd=2930|GE=man-[GEN]|Gloss=man|MGloss=man-GEN|MSeg=tak-i|RX=[N].[M]-[CASE]|TokenType=Root
7	iːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	11	dep:conj	_	AlignBegin=2930|AlignEnd=3154|GE=[3SG].[M]-be_there\[AOR]|Gloss=be_there|MGloss=3SG.M-be_there\AOR|MSeg=iː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	=t	_	CCONJ	CCONJ	_	7	cc	_	AlignBegin=3154|AlignEnd=3267|GE==[COORD]|RX==[CONJ]|TokenType=Clit
9	amsi	_	ADV	ADV	_	11	advmod	_	AlignBegin=3267|AlignEnd=3603|GE=today|Gloss=today|RX=[ADV]|TokenType=Root
10	iraːnaj	_	INTJ	_	_	11	discourse	_	AlignBegin=3603|AlignEnd=3940|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Root
11	rhi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4277|GE=see-[AOR].[3SG].[M]|Gloss=see|MGloss=see-AOR.3SG.M|MSeg=rh-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
13	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	det	_	AlignBegin=4764|AlignEnd=4921|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
14	kina	_	PRON	PRO	Reflex=Yes	11	dislocated	_	AlignBegin=4921|AlignEnd=5079|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Root
15	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

~~~


