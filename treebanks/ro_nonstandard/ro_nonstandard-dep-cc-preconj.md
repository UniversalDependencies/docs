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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc:preconj	color:blue
1	Nici	nici	CCONJ	Ccssz	Polarity=Neg	4	cc:preconj	_	_
2	m-	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	obj	_	SpaceAfter=No
3	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	aux	_	_
4	nins	ninge	VERB	Vmp	VerbForm=Part	0	root	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	9	punct	_	_
6	nici	nici	CCONJ	Ccssz	Polarity=Neg	9	cc	_	_
7	m-	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	9	obj	_	SpaceAfter=No
8	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	9	aux	_	_
9	plouat	ploua	VERB	Vmp	VerbForm=Part	4	conj	_	Rhyme=ID16|SpaceAfter=No|Type=Paired
10	,	,	PUNCT	COMMA	_	16	punct	_	_
11	Nici	nici	CCONJ	Ccssz	Polarity=Neg	16	cc	_	_
12	floarea	floare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
13	nu	nu	ADV	Qz	Polarity=Neg	16	advmod	_	_
14	s-	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	16	expl:pv	_	SpaceAfter=No
15	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	16	aux	_	_
16	uscat	usca	VERB	Vmp	VerbForm=Part	4	conj	_	Rhyme=ID9|SpaceAfter=No|Type=Paired
17	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Neci	nici	CCONJ	Cccsz	Compound=Yes|Polarity=Neg	3	cc:preconj	_	ref=MATT5.35
2	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT5.35
3	pămînt	pământ	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	ref=MATT5.35|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT5.35
5	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	ref=MATT5.35|SpaceAfter=No
6	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	ref=MATT5.35
7	razăm	reazem	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	advcl	_	ref=MATT5.35
8	picioarelor	picior	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	7	iobj	_	ref=MATT5.35
9	Lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	ref=MATT5.35|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT5.35
11	neci	nici	CCONJ	Cccsz	Compound=Yes|Polarity=Neg	13	cc	_	ref=MATT5.35
12	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	ref=MATT5.35
13	Ierosalim	Ierusalim	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	conj	_	ref=MATT5.35|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT5.35
15	că	că	SCONJ	Csssp	Polarity=Pos	17	mark	_	ref=MATT5.35
16	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	ref=MATT5.35
17	cetatea	cetate	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	advcl	_	ref=MATT5.35
18	a	al	DET	Tsfsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Poss=Yes|PronType=Art	20	det	_	ref=MATT5.35
19	marelui	mare	ADJ	Afpmsoy	Case=Dat,Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	20	amod	_	ref=MATT5.35
20	împărat	împărat	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	17	nmod	_	ref=MATT5.35|SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT5.35

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
5	tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	2	nmod:pmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	nici	nici	CCONJ	Ccssz	Polarity=Neg	8	cc	_	_
8	tu	tu	PRON	Pp2-sr	Case=Acc,Nom|Number=Sing|Person=1|PronType=Prs	2	conj	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	8	orphan	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	16	punct	_	_
12	măcar	măcar	ADV	Rg	_	16	advmod	_	_
13	de	de	SCONJ	Csssp	Polarity=Pos	16	mark	_	_
14	s-	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	16	expl:pv	_	SpaceAfter=No
15	ar	avea	AUX	Vaip3	Mood=Ind|Person=3|Tense=Pres	16	aux	_	_
16	pune	pune	VERB	Vmn	VerbForm=Inf	2	advcl	_	_
17	nu	nu	ADV	Qz	Polarity=Neg	18	advmod	_	_
18	știu	ști	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	16	csubj	_	_
19	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	18	mark	_	_
20	și	și	CCONJ	Ccssp	Polarity=Pos	21	cc:preconj	_	_
21	cruciș	cruciș	ADV	Rg	_	16	advmod	_	_
22	și	și	CCONJ	Ccssp	Polarity=Pos	23	cc	_	_
23	curmeziș	curmeziș	ADV	Rg	_	21	conj	_	SpaceAfter=No
24	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


