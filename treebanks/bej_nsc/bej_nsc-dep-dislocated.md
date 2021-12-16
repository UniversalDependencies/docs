---
layout: base
title:  'Statistics of dislocated in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated`

This relation is universal.
There are 1 language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

5 nodes (0%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.4.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 dislocated	color:blue
1	a-	_	PRON	PNG	Number=Sing|Person=1	2	nsubj:aff	_	AlignBegin=84523|AlignEnd=84644|GE=[1SG]-|RX=[PNG]-|TokenType=InflAff
2	gar	_	VERB	V1	Aspect=Perf|VerbClass=1|Voice=Mid	3	compound	_	AlignBegin=84644|AlignEnd=84765|GE=come_back\[MID].[PFV]|Gloss=come_back|RX=[V1].[DER]|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84845|GE=come|Gloss=come|RX=[V2].[IRG]|TokenType=Stem
4	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	3	nsubj:aff	_	AlignBegin=84845|AlignEnd=84926|GE=-[PFV].[1SG]|RX=-[TAM].[PNG]|TokenType=InflAff
5	=t	_	CCONJ	CCONJ	_	3	cc	_	AlignBegin=84926|AlignEnd=85007|GE==[COORD]|RX==[CONJ]|TokenType=Clit
6	i=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	AlignBegin=85007|AlignEnd=85087|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
7	gaw	_	NOUN	N	Gender=Masc	3	dislocated	_	AlignBegin=85087|AlignEnd=85168|GE=house|Gloss=house|RX=[N].[M]|TokenType=Stem
8	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	7	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	3	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 dislocated	color:blue
1	tak	_	NOUN	N	Gender=Masc	9	nsubj	_	AlignBegin=0|AlignEnd=351|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|GE=elder|Gloss=elder|RX=[CN]|TokenType=Stem
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Stem
6	tak	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=2593|AlignEnd=2761|GE=man|Gloss=man|RX=[N].[M]|TokenType=Stem
7	-i	_	PART	CASE	Case=Gen	6	case:aff	_	AlignBegin=2761|AlignEnd=2930|GE=-[GEN]|RX=-[CASE]|TokenType=InflAff
8	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	AlignBegin=2930|AlignEnd=3042|GE=[3SG].[M]-|RX=[PNG]-|TokenType=InflAff
9	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	AlignBegin=3042|AlignEnd=3154|GE=be_there\[AOR]|Gloss=be_there|RX=[V1].[IRG]|TokenType=Stem
10	=t	_	CCONJ	CCONJ	_	9	cc	_	AlignBegin=3154|AlignEnd=3267|GE==[COORD]|RX==[CONJ]|TokenType=Clit
11	amsi	_	ADV	ADV	_	13	advmod	_	AlignBegin=3267|AlignEnd=3603|GE=today|Gloss=today|RX=[ADV]|TokenType=Stem
12	iraːnaj	_	INTJ	_	_	13	discourse	_	AlignBegin=3603|AlignEnd=3940|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
13	rh	_	VERB	V2	VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4108|GE=see|Gloss=see|RX=[V2]|TokenType=Stem
14	-i	_	PRON	TAM,PNG	Aspect=Aor|Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	AlignBegin=4108|AlignEnd=4277|GE=-[AOR].[3SG].[M]|RX=-[TAM].[PNG]|TokenType=InflAff
15	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
16	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	17	det	_	AlignBegin=4764|AlignEnd=4921|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
17	kina	_	PRON	PRO	Reflex=Yes	13	dislocated	_	AlignBegin=4921|AlignEnd=5079|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
18	/	_	PUNCT	PUNCT	_	13	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

~~~


