---
layout: base
title:  'Statistics of acl:relcl in UD_Beja-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Beja-Autogramm: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="bej_autogramm-dep-acl.html">acl</a></tt>.

205 nodes (2%) are attached to their parents as `acl:relcl`.

133 instances of `acl:relcl` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.24878048780488.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (163; 80% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt> (23; 11% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt> (7; 3% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="bej_autogramm-pos-ADP.html">ADP</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-NUM.html">NUM</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="bej_autogramm-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="bej_autogramm-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 acl:relcl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl:relcl	color:blue
1	bak	_	ADV	DEICT	_	4	advmod	_	Gloss=thus|RX=[DEICT].[MNR]|TokenType=Root|WordAlignmentBegin=156541|WordAlignmentEnd=156863
2	tʔiit	_	NOUN	V1,IRG	_	4	acl:relcl	_	Gloss=resemble.VN|MGloss=resemble-VN|MSeg=tʔi-it|RelRole=Obj|RX=[V1].[IRG]-[N].[V]|TokenType=Root|WordAlignmentBegin=156863|WordAlignmentEnd=157078
3	=eːt	_	SCONJ	CONJ	Gender=Fem|PronType=Rel	2	case	_	Gloss=REL|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=157078|WordAlignmentEnd=157186
4	ʔiːbaːb	_	NOUN	N	Gender=Fem	8	nsubj	_	Gloss=travel|RX=[N].[V].[F]|TokenType=Root|WordAlignmentBegin=157186|WordAlignmentEnd=157509
5	/	_	PUNCT	PUNCT	_	4	punct	_	TokenType=Break|WordAlignmentBegin=157509|WordAlignmentEnd=158686
6	dh	_	ADP	POSTP	_	7	case	_	Gloss=DIR|RX=[POSTP]|TokenType=Root|WordAlignmentBegin=158686|WordAlignmentEnd=158783
7	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	8	obl:arg	_	Gloss=POSS|RX==[PRO]|TokenType=Clit|WordAlignmentBegin=158783|WordAlignmentEnd=158881
8	tiki	_	AUX	V1,IRG	Aspect=Perf|Gender=Fem|Number=Sing|VerbClass=1	9	ccomp	_	Gloss=become|MGloss=3SG.F-become\PFV|MSeg=ti-ki|Reported=Yes|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=158881|WordAlignmentEnd=159076
9	idi	_	VERB	V1,IRG	Aspect=Perf|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=say|MGloss=3SG.M-say\PFV|MSeg=i-di|RX=[PNG]-[V1].[IRG]|TokenType=Root|WordAlignmentBegin=159076|WordAlignmentEnd=159271
10	eːn	_	VERB	V1,IRG	Aspect=Perf|Number=Plur|Person=3|VerbClass=1	9	discourse	_	Gloss=say|RX=[V1].[IRG]|TokenType=Root|WordAlignmentBegin=159271|WordAlignmentEnd=159466
11	//	_	PUNCT	PUNCT	_	9	punct	_	TokenType=Break|WordAlignmentBegin=159466|WordAlignmentEnd=160103

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 acl:relcl	color:blue
1	ʃanbiːb	_	VERB	V1	Aspect=Imp|Number=Sing|Person=3|VerbClass=1	4	advcl	_	Gloss=look|RX=[V1]|TokenType=Root|WordAlignmentBegin=46652|WordAlignmentEnd=46800
2	=hoːb	_	SCONJ	CONJ	_	1	mark	_	Gloss=when|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=46800|WordAlignmentEnd=46949
3	/	_	PUNCT	PUNCT	_	1	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=46949|WordAlignmentEnd=47625
4	ikteːni	_	VERB	V1	Aspect=Imp|Gender=Masc|Number=Sing|VerbClass=1	0	root	_	Gloss=know|MGloss=3SG.M-know\MID.IPFV|MSeg=i-kteːni|RX=[PNG]-[V1].[DER].[IRG]|TokenType=Root|WordAlignmentBegin=47625|WordAlignmentEnd=48017
5	bi=	_	PART	PTCL	Mood=Opt	6	advmod	_	Gloss=OPT|RX=[PTCL]=|TokenType=Clit|WordAlignmentBegin=48017|WordAlignmentEnd=48095
6	irhaj	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	9	ccomp	_	Gloss=see|MGloss=3SG.M-see-NEG.OPT|MSeg=i-rh-aj|RelRole=Obj|RX=[PNG]-[V2]-[TAM]|TokenType=Root|WordAlignmentBegin=48095|WordAlignmentEnd=48331
7	=eːt	_	SCONJ	CONJ.REL	Gender=Fem|PronType=Rel	9	acl:relcl	_	Gloss=REL|InIdiom=Yes|RX==[CONJ]|TokenType=Clit|WordAlignmentBegin=48331|WordAlignmentEnd=48410
8	toː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	9	det	_	Gloss=DEF|InIdiom=Yes|RX=[DET]=|TokenType=Clit|WordAlignmentBegin=48410|WordAlignmentEnd=48606
9	na	_	NOUN	CONJ	_	4	dislocated:obj	_	Gloss=thing|Idiom=Yes|RX=[CONJ]|TokenType=Root|WordAlignmentBegin=48606|WordAlignmentEnd=48802
10	//	_	PUNCT	PUNCT	_	4	punct	_	Gloss=PUNCT|RX=[PUNCT]|TokenType=Break|WordAlignmentBegin=48802|WordAlignmentEnd=49808

~~~


