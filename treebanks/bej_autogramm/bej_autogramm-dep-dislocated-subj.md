---
layout: base
title:  'Statistics of dislocated:subj in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `dislocated:subj`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-dislocated.html">dislocated</a></tt>.
There are also 2 other language-specific subtypes of `dislocated`: <tt><a href="bej_autogramm-dep-dislocated-mod.html">dislocated:mod</a></tt>, <tt><a href="bej_autogramm-dep-dislocated-obj.html">dislocated:obj</a></tt>.

52 nodes (0%) are attached to their parents as `dislocated:subj`.

28 instances of `dislocated:subj` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.86538461538461.

The following 10 pairs of parts of speech are connected with `dislocated:subj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (30; 58% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (12; 23% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated:subj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 dislocated:subj	color:blue
1	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	10	dislocated:subj	_	AlignBegin=110347|AlignEnd=110664|Gloss=1SG.NOM|RX=[SBJ].[PRO]|TokenType=Root
2	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	det	_	AlignBegin=110664|AlignEnd=110822|Gloss=DEF.SG.F.ACC=|RX=[DET]=|TokenType=Clit
3	na	_	NOUN	N	Gender=Fem	7	dep:comp	_	AlignBegin=110822|AlignEnd=110981|Gloss=thing|RX=[N].[F]|TokenType=Root
4	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	5	det	_	AlignBegin=110981|AlignEnd=111044|Gloss=DEF.SG.F.ACC=|RX=[DET]=|TokenType=Clit
5	naː	_	NOUN	N	Gender=Fem	3	reparandum	_	AlignBegin=111044|AlignEnd=111107|Gloss=thing|RX=[N].[F]|TokenType=Root
6	=t	_	DET	DET	Gender=Fem	5	det	_	AlignBegin=111107|AlignEnd=111170|Gloss==INDF.F|RX==[DET]|TokenType=Clit
7	=i	_	ADP	CASE	Case=Gen	8	dep:comp	_	AlignBegin=111170|AlignEnd=111233|Gloss==GEN|RX==[CASE]|TokenType=Clit|wordform=-i
8	=da	_	ADP	POSTP	_	10	obl:arg	_	AlignBegin=111233|AlignEnd=111298|Gloss==DIR|RX==[POSTP]|TokenType=Clit
9	/	_	PUNCT	_	_	8	punct	_	AlignBegin=111298|AlignEnd=111615|Gloss=/|TokenType=Break
10	jʔa	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=111615|AlignEnd=111855|Gloss=come|MGloss=come-CVB.MNR|MSeg=jʔ-a|RX=[V2].[IRG]-[PRF]|TokenType=Root
11	=joːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	10	obj	_	AlignBegin=111855|AlignEnd=111974|Gloss==POSS.2SG.ACC|RX==[PRO]|TokenType=Clit
12	ka=	_	PART	PTCL	Aspect=Imp|Polarity=Neg	10	advmod	_	AlignBegin=111974|AlignEnd=112046|Gloss=NEG.IPFV=|RX=[PTCL]=|TokenType=Clit
13	aki	_	AUX	AUX	Aspect=Perf|Number=Sing	10	aux	_	AlignBegin=112046|AlignEnd=112190|Gloss=become\PFV|MGloss=1SG-become\PFV|MSeg=a-ki|RX=[PNG]-[AUX].[NEG]|TokenType=Root
14	=hoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2	10	discourse	_	AlignBegin=112190|AlignEnd=112262|Gloss==OBJ.2SG|RX==[PRO]|TokenType=Clit
15	-a	_	DET	_	_	14	det	_	AlignBegin=112262|AlignEnd=112333|Gloss=-ADRE.M|TokenType=InflAff
16	/	_	PUNCT	_	_	10	punct	_	AlignBegin=112333|AlignEnd=112692|Gloss=/|TokenType=Break

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 dislocated:subj	color:blue
1	tʔa	_	ADV	ADV	_	3	advmod	_	AlignBegin=245027|AlignEnd=245382|Gloss=now|RX=[ADV]|TokenType=Root
2	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	det	_	AlignBegin=245382|AlignEnd=245453|Gloss=DEF.SG.F.ACC=|RX=[DET]=|TokenType=Clit
3	nʔeː	_	NOUN	N	Gender=Fem	12	ccomp	_	AlignBegin=245453|AlignEnd=245524|Gloss=fire|RX=[N].[F]|TokenType=Root
4	=t	_	DET	DET	Gender=Fem	3	det	_	AlignBegin=245524|AlignEnd=245595|Gloss==INDF.F|RX==[DET]|TokenType=Clit
5	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	AlignBegin=245595|AlignEnd=245666|Gloss==COP.3SG|Reported=Yes|RX==[PRED].[N]|TokenType=Clit
6	=j	_	PART	PTCL	_	3	advmod	_	AlignBegin=245666|AlignEnd=245738|Gloss==EMPH|RX==[PTCL]|TokenType=Clit
7	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=245738|AlignEnd=246094|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	AlignBegin=246094|AlignEnd=246199|Gloss=DEF.M=|RX=[DET]=|TokenType=Clit
9	daːr	_	NOUN	N	Gender=Masc	3	dislocated:subj	_	AlignBegin=246199|AlignEnd=246304|Gloss=place|RX=[SBJ].[N].[M]|TokenType=Root
10	=uːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	9	nmod:poss	_	AlignBegin=246304|AlignEnd=246409|Gloss==POSS.2SG.ACC|RX==[PRO]|TokenType=Clit
11	baruːk	_	PRON	PRO	Case=Nom|Gender=Masc|Number=Sing|Person=2	10	discourse	_	AlignBegin=246409|AlignEnd=246725|Gloss=2SG.M.NOM|RX=[PRO]|TokenType=Root
12	ijadna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	AlignBegin=246725|AlignEnd=247041|Gloss=say\IPFV|MGloss=3-say\IPFV-PL|MSeg=i-jad-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root
13	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=247041|AlignEnd=248895|Gloss=PUNCT|RX=[PUNCT]|TokenType=Break

~~~


