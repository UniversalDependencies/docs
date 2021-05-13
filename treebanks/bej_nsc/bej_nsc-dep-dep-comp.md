---
layout: base
title:  'Statistics of dep:comp in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:comp`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-conj.html">dep:conj</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

8 nodes (1%) are attached to their parents as `dep:comp`.

8 instances of `dep:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.625.

The following 2 pairs of parts of speech are connected with `dep:comp`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (6; 75% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (2; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 dep:comp	color:blue
1	t=	_	DET	DET	Definite=Def|Gender=Fem	2	det	_	GE= DEF,F=|RX= DET=|Times= 13911, 13996|TokenType=Clit
2	ʔoːr	_	NOUN	N	_	6	vocative	_	Gloss= child|RX= N|Times= 13996, 14081|TokenType=Stem
3	-ej	_	PART	CASE	Case=Voc	2	case:aff	_	GE= -VOC|RX= -CASE|Times= 14081, 14167|TokenType=Aff
4	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 14167, 14295|TokenType=Clit
5	meːk	_	NOUN	N	_	6	obj	_	Gloss= donkey|RX= N|Times= 14295, 14424|TokenType=Stem
6	fidin	_	VERB	V1	VerbClass=1	9	dep:comp	_	Gloss= move_away|RX= V1|Times= 14424, 14552|TokenType=Stem
7	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	6	nsubj:aff	_	GE= -IMP,SG,F|RX= -TAM,PNG|Times= 14552, 14681|TokenType=Aff
8	/	_	PUNCT	PUNCT	_	6	punct	_	GE= PUNCT|RX= PUNCT|Times= 14681, 14938
9	galeːl	_	VERB	V2	VerbClass=2	13	parataxis	_	Gloss= drive_cattle|ReportedSpeech=Yes|RX= V2|Times= 14938, 15040|TokenType=Stem
10	-i	_	PRON	TAM,PNG	Gender=Fem|Mood=Imp|Number=Sing	9	nsubj:aff	_	GE= -IMP,SG,F|RX= -TAM,PNG|Times= 15040, 15142|TokenType=Aff
11	-n	_	AUX	SUFX	_	9	aux:aff	_	GE= -EMPH|RX= -SUFX|Times= 15142, 15244|TokenType=Aff
12	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 15244, 15397|TokenType=Aff
13	di	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 15397, 15551|TokenType=Stem
14	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	15	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 15551, 15704|TokenType=Aff
15	ni	_	VERB	V1,IRG	Aspect=Pfv|VerbClass=1	13	discourse	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 15704, 15857|TokenType=Stem
16	//	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 15857, 16164

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:comp	color:blue
1	hoː	_	NOUN	N	_	4	obj	_	Gloss= lamb|RX= N|Times= 30643, 30859|TokenType=Stem
2	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	1	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 30859, 31075|TokenType=Clit
3	hoːsoː	_	PRON	PRO	Case=Abl	4	dep:comp	_	GE= ABL,3|RX=PRO|Times= 31075, 31507|TokenType=Stem
4	ʃʔag	_	VERB	V1	VerbClass=1	0	root	_	GE= V1|Gloss= carry_on_shoulder|Times= 31507, 31615|TokenType=Stem
5	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	4	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 31615, 31723|TokenType=Aff
6	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	4	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 31723, 31831|TokenType=Clit
7	=u	_	AUX	N,COP	Number=Sing|Person=3|VerbType=Cop	4	cop	_	GE= =COP,3SG|RX= =PRED,N|Times= 31831, 31939|TokenType=Clit
8	uː=	_	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	det	_	GE= DEF,SG,M,NOM=|RX= DET=|Times= 31939, 32155|TokenType=Clit
9	tak	_	NOUN	N	Gender=Masc	4	dislocated:subj	_	Gloss= man|RX= SBJ,N,M|Times= 32155, 32371|TokenType=Stem
10	//	_	PUNCT	PUNCT	_	4	punct	_	GE= PUNCT|RX=PUNCT|Times= 32371, 32803
11	ʔasal	_	VERB	V2	VerbClass=2	1	acl:relcl	_	GE= V2|Gloss= grill|Times= 32803, 32937|TokenType=Stem
12	-aː	_	SCONJ	CVB	Aspect=Perf|VerbForm=Conv	11	mark:aff	_	GE= -CVB,MNR|RX= -PRF|Times= 32937, 33071|TokenType=Aff
13	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	11	det	_	GE= =INDF,M,ACC|RX= =DET|Times= 33071, 33206|TokenType=Clit
14	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	11	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 33206, 33340|TokenType=Aff
15	kti	_	AUX	AUX	Aspect=Perf	11	cop	_	GE= AOR|Gloss= become|RX=AUX,PRF|Times= 33340, 33474|TokenType=Stem
16	=jeːb	_	SCONJ	CONJ	Gender=Masc|Number=Sing	11	mark	_	GE= =REL,SG,M|RX= =CONJ|Times= 33474, 33609|TokenType=Clit
17	/	_	PUNCT	PUNCT	_	4	punct	_	GE= PUNCT|RX=PUNCT|Times= 33609, 35009

~~~


