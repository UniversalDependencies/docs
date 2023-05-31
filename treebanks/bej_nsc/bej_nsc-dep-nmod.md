---
layout: base
title:  'Statistics of nmod in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="bej_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

16 nodes (2%) are attached to their parents as `nmod`.

11 instances of `nmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1875.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (11; 69% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 nmod	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	AlignBegin=68424|AlignEnd=68690|GE=plenty|Gloss=plenty|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=68690|AlignEnd=69484|TokenType=Break
3	naʃʃalama	_	ADJ	ADJ	_	4	amod	_	AlignBegin=69484|AlignEnd=69874|GE=athletic-[PL]|Gloss=athletic|MGloss=athletic-PL|MSeg=naʃʃalam-a|RX=[ADJ]|TokenType=Stem
4	kam	_	NOUN	N	Number=Plur	12	obj	_	AlignBegin=69874|AlignEnd=70265|GE=camel\[PL]|Gloss=camel|RX=[N]|TokenType=Stem
5	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=70265|AlignEnd=71814|TokenType=Break
6	aː#	_	X	FS	_	8	dep	_	AlignBegin=71814|AlignEnd=72145|GE=[FS]|RX=[FS]|TokenType=Unfinished
7	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	6	reparandum	_	AlignBegin=72145|AlignEnd=72311|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
8	kina	_	PRON	PRO	Reflex=Yes	9	nmod	_	AlignBegin=72311|AlignEnd=72477|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
9	mittia	_	NOUN	N	Number=Plur	4	nmod	_	AlignBegin=72477|AlignEnd=72698|GE=pure_breed-[PL]|Gloss=pure_breed|MGloss=pure_breed-PL|MSeg=mitti-a|RX=[N]|TokenType=Stem
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	9	det	_	AlignBegin=72698|AlignEnd=72809|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=72809|AlignEnd=73141|TokenType=Break
12	iːbirin	_	VERB	V1,IRG	Aspect=Aor|Number=Plur|VerbClass=1	0	root	_	AlignBegin=73141|AlignEnd=73388|GE=[3]-have\[AOR]-[PL]|Gloss=have|MGloss=3-have\AOR-PL|MSeg=iː-biri-n|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Stem
13	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=73388|AlignEnd=73636|TokenType=Break

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	əəə	_	INTJ	HESIT	_	7	discourse	_	AlignBegin=16164|AlignEnd=16399|GE=er|Gloss=er|RX=[HESIT]|TokenType=Stem
2	dabaloː	_	ADJ	ADJ	_	4	nmod	_	AlignBegin=16399|AlignEnd=16516|GE=small|Gloss=small|RX=[ADJ]|TokenType=Stem
3	=t	_	DET	DET	Definite=Ind|Gender=Fem	2	det	_	AlignBegin=16516|AlignEnd=16634|GE==[INDF].[F]|RX==[DET]|TokenType=Clit
4	ʔoːr	_	NOUN	N	_	7	nsubj	_	AlignBegin=16634|AlignEnd=16869|GE=child|Gloss=child|RX=[SBJ].[N]|TokenType=Stem
5	geːb	_	ADP	POSTP	_	7	obl:arg	_	AlignBegin=16869|AlignEnd=17104|GE=beside|Gloss=beside|RX=[POSTP]|TokenType=Stem
6	/	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=17104|AlignEnd=17339|TokenType=Break
7	tiːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Fem|Number=Sing|VerbClass=1	0	root	_	AlignBegin=17339|AlignEnd=17475|GE=[3SG].[F]-be_there\[AOR]|Gloss=be_there|MGloss=3SG.F-be_there\AOR|MSeg=tiː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Stem
8	=aj	_	SCONJ	CONJ	_	7	mark	_	AlignBegin=17475|AlignEnd=17543|GE==[CSL]|RX==[CONJ]|TokenType=Clit
9	//	_	PUNCT	PUNCT	_	7	punct	_	AlignBegin=17543|AlignEnd=19067|TokenType=Break

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	winneːt	_	ADV	ADV	_	3	advmod	_	AlignBegin=68424|AlignEnd=68690|GE=plenty|Gloss=plenty|RX=[ADV]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=68690|AlignEnd=69484|TokenType=Break
3	naʃʃalama	_	ADJ	ADJ	_	4	amod	_	AlignBegin=69484|AlignEnd=69874|GE=athletic-[PL]|Gloss=athletic|MGloss=athletic-PL|MSeg=naʃʃalam-a|RX=[ADJ]|TokenType=Stem
4	kam	_	NOUN	N	Number=Plur	12	obj	_	AlignBegin=69874|AlignEnd=70265|GE=camel\[PL]|Gloss=camel|RX=[N]|TokenType=Stem
5	//	_	PUNCT	PUNCT	_	4	punct	_	AlignBegin=70265|AlignEnd=71814|TokenType=Break
6	aː#	_	X	FS	_	8	dep	_	AlignBegin=71814|AlignEnd=72145|GE=[FS]|RX=[FS]|TokenType=Unfinished
7	eː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	6	reparandum	_	AlignBegin=72145|AlignEnd=72311|GE=[DEF].[PL].[M].[ACC]=|RX=[DET]=|TokenType=Clit
8	kina	_	PRON	PRO	Reflex=Yes	9	nmod	_	AlignBegin=72311|AlignEnd=72477|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
9	mittia	_	NOUN	N	Number=Plur	4	nmod	_	AlignBegin=72477|AlignEnd=72698|GE=pure_breed-[PL]|Gloss=pure_breed|MGloss=pure_breed-PL|MSeg=mitti-a|RX=[N]|TokenType=Stem
10	=b	_	DET	DET	Case=Acc|Definite=Ind|Gender=Masc	9	det	_	AlignBegin=72698|AlignEnd=72809|GE==[INDF].[M].[ACC]|RX==[DET]|TokenType=Clit
11	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=72809|AlignEnd=73141|TokenType=Break
12	iːbirin	_	VERB	V1,IRG	Aspect=Aor|Number=Plur|VerbClass=1	0	root	_	AlignBegin=73141|AlignEnd=73388|GE=[3]-have\[AOR]-[PL]|Gloss=have|MGloss=3-have\AOR-PL|MSeg=iː-biri-n|RX=[PNG]-[V1].[IRG]-[PNG]|TokenType=Stem
13	//	_	PUNCT	PUNCT	_	12	punct	_	AlignBegin=73388|AlignEnd=73636|TokenType=Break

~~~


