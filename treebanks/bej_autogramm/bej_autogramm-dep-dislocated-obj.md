---
layout: base
title:  'Statistics of dislocated:obj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_autogramm-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="bej_autogramm-dep-dislocated-subj.html">dislocated:subj</a></tt>.

64 nodes (1%) are attached to their parents as `dislocated:obj`.

36 instances of `dislocated:obj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.515625.

The following 5 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (50; 78% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (11; 17% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated:obj	color:blue
1	agar	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1|Voice=Mid	2	compound:svc	_	AlignBegin=84523|AlignEnd=84765|Gloss=come_back\MID.PFV|MGloss=1SG-come_back\MID.PFV|MSeg=a-gar|RX=[PNG]-[V1].[DER]|TokenType=Root
2	jʔan	_	VERB	V2,IRG	Number=Sing|VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84926|Gloss=come|MGloss=come-PFV.1SG|MSeg=jʔ-an|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=84926|AlignEnd=85007|Gloss==COORD|RX==[CONJ]|TokenType=Clit
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=85007|AlignEnd=85087|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
5	gaw	_	NOUN	N	Gender=Masc	2	dislocated:obj	_	AlignBegin=85087|AlignEnd=85168|Gloss=house|RX=[N].[M]|TokenType=Root
6	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dislocated:obj	color:blue
1	iri	_	ADV	ADV	_	5	advmod	_	AlignBegin=85746|AlignEnd=85933|Gloss=yesterday|RX=[ADV]|TokenType=Root
2	oːn	_	DET	DEM	Case=Acc|Deixis=Prox|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	AlignBegin=85933|AlignEnd=86121|Gloss=PROX.SG.M.ACC|RX=[DEM]|TokenType=Root
3	aneːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	5	dislocated:obj	_	AlignBegin=86121|AlignEnd=86309|Gloss=1SG.ACC|RX=[PRO]|TokenType=Root
4	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=86309|AlignEnd=86497|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
5	timwadaj	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=86497|AlignEnd=86754|Gloss=fix_appointment\PFV|MGloss=2SG.M-RECP-fix_appointment\PFV|MSeg=ti-m-wadaj|RX=[PNG]-[V1].[DER]-[V1]|TokenType=Root
6	=heːb	_	PRON	PRO	Case=Acc|Number=Sing|Person=1	5	obj	_	AlignBegin=86754|AlignEnd=86840|Gloss==OBJ.1SG|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=86840|AlignEnd=87696|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 dislocated:obj	color:blue
1	ifif	_	VERB	V1	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	2	compound:svc	_	AlignBegin=97266|AlignEnd=97476|Gloss=pour\PFV|MGloss=3SG.M-pour\PFV|MSeg=i-fif|RX=[PNG]-[V1]|TokenType=Root
2	ihi	_	AUX	AUX.BENF	Aspect=Perf|Gender=Masc|Number=Sing	0	root	_	AlignBegin=97476|AlignEnd=97686|Gloss=give\PFV|MGloss=3SG.M-give\PFV|MSeg=i-hi|RX=[PNG]-[AUX].[BENF]|TokenType=Root
3	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	2	discourse	_	AlignBegin=97686|AlignEnd=97896|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
4	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=97896|AlignEnd=98329|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
5	gaːl	_	NUM	NUM	_	6	dep:comp	_	AlignBegin=98329|AlignEnd=98416|Gloss=one|RX=[NUM]|TokenType=Root
6	=eː	_	ADP	CASE	Case=Gen|Number=Plur	7	dep:comp	_	AlignBegin=98416|AlignEnd=98503|Gloss==GEN.PL|RX==[CASE]|TokenType=Clit
7	=ka	_	ADP	POSTP	Case=Dis	2	dislocated:obj	_	AlignBegin=98503|AlignEnd=98591|Gloss==DISTR|RX==[POSTP]|TokenType=Clit
8	//	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=98591|AlignEnd=99152|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


