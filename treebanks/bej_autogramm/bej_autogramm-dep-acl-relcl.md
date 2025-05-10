---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-acl.html">acl</a></tt>.

214 nodes (2%) are attached to their parents as `acl:relcl`.

136 instances of `acl:relcl` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (180; 84% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (22; 10% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 acl:relcl	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	AlignBegin=30643|AlignEnd=30859|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|Gloss==INDF.M.ACC|RX==[DET]|TokenType=Clit
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	AlignBegin=31075|AlignEnd=31507|Gloss=ABL|RX=[POSTP]|TokenType=Root
4	=oː	_	PRON	PRO	Case=Acc	3	dep	_	AlignBegin=31075|AlignEnd=31507|Gloss==POSS.3PL.ACC|RX==[PRO]|TokenType=Clit
5	ʃʔagaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31831|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR-INDF.M.ACC|MSeg=ʃʔag-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	AlignBegin=31831|AlignEnd=31939|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=31939|AlignEnd=32155|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
10	ʔasalaːb	_	VERB	V2	Gender=Masc|VerbClass=2	12	dep:comp	_	AlignBegin=32803|AlignEnd=33206|Gloss=grill|MGloss=grill-CVB.MNR-INDF.M.ACC|MSeg=ʔasal-aː-b|RX=[V2]-[PRF]-[DET]|TokenType=Root
11	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	aux	_	AlignBegin=33206|AlignEnd=33474|Gloss=become\AOR|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
12	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	1	acl:relcl	_	AlignBegin=33474|AlignEnd=33609|Gloss==REL.SG.M|RX==[CONJ]|TokenType=Clit
13	/	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl:relcl	color:blue
1	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	2	det	_	AlignBegin=60529|AlignEnd=60695|Gloss=DEF.SG.M.NOM=|RX=[DET]=|TokenType=Clit
2	tak	_	NOUN	N	Gender=Masc	5	nsubj	_	AlignBegin=60695|AlignEnd=60861|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
3	ɖaːbiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	4	acl:relcl	_	AlignBegin=60861|AlignEnd=61193|Gloss=run|MGloss=run-IPFV.3SG.M|MSeg=ɖaːb-iːni|RX=[V2]-[TAM].[PNG]|TokenType=Root
4	kaːm	_	NOUN	N	_	5	obj	_	AlignBegin=61193|AlignEnd=61525|Gloss=camel|RX=[N]|TokenType=Root
5	ibari	_	VERB	V1,IRG	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=61525|AlignEnd=61857|Gloss=have\IPFV|MGloss=3SG.M-have\IPFV|MSeg=i-bari|RX=[PNG]-[V1].[IRG]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=61857|AlignEnd=62190|TokenType=Break

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 acl:relcl	color:blue
1	ti=	_	PRON	REL	Definite=Def|Gender=Fem|PronType=Rel	6	dep:comp	_	AlignBegin=249620|AlignEnd=249696|Gloss=DEF.F=|RX=[REL]=|TokenType=Clit
2	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	3	det	_	AlignBegin=249696|AlignEnd=249772|Gloss=DEF.SG.M=|RX=[DET]=|TokenType=Clit
3	hagiː	_	NOUN	N	Gender=Masc	1	acl:relcl	_	AlignBegin=249772|AlignEnd=249848|Gloss=buttocks|RX=[N].[M]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=249848|AlignEnd=249924|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=249924|AlignEnd=250000|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
6	=ka	_	ADP	POSTP	Case=Dis	8	dep:comp	_	AlignBegin=250000|AlignEnd=250077|Gloss==DISTR|RX==[POSTP]|TokenType=Clit
7	hanka	_	ADV	ADV	_	8	advmod	_	AlignBegin=250077|AlignEnd=250534|Gloss=before|RX=[ADV]|TokenType=Root
8	fitikna	_	VERB	V1	Number=Plur|VerbClass=1	13	ccomp	_	AlignBegin=250534|AlignEnd=250991|Gloss=dig_up|MGloss=dig_up-IMP.PL|MSeg=fitik-na|Reported=Yes|RX=[V1]-[TAM].[PNG]|TokenType=Root
9	/	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=250991|AlignEnd=251448|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
10	aː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	11	det	_	AlignBegin=251448|AlignEnd=251570|Gloss=DEF.PL.M.NOM=|RX=[DET]=|TokenType=Clit
11	nda	_	NOUN	N	Gender=Masc|Number=Plur	13	nsubj	_	AlignBegin=251570|AlignEnd=251692|Gloss=man\PL|RX=[SBJ].[N].[M]|TokenType=Root
12	dhaːj	_	ADP	POSTP	_	13	obl:arg	_	AlignBegin=251692|AlignEnd=251937|Gloss=DIR|RX=[POSTP]|TokenType=Root
13	jʔeːn	_	VERB	V2	Number=Plur|VerbClass=2	14	dep:comp	_	AlignBegin=251937|AlignEnd=252099|Gloss=come|MGloss=come-IPFV.3PL|MSeg=jʔ-eːn|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
14	=hoːb	_	SCONJ	CONJ	_	25	dep	_	AlignBegin=252099|AlignEnd=252181|Gloss==when|RX==[CONJ]|TokenType=Clit
15	/	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=252181|AlignEnd=252426|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
16	ti=	_	PRON	REL	Definite=Def|Gender=Fem|PronType=Rel	21	dep:comp	_	AlignBegin=252426|AlignEnd=252509|Gloss=DEF.F=|RX=[REL]=|TokenType=Clit
17	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	18	det	_	AlignBegin=252509|AlignEnd=252593|Gloss=DEF.SG.M=|RX=[DET]=|TokenType=Clit
18	hagiː	_	NOUN	N	Gender=Masc	16	acl:relcl	_	AlignBegin=252593|AlignEnd=252677|Gloss=buttocks|RX=[N].[M]|TokenType=Root
19	=t	_	DET	DET	Gender=Fem	18	det	_	AlignBegin=252677|AlignEnd=252760|Gloss==INDF.F|RX==[DET]|TokenType=Clit
20	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=252760|AlignEnd=252844|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
21	=ka	_	ADP	POSTP	Case=Dis	23	dep:comp	_	AlignBegin=252844|AlignEnd=252928|Gloss==DISTR|RX==[POSTP]|TokenType=Clit
22	hanka	_	ADV	ADV	_	23	advmod	_	AlignBegin=252928|AlignEnd=253431|Gloss=before|RX=[ADV]|TokenType=Root
23	fitikna	_	VERB	V1	Number=Plur|VerbClass=1	25	ccomp	_	AlignBegin=253431|AlignEnd=253934|Gloss=dig_up|MGloss=dig_up-IMP.PL|MSeg=fitik-na|Reported=Yes|RX=[V1]-[TAM].[PNG]|TokenType=Root
24	/	_	PUNCT	PUNCT	_	23	punct	_	AlignBegin=253934|AlignEnd=254437|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
25	tindi	_	VERB	V1	Aspect=Imp|Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=254437|AlignEnd=254568|Gloss=say\IPFV|MGloss=3SG.F-say\IPFV|MSeg=ti-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
26	eːn	_	VERB	V1	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	25	discourse	_	AlignBegin=254568|AlignEnd=254699|Gloss=say\PFV.3PL|RX=[V1].[IRG]|TokenType=Root
27	//	_	PUNCT	PUNCT	_	25	punct	_	AlignBegin=254699|AlignEnd=255533|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


