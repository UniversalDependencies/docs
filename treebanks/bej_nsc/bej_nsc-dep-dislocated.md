---
layout: base
title:  'Statistics of dislocated in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated`

This relation is universal.
There are 3 language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="bej_nsc-dep-dislocated-obj.html">dislocated:obj</a></tt>, <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

18 nodes (0%) are attached to their parents as `dislocated`.

15 instances of `dislocated` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.11111111111111.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (11; 61% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (5; 28% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 dislocated	color:blue
1	ʃakʷiːn	_	NOUN	N	Gender=Fem	4	obj	_	AlignBegin=12751|AlignEnd=12889|GE=perfume|RX=[N].[F]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=12889|AlignEnd=13027|GE=[INDF].[F]|RX=[DET]|TokenType=Clit
3	dhaːj	_	ADP	POSTP	_	4	obl:arg	_	AlignBegin=13027|AlignEnd=13303|GE=[DIR]|RX=[POSTP]|TokenType=Root
4	dannʔi	_	VERB	V1	Aspect=Imp|Number=Sing|Person=3|VerbClass=1	0	root	_	AlignBegin=13303|AlignEnd=13579|GE=do\IPFV.[3SG]|RX=[V1].[IRG]|TokenType=Root
5	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	4	discourse	_	AlignBegin=13579|AlignEnd=13855|GE=say\PFV.PL|RX=[V1].[IRG]|TokenType=Root
6	//	_	PUNCT	_	_	4	punct	_	AlignBegin=13855|AlignEnd=14129|GE=[//]|TokenType=Break
7	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	9	det	_	AlignBegin=14139|AlignEnd=14460|GE=[PROX].[PL].[M].[ACC]|RX=[DEM]|TokenType=Root
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=14460|AlignEnd=14540|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
9	taktʔi	_	NOUN	CN	Gender=Masc	10	dep:comp	_	AlignBegin=14540|AlignEnd=14620|GE=scarecrow|RX=[CN].[M]|TokenType=Root
10	=jeː	_	ADP	CASE	Case=Gen|Number=Plur	11	dep:comp	_	AlignBegin=14620|AlignEnd=14700|GE=[GEN].[PL]|RX=[CASE]|TokenType=Clit
11	=da	_	ADP	POSTP	_	4	dislocated	_	AlignBegin=14700|AlignEnd=14781|GE=[DIR]|RX=[POSTP]|TokenType=Clit
12	//	_	PUNCT	_	_	4	punct	_	AlignBegin=14781|AlignEnd=15103|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dislocated	color:blue
1	hoːj	_	ADP	PRO	_	2	obl:arg	_	AlignBegin=141614|AlignEnd=142009|GE=[3DAT/ABL]|RX=[PRO]|TokenType=Root
2	libaːban	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=142009|AlignEnd=142404|GE=be_happy[PFV].[1SG]|MGloss=be_happy[PFV].[1SG]|MSeg=libaːb-an|RX=[V2][TAM].[PNG]|TokenType=Root
3	i=	_	DET	DET	Definite=Def|Gender=Masc	4	det	_	AlignBegin=142404|AlignEnd=142536|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
4	ɖa~ɖib	_	NOUN	N	Gender=Masc	2	dislocated	_	AlignBegin=142536|AlignEnd=142668|GE=job|RX=[N].[M]|TokenType=Root
5	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	4	nmod:poss	_	AlignBegin=142668|AlignEnd=142799|GE=[POSS].[1SG].[ACC]|RX=[PRO]|TokenType=Clit
6	i=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	AlignBegin=142799|AlignEnd=142931|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
7	raw	_	NOUN	N	_	8	dep:comp	_	AlignBegin=142931|AlignEnd=143063|GE=other|RX=[N]|TokenType=Root
8	=eːb	_	ADP	POSTP	Case=Loc|Number=Plur	4	dep	_	AlignBegin=143063|AlignEnd=143194|GE=[LOC].[PL]|RX=[POSTP]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=143194|AlignEnd=143591|GE=[/]|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 dislocated	color:blue
1	aneːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	6	dislocated	_	AlignBegin=177822|AlignEnd=178152|GE=[1SG].[ACC]|RX=[PRO]|TokenType=Root
2	i=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=178152|AlignEnd=178317|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
3	ngirab	_	NOUN	N	Gender=Masc	6	nsubj	_	AlignBegin=178317|AlignEnd=178482|GE=evening|RX=[SBJ].[N].[M]|TokenType=Root
4	dh	_	ADP	POSTP	_	6	obl:arg	_	AlignBegin=178482|AlignEnd=178647|GE=[DIR]|RX=[POSTP]|TokenType=Root
5	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	4	obl:mod	_	AlignBegin=178647|AlignEnd=178812|GE=[POSS].[1SG].[ACC]|RX=[PRO]|TokenType=Clit
6	jʔiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	15	dep:conj	_	AlignBegin=178812|AlignEnd=179142|GE=come[IPFV].[3SG].[M]|MGloss=come[IPFV].[3SG].[M]|MSeg=jʔ-iːni|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
7	/	_	PUNCT	_	_	6	punct	_	AlignBegin=179142|AlignEnd=179473|GE=[/]|TokenType=Break
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=179473|AlignEnd=179633|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
9	jam	_	NOUN	N	Gender=Masc|Number=Plur	10	dep:comp	_	AlignBegin=179633|AlignEnd=179793|GE=water|RX=[N].[PL].[M]|TokenType=Root
10	=eː	_	ADP	CASE	Case=Gen|Number=Plur	11	obl:arg	_	AlignBegin=179793|AlignEnd=179952|GE=[GEN].[PL]|RX=[CASE]|TokenType=Clit
11	gʷadaamani	_	VERB	V2	Number=Sing|VerbClass=2	15	dep:conj	_	AlignBegin=179952|AlignEnd=180431|GE=splash[MID][IPFV].[1SG]|MGloss=splash[MID][IPFV].[1SG]|MSeg=gʷada-am-ani|RX=[V2].[BORR].[ARA][V2].[DER][TAM].[PNG]|TokenType=Root
12	/	_	PUNCT	_	_	11	punct	_	AlignBegin=180431|AlignEnd=180909|GE=[/]|TokenType=Break
13	jam	_	NOUN	N	Gender=Masc|Number=Plur	15	obj	_	AlignBegin=180909|AlignEnd=181210|GE=water|RX=[N].[PL].[M]|TokenType=Root
14	hoː	_	PRON	PRO	Number=Sing|Person=1	15	iobj	_	AlignBegin=181210|AlignEnd=181511|GE=[1SG].[DAT/ABL]|RX=[PRO]|TokenType=Root
15	atɖajiːg	_	VERB	V1	Aspect=Imp|Number=Sing|VerbClass=1	0	root	_	AlignBegin=181511|AlignEnd=181812|GE=[1SG][MID]take_supplies_for_journey\IPFV|MGloss=[1SG][MID]take_supplies_for_journey\IPFV|MSeg=a-t-ɖajiːg|RX=[PNG][V1].[DER][V1]|TokenType=Root
16	/	_	PUNCT	_	_	15	punct	_	AlignBegin=181812|AlignEnd=182114|GE=[/]|TokenType=Break

~~~


