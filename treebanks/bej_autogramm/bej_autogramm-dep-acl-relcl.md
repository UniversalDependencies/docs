---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-acl.html">acl</a></tt>.

216 nodes (2%) are attached to their parents as `acl:relcl`.

135 instances of `acl:relcl` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.06018518518519.

The following 13 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (180; 83% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (22; 10% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 18 acl:relcl	color:blue
1	aneːb	_	PRON	PNG	Number=Sing|Person=1	6	dislocated:obj	_	AlignBegin=59110|AlignEnd=59292|Gloss=1SG.ACC|RX=[PRO]|TokenType=Root
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=59292|AlignEnd=59474|Gloss=/|TokenType=Break
3	deː	_	NOUN	DEM	_	6	nsubj:outer	_	AlignBegin=59941|AlignEnd=60066|Gloss=mother|RX=[SBJ].[N].[F]|TokenType=Root
4	=t	_	DET	DET	Definite=Ind|Gender=Fem	3	det	_	AlignBegin=60066|AlignEnd=60191|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=60191|AlignEnd=60317|Gloss==POSS.1SG.NOM|RX==[PRO]|TokenType=Clit
6	baːɖinaːt	_	VERB	N	Gender=Fem	14	dep:conj	_	AlignBegin=60317|AlignEnd=60506|Gloss=forget\INT|MGloss=forget\INT-CVB.MNR-INDF.F|MSeg=baːɖin-aː-t|RX=[V1].[DER]-[PRF]-[DET]|TokenType=Root
7	=oː	_	PRON	PRO	Number=Sing|Person=1	6	obj	_	AlignBegin=60506|AlignEnd=60569|Gloss==POSS.1SG.ACC|RX==[PRO]|TokenType=Clit
8	-t	_	PRON	DET	Definite=Ind|Gender=Fem	6	dep	_	AlignBegin=60569|AlignEnd=60632|Gloss=-INDF.F|MGloss=-INDF.F|MSeg=-t|RX=-[DET]|TokenType=InflAff|wordform==t
9	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	6	cop	_	AlignBegin=60632|AlignEnd=60693|Gloss==COP.3SG|RX==[PRED].[N]|TokenType=Clit
10	/	_	PUNCT	PUNCT	_	6	punct	_	AlignBegin=60693|AlignEnd=61069|Gloss=/|TokenType=Break
11	naː	_	NOUN	CONJ	_	14	obj	_	AlignBegin=61069|AlignEnd=61196|Gloss=thing|RX=[N].[F]|TokenType=Root
12	=t	_	DET	DET	Definite=Ind|Gender=Fem	11	det	_	AlignBegin=61196|AlignEnd=61323|Gloss==INDF.F|RX==[DET]|TokenType=Clit
13	ki=	_	PART	DET	Aspect=Imp|Polarity=Neg	14	advmod	_	AlignBegin=61323|AlignEnd=61408|Gloss=NEG.IPFV=|RX=[PTCL]=|TokenType=Clit
14	tfirʔa	_	VERB	V1	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	15	ccomp	_	AlignBegin=61408|AlignEnd=61577|Gloss=take_out\PFV|MGloss=2SG.F-take_out\PFV|MSeg=t-firʔa|Reported=Yes|RX=[PNG]-[V1]|TokenType=Root
15	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	16	dep:comp	_	AlignBegin=61577|AlignEnd=61747|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
16	=hoːb	_	SCONJ	CONJ	_	25	dep	_	AlignBegin=61747|AlignEnd=61831|Gloss==when|RX==[CONJ]|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	16	punct	_	AlignBegin=61831|AlignEnd=62085|Gloss=/|TokenType=Break
18	deː	_	NOUN	N	_	22	acl:relcl	_	AlignBegin=62085|AlignEnd=62199|Gloss=mother|RX=[N].[F]|TokenType=Root
19	=t	_	DET	DET	Definite=Ind|Gender=Fem	18	det	_	AlignBegin=62199|AlignEnd=62313|Gloss==INDF.F|RX==[DET]|TokenType=Clit
20	=ijoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=62313|AlignEnd=62426|Gloss==POSS.2SG.GEN|RX==[PRO]|TokenType=Clit
21	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	22	det	_	AlignBegin=62426|AlignEnd=62596|Gloss=DEF.SG.M.ACC=|RX=[DET]=|TokenType=Clit
22	mhiːn	_	NOUN	N	Gender=Masc	23	obj	_	AlignBegin=62596|AlignEnd=62767|Gloss=place|RX=[N].[M]|TokenType=Root
23	mitjajaː	_	VERB	V1	Gender=Masc|Number=Sing	25	ccomp	_	AlignBegin=62767|AlignEnd=62995|Gloss=explain|MGloss=explain-IMP.SG.M|MSeg=mitja-jaː|Reported=Yes|RX=[V2]-[TAM].[PNG]|TokenType=Root
24	=heːb	_	PRON	PRO	Number=Sing|Person=1	23	obj	_	AlignBegin=62995|AlignEnd=63108|Gloss==OBJ.1SG|RX==[PRO]|TokenType=Clit
25	indi	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	AlignBegin=63108|AlignEnd=63449|Gloss=say\IPFV|MGloss=3SG.M-say\IPFV|MSeg=i-ndi|RX=[PNG]-[V1].[IRG]|TokenType=Root
26	eːn	_	VERB	DEM	Aspect=Perf|Gender=Masc|Number=Plur|Person=3	25	discourse	_	AlignBegin=63449|AlignEnd=63790|Gloss=say|RX=[V1].[IRG]|TokenType=Root
27	/	_	PUNCT	PUNCT	_	25	punct	_	AlignBegin=63790|AlignEnd=64132|Gloss=/|TokenType=Break

~~~


