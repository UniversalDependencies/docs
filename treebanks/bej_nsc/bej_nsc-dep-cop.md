---
layout: base
title:  'Statistics of cop in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `cop`

This relation is universal.

20 nodes (2%) are attached to their parents as `cop`.

19 instances of `cop` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7.

The following 3 pairs of parts of speech are connected with `cop`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (16; 80% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (2; 10% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-AUX.html">AUX</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 cop	color:blue
1	hoː	_	NOUN	N	_	4	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Root
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːsoː	_	PRON	PRO	Case=Abl	4	dep:comp	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL].[3]|RX=[PRO]|TokenType=Root
4	ʃʔagaː	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31723|GE=carry_on_shoulder-[CVB].[MNR]|Gloss=carry_on_shoulder|MGloss=carry_on_shoulder-CVB.MNR|MSeg=ʃʔag-aː|RX=[V1]-[PRF]|TokenType=Root
5	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	4	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
6	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	4	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
7	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
8	tak	_	NOUN	N	Gender=Masc	4	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Root
9	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
10	ʔasalaː	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=33071|GE=grill-[CVB].[MNR]|Gloss=grill|MGloss=grill-CVB.MNR|MSeg=ʔasal-aː|RX=[V2]-[PRF]|TokenType=Root
11	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
12	iːkti	_	AUX	AUX	Aspect=Perf|Gender=Masc|Number=Sing	10	cop	_	AlignBegin=33206|AlignEnd=33474|GE=[3SG].[M]-become\[AOR]|Gloss=become|MGloss=3SG.M-become\AOR|MSeg=iː-kti|RX=[PNG]-[AUX].[PRF]|TokenType=Root
13	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	10	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
14	/	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop	color:blue
1	daːji	_	ADJ	ADJ	_	4	parataxis:conj	_	AlignBegin=33647|AlignEnd=33765|GE=good|nWord=1|RX=[ADJ]|TokenType=Root
2	=t	_	DET	DET	Gender=Fem	1	det	_	AlignBegin=33765|AlignEnd=33883|GE=[INDF].[F]|nWord=1|RX=[DET]|TokenType=Clit
3	=u	_	AUX	N.COP	Number=Sing|Person=3|VerbType=Cop	1	cop	_	AlignBegin=33883|AlignEnd=34001|GE=[COP].[3SG]|nWord=1|RX=[PRED].[N]|TokenType=Clit
4	adanri	_	VERB	V1	Number=Sing|VerbClass=1	5	parataxis	_	AlignBegin=34001|AlignEnd=34355|GE=[1SG]kill|MGloss=[1SG]kill|MSeg=a-danri|nWord=2|RX=[PNG][V1]|TokenType=Root
5	adi	_	VERB	V1	Number=Sing|VerbClass=1	0	root	_	AlignBegin=34355|AlignEnd=34591|GE=[1SG]say|MGloss=[1SG]say|MSeg=a-di|nWord=3|RX=[PNG][V1].[IRG]|TokenType=Root
6	=t	_	CCONJ	CONJ	_	5	cc	_	AlignBegin=34591|AlignEnd=34709|GE=[COORD]|nWord=3|RX=[CONJ]|TokenType=Clit
7	//	_	PUNCT	_	_	5	punct	_	AlignBegin=34709|AlignEnd=35061|GE=[//]|nWord=4|TokenType=Break

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 5 cop	color:blue
1	mʔaːna	_	VERB	V2,IRG	Number=Plur|VerbClass=2	2	parataxis	_	AlignBegin=63076|AlignEnd=63427|GE=come-[IMP].[PL]|Gloss=come|MGloss=come-IMP.PL|MSeg=mʔ-aːna|ReportedSpeech=Yes|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Root
2	dija	_	VERB	V1,IRG	VerbClass=1	19	advcl	_	AlignBegin=63427|AlignEnd=63778|GE=say-[CVB].[MNR]|Gloss=say|MGloss=say-CVB.MNR|MSeg=di-ja|RX=[V1].[IRG]|TokenType=Root
3	waliːka	_	VERB	V2	VerbClass=2	19	reparandum	_	AlignBegin=63778|AlignEnd=63918|GE=call-[CVB].[MNR]|Gloss=call|MGloss=call-CVB.MNR|MSeg=waliːk-a|RX=[V2]-[PRF]|TokenType=Root
4	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	3	det	_	AlignBegin=63918|AlignEnd=63988|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
5	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	19	cop	_	AlignBegin=63988|AlignEnd=64058|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
6	=it	_	SCONJ	CONJ	_	19	mark	_	AlignBegin=64058|AlignEnd=64129|GE==[CSL]|RX==[CONJ]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=64129|AlignEnd=64480|TokenType=Break
8	sagi	_	ADJ	ADJ	_	9	amod	_	AlignBegin=64480|AlignEnd=64715|GE=far|Gloss=far|RX=[ADJ]|TokenType=Root
9	haːʃ	_	NOUN	N	Gender=Masc	19	reparandum	_	AlignBegin=64715|AlignEnd=64832|GE=land|Gloss=land|RX=[N].[M]|TokenType=Root
10	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	19	case	_	AlignBegin=64832|AlignEnd=64950|GE==[ABL].[SG]|RX==[POSTP]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=64950|AlignEnd=65185|TokenType=Break
12	beːn	_	ADV	ADV	_	19	reparandum	_	AlignBegin=65185|AlignEnd=65353|GE=there|Gloss=there|RX=[ADV]|TokenType=Root
13	/	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=65353|AlignEnd=65734|TokenType=Break
14	ʔarjab	_	PROPN	NP	_	19	reparandum	_	AlignBegin=65734|AlignEnd=65930|GE=[Aryab]|ProperName=Aryab|RX=[N].[PROP]|TokenType=Root
15	=wa	_	CCONJ	CCONJ	_	14	cc	_	AlignBegin=65930|AlignEnd=66126|GE==[COORD]|RX==[CONJ]|TokenType=Clit
16	mariː	_	ADV	ADV	_	19	reparandum	_	AlignBegin=66126|AlignEnd=66322|GE=from_the_direction|Gloss=from_the_direction|RX=[ADV]|TokenType=Root
17	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	16	det	_	AlignBegin=66322|AlignEnd=66518|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
18	i=	_	DET	DET	Definite=Def|Gender=Masc	19	det	_	AlignBegin=66518|AlignEnd=66648|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
19	dar	_	NOUN	N	Gender=Masc	0	root	_	AlignBegin=66648|AlignEnd=66779|GE=side|Gloss=side|RX=[N].[M]|TokenType=Root
20	=iː	_	ADP	POSTP	Case=Abl|Number=Sing	19	case	_	AlignBegin=66779|AlignEnd=66910|GE==[ABL].[SG]|RX==[POSTP]|TokenType=Clit
21	/	_	PUNCT	PUNCT	_	19	punct	_	AlignBegin=66910|AlignEnd=68424|TokenType=Break

~~~


