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
Average distance between parent and child is 7.94230769230769.

The following 10 pairs of parts of speech are connected with `dislocated:subj`: <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (29; 56% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (13; 25% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-AUX.html">AUX</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="bej_autogramm-pos-X.html">X</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 dislocated:subj	color:blue
1	hoː	_	NOUN	N	_	5	obj	_	Gloss=lamb|RX=[N]|TokenType=Root|WordAlignmentBegin=30643|WordAlignmentEnd=30859
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=30859|WordAlignmentEnd=31075
3	hoːs	_	ADP	PRO	Case=Abl	5	obl:arg	_	Gloss=ABL|RX=[POSTP]|TokenType=Root|WordAlignmentBegin=31075|WordAlignmentEnd=31507
4	=oː	_	PRON	PRO	Case=Acc|Poss=Yes	3	dep	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=31075|WordAlignmentEnd=31507
5	ʃʔagaːb	_	VERB	V1	Gender=Masc|VerbClass=1	0	root	_	Gloss=carry_on_shoulder.CVB.MNR|MGloss=carry_on_shoulder-CVB.MNR-INDF.M.ACC|MSeg=ʃʔag-aː-b|RX=[V1]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=31507|WordAlignmentEnd=31831
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	5	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=31831|WordAlignmentEnd=31939
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=31939|WordAlignmentEnd=32155
8	tak	_	NOUN	N	Gender=Masc	5	dislocated:subj	_	Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=32155|WordAlignmentEnd=32371
9	//	_	PUNCT	PUNCT	_	8	punct	_	TokenType=Break|WordAlignmentBegin=32371|WordAlignmentEnd=32803
10	ʔasalaːb	_	VERB	V2	Gender=Masc|VerbClass=2	1	acl:relcl	_	Gloss=grill.CVB.MNR|MGloss=grill-CVB.MNR-INDF.M.ACC|MSeg=ʔasal-aː-b|RX=[V2]-[PRF]-[DET]|TokenType=Root|WordAlignmentBegin=32803|WordAlignmentEnd=33206
11	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	aux	_	Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RelRole=Obj|RX=[PNG]-[AUX].[PRF]|TokenType=Root|WordAlignmentBegin=33206|WordAlignmentEnd=33474
12	=jeːb	_	SCONJ	CONJ	Gender=Masc|PronType=Rel	10	mark	_	Gloss=REL|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=33474|WordAlignmentEnd=33609
13	/	_	PUNCT	PUNCT	_	10	punct	_	TokenType=Break|WordAlignmentBegin=33609|WordAlignmentEnd=35009

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 dislocated:subj	color:blue
1	ani	_	PRON	PRO	Case=Nom|Number=Sing|Person=1	10	dislocated:subj	_	Gloss=1SG|RX=[SBJ].[PRO]|TokenType=Root|WordAlignmentBegin=110347|WordAlignmentEnd=110664
2	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=110664|WordAlignmentEnd=110822
3	na	_	NOUN	N	Gender=Fem	10	obl:arg	_	Gloss=thing|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=110822|WordAlignmentEnd=110981
4	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	5	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=110981|WordAlignmentEnd=111044
5	naː	_	NOUN	N	Gender=Fem	3	reparandum	_	Gloss=thing|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=111044|WordAlignmentEnd=111107
6	=t	_	DET	DET	Gender=Fem	5	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=111107|WordAlignmentEnd=111170
7	=i	_	ADP	CASE	Case=Gen	3	case	_	Gloss=GEN|RX==[CASE]|TokenType=Clit|WordAlignmentBegin=111170|WordAlignmentEnd=111233|wordform=-i
8	=da	_	ADP	POSTP	_	3	case	_	Gloss=DIR|RX==[POSTP]|TokenType=Clit|WordAlignmentBegin=111233|WordAlignmentEnd=111298
9	/	_	PUNCT	_	_	3	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=111298|WordAlignmentEnd=111615
10	jʔa	_	VERB	V2	VerbClass=2	0	root	_	Gloss=come.CVB.MNR|MGloss=come-CVB.MNR|MSeg=jʔ-a|RX=[V2].[IRG]-[PRF]|TokenType=Root|WordAlignmentBegin=111615|WordAlignmentEnd=111855
11	=joːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	10	obj	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=111855|WordAlignmentEnd=111974
12	ka=	_	PART	PTCL	Aspect=Imp|Polarity=Neg	10	advmod	_	Gloss=NEG|RX=[PTCL]=|TokenType=Clit|WordAlignmentBegin=111974|WordAlignmentEnd=112046
13	aki	_	AUX	AUX	Aspect=Perf|Number=Sing	10	aux	_	Gloss=become|MGloss=1SG-become\PFV|MSeg=a-ki|RX=[PNG]-[AUX].[NEG]|TokenType=Root|WordAlignmentBegin=112046|WordAlignmentEnd=112190
14	=hoːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2	10	discourse	_	Gloss=OBJ|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=112190|WordAlignmentEnd=112262
15	-a	_	DET	_	_	14	det	_	Gloss=-ADRE|TokenType=InflAff|WordAlignmentBegin=112262|WordAlignmentEnd=112333
16	/	_	PUNCT	_	_	10	punct	_	Gloss=/|TokenType=Break|WordAlignmentBegin=112333|WordAlignmentEnd=112692

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 dislocated:subj	color:blue
1	tʔa	_	ADV	ADV	_	3	advmod	_	Gloss=now|RX=[ADV]|TokenType=Root|WordAlignmentBegin=245027|WordAlignmentEnd=245382
2	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	3	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=245382|WordAlignmentEnd=245453
3	nʔeː	_	NOUN	N	Gender=Fem	12	ccomp	_	Gloss=fire|Reported=Yes|RX=[N].[F]|TokenType=Root|WordAlignmentBegin=245453|WordAlignmentEnd=245524
4	=t	_	DET	DET	Gender=Fem	3	det	_	Gloss=INDF|RX==[DET]|TokenType=Clit|WordAlignmentBegin=245524|WordAlignmentEnd=245595
5	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	3	cop	_	Gloss=COP|RX==[PRED].[N]|TokenType=Clit|WordAlignmentBegin=245595|WordAlignmentEnd=245666
6	=j	_	PART	PTCL	_	3	advmod	_	Gloss=EMPH|RX==[PTCL]|TokenType=Clit|WordAlignmentBegin=245666|WordAlignmentEnd=245738
7	//	_	PUNCT	PUNCT	_	9	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=245738|WordAlignmentEnd=246094
8	i=	_	DET	DET	Definite=Def|Gender=Masc	9	det	_	Gloss=DEF|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=246094|WordAlignmentEnd=246199
9	daːr	_	NOUN	N	Gender=Masc	3	dislocated:subj	_	Gloss=place|RX=[SBJ].[N].[M]|TokenType=Root|WordAlignmentBegin=246199|WordAlignmentEnd=246304
10	=uːk	_	PRON	PRO	Case=Acc|Number=Sing|Person=2|Poss=Yes	9	nmod:poss	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=246304|WordAlignmentEnd=246409
11	baruːk	_	PRON	PRO	Case=Nom|Gender=Masc|Number=Sing|Person=2	10	discourse	_	Gloss=2SG|RX=[PRO]|TokenType=Root|WordAlignmentBegin=246409|WordAlignmentEnd=246725
12	ijadna	_	VERB	V1	Aspect=Imp|Number=Plur|VerbClass=1	0	root	_	Gloss=say|MGloss=3-say\IPFV-PL|MSeg=i-jad-na|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Root|WordAlignmentBegin=246725|WordAlignmentEnd=247041
13	//	_	PUNCT	PUNCT	_	12	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=247041|WordAlignmentEnd=248895

~~~


