---
layout: base
title:  'Statistics of parataxis:parenth in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-parataxis.html">parataxis</a></tt>.
There are also 2 other language-specific subtypes of `parataxis`: <tt><a href="bej_autogramm-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="bej_autogramm-dep-parataxis-mod.html">parataxis:mod</a></tt>.

2 nodes (0%) are attached to their parents as `parataxis:parenth`.

1 instances of `parataxis:parenth` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis:parenth	color:blue
1	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=112743|AlignEnd=112973|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
2	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=112973|AlignEnd=113088|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
3	reːw	_	NOUN	N	Gender=Masc	12	obj	_	AlignBegin=113088|AlignEnd=113203|Gloss=cattle|RX=[N].[M]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=113203|AlignEnd=113433|Gloss=/|TokenType=Break
5	t=	_	DET	DET	Definite=Def|Gender=Fem	6	det	_	AlignBegin=113433|AlignEnd=113529|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
6	ʔanoː	_	NOUN	N	_	3	parataxis:parenth	_	AlignBegin=113529|AlignEnd=113625|Gloss=sheep|RX=[N]|TokenType=Root
7	=t	_	DET	DET	Gender=Fem	6	det	_	AlignBegin=113625|AlignEnd=113721|Gloss==INDF.F|RX==[DET]|TokenType=Clit
8	=a	_	AUX	N.COP	Number=Plur|Person=3|VerbType=Cop	6	cop	_	AlignBegin=113721|AlignEnd=113817|Gloss==COP.3PL|RX==[PRED].[N]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=113817|AlignEnd=114201|Gloss=/|TokenType=Break
10	kass	_	ADJ	DET	_	3	amod	_	AlignBegin=114201|AlignEnd=114348|Gloss=all|RX=[ADJ]|TokenType=Root
11	=oː	_	PRON	PRO	Case=Acc|Number=Sing|Person=3|Poss=Yes	10	nmod:poss	_	AlignBegin=114348|AlignEnd=114495|Gloss==POSS.3SG.ACC|RX==[PRO]|TokenType=Clit
12	ijajna	_	VERB	V2	Aspect=Imp|Number=Plur|VerbClass=2	0	root	_	AlignBegin=114495|AlignEnd=114789|Gloss=take\IPFV|MGloss=3-take\IPFV-PL|MSeg=i-jaj-na|RX=[PNG]-[V2].[IRG]-[PNG]|TokenType=Root
13	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	12	discourse	_	AlignBegin=114789|AlignEnd=115083|Gloss=say\IPFV.3PL|RX=[V1].[IRG]|TokenType=Root
14	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=115083|AlignEnd=115377|Gloss=//|TokenType=Break

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 30 parataxis:parenth	color:blue
1	faʤil	_	NOUN	N	Gender=Masc	4	obl:mod	_	AlignBegin=39083|AlignEnd=39342|Gloss=morning|RX=[N].[M]|TokenType=Root
2	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=39342|AlignEnd=39472|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
3	mha	_	NOUN	N	Gender=Masc	4	nsubj	_	AlignBegin=39472|AlignEnd=39602|Gloss=morning|RX=[SBJ].[N].[M]|TokenType=Root
4	mhii	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	5	dep:comp	_	AlignBegin=39602|AlignEnd=39775|Gloss=be_in_morning|MGloss=be_in_morning-AOR.3SG.M|MSeg=mhi-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
5	=hoːb	_	SCONJ	CONJ	_	10	dep	_	AlignBegin=39775|AlignEnd=39862|Gloss==when|RX==[CONJ]|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=39862|AlignEnd=40122|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
7	i=	_	DET	DET	Definite=Def|Gender=Masc	8	det	_	AlignBegin=40122|AlignEnd=40274|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
8	gaːdi	_	NOUN	N	Gender=Masc	9	dep:comp	_	AlignBegin=40274|AlignEnd=40426|Gloss=judge|RX=[N].[M]|TokenType=Root
9	=da	_	ADP	POSTP	_	10	obl:arg	_	AlignBegin=40426|AlignEnd=40579|Gloss==DIR|RX==[POSTP]|TokenType=Clit
10	ʔeːti	_	VERB	V2	Aspect=Aor|Gender=Fem|Number=Sing|Person=3|VerbClass=2	16	dep:conj	_	AlignBegin=40579|AlignEnd=40807|Gloss=come\AOR.3SG.F|RX=[V2].[IRG]|TokenType=Root
11	=jaːt	_	CCONJ	CONJ	_	10	cc	_	AlignBegin=40807|AlignEnd=41036|Gloss==COORD|RX==[CONJ]|TokenType=Clit
12	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=41036|AlignEnd=41669|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
13	i=	_	DET	DET	Definite=Def|Gender=Masc	14	det	_	AlignBegin=41669|AlignEnd=41843|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
14	ɖeːfa	_	NOUN	N	Gender=Masc	15	dep:comp	_	AlignBegin=41843|AlignEnd=42018|Gloss=door|RX=[N].[M]|TokenType=Root
15	dhaːj	_	ADP	POSTP	_	16	obl:arg	_	AlignBegin=42018|AlignEnd=42367|Gloss=DIR|RX=[POSTP]|TokenType=Root
16	tinkʷiːl	_	VERB	V1	Aspect=Imp|Gender=Fem|Number=Sing|VerbClass=1	17	dep:comp	_	AlignBegin=42367|AlignEnd=42599|Gloss=knock\IPFV|MGloss=3SG.F-knock\IPFV|MSeg=ti-nkʷiːl|RX=[PNG]-[V1]|TokenType=Root
17	=hoːb	_	SCONJ	CONJ	_	33	dep	_	AlignBegin=42599|AlignEnd=42716|Gloss==when|RX==[CONJ]|TokenType=Clit
18	/	_	PUNCT	PUNCT	_	17	punct	_	AlignBegin=42716|AlignEnd=43730|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
19	ahaː	_	INTJ	_	_	23	discourse	_	AlignBegin=43730|AlignEnd=44002|Gloss=ahaː|RX=[FILL]|TokenType=Root
20	//	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=44002|AlignEnd=44440|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
21	ʔa#	_	X	FS	_	26	dep:conj	_	AlignBegin=44440|AlignEnd=44637|Gloss=FS|RX=[FS]|TokenType=Root
22	##	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=44637|AlignEnd=44835|Gloss=PUNCT|RX=[PUNCT]|TokenType=Root
23	ʔar	_	NOUN	N	Gender=Masc|Number=Plur	21	reparandum	_	AlignBegin=44835|AlignEnd=45005|Gloss=child\M.PL|RX=[N]|TokenType=Root
24	=wa	_	CCONJ	CONJ	_	23	cc	_	AlignBegin=45005|AlignEnd=45175|Gloss==COORD|RX==[CONJ]|TokenType=Clit
25	/	_	PUNCT	PUNCT	_	21	punct	_	AlignBegin=45175|AlignEnd=45516|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
26	kiʃja	_	NOUN	N	Number=Plur	30	obj	_	AlignBegin=45516|AlignEnd=45641|Gloss=servant\PL|RX=[N]|TokenType=Root
27	=b	_	DET	DET	Case=Acc|Gender=Masc	26	det	_	AlignBegin=45641|AlignEnd=45766|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
28	=wa	_	CCONJ	CONJ	_	26	cc	_	AlignBegin=45766|AlignEnd=45891|Gloss==COORD|RX==[CONJ]|TokenType=Clit
29	/	_	PUNCT	PUNCT	_	26	punct	_	AlignBegin=45891|AlignEnd=46266|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
30	iːbri	_	VERB	V1	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	33	parataxis:parenth	_	AlignBegin=46266|AlignEnd=46477|Gloss=have\AOR|MGloss=3SG.M-have\AOR|MSeg=iː-bri|RX=[PNG]-[V1].[IRG]|TokenType=Root
31	/	_	PUNCT	PUNCT	_	30	punct	_	AlignBegin=46477|AlignEnd=46689|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
32	dhaːj	_	ADP	POSTP	_	33	obl:arg	_	AlignBegin=46689|AlignEnd=46975|Gloss=DIR|RX=[POSTP]|TokenType=Root
33	ʃuːmseːn	_	VERB	V2	Number=Plur|VerbClass=2	0	root	_	AlignBegin=46975|AlignEnd=47262|Gloss=go_in|MGloss=go_in-CAUS-IPFV.3PL|MSeg=ʃuːm-s-eːn|RX=[V2]-[V2].[DER]-[TAM].[PNG]|TokenType=Root
34	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	33	discourse	_	AlignBegin=47262|AlignEnd=47548|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
35	j=	_	DET	DET	Definite=Def|Gender=Masc	36	det	_	AlignBegin=47548|AlignEnd=47691|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
36	ʔar	_	NOUN	N	Number=Plur	33	dislocated:subj	_	AlignBegin=47691|AlignEnd=47835|Gloss=child\PL|RX=[SBJ].[N]|TokenType=Root
37	//	_	PUNCT	PUNCT	_	33	punct	_	AlignBegin=47835|AlignEnd=49036|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


