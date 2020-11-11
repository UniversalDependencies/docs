---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>.

12207 nodes (2%) are attached to their parents as `expl:pv`.

10854 instances of `expl:pv` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32858196116982.

The following 8 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (12056; 99% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (110; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (23; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pv	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	3	cc	_	ref=MATT17.23
2	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pv	_	ref=MATT17.23
3	întristară	întrista	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT17.23
4	foarte	foarte	ADV	Rg	_	3	advmod	_	ref=MATT17.23|SpaceAfter=No
5	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT17.23

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl:pv	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MARC3.5
2	tinse	întinde	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MARC3.5
3	și	și	CCONJ	Ccssp	Polarity=Pos	5	cc	_	ref=MARC3.5
4	să	să	PART	Qs	PartType=Sub	5	expl:pv	_	ref=MARC3.5
5	întregi	întregi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	conj	_	ref=MARC3.5
6	mîna	mână	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	ref=MARC3.5
7	lui	el	PRON	Pp3mso	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	ref=MARC3.5|SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	ref=MARC3.5
9	ca	ca	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	ref=MARC3.5
10	și	și	CCONJ	Ccssp	Polarity=Pos	9	fixed	_	ref=MARC3.5
11	ceaialaltă	celălalt	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	obl	_	ref=MARC3.5|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MARC3.5

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 expl:pv	color:blue
1	Dar	dar	CCONJ	Ccssp	Polarity=Pos	3	cc	_	_
2	sub	sub	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	cort	cort	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	3	nsubj	_	_
5	mi-	eu	PRON	Pp1-sd--------w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	3	iobj	_	|SpaceAfter=No
6	și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Prs|Strength=Weak	3	expl:pv	_	_
7	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp	3	cop	_	|SpaceAfter=No
8	?	?	PUNCT	QUEST	_	3	punct	_	_

~~~


