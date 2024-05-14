---
layout: base
title:  'Statistics of appos in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `appos`

This relation is universal.

9 nodes (0%) are attached to their parents as `appos`.

9 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (2; 22% instances), <tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADP.html">ADP</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="bej_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_nsc-pos-ADV.html">ADV</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 appos	color:blue
1	ʔamaːr	_	NOUN	N	Gender=Masc	4	obj	_	AlignBegin=31461|AlignEnd=31663|GE=possessions|RX=[N].[M]|TokenType=Root
2	=oːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1|Poss=Yes	1	nmod:poss	_	AlignBegin=31663|AlignEnd=31866|GE=[POSS].[1PL].[ACC]|RX=[PRO]|TokenType=Clit
3	baː=	_	PART	PTCL	Polarity=Neg	4	advmod	_	AlignBegin=31866|AlignEnd=32001|GE=[NEG].[PROH]|RX=[PTCL]|TokenType=Clit
4	kʷaːsa	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=32001|AlignEnd=32271|GE=create[IMP].[SG].[M]|MGloss=create[IMP].[SG].[M]|MSeg=kʷaːs-a|RX=[V1].[IRG][TAM].[PNG]|TokenType=Root
5	samaːr	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=32271|AlignEnd=32473|GE=offspring|RX=[N].[M]|TokenType=Root
6	=oːn	_	PRON	PRO	Case=Acc|Number=Plur|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=32473|AlignEnd=32676|GE=[POSS].[1PL].[ACC]|RX=[PRO]|TokenType=Clit
7	//	_	PUNCT	_	_	6	punct	_	AlignBegin=33081|AlignEnd=33487|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 23 appos	color:blue
1	difeː	_	VERB	V1	VerbClass=1	20	advcl	_	AlignBegin=260224|AlignEnd=260468|GE=leave[CVB].[SMLT]|MGloss=leave[CVB].[SMLT]|MSeg=dif-eː|RX=[V1]|TokenType=Root
2	/	_	PUNCT	_	_	1	punct	_	AlignBegin=260468|AlignEnd=260712|GE=[/]|TokenType=Break
3	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	AlignBegin=260869|AlignEnd=261073|GE=[PROX].[SG].[M].[ACC]|RX=[DEM]|TokenType=Root
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=261073|AlignEnd=261175|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
5	darab	_	NOUN	N	Gender=Masc	14	nmod	_	AlignBegin=261175|AlignEnd=261277|GE=path|RX=[N].[M]|TokenType=Root
6	/	_	PUNCT	_	_	5	punct	_	AlignBegin=261277|AlignEnd=261482|GE=[/]|TokenType=Break
7	w=	_	SCONJ	REL	Definite=Def|Gender=Masc|Number=Sing|PronType=Rel	11	dep:comp	_	AlignBegin=262499|AlignEnd=262603|GE=[DEF].[SG].[M]|RX=[REL]|TokenType=Clit
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=262603|AlignEnd=262707|GE=[DEF].[M]|RX=[DET]|TokenType=Clit
9	gabal	_	NOUN	N	Gender=Masc	11	nsubj	_	AlignBegin=262707|AlignEnd=262811|GE=direction|RX=[N].[M]|TokenType=Root
10	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	9	nmod:poss	_	AlignBegin=262811|AlignEnd=262915|GE=[POSS].[1SG].[NOM]|RX=[PRO]|TokenType=Clit
11	iniːn	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	12	parataxis	_	AlignBegin=262915|AlignEnd=263331|GE=[3SG].[M]take\IPFV|MGloss=[3SG].[M]take\IPFV|MSeg=i-niːn|RX=[PNG][V1].[IRG]|TokenType=Root
12	iːd	_	VERB	V1	Aspect=Aor|Number=Sing|VerbClass=1	13	dep:comp	_	AlignBegin=263331|AlignEnd=263497|GE=[1SG]say\AOR|MGloss=[1SG]say\AOR|MSeg=iː-d|RX=[PNG][V1].[IRG]|TokenType=Root
13	=eː	_	SCONJ	CONJ.REL	PronType=Rel	14	acl:relcl	_	AlignBegin=263497|AlignEnd=263580|GE=[REL]|RX=[CONJ]|TokenType=Clit
14	=naː	_	NOUN	CONJ	_	15	dep:comp	_	AlignBegin=263580|AlignEnd=263663|GE=thing|RX=[CONJ]|TokenType=Clit
15	=ji	_	ADP	CASE	Case=Gen	16	obl:arg	_	AlignBegin=263663|AlignEnd=263747|GE=[GEN]|RX=[CASE]|TokenType=Clit
16	difeː	_	VERB	V1	VerbClass=1	1	reparandum	_	AlignBegin=263747|AlignEnd=264163|GE=leave[CVB].[SMLT]|MGloss=leave[CVB].[SMLT]|MSeg=dif-eː|RX=[V1]|TokenType=Root
17	/	_	PUNCT	_	_	1	punct	_	AlignBegin=264163|AlignEnd=264581|GE=[/]|TokenType=Break
18	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	19	det	_	AlignBegin=265780|AlignEnd=265905|GE=[DEF].[SG].[M].[ACC]|RX=[DET]|TokenType=Clit
19	mhiːn	_	NOUN	N	Gender=Masc	20	obj	_	AlignBegin=265905|AlignEnd=266030|GE=place|RX=[N].[M]|TokenType=Root
20	jʔan	_	VERB	V2	Number=Sing|VerbClass=2	0	root	_	AlignBegin=266030|AlignEnd=266280|GE=come[PFV].[1SG]|MGloss=come[PFV].[1SG]|MSeg=jʔ-an|RX=[V2].[IRG][TAM].[PNG]|TokenType=Root
21	/	_	PUNCT	_	_	20	punct	_	AlignBegin=266280|AlignEnd=266531|GE=[/]|TokenType=Break
22	ti=	_	DET	DET	Definite=Def|Gender=Fem	23	det	_	AlignBegin=266912|AlignEnd=267102|GE=[DEF].[F]|RX=[DET]|TokenType=Clit
23	gabaːti	_	PROPN	N	_	19	appos	_	AlignBegin=267102|AlignEnd=267292|GE=[Gabaati]|RX=[N].[PROP]|TokenType=Root
24	//	_	PUNCT	_	_	23	punct	_	AlignBegin=267292|AlignEnd=267672|GE=[//]|TokenType=Break

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 appos	color:blue
1	mʔaːna	_	VERB	V2,IRG	Number=Plur|VerbClass=2	2	parataxis	_	AlignBegin=63076|AlignEnd=63427|GE=come-[IMP].[PL]|Gloss=come|MGloss=come-IMP.PL|MSeg=mʔ-aːna|ReportedSpeech=Yes|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
2	dija	_	VERB	V1,IRG	VerbClass=1	3	advcl	_	AlignBegin=63427|AlignEnd=63778|GE=say-[CVB].[MNR]|Gloss=say|MGloss=say-CVB.MNR|MSeg=di-ja|RX=[V1].[IRG]|TokenType=Root
3	waliːka	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=63778|AlignEnd=63918|GE=call-[CVB].[MNR]|Gloss=call|MGloss=call-CVB.MNR|MSeg=waliːk-a|RX=[V2]-[PRF]|TokenType=Root
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=63918|AlignEnd=63988|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=63988|AlignEnd=64058|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
6	=it	_	SCONJ	CONJ	_	3	dep	_	AlignBegin=64058|AlignEnd=64129|GE==[CSL]|RX==[CONJ]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=64129|AlignEnd=64480|TokenType=Break
8	sagi	_	ADJ	ADJ	_	9	amod	_	AlignBegin=64480|AlignEnd=64715|GE=far|Gloss=far|RX=[ADJ]|TokenType=Root
9	haːʃ	_	NOUN	N	Gender=Masc	10	dep:comp	_	AlignBegin=64715|AlignEnd=64832|GE=land|Gloss=land|RX=[N].[M]|TokenType=Root
10	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	3	dislocated	_	AlignBegin=64832|AlignEnd=64950|GE==[ABL].[SG]|RX==[POSTP]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=64950|AlignEnd=65185|TokenType=Break
12	beːn	_	ADV	ADV	_	9	appos	_	AlignBegin=65185|AlignEnd=65353|GE=there|Gloss=there|RX=[ADV]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=65353|AlignEnd=65734|TokenType=Break
14	ʔarjab	_	PROPN	NP	_	12	appos	_	AlignBegin=65734|AlignEnd=65930|GE=[Aryab]|ProperName=Aryab|RX=[N].[PROP]|TokenType=Root
15	=wa	_	CCONJ	CCONJ	_	14	cc	_	AlignBegin=65930|AlignEnd=66126|GE==[COORD]|RX==[CONJ]|TokenType=Clit
16	mariː	_	ADV	ADV	_	14	appos	_	AlignBegin=66126|AlignEnd=66322|GE=from_the_direction|Gloss=from_the_direction|RX=[ADV]|TokenType=Root
17	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	16	det	_	AlignBegin=66322|AlignEnd=66518|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
18	i=	_	DET	DET	Definite=Def|Gender=Masc	19	det	_	AlignBegin=66518|AlignEnd=66648|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
19	dar	_	NOUN	N	Gender=Masc	20	dep:comp	_	AlignBegin=66648|AlignEnd=66779|GE=side|Gloss=side|RX=[N].[M]|TokenType=Root
20	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	16	appos	_	AlignBegin=66779|AlignEnd=66910|GE==[ABL].[SG]|RX==[POSTP]|TokenType=Clit
21	/	_	PUNCT	PUNCT	_	20	punct	_	AlignBegin=66910|AlignEnd=68424|TokenType=Break

~~~


