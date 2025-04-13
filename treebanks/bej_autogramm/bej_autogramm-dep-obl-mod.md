---
layout: base
title:  'Statistics of obl:mod in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="bej_autogramm-dep-obl-arg.html">obl:arg</a></tt>.

117 nodes (1%) are attached to their parents as `obl:mod`.

116 instances of `obl:mod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.61538461538461.

The following 10 pairs of parts of speech are connected with `obl:mod`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (98; 84% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (10; 9% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:mod	color:blue
1	da	_	NOUN	N	Gender=Masc|Number=Plur	5	nsubj	_	AlignBegin=52560|AlignEnd=52754|Gloss=man\PL|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=52754|AlignEnd=53717|TokenType=Break
3	bʔeː	_	NOUN	N	Gender=Masc	5	obl:mod	_	AlignBegin=53717|AlignEnd=53884|Gloss=day|RX=[N].[M]|TokenType=Root
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=53884|AlignEnd=54051|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
5	eːjaːn	_	VERB	V2,IRG	Aspect=Perf|Number=Plur|VerbClass=2	7	ccomp	_	AlignBegin=54051|AlignEnd=54273|Gloss=come\PFV|MGloss=come\PFV-3PL|MSeg=eːjaː-n|Reported=Yes|ReportedSpeech=Yes|RX=[V2].[IRG]-[PNG]|TokenType=Root
6	=heːb	_	PRON	PRO	Number=Sing|Person=1	5	obj	_	AlignBegin=54273|AlignEnd=54385|Gloss==OBJ.1SG|RX==[PRO]|TokenType=Clit
7	ini	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=54385|AlignEnd=54719|Gloss=say\PFV|MGloss=3SG.M-say\PFV|MSeg=i-ni|RX=[PNG]-[V1].[IRG]|TokenType=Root
8	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=54719|AlignEnd=55636|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 obl:mod	color:blue
1	uːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	AlignBegin=111498|AlignEnd=111703|Gloss=PROX.SG.M.NOM|RX=[DEM]|TokenType=Root
2	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	8	nsubj	_	AlignBegin=111703|AlignEnd=111909|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
3	eːt	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Fem|Number=Plur|PronType=Dem	5	det	_	AlignBegin=111909|AlignEnd=112114|Gloss=PROX.PL.F.ACC|RX=[DEM]|TokenType=Root
4	t=	_	DET	DET	Definite=Def|Gender=Fem	5	det	_	AlignBegin=112114|AlignEnd=112165|Gloss=DEF.F=|RX=[DET]=|TokenType=Clit
5	ʔar	_	NOUN	N	Gender=Masc|Number=Plur	8	obj	_	AlignBegin=112165|AlignEnd=112217|Gloss=child\M.PL|RX=[N]|TokenType=Root
6	=t	_	DET	DET	Gender=Fem	5	det	_	AlignBegin=112217|AlignEnd=112268|Gloss==INDF.F|RX==[DET]|TokenType=Clit
7	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=112268|AlignEnd=112320|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
8	eːbi	_	VERB	V1	Aspect=Imp|Number=Sing|VerbClass=1	9	dep:comp	_	AlignBegin=112320|AlignEnd=112456|Gloss=go\INT.IPFV|MGloss=1SG-go\INT.IPFV|MSeg=eː-bi|RX=[PNG]-[V1].[DER].[IRG]|TokenType=Root
9	=hoːb	_	SCONJ	CONJ	_	14	dep	_	AlignBegin=112456|AlignEnd=112525|Gloss==when|RX==[CONJ]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=112525|AlignEnd=113086|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
11	naː	_	PRON	PRO	PronType=Int	14	obl:mod	_	AlignBegin=113086|AlignEnd=113447|Gloss=which|RX=[PRO].[Q]|TokenType=Root
12	fiːr	_	NOUN	N	Gender=Masc|Number=Plur	13	dep:comp	_	AlignBegin=113447|AlignEnd=113627|Gloss=face|RX=[N].[PL].[M]|TokenType=Root
13	=eː	_	ADP	POSTP	Case=Abl|Number=Plur	14	obl:arg	_	AlignBegin=113627|AlignEnd=113808|Gloss==ABL.PL|RX==[POSTP]|TokenType=Clit
14	amnfariːd	_	VERB	V1	Aspect=Imp|Number=Sing|VerbClass=1	0	root	_	AlignBegin=113808|AlignEnd=114169|Gloss=talk\IPFV|MGloss=1SG-RECP-talk\IPFV|MSeg=a-m-nfariːd|RX=[PNG]-[DER].[V1]-[V1]|TokenType=Root
15	?	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=114169|AlignEnd=114693|Gloss=PUNCT|RX=[PUNCT]|TokenType=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl:mod	color:blue
1	malia	_	ADJ	NUM	_	3	advcl	_	AlignBegin=185933|AlignEnd=186197|Gloss=two|MGloss=two-ORD|MSeg=mali-a|RX=[NUM]-[NUM]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=186197|AlignEnd=186462|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
3	kaɖawiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	6	dep:conj	_	AlignBegin=186462|AlignEnd=186833|Gloss=make_noise|MGloss=make_noise-IPFV.3SG.M|MSeg=kaɖaw-iːni|RX=[V2]-[TAM].[PNG]|TokenType=Root
4	malia	_	ADJ	NUM	_	6	obl:mod	_	AlignBegin=186833|AlignEnd=187081|Gloss=two|MGloss=two-ORD|MSeg=mali-a|RX=[SBJ].[NUM]-[NUM]|TokenType=Root
5	=t	_	DET	DET	Gender=Fem	4	det	_	AlignBegin=187081|AlignEnd=187205|Gloss==INDF.F|RX==[DET]|TokenType=Clit
6	ʃuːmtini	_	VERB	V2	Gender=Fem|Number=Sing|VerbClass=2	0	root	_	AlignBegin=187205|AlignEnd=187576|Gloss=go_in|MGloss=go_in-IPFV.3SG.F|MSeg=ʃuːm-tini|RX=[V2]-[TAM].[PNG]|TokenType=Root
7	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=187576|AlignEnd=187948|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


