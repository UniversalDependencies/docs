---
layout: base
title:  'Statistics of dep:redup in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `dep:redup`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_autogramm-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_autogramm-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_autogramm-dep-dep-flat.html">dep:flat</a></tt>.

43 nodes (0%) are attached to their parents as `dep:redup`.

43 instances of `dep:redup` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.76744186046512.

The following 7 pairs of parts of speech are connected with `dep:redup`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (34; 79% instances), <tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (3; 7% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="bej_autogramm-pos-INTJ.html">INTJ</a></tt>-<tt><a href="bej_autogramm-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep:redup	color:blue
1	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	2	dep:redup	_	AlignBegin=85492|AlignEnd=86058|Gloss=sit\PLAC~sit\MID|MGloss=PASS.INT-sit\PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
2	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	3	dep:redup	_	AlignBegin=86058|AlignEnd=86625|Gloss=sit\PLAC~sit\MID|MGloss=PASS.INT-sit\PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
3	ameːsa~sʔeː	_	VERB	V1	VerbClass=1|Voice=Mid	7	advcl	_	AlignBegin=86625|AlignEnd=87192|Gloss=sit\PLAC~sit\MID|MGloss=PASS.INT-sit\PLAC~sit\MID-CVB.SMLT|MSeg=ameː-sa~sʔ-eː|RX=[V1].[DER]-[V1].[DER]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=87192|AlignEnd=88535|TokenType=Break
5	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	det	_	AlignBegin=88535|AlignEnd=88719|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
6	bri	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=88719|AlignEnd=88904|Gloss=rain|RX=[SBJ].[N].[M]|TokenType=Root
7	ʈa~ʈakʷi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=88904|AlignEnd=89273|Gloss=drip\PLAC~drip|MGloss=drip\PLAC~drip-AOR.3SG.M|MSeg=ʈa~ʈakʷ-i|RX=[V2].[DER]-[TAM].[PNG]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=89273|AlignEnd=89838|TokenType=Break

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 dep:redup	color:blue
1	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	AlignBegin=38124|AlignEnd=38402|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
2	aːdim	_	PROPN	N	_	3	dep:comp	_	AlignBegin=38402|AlignEnd=38494|Gloss=Adam|RX=[N].[PROP]|TokenType=Root
3	=i	_	ADP	CASE	Case=Gen	4	dep	_	AlignBegin=38494|AlignEnd=38587|Gloss==GEN|RX==[CASE]|TokenType=Clit
4	=da	_	ADP	POSTP	_	5	obl:arg	_	AlignBegin=38587|AlignEnd=38680|Gloss==DIR|RX==[POSTP]|TokenType=Clit
5	jʔeːtiːt	_	VERB	V2	VerbClass=2	20	advcl	_	AlignBegin=38680|AlignEnd=38959|Gloss=come|MGloss=come-CVB.SEQ|MSeg=jʔ-eːtiːt|RX=[V2].[IRG]-.|TokenType=Root
6	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	7	det	_	AlignBegin=38959|AlignEnd=39098|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
7	dar	_	NOUN	N	Gender=Masc	20	obj	_	AlignBegin=39098|AlignEnd=39237|Gloss=side|RX=[N].[M]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=39237|AlignEnd=39516|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
9	hamʃak	_	ADV	IDEOPH	_	10	dep:redup	_	AlignBegin=39516|AlignEnd=39792|Gloss=rattle|RX=[IDEOPH]|TokenType=Root
10	hamʃak	_	ADV	IDEOPH	_	12	dep:redup	_	AlignBegin=39792|AlignEnd=40068|Gloss=rattle|RX=[IDEOPH]|TokenType=Root
11	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=40068|AlignEnd=40345|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
12	hamʃak	_	ADV	IDEOPH	_	13	dep:redup	_	AlignBegin=40345|AlignEnd=40608|Gloss=rattle|RX=[IDEOPH]|TokenType=Root
13	hamʃak	_	ADV	IDEOPH	_	20	obj	_	AlignBegin=40608|AlignEnd=40871|Gloss=rattle|RX=[IDEOPH]|TokenType=Root
14	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=40871|AlignEnd=41135|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
15	eːt	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Fem|Number=Plur|PronType=Dem	17	det	_	AlignBegin=41135|AlignEnd=41490|Gloss=PROX.PL.F.ACC|RX=[DEM]|TokenType=Root
16	ti=	_	DET	DET	Definite=Def|Gender=Fem	17	det	_	AlignBegin=41490|AlignEnd=41579|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
17	latit	_	NOUN	N	Gender=Fem|Number=Plur	18	dep:comp	_	AlignBegin=41579|AlignEnd=41668|Gloss=leaf\PL|RX=[N].[F]|TokenType=Root
18	=eːb	_	ADP	POSTP	Case=Loc|Number=Plur	20	obl:arg	_	AlignBegin=41668|AlignEnd=41757|Gloss==LOC.PL|RX==[POSTP]|TokenType=Clit
19	=wa	_	CCONJ	CONJ	_	18	cc	_	AlignBegin=41757|AlignEnd=41846|Gloss==COORD|RX==[CONJ]|TokenType=Clit
20	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	21	dep:comp	_	AlignBegin=41846|AlignEnd=42082|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
21	=hoːb	_	SCONJ	CONJ	_	24	dep	_	AlignBegin=42082|AlignEnd=42201|Gloss==when|RX==[CONJ]|TokenType=Clit
22	/	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=42201|AlignEnd=42994|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
23	aːdim	_	PROPN	N	_	24	nsubj	_	AlignBegin=42994|AlignEnd=43323|Gloss=Adam|RX=[SBJ].[N].[PROP]|TokenType=Root
24	jʔa~jʔasi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	31	dep:conj	_	AlignBegin=43323|AlignEnd=43542|Gloss=scrutinize\PLAC|MGloss=scrutinize\PLAC-AOR.3SG.M|MSeg=jʔa~jʔas-i|RX=[V2].[DER]-[TAM].[PNG]|TokenType=Root
25	=t	_	CCONJ	CONJ	_	24	cc	_	AlignBegin=43542|AlignEnd=43652|Gloss==COORD|RX==[CONJ]|TokenType=Clit
26	bak	_	PART	DEICT	_	31	advmod	_	AlignBegin=43652|AlignEnd=43981|Gloss=thus|RX=[DEICT].[MNR]|TokenType=Root
27	/	_	PUNCT	PUNCT	_	26	punct	_	AlignBegin=43981|AlignEnd=44310|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
28	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	29	det	_	AlignBegin=44310|AlignEnd=44427|Gloss=DEF.SG.M=|RX=[DET]=|TokenType=Clit
29	ʔaj	_	NOUN	N	Gender=Masc	31	obj	_	AlignBegin=44427|AlignEnd=44544|Gloss=hand|RX=[N].[M]|TokenType=Root
30	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	29	nmod:poss	_	AlignBegin=44544|AlignEnd=44661|Gloss==POSS.3SG.ACC|RX==[PRO]|TokenType=Clit
31	ʔabiktiːt	_	VERB	V1	VerbClass=1	32	advcl	_	AlignBegin=44661|AlignEnd=45012|Gloss=take|MGloss=take-CVB.SEQ|MSeg=ʔabik-tiːt|RX=[V1]-.|TokenType=Root
32	ʃanbiːb	_	VERB	V1	Aspect=Imp|Number=Sing|Person=3|VerbClass=1	0	root	_	AlignBegin=45012|AlignEnd=45363|Gloss=look\IPFV.3SG|RX=[V1]|TokenType=Root
33	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	32	discourse	_	AlignBegin=45363|AlignEnd=45714|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
34	//	_	PUNCT	PUNCT	_	32	punct	_	AlignBegin=45714|AlignEnd=46652|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep:redup	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	AlignBegin=296091|AlignEnd=296192|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
2	huːri	_	NOUN	N	Gender=Fem	15	nsubj	_	AlignBegin=296192|AlignEnd=296294|Gloss=houri|RX=[SBJ].[N].[F]|TokenType=Root
3	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=296294|AlignEnd=296695|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
4	w#	_	X	FS	_	6	obl:mod	_	AlignBegin=296695|AlignEnd=296983|Gloss=FS|RX=[FS]|TokenType=Root
5	winneːt	_	ADV	ADV	_	4	reparandum	_	AlignBegin=296983|AlignEnd=297271|Gloss=plenty|RX=[ADV]|TokenType=Root
6	daːwri	_	ADJ	ADJ	_	2	amod	_	AlignBegin=297271|AlignEnd=297559|Gloss=beautiful|RX=[ADJ]|TokenType=Root
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=297559|AlignEnd=297847|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
8	t=	_	DET	DET	Definite=Def|Gender=Fem	9	det	_	AlignBegin=297847|AlignEnd=298010|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
9	huːri	_	NOUN	N	Gender=Fem	2	reparandum	_	AlignBegin=298010|AlignEnd=298174|Gloss=houri|RX=[SBJ].[N].[F]|TokenType=Root
10	daːwri	_	ADJ	N	_	11	dep:redup	_	AlignBegin=298174|AlignEnd=298501|Gloss=beautiful|RX=[ADJ]|TokenType=Root
11	daːwri	_	ADJ	ADJ	_	13	dep:comp	_	AlignBegin=298501|AlignEnd=298610|Gloss=beautiful|RX=[ADJ]|TokenType=Root
12	=a	_	AUX	N.COP	Number=Plur|Person=3|VerbType=Cop	11	cop	_	AlignBegin=298610|AlignEnd=298719|Gloss==COP.3PL|RX==[PRED].[N]|TokenType=Clit
13	=t	_	SCONJ	REL	Gender=Fem|PronType=Rel	9	acl:relcl	_	AlignBegin=298719|AlignEnd=298828|Gloss==INDF.F|RX==[REL]|TokenType=Clit
14	hoːj	_	ADP	POSTP	Case=Loc	15	obl:arg	_	AlignBegin=298828|AlignEnd=299155|Gloss=LOC|RX=[POSTP]|TokenType=Root
15	hiːn	_	VERB	V1	Aspect=Aor|Number=Plur|VerbClass=1	17	ccomp	_	AlignBegin=299264|AlignEnd=299482|Gloss=be_there\AOR|MGloss=be_there\AOR-3PL|MSeg=hiː-n|Reported=Yes|RX=[V1].[IRG]-[PNG]|TokenType=Root
16	/	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=299482|AlignEnd=299908|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
17	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=299908|AlignEnd=300059|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
18	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	17	discourse	_	AlignBegin=300059|AlignEnd=300210|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
19	//	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=300210|AlignEnd=301134|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


