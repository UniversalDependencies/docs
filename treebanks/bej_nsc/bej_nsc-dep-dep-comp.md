---
layout: base
title:  'Statistics of dep:comp in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

5 nodes (0%) are attached to their parents as `dep:comp`.

5 instances of `dep:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 2 pairs of parts of speech are connected with `dep:comp`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 dep:comp	color:blue
1	hamil	_	VERB	V2	VerbClass=2	5	dep:comp	_	AlignBegin=94772|AlignEnd=94898|GE=let|Gloss=let|RX=[V2]|TokenType=Stem
2	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	1	mark:aff	_	AlignBegin=94898|AlignEnd=95025|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
3	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=95025|AlignEnd=95152|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	AlignBegin=95152|AlignEnd=95279|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
5	kati	_	VERB	AUX	Aspect=Imp	7	acl:relcl	_	AlignBegin=95279|AlignEnd=95406|GE=become\[IPFV]|Gloss=become|RX=[AUX].[PRF]|TokenType=Stem
6	=jeː	_	SCONJ	CONJ	_	5	mark	_	AlignBegin=95406|AlignEnd=95533|GE==if|Gloss==ifREL|RX==[CONJ]|TokenType=Clit
7	kaːm	_	NOUN	N	_	8	nsubj	_	AlignBegin=95533|AlignEnd=95723|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
8	=u	_	AUX	PRO	_	14	advcl	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO].NOM|TokenType=Clit
9	=it	_	SCONJ	PRO	_	8	mark	_	AlignBegin=95723|AlignEnd=95914|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
10	//	_	PUNCT	PUNCT	_	8	punct	_	AlignBegin=95914|AlignEnd=96295|TokenType=Break
11	haraw	_	VERB	V1	VerbClass=1	14	dep:comp	_	AlignBegin=96295|AlignEnd=96441|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
12	-aː	_	SCONJ	CVB	VerbForm=Conv	11	mark:aff	_	AlignBegin=96441|AlignEnd=96587|GE=-[CVB].[MNR]|TokenType=InflAff
13	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=96587|AlignEnd=96733|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
14	haraw	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=96733|AlignEnd=96842|GE=seek|Gloss=seek|RX=[V1]|TokenType=Stem
15	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	14	mark:aff	_	AlignBegin=96842|AlignEnd=96952|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
16	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	14	det	_	AlignBegin=96952|AlignEnd=97061|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
17	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	14	aux	_	AlignBegin=97061|AlignEnd=97171|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
18	//	_	PUNCT	PUNCT	_	14	punct	_	AlignBegin=97171|AlignEnd=97609|TokenType=Break

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	hoː	_	NOUN	N	_	4	obj	_	AlignBegin=30643|AlignEnd=30859|GE=lamb|Gloss=lamb|RX=[N]|TokenType=Stem
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	AlignBegin=30859|AlignEnd=31075|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
3	hoːsoː	_	PRON	PRO	Case=Abl	4	dep:comp	_	AlignBegin=31075|AlignEnd=31507|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
4	ʃʔag	_	VERB	V1	VerbClass=1	0	root	_	AlignBegin=31507|AlignEnd=31615|GE=carry_on_shoulder|Gloss=carry_on_shoulder|RX=[V1]|TokenType=Stem
5	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	4	mark:aff	_	AlignBegin=31615|AlignEnd=31723|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
6	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	4	det	_	AlignBegin=31723|AlignEnd=31831|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	4	cop	_	AlignBegin=31831|AlignEnd=31939|GE==[COP].[3SG]|RX==[PRED].[N]|TokenType=Clit
8	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	det	_	AlignBegin=31939|AlignEnd=32155|GE=[DEF].[SG].[M].[NOM]=|RX=[DET]=|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	4	dislocated:subj	_	AlignBegin=32155|AlignEnd=32371|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
10	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=32371|AlignEnd=32803|TokenType=Break
11	ʔasal	_	VERB	V2	VerbClass=2	1	acl:relcl	_	AlignBegin=32803|AlignEnd=32937|GE=grill|Gloss=grill|RX=[V2]|TokenType=Stem
12	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	11	mark:aff	_	AlignBegin=32937|AlignEnd=33071|GE=-[CVB].[MNR]|RX=-[PRF]|TokenType=InflAff
13	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	AlignBegin=33071|AlignEnd=33206|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
14	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	11	nsubj:aff	_	AlignBegin=33206|AlignEnd=33340|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
15	kti	_	AUX	AUX	Aspect=Perf	11	cop	_	AlignBegin=33340|AlignEnd=33474|GE=become\[AOR]|Gloss=become|RX=[AUX].[PRF]|TokenType=Stem
16	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	11	mark	_	AlignBegin=33474|AlignEnd=33609|GE==[REL].[SG].[M]|RX==[CONJ]|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=33609|AlignEnd=35009|TokenType=Break

~~~


