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
1	a-	_	PRON	PNG	Number=Sing|Person=1	2	nsubj:aff	_	GE= 1SG-|RX= PNG-|Times= 84523, 84644|TokenType=Aff
2	gar	_	VERB	V1	Aspect=Perf|VerbClass=1|Voice=Mid	3	compound	_	GE= MID,PFV|Gloss= come_back|RX= V1,DER|Times= 84644, 84765|TokenType=Stem
3	jʔ	_	VERB	V2,IRG	VerbClass=2	0	root	_	Gloss= come|RX= V2,IRG|Times= 84765, 84845|TokenType=Stem
4	-an	_	PRON	TAM,PNG	Aspect=Pfv|Number=Sing|Person=1	3	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 84845, 84926|TokenType=Aff
5	=t	_	CCONJ	CCONJ	_	3	cc	_	GE= =COORD|RX= CCONJ|Times= 84926, 85007|TokenType=Clit
6	i=	_	DET	DET	Definite=Def|Gender=Masc	7	det	_	GE= DEF,M=|RX= DET=|Times= 85007, 85087|TokenType=Clit
7	gaw	_	NOUN	N	Gender=Masc	3	dislocated	_	Gloss= house|RX= N,M|Times= 85087, 85168|TokenType=Stem
8	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	7	nmod:poss	_	GE= =POSS,1SG,ACC|RX= =PRO|Times= 85168, 85249|TokenType=Clit
9	/	_	PUNCT	PUNCT	_	3	punct	_	GE= PUNCT|RX= PUNCT|Times= 85249, 85492

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 dislocated	color:blue
1	tak	_	NOUN	N	Gender=Masc	9	nsubj	_	Gloss= man|RX= SBJ,N,M|Times= 0, 351|TokenType=Stem
2	/	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 351, 1157
3	ʔeːgirim	_	NOUN	CN	_	1	nmod	_	Gloss= elder|RX= CN|Times= 1157, 1424|TokenType=Stem
4	//	_	PUNCT	PUNCT	_	1	punct	_	GE= PUNCT|RX= PUNCT|Times= 1424, 2257
5	ʔajaːj	_	NOUN	N	_	6	nmod	_	Gloss= relatives|RX= N|Times= 2257, 2593|TokenType=Stem
6	tak	_	NOUN	N	Gender=Masc	1	appos	_	Gloss= man|RX= N,M|Times= 2593, 2761|TokenType=Stem
7	-i	_	PART	CASE	Case=Gen	6	case:aff	_	GE= -GEN|RX= -CASE|Times= 2761, 2930|TokenType=Aff
8	iː-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	9	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 2930, 3042|TokenType=Aff
9	fi	_	VERB	V1,IRG	Aspect=Aor|VerbClass=1	13	dep:conj	_	GE= AOR|Gloss= be_there|RX= V1,IRG|Times= 3042, 3154|TokenType=Stem
10	=t	_	CCONJ	CCONJ	_	9	cc	_	GE= =COORD|RX= CCONJ|Times= 3154, 3267|TokenType=Clit
11	amsi	_	ADV	ADV	_	13	advmod	_	Gloss= today|RX= ADV|Times= 3267, 3603|TokenType=Stem
12	iraːnaj	_	INTJ	_	_	13	discourse	_	Gloss= gosh|RX= EXCL|Times= 3603, 3940|TokenType=Stem
13	rh	_	VERB	V2	VerbClass=2	0	root	_	Gloss= see|RX= V2|Times= 3940, 4108|TokenType=Stem
14	-i	_	PRON	TAM,PNG	Aspect=Aor|Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	GE= -AOR,3SG,M|RX= -TAM,PNG|Times= 4108, 4277|TokenType=Aff
15	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 4277, 4764
16	oː=	_	DET	DET	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	17	det	_	GE= DEF,SG,M,ACC=|RX= DET=|Times= 4764, 4921|TokenType=Clit
17	kina	_	PRON	PRO	Reflex=Yes	13	dislocated	_	Gloss= owner|RX= PRO,REFL|Times= 4921, 5079|TokenType=Stem
18	/	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 5079, 5895

~~~


