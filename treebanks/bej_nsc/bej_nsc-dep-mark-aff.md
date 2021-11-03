---
layout: base
title:  'Statistics of mark:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `mark:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-mark.html">mark</a></tt>.

45 nodes (4%) are attached to their parents as `mark:aff`.

44 instances of `mark:aff` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06666666666667.

The following 3 pairs of parts of speech are connected with `mark:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-SCONJ.html">SCONJ</a></tt> (41; 91% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (3; 7% instances), <tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bej_nsc-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark:aff	color:blue
1	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	2	nsubj:aff	_	AlignBegin=124427|AlignEnd=124599|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
2	ki	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	9	advcl	_	AlignBegin=124599|AlignEnd=124771|GE=become\[PFV]|Gloss=become|RX=[V1].[IRG]|TokenType=Stem
3	sar	_	VERB	V1	VerbClass=1|Voice=Mid	2	csubj	_	AlignBegin=124771|AlignEnd=124885|GE=be_awake\[MID]|Gloss=be_awake|RX=[V1].[DER]|TokenType=Stem
4	-oːj	_	SCONJ	N	_	3	mark:aff	_	AlignBegin=124885|AlignEnd=125000|GE=-[N].[AC]|RX=-[N].[V]|TokenType=DerAff
5	=ka	_	ADP	POSTP	Case=Dis	3	mark	_	AlignBegin=125000|AlignEnd=125115|GE==[DISTR]|RX==[POSTP]|TokenType=Clit
6	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=125115|AlignEnd=126003|TokenType=Break
7	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	8	det	_	AlignBegin=126003|AlignEnd=126233|GE=[DEF].[SG].[M]=|RX=[DET]=|TokenType=Clit
8	hanʤar	_	NOUN	N	Gender=Masc	9	obj	_	AlignBegin=126233|AlignEnd=126464|GE=dagger|Gloss=dagger|RX=[N].[M]|TokenType=Stem
9	sallam	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=126464|AlignEnd=126695|GE=give|Gloss=give|RX=[V2]|TokenType=Stem
10	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	9	nsubj:aff	_	AlignBegin=126695|AlignEnd=126926|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
11	/	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=126926|AlignEnd=128062|TokenType=Break

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 mark:aff	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	AlignBegin=68424|AlignEnd=68690|GE=plenty|Gloss=plenty|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=68690|AlignEnd=69484|TokenType=Break
3	naʃʃalam	_	ADJ	ADJ	_	5	acl	_	AlignBegin=69484|AlignEnd=69679|GE=athletic|Gloss=athletic|RX=[ADJ]|TokenType=Stem
4	-a	_	PART	_	Number=Plur	3	mark:aff	_	AlignBegin=69679|AlignEnd=69874|GE=-[PL]|TokenType=InflAff
5	kam	_	NOUN	N	Number=Plur	15	obj	_	AlignBegin=69874|AlignEnd=70265|GE=camel\[PL]|Gloss=camel|RX=[N]|TokenType=Stem
6	//	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=70265|AlignEnd=71814|TokenType=Break
7	aː#	_	X	FS	_	8	reparandum	_	AlignBegin=71814|AlignEnd=72145|GE=[FS]|RX=[FS]|TokenType=Unfinished
8	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	det	_	AlignBegin=72145|AlignEnd=72311|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
9	kina	_	PRON	PRO	Reflex=Yes	10	nmod	_	AlignBegin=72311|AlignEnd=72477|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
10	mitti	_	NOUN	N	_	5	acl	_	AlignBegin=72477|AlignEnd=72587|GE=pure_breed|Gloss=pure_breed|RX=[N]|TokenType=Stem
11	-a	_	PART	_	Number=Plur	10	mark:aff	_	AlignBegin=72587|AlignEnd=72698|GE=-[PL]|TokenType=InflAff
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	AlignBegin=72698|AlignEnd=72809|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=72809|AlignEnd=73141|TokenType=Break
14	iː-	_	PRON	PNG	_	15	nsubj:aff	_	AlignBegin=73141|AlignEnd=73223|GE=[3]-|RX=[PNG]-|TokenType=InflAff
15	biri	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	AlignBegin=73223|AlignEnd=73305|GE=have\[AOR]|Gloss=have|RX=[V1].[IRG]|TokenType=Stem
16	-n	_	PRON	PNG	Number=Plur	15	nsubj:aff	_	AlignBegin=73305|AlignEnd=73388|GE=-[PL]|RX=-[PNG]|TokenType=InflAff
17	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=73388|AlignEnd=73636|TokenType=Break

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark:aff	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	AlignBegin=68424|AlignEnd=68690|GE=plenty|Gloss=plenty|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=68690|AlignEnd=69484|TokenType=Break
3	naʃʃalam	_	ADJ	ADJ	_	5	acl	_	AlignBegin=69484|AlignEnd=69679|GE=athletic|Gloss=athletic|RX=[ADJ]|TokenType=Stem
4	-a	_	PART	_	Number=Plur	3	mark:aff	_	AlignBegin=69679|AlignEnd=69874|GE=-[PL]|TokenType=InflAff
5	kam	_	NOUN	N	Number=Plur	15	obj	_	AlignBegin=69874|AlignEnd=70265|GE=camel\[PL]|Gloss=camel|RX=[N]|TokenType=Stem
6	//	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=70265|AlignEnd=71814|TokenType=Break
7	aː#	_	X	FS	_	8	reparandum	_	AlignBegin=71814|AlignEnd=72145|GE=[FS]|RX=[FS]|TokenType=Unfinished
8	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	det	_	AlignBegin=72145|AlignEnd=72311|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
9	kina	_	PRON	PRO	Reflex=Yes	10	nmod	_	AlignBegin=72311|AlignEnd=72477|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
10	mitti	_	NOUN	N	_	5	acl	_	AlignBegin=72477|AlignEnd=72587|GE=pure_breed|Gloss=pure_breed|RX=[N]|TokenType=Stem
11	-a	_	PART	_	Number=Plur	10	mark:aff	_	AlignBegin=72587|AlignEnd=72698|GE=-[PL]|TokenType=InflAff
12	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	10	det	_	AlignBegin=72698|AlignEnd=72809|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
13	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=72809|AlignEnd=73141|TokenType=Break
14	iː-	_	PRON	PNG	_	15	nsubj:aff	_	AlignBegin=73141|AlignEnd=73223|GE=[3]-|RX=[PNG]-|TokenType=InflAff
15	biri	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	0	root	_	AlignBegin=73223|AlignEnd=73305|GE=have\[AOR]|Gloss=have|RX=[V1].[IRG]|TokenType=Stem
16	-n	_	PRON	PNG	Number=Plur	15	nsubj:aff	_	AlignBegin=73305|AlignEnd=73388|GE=-[PL]|RX=-[PNG]|TokenType=InflAff
17	//	_	PUNCT	PUNCT	_	15	punct	_	AlignBegin=73388|AlignEnd=73636|TokenType=Break

~~~


