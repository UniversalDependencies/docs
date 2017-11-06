---
layout: base
title:  'Statistics of 8 in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `8`

This relation is universal.

20 nodes (0%) are attached to their parents as `8`.

20 instances of `8` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.1.

The following 4 pairs of parts of speech are connected with `8`: <tt><a href="ro_nonstandard-dep-ROOT.html">ROOT</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (12; 60% instances), <tt><a href="ro_nonstandard-dep-ROOT.html">ROOT</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (4; 20% instances), <tt><a href="ro_nonstandard-dep-ROOT.html">ROOT</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (2; 10% instances), <tt><a href="ro_nonstandard-dep-ROOT.html">ROOT</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 	bgColor:blue
# visual-style 	fgColor:white
# visual-style  7 8	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	2	mark	_	ref=MATT 7.29
2	învăţa	învăța	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	ref=MATT 7.29
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT 7.29
4	ei	el	PRON	Pp3mpa--------s 	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	nmod:pmod	_	ref=MATT 7.29
5	ca	ca	ADV	Rg	_	6	case	_	ref=MATT 7.29
6	cela	cel	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	obl	_	ref=MATT 7.29
7	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		8	nsubj	_
8	are	avea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl	_	ref=MATT 7.29
9	puteare	putere	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	8	obj	_	ref=MATT 7.29
10	şi	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT 7.29
11	nu	nu	ADV	Qz	Polarity=Neg	2	conj	_	ref=MATT 7.29
12	ca	ca	ADV	Rg	_	13	case	_	ref=MATT 7.29
13	cărtularii	cărturar	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	11	orphan	_	ref=MATT 7.29
14	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 7.29

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 	bgColor:blue
# visual-style 	fgColor:white
# visual-style  5 8	color:blue
1	Mult	mult	ADV	Rg	_	3	advmod	_	_
2	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	3	obj	_	_
3	=ntreabă	întreba	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	inima	inimă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubj	_	_
5	Când	când	ADV	Rw	AdvPronType=Int,Rel		8	advmod:tmod	_
6	mă	eu	PRON	Pp1-pa--------w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak	8	expl:pv	_	_
7	voi	vrea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	8	aux	_	_
8	vedea	vedea	VERB	Vmn	Mood=Inf|VerbForm=Fin	3	ccomp	_	_
9	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	ea	el	PRON	Pp3fsa--------s 	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	8	obl	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 	bgColor:blue
# visual-style 	fgColor:white
# visual-style  7 8	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT 16.5
2	cînd	când	ADV	Rw	AdvPronType=Int,Rel		3	advmod:tmod	_
3	veniră	veni	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	advcl:tcl	_	ref=MATT 16.5
4	ucenicii	ucenic	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	3	nsubj	_	ref=MATT 16.5
5	lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nmod	_	ref=MATT 16.5
6	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT 16.5
7	ceaia	acela	DET	Dd3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Dem		8	det	_
8	parte	parte	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	obl	_	ref=MATT 16.5
9	,	,	PUNCT	COMMA	_	10	punct	_	ref=MATT 16.5
10	uitară	uita	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 16.5
11	să	să	PART	Qs	PartType=Sub	12	mark	_	ref=MATT 16.5
12	ia	lua	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	ref=MATT 16.5
13	pîini	pâine	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	12	obj	_	ref=MATT 16.5
14	.	.	PUNCT	PERIOD	_	10	punct	_	ref=MATT 16.5

~~~


