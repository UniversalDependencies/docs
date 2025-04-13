---
layout: base
title:  'Statistics of dislocated:obj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `dislocated:obj`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_autogramm-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="bej_autogramm-dep-dislocated-subj.html">dislocated:subj</a></tt>.

62 nodes (1%) are attached to their parents as `dislocated:obj`.

38 instances of `dislocated:obj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.06451612903226.

The following 8 pairs of parts of speech are connected with `dislocated:obj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (50; 81% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (6; 10% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (1; 2% instances).


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
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 dislocated:obj	color:blue
1	tak	_	NOUN	N	Gender=Masc	8	nsubj	_	AlignBegin=0|AlignEnd=351|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|Gloss=elder|RX=[CN]|TokenType=Root
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|Gloss=relatives|RX=[N]|TokenType=Root
6	tak	_	NOUN	N	Gender=Masc	7	dep:comp	_	AlignBegin=2593|AlignEnd=2761|Gloss=man|RX=[N].[M]|TokenType=Root
7	=i	_	ADP	CASE	Case=Gen	1	dep	_	AlignBegin=2761|AlignEnd=2930|Gloss==GEN|RX==[CASE]|TokenType=Clit|wordform=-i
8	iːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	12	dep:conj	_	AlignBegin=2930|AlignEnd=3154|Gloss=be_there\AOR|MGloss=3SG.M-be_there\AOR|MSeg=iː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Root
9	=t	_	CCONJ	CCONJ	_	8	cc	_	AlignBegin=3154|AlignEnd=3267|Gloss==COORD|RX==[CONJ]|TokenType=Clit
10	amsi	_	ADV	ADV	_	12	advmod	_	AlignBegin=3267|AlignEnd=3603|Gloss=today|RX=[ADV]|TokenType=Root
11	iraːnaj	_	INTJ	_	_	12	discourse	_	AlignBegin=3603|AlignEnd=3940|Gloss=gosh|RX=[EXCL]|TokenType=Root
12	rhi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4277|Gloss=see|MGloss=see-AOR.3SG.M|MSeg=rh-i|RX=[V2]-[TAM].[PNG]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
14	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	15	det	_	AlignBegin=4764|AlignEnd=4921|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
15	kna	_	PRON	PRO	Reflex=Yes	12	dislocated:obj	_	AlignBegin=4921|AlignEnd=5079|Gloss=owner|RX=[PRO].[REFL]|TokenType=Root
16	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

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


