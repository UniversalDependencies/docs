---
layout: base
title:  'Statistics of parataxis:coord in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `parataxis:coord`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="bej_nsc-dep-parataxis-mod.html">parataxis:mod</a></tt>.

2 nodes (0%) are attached to their parents as `parataxis:coord`.

2 instances of `parataxis:coord` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 1 pairs of parts of speech are connected with `parataxis:coord`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis:coord	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	2	nsubj:aff	_	AlignBegin=81414|AlignEnd=81535|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
2	skʷi	_	VERB	V1	Aspect=Perf|VerbClass=1	5	parataxis:coord	_	AlignBegin=81535|AlignEnd=81656|GE=pursue\[PFV]|Gloss=pursue|RX=[V1]|TokenType=Stem
3	-i	_	X	NP	_	2	dep:aff	_	AlignBegin=81656|AlignEnd=81778|GE=-[L]|ProperName=-L|TokenType=InflAff
4	a-	_	PRON	PNG	Number=Sing|Person=1	5	nsubj:aff	_	AlignBegin=81778|AlignEnd=81899|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
5	gʷoːj	_	VERB	V1	Aspect=Perf|VerbClass=1	9	dep:conj	_	AlignBegin=81899|AlignEnd=82021|GE=be_unable\[INT].[PFV]|Gloss=be_unable|RX=[V1].[DER]|TokenType=Stem
6	=t	_	CCONJ	CCONJ	_	5	cc	_	AlignBegin=82021|AlignEnd=82143|GE==[COORD]|RX==[CONJ]|TokenType=Clit
7	//	_	PUNCT	PUNCT	_	5	punct	_	AlignBegin=82143|AlignEnd=82850|TokenType=Break
8	hoːj	_	PRON	PRO	Case=Abl	9	iobj	_	AlignBegin=82850|AlignEnd=83108|GE=[ABL].[3]|RX=[PRO]|TokenType=Stem
9	ɖaːb	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=83108|AlignEnd=83194|GE=run|Gloss=run|RX=[V2]|TokenType=Stem
10	-ja	_	PRON	TAM,PNG	Aspect=Pfv|Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=83194|AlignEnd=83280|GE=-[PFV].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
11	-i	_	X	-L	_	9	dep:aff	_	AlignBegin=83280|AlignEnd=83367|GE=-[L]|ProperName=-L|TokenType=InflAff
12	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=83367|AlignEnd=83496|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
13	ha	_	AUX	AUX,EMPH	Aspect=Aor	9	cop	_	AlignBegin=83496|AlignEnd=83625|GE=take\[AOR]|Gloss=take|RX=[AUX].[EMPH]|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	9	punct	_	AlignBegin=83625|AlignEnd=84523|TokenType=Break

~~~


