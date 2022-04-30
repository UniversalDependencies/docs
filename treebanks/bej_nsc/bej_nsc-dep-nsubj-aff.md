---
layout: base
title:  'Statistics of nsubj:aff in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `nsubj:aff`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-nsubj.html">nsubj</a></tt>.

156 nodes (14%) are attached to their parents as `nsubj:aff`.

87 instances of `nsubj:aff` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21153846153846.

The following 1 pairs of parts of speech are connected with `nsubj:aff`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (156; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:aff	color:blue
1	tak	_	NOUN	N	Gender=Masc	10	nsubj	_	AlignBegin=0|AlignEnd=190|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=190|AlignEnd=879|TokenType=Break
3	kaːm	_	NOUN	N	_	7	nsubj	_	AlignBegin=879|AlignEnd=982|GE=camel|Gloss=camel|RX=[SBJ].[N]|TokenType=Stem
4	=i	_	PRON	PRO	Case=Nom|Number=Sing|Person=1|Poss=Yes	3	nmod:poss	_	AlignBegin=982|AlignEnd=1085|GE==[POSS].[1SG].[NOM]|RX==[PRO]|TokenType=Clit
5	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=1085|AlignEnd=1815|TokenType=Break
6	hoː	_	PRON	PRO	Case=Dat|Number=Sing|Person=1	7	iobj	_	AlignBegin=1815|AlignEnd=2092|GE=[1SG].[DAT]|RX=[PRO]|TokenType=Stem
7	kʷiɖ	_	VERB	V2	VerbClass=2	10	parataxis	_	AlignBegin=2092|AlignEnd=2231|GE=disappear|Gloss=disappear|ReportedSpeech=Yes|RX=[V2]|TokenType=Stem
8	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	7	nsubj:aff	_	AlignBegin=2231|AlignEnd=2370|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
9	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	10	nsubj:aff	_	AlignBegin=2370|AlignEnd=2509|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
10	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	AlignBegin=2509|AlignEnd=2648|GE=say\[PFV]|Gloss=say|RX=[V1].[IRG]|TokenType=Stem
11	//	_	PUNCT	PUNCT	_	10	punct	_	AlignBegin=2648|AlignEnd=2926|TokenType=Break

~~~


