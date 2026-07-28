---
layout: base
title:  'Statistics of nmod in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bej_autogramm-dep-nmod-poss.html">nmod:poss</a></tt>.

156 nodes (1%) are attached to their parents as `nmod`.

87 instances of `nmod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18589743589744.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (42; 27% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (33; 21% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (29; 19% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (15; 10% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (12; 8% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	kass	_	ADJ	DET	_	5	amod	_	AlignBegin=320377|AlignEnd=320603|Gloss=all|RX=[ADJ]|TokenType=Root
2	=eː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	1	nmod:poss	_	AlignBegin=320603|AlignEnd=320830|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
3	eːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Plur	5	det	_	AlignBegin=320830|AlignEnd=321283|Gloss=PROX.PL.M.ACC|RX=[DEM]|TokenType=Root
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=321283|AlignEnd=321434|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
5	ʤinsa	_	NOUN	N	Gender=Masc|Number=Plur	7	nmod	_	AlignBegin=321434|AlignEnd=321736|Gloss=sort|MGloss=sort-PL|MSeg=ʤins-a|RX=[N].[M]|TokenType=Root
6	i=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	AlignBegin=321736|AlignEnd=321849|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
7	xadaːra	_	NOUN	N	Gender=Masc|Number=Plur	8	dep:comp	_	AlignBegin=321849|AlignEnd=322075|Gloss=vegetable|MGloss=vegetable-PL|MSeg=xadaːr-a|RX=[N].[M]|TokenType=Root
8	=jeːb	_	ADP	POSTP	Case=Loc|Number=Plur	10	obl:arg	_	AlignBegin=322075|AlignEnd=322189|Gloss==LOC.PL|RX==[POSTP]|TokenType=Clit
9	hoːj	_	PRON	PRO	_	10	iobj	_	AlignBegin=322189|AlignEnd=322642|Gloss=3.DAT/ABL|RX=[PRO]|TokenType=Root
10	iːbrina	_	VERB	V1	Aspect=Aor|Number=Plur|VerbClass=1	0	root	_	AlignBegin=322642|AlignEnd=323095|Gloss=have\AOR|MGloss=3-have\AOR-PL|MSeg=iː-bri-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root
11	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=323095|AlignEnd=323546|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	i=	_	DET	DET	Definite=Def|Gender=Masc	2	det	_	AlignBegin=140130|AlignEnd=140233|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
2	ragad	_	NOUN	N	Gender=Masc	11	nsubj	_	AlignBegin=140233|AlignEnd=140336|Gloss=leg|RX=[SBJ].[N].[M]|TokenType=Root
3	/	_	PUNCT	_	_	2	punct	_	AlignBegin=140336|AlignEnd=140541|Gloss=/|TokenType=Break
4	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	5	det	_	AlignBegin=140541|AlignEnd=140633|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
5	harʔiː	_	ADP	N	_	2	nmod	_	AlignBegin=140633|AlignEnd=140725|Gloss=behind|RX=[POSTP]|TokenType=Root
6	=wwa	_	CCONJ	CONJ	_	5	cc	_	AlignBegin=140817|AlignEnd=140911|Gloss==COORD|RX==[CONJ]|TokenType=Clit
7	i=	_	DET	DET	Gender=Masc	8	det	_	AlignBegin=140911|AlignEnd=141003|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
8	suːriː	_	ADP	N	_	5	dep:conj	_	AlignBegin=141003|AlignEnd=141095|Gloss=in_font_of|RX=[POSTP]|TokenType=Root
9	=wwa	_	CCONJ	CONJ	_	8	cc	_	AlignBegin=141187|AlignEnd=141281|Gloss==COORD|RX==[CONJ]|TokenType=Clit
10	/	_	PUNCT	_	_	8	punct	_	AlignBegin=141281|AlignEnd=141652|Gloss=/|TokenType=Break
11	taɖoːmaːb	_	VERB	V2	Gender=Masc|VerbClass=2	0	root	_	AlignBegin=141652|AlignEnd=141937|Gloss=be_fastened|MGloss=be_fastened-CVB.MNR-INDF.M.ACC|MSeg=taɖoːm-aː-b|RX=[V2]-[PRF]-[DET]|TokenType=Root
12	=a	_	AUX	CONJ.COP	Number=Plur|Person=3|VerbType=Cop	11	cop	_	AlignBegin=141937|AlignEnd=142032|Gloss==COP.3PL|RX==[CONJ]|TokenType=Clit
13	=ajt	_	SCONJ	CONJ	_	11	dep	_	AlignBegin=142032|AlignEnd=142125|Gloss==CSL|RX==[CONJ]|TokenType=Clit
14	//	_	PUNCT	_	_	11	punct	_	AlignBegin=142125|AlignEnd=142598|Gloss=//|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	halla	_	NOUN	N	Gender=Fem	5	obj	_	AlignBegin=106501|AlignEnd=106696|Gloss=village|RX=[N].[F]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=106696|AlignEnd=106891|Gloss==INDF.F|RX==[DET]|TokenType=Clit
3	sagi	_	ADJ	ADJ	_	1	nmod	_	AlignBegin=106891|AlignEnd=107086|Gloss=far|RX=[ADJ]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=107086|AlignEnd=107281|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	beːtiːt	_	VERB	V1	VerbClass=1	11	advcl	_	AlignBegin=107281|AlignEnd=107671|Gloss=go|MGloss=go-CVB.SEQ|MSeg=beː-tiːt|RX=[V1].[DER].[IRG]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=107671|AlignEnd=108063|Gloss=/|TokenType=Break
7	geː	_	PART	PTCL	_	9	discourse	_	AlignBegin=108824|AlignEnd=108968|Gloss=DM|RX=[PTCL]|TokenType=Root
8	/	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=108968|AlignEnd=109113|Gloss=/|TokenType=Break
9	ʃʔaː	_	NOUN	N	Gender=Masc	11	obj	_	AlignBegin=109113|AlignEnd=109337|Gloss=cow|RX=[N].[M]|TokenType=Root
10	=jeː	_	PRON	PRO	Case=Acc|Number=Plur|Person=3|Poss=Yes	9	nmod:poss	_	AlignBegin=109337|AlignEnd=109560|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
11	ijajna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	AlignBegin=109560|AlignEnd=110007|Gloss=take\IPFV|MGloss=3-take\IPFV-PL|MSeg=i-jaj-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=110007|AlignEnd=110455|Gloss=/|TokenType=Break

~~~


