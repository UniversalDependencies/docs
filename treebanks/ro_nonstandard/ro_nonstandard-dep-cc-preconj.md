---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-cc.html">cc</a></tt>.

22 nodes (0%) are attached to their parents as `cc:preconj`.

22 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (17; 77% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (3; 14% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-CCONJ.html">CCONJ</a></tt> (1; 5% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	2	mark	_	ref=MATT 11.18
2	veni	veni	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 11.18
3	Ioan	Ioan	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT 11.18
4	,	,	PUNCT	COMMA	_	6	punct	_	ref=MATT 11.18
5	neci	nici	CCONJ	Cccsz	Polarity=Neg|WordForm=Compound	6	cc:preconj	_	ref=MATT 11.18
6	mîncînd	mânca	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	2	advcl	_	ref=MATT 11.18
7	,	,	PUNCT	COMMA	_	9	punct	_	ref=MATT 11.18
8	neci	nici	CCONJ	Cccsz	Polarity=Neg|WordForm=Compound	9	cc	_	ref=MATT 11.18
9	bînd	bea	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	6	conj	_	ref=MATT 11.18
10	şi	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT 11.18
11	zic	zice	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	ref=MATT 11.18
12	că	că	SCONJ	Csssp	Polarity=Pos	13	mark	_	ref=MATT 11.18
13	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	_	ref=MATT 11.18
14	drac	drac	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	13	obj	_	ref=MATT 11.18
15	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 11.18

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Neci	nici	CCONJ	Cccsz	Polarity=Neg|WordForm=Compound	3	cc:preconj	_	ref=MATT 5.35
2	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT 5.35
3	pămînt	pământ	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	ref=MATT 5.35
4	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT 5.35
5	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	ref=MATT 5.35
6	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	ref=MATT 5.35
7	razăm	reazem	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	advcl	_	ref=MATT 5.35
8	picioarelor	picior	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur		7	iobj	_
9	Lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	ref=MATT 5.35
10	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT 5.35
11	neci	nici	CCONJ	Cccsz	Polarity=Neg|WordForm=Compound	13	cc	_	ref=MATT 5.35
12	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	ref=MATT 5.35
13	Ierosalim	Ierusalim	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	conj	_	ref=MATT 5.35
14	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT 5.35
15	că	că	SCONJ	Csssp	Polarity=Pos	17	mark	_	ref=MATT 5.35
16	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	ref=MATT 5.35
17	cetatea	cetate	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	advcl	_	ref=MATT 5.35
18	a	al	DET	Tsfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Art	20	det	_	ref=MATT 5.35
19	marelui	mare	ADJ	Afpmsoy	Case=Dat,Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	ref=MATT 5.35
20	împărat	împărat	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	17	nmod	_	ref=MATT 5.35
21	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 5.35

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 cc:preconj	color:blue
1	Nu	nu	ADV	Qz	Polarity=Neg	2	advmod	_	_
2	scap	scăpa	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	eu	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	2	nsubj	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	2	nmod:pmod	_	_
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	nici	nici	CCONJ	Ccssz	Polarity=Neg	8	cc	_	_
8	tu	tu	PRON	Pp2-sr	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	2	conj	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	8	orphan	_	_
11	,	,	PUNCT	COMMA	_	16	punct	_	_
12	măcar	măcar	ADV	Rg	_	16	advmod	_	_
13	de	de	SCONJ	Csssp	Polarity=Pos	16	mark	_	_
14	s-	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	16	expl:pv	_	_
15	ar	avea	AUX	Vaip3	Mood=Ind|Person=3|Tense=Pres	16	aux	_	_
16	pune	pune	VERB	Vmn	Mood=Inf|VerbForm=Fin	2	advcl	_	_
17	nu	nu	ADV	Qz	Polarity=Neg	18	advmod	_	_
18	ştiu	ști	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	16	csubj	_	_
19	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		18	mark	_
20	şi	și	CCONJ	Ccssp	Polarity=Pos	21	cc:preconj	_	_
21	cruciş	cruciș	ADV	Rg	_	16	advmod	_	_
22	şi	și	CCONJ	Ccssp	Polarity=Pos	23	cc	_	_
23	curmeziş	curmeziș	ADV	Rg	_	21	conj	_	_
24	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


