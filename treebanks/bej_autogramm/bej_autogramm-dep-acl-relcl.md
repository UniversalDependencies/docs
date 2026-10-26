---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-acl.html">acl</a></tt>.

205 nodes (2%) are attached to their parents as `acl:relcl`.

133 instances of `acl:relcl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.97560975609756.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (170; 83% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (24; 12% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
11	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	aux	_	AlignBegin=33206|AlignEnd=33474|Gloss=become\AOR|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RelRole=Obj|RX=[PNG]-[AUX].[PRF]|TokenType=Root
12	=jeːb	_	SCONJ	CONJ	Gender=Masc|PronType=Rel	1	acl:relcl	_	AlignBegin=33474|AlignEnd=33609|Gloss==REL.M|RX==[CONJ]|TokenType=Clit
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
3	ɖaːbiːni	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	4	acl:relcl	_	AlignBegin=60861|AlignEnd=61193|Gloss=run|MGloss=run-IPFV.3SG.M|MSeg=ɖaːb-iːni|RelRole=Subj|RX=[V2]-[TAM].[PNG]|TokenType=Root
4	kaːm	_	NOUN	N	_	5	obj	_	AlignBegin=61193|AlignEnd=61525|Gloss=camel|RX=[N]|TokenType=Root
5	ibari	_	VERB	V1,IRG	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=61525|AlignEnd=61857|Gloss=have\IPFV|MGloss=3SG.M-have\IPFV|MSeg=i-bari|RX=[PNG]-[V1].[IRG]|TokenType=Root
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=61857|AlignEnd=62190|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl:relcl	color:blue
1	aːn	_	DET	DEM	Case=Nom|Deixis=Prox|Gender=Masc|Number=Plur|PronType=Dem	3	det	_	AlignBegin=22159|AlignEnd=22504|Gloss=PROX.PL.M.NOM|RX=[DEM]|TokenType=Root
2	j=	_	DET	DET	Definite=Def|Gender=Masc	3	det	_	AlignBegin=22504|AlignEnd=22619|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
3	ʔar	_	NOUN	N	_	11	dislocated:obj	_	AlignBegin=22619|AlignEnd=22734|Gloss=child|RX=[SBJ].[N]|TokenType=Root
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=22734|AlignEnd=22849|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
5	ti=	_	PRON	REL	Definite=Def|Gender=Fem|PronType=Rel	7	obj	_	AlignBegin=22849|AlignEnd=23021|Gloss=DEF.F=|RX=[REL]=|TokenType=Clit
6	dhaːj	_	ADP	POSTP	_	7	obl:arg	_	AlignBegin=23021|AlignEnd=23194|Gloss=DIR|RX=[POSTP]|TokenType=Root
7	jʔeːn	_	VERB	V2	Number=Plur|VerbClass=2	8	dep:comp	_	AlignBegin=23194|AlignEnd=23366|Gloss=come|MGloss=come-IPFV.3PL|MSeg=jʔ-eːn|RelRole=Obj|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
8	=eːt	_	ADP	PTCL	_	3	acl:relcl	_	AlignBegin=23366|AlignEnd=23452|Gloss==RCPT|RX==[PTCL]|TokenType=Clit
9	=oːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	8	dep:comp	_	AlignBegin=23452|AlignEnd=23539|Gloss==POSS.2SG.ACC|RX==[PRO]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=23539|AlignEnd=23882|Gloss=/|TokenType=Break
11	hijaː	_	VERB	V1	Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=23882|AlignEnd=24140|Gloss=give|MGloss=give-IMP.SG.M|MSeg=hi-jaː|RX=[V1].[IRG]-[TAM].[PNG]|TokenType=Root
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=24140|AlignEnd=24397|Gloss=/|TokenType=Break

~~~


