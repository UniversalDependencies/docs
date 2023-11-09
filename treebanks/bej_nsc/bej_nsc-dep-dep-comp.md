---
layout: base
title:  'Statistics of dep:comp in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 2 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

34 nodes (3%) are attached to their parents as `dep:comp`.

28 instances of `dep:comp` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11764705882353.

The following 15 pairs of parts of speech are connected with `dep:comp`: <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (12; 35% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (5; 15% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 dep:comp	color:blue
1	mali	_	PART	PTCL	_	5	obl:arg	_	AlignBegin=24022|AlignEnd=24178|GE=two|nWord=1|RX=[PTCL]|TokenType=Root
2	-a	_	NUM	NUM	NumType=Ord	1	obl:mod	_	AlignBegin=24178|AlignEnd=24335|GE=[ORD]|nWord=1|RX=[NUM]|TokenType=InflAff
3	muːnai	_	PROPN	N	_	4	dep:comp	_	AlignBegin=24335|AlignEnd=24648|GE=[Mouna][GEN]|MGloss=[Mouna][GEN]|MSeg=muːna-i|nWord=2|RX=[N].[PROP][CASE]|TokenType=Root
4	geːb	_	ADP	POSTP	_	5	obl:arg	_	AlignBegin=24648|AlignEnd=24961|GE=beside|nWord=3|RX=[POSTP]|TokenType=Root
5	gʷʔaa	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	6	parataxis	_	AlignBegin=24961|AlignEnd=25274|GE=drink[IMP].[SG].[M]|MGloss=drink[IMP].[SG].[M]|MSeg=gʷʔa-a|nWord=4|RX=[V2][TAM].[PNG]|TokenType=Root
6	indi	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=25274|AlignEnd=25587|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ndi|nWord=5|RX=[PNG][V1].[IRG]|TokenType=Root
7	eːn	_	VERB	V1	VerbClass=1	6	discourse	_	AlignBegin=25587|AlignEnd=25900|GE=say|nWord=6|RX=[V1].[IRG]|TokenType=Root
8	/	_	PUNCT	_	_	20	punct	_	AlignBegin=25900|AlignEnd=26214|GE=[/]|nWord=7|TokenType=Break
9	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	10	det	_	AlignBegin=26214|AlignEnd=26330|GE=[DEF].[SG].[M].[ACC]|nWord=8|RX=[DET]|TokenType=Clit
10	buːn	_	NOUN	N	Gender=Masc	19	xcomp	_	AlignBegin=26330|AlignEnd=26445|GE=coffee|nWord=8|RX=[N].[M]|TokenType=Root
11	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	AlignBegin=26445|AlignEnd=26676|GE=[PROX].[SG].[M].[ACC]|nWord=9|RX=[DEM]|TokenType=Root
12	/	_	PUNCT	_	_	11	punct	_	AlignBegin=26676|AlignEnd=26908|GE=[/]|nWord=10|TokenType=Break
13	tʔa	_	PART	PTCL	_	16	reparandum	_	AlignBegin=27430|AlignEnd=27596|GE=now|nWord=12|RX=[PTCL]|TokenType=Root
14	/	_	PUNCT	_	_	16	punct	_	AlignBegin=27596|AlignEnd=27763|GE=[/]|nWord=13|TokenType=Break
15	i=	_	DET	DET	Definite=Def|Gender=Masc	16	det	_	AlignBegin=29504|AlignEnd=29688|GE=[DEF].[M]|nWord=15|RX=[DET]|TokenType=Clit
16	tʔa	_	PART	PTCL	_	17	obl:mod	_	AlignBegin=29688|AlignEnd=29872|GE=now|nWord=15|RX=[PTCL]|TokenType=Root
17	gʷʔataːn	_	VERB	V2	Number=Plur|VerbClass=2	18	dep:comp	_	AlignBegin=29872|AlignEnd=30118|GE=drink[PFV].[2PL]|MGloss=drink[PFV].[2PL]|MSeg=gʷʔa-taːn|nWord=16|RX=[V2][TAM].[PNG]|TokenType=Root
18	=eːb	_	SCONJ	CONJ.REL	Gender=Masc|Number=Sing|PronType=Rel	10	acl:relcl	_	AlignBegin=30118|AlignEnd=30240|GE=[REL].[SG].[M]|nWord=16|RX=[CONJ]|TokenType=Clit
19	ikati	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	20	dep:comp	_	AlignBegin=30240|AlignEnd=30486|GE=[3SG].[M]become|MGloss=[3SG].[M]become|MSeg=i-kati|nWord=17|RX=[PNG][V1].[IRG]|TokenType=Root
20	=jeːk	_	SCONJ	CONJ	_	6	dep	_	AlignBegin=30486|AlignEnd=30608|GE=if|nWord=17|RX=[CONJ]|TokenType=Clit
21	//	_	PUNCT	_	_	6	punct	_	AlignBegin=30608|AlignEnd=30978|GE=[//]|nWord=18|TokenType=Break

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep:comp	color:blue
1	ʃaːk	_	NOUN	N	Gender=Masc	2	dep:comp	_	AlignBegin=0|AlignEnd=265|GE=hunting|nWord=1|RX=[N].[M]|TokenType=Root
2	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	4	obl:arg	_	AlignBegin=265|AlignEnd=530|GE=[LOC].[SG]|nWord=1|RX=[POSTP]|TokenType=Clit
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=530|AlignEnd=1060|GE=[/]|nWord=2|TokenType=Break
4	nidif	_	VERB	V1	Number=Plur|VerbClass=1	5	parataxis	_	AlignBegin=1507|AlignEnd=1832|GE=[1PL]leave|MGloss=[1PL]leave|MSeg=ni-dif|nWord=4|RX=[PNG][V1]|TokenType=Root
5	ini	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=1832|AlignEnd=2157|GE=[3SG].[M]say|MGloss=[3SG].[M]say|MSeg=i-ni|nWord=5|RX=[PNG][V1].[IRG]|TokenType=Root
6	//	_	PUNCT	_	_	5	punct	_	AlignBegin=2157|AlignEnd=2482|GE=[//]|nWord=6|TokenType=Break

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 16 dep:comp	color:blue
1	ontʔa	_	ADV	PTCL	_	21	obl:arg	_	AlignBegin=40245|AlignEnd=40456|GE=now|nWord=1|RX=[PTCL]|TokenType=Root
2	/	_	PUNCT	_	_	1	punct	_	AlignBegin=40456|AlignEnd=40667|GE=[/]|nWord=2|TokenType=Break
3	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	det	_	AlignBegin=41736|AlignEnd=41863|GE=[DEF].[SG].[M].[NOM]|nWord=4|RX=[DET]|TokenType=Clit
4	jhaːm	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=41863|AlignEnd=41990|GE=leopard|nWord=4|RX=[SBJ].[N].[M]|TokenType=Root
5	/	_	PUNCT	_	_	4	punct	_	AlignBegin=41990|AlignEnd=42243|GE=[/]|nWord=5|TokenType=Break
6	ʔawwal	_	ADV	NUM	_	7	advmod	_	AlignBegin=42614|AlignEnd=43080|GE=first|nWord=7|RX=[ADV]|TokenType=Root
7	kʷinhijaːn	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	21	dep:comp	_	AlignBegin=43080|AlignEnd=43428|GE=shout[PFV].[3SG].[M][L]|MGloss=shout[PFV].[3SG].[M][L]|MSeg=kʷinhi-jaː-n|nWord=8|RX=[V2][TAM].[PNG]|TokenType=Root
8	=eːt	_	SCONJ	CONJ.REL	Gender=Fem|PronType=Rel	10	acl:relcl	_	AlignBegin=43428|AlignEnd=43546|GE=[REL].[F]|nWord=8|RX=[CONJ]|TokenType=Clit
9	ti=	_	DET	DET	Definite=Def|Gender=Fem	10	det	_	AlignBegin=43546|AlignEnd=43662|GE=[DEF].[F]|nWord=9|RX=[DET]|TokenType=Clit
10	kʷinha	_	NOUN	N.V	_	7	dep:comp	_	AlignBegin=43662|AlignEnd=43778|GE=shout|nWord=9|RX=[N].[V]|TokenType=Root
11	=t	_	DET	DET	Gender=Fem	10	det	_	AlignBegin=43778|AlignEnd=43894|GE=[INDF].[F]|nWord=9|RX=[DET]|TokenType=Clit
12	=iːb	_	ADP	POSTP	Case=Loc|Number=Sing	10	dep:comp	_	AlignBegin=43894|AlignEnd=44012|GE=[LOC].[SG]|nWord=9|RX=[POSTP]|TokenType=Clit
13	/	_	PUNCT	_	_	7	punct	_	AlignBegin=44012|AlignEnd=44476|GE=[/]|nWord=10|TokenType=Break
14	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	16	nsubj	_	AlignBegin=44476|AlignEnd=44787|GE=[1SG].[NOM]|nWord=11|RX=[SBJ].[PRO]|TokenType=Root
15	baː=	_	PART	PTCL	Polarity=Neg	16	advmod	_	AlignBegin=44787|AlignEnd=44943|GE=[NEG].[PROH]|nWord=12|RX=[PTCL]|TokenType=Clit
16	sʔajiːn	_	VERB	V1	VerbClass=1	21	dep:comp	_	AlignBegin=44943|AlignEnd=45098|GE=notice|nWord=12|RX=[V1]|TokenType=Root
17	//	_	PUNCT	_	_	16	punct	_	AlignBegin=45098|AlignEnd=45409|GE=[//]|nWord=13|TokenType=Break
18	hasara	_	PART	PTCL	_	21	discourse	_	AlignBegin=45409|AlignEnd=45799|GE=[ADVS]|nWord=14|RX=[PTCL]|TokenType=Root
19	t=	_	DET	DET	Definite=Def|Gender=Fem	20	det	_	AlignBegin=45799|AlignEnd=45994|GE=[DEF].[F]|nWord=15|RX=[DET]|TokenType=Clit
20	ʔalaːma	_	NOUN	N	Gender=Fem	21	obj	_	AlignBegin=45994|AlignEnd=46189|GE=mark|nWord=15|RX=[N].[F]|TokenType=Root
21	hasaman	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=46189|AlignEnd=46579|GE=go_past[PFV].[1SG]|MGloss=go_past[PFV].[1SG]|MSeg=hasam-an|nWord=16|RX=[V2][TAM].[PNG]|TokenType=Root
22	/	_	PUNCT	_	_	21	punct	_	AlignBegin=46579|AlignEnd=46967|GE=[/]|nWord=17|TokenType=Break

~~~


