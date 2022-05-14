---
layout: base
title:  'Statistics of dislocated in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dislocated`

This relation is universal.
There are 1 language-specific subtypes of `dislocated`: <tt><a href="bej_nsc-dep-dislocated-subj.html">dislocated:subj</a></tt>.

5 nodes (1%) are attached to their parents as `dislocated`.

4 instances of `dislocated` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2.

The following 2 pairs of parts of speech are connected with `dislocated`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-NOUN.html">NOUN</a></tt> (4; 80% instances), <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dislocated	color:blue
1	agar	_	VERB	V1	Aspect=Perf|Number=Sing|VerbClass=1|Voice=Mid	2	compound	_	AlignBegin=84523|AlignEnd=84765|GE=[1SG]-come_back\[MID].[PFV]|Gloss=come_back|MGloss=1SG-come_back\[MID].[PFV]|MSeg=a-gar|RX=[PNG]-[V1].[DER]|TokenType=Stem
2	jʔan	_	VERB	V2,IRG	Number=Sing|VerbClass=2	0	root	_	AlignBegin=84765|AlignEnd=84926|GE=come-[PFV].[1SG]|Gloss=come|MGloss=come-PFV.1SG|MSeg=jʔ-an|RX=[V2].[IRG]-[TAM].[PNG]|TokenType=Stem
3	=t	_	CCONJ	CCONJ	_	2	cc	_	AlignBegin=84926|AlignEnd=85007|GE==[COORD]|RX==[CONJ]|TokenType=Clit
4	i=	_	DET	DET	Definite=Def|Gender=Masc	5	det	_	AlignBegin=85007|AlignEnd=85087|GE=[DEF].[M]=|RX=[DET]=|TokenType=Clit
5	gaw	_	NOUN	N	Gender=Masc	2	dislocated	_	AlignBegin=85087|AlignEnd=85168|GE=house|Gloss=house|RX=[N].[M]|TokenType=Stem
6	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=85168|AlignEnd=85249|GE==[POSS].[1SG].[ACC]|RX==[PRO]|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	2	punct	_	AlignBegin=85249|AlignEnd=85492|TokenType=Break

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 dislocated	color:blue
1	tak	_	NOUN	N	Gender=Masc	7	nsubj	_	AlignBegin=0|AlignEnd=351|GE=man|Gloss=man|RX=[SBJ].[N].[M]|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=351|AlignEnd=1157|TokenType=Break
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	AlignBegin=1157|AlignEnd=1424|GE=elder|Gloss=elder|RX=[CN]|TokenType=Stem
4	//	_	PUNCT	PUNCT	_	1	punct	_	AlignBegin=1424|AlignEnd=2257|TokenType=Break
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	AlignBegin=2257|AlignEnd=2593|GE=relatives|Gloss=relatives|RX=[N]|TokenType=Stem
6	taki	_	NOUN	N	Gender=Masc	1	appos	_	AlignBegin=2593|AlignEnd=2930|GE=man-[GEN]|Gloss=man|MGloss=man-GEN|MSeg=tak-i|RX=[N].[M]-[CASE]|TokenType=Stem
7	iːfi	_	VERB	V1,IRG	Aspect=Aor|Gender=Masc|Number=Sing|VerbClass=1	11	dep:conj	_	AlignBegin=2930|AlignEnd=3154|GE=[3SG].[M]-be_there\[AOR]|Gloss=be_there|MGloss=3SG.M-be_there\[AOR]|MSeg=iː-fi|RX=[PNG]-[V1].[IRG]|TokenType=Stem
8	=t	_	CCONJ	CCONJ	_	7	cc	_	AlignBegin=3154|AlignEnd=3267|GE==[COORD]|RX==[CONJ]|TokenType=Clit
9	amsi	_	ADV	ADV	_	11	advmod	_	AlignBegin=3267|AlignEnd=3603|GE=today|Gloss=today|RX=[ADV]|TokenType=Stem
10	iraːnaj	_	INTJ	_	_	11	discourse	_	AlignBegin=3603|AlignEnd=3940|GE=gosh|Gloss=gosh|RX=[EXCL]|TokenType=Stem
11	rhi	_	VERB	V2	Gender=Masc|Number=Sing|VerbClass=2	0	root	_	AlignBegin=3940|AlignEnd=4277|GE=see-[AOR].[3SG].[M]|Gloss=see|MGloss=see-AOR.3SG.M|MSeg=rh-i|RX=[V2]-[TAM].[PNG]|TokenType=Stem
12	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=4277|AlignEnd=4764|TokenType=Break
13	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	14	det	_	AlignBegin=4764|AlignEnd=4921|GE=[DEF].[SG].[M].[ACC]=|RX=[DET]=|TokenType=Clit
14	kina	_	PRON	PRO	Reflex=Yes	11	dislocated	_	AlignBegin=4921|AlignEnd=5079|GE=owner|Gloss=owner|RX=[PRO].[REFL]|TokenType=Stem
15	/	_	PUNCT	PUNCT	_	11	punct	_	AlignBegin=5079|AlignEnd=5895|TokenType=Break

~~~


