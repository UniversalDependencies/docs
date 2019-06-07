---
layout: base
title:  'Statistics of ccomp in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `ccomp`

This relation is universal.

19 nodes (0%) are attached to their parents as `ccomp`.

18 instances of `ccomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.05263157894737.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (6; 32% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 26% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 26% instances), <tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="lt_alksnis-pos-ADV.html">ADV</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Po	po	ADP	Sgg	AdpType=Prep|Case=Gen	2	case	2:case	_
2	akcijos	akcija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	0	root	0:root	_
3	jos	jis	PRON	Pgfsgn	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nmod	4:nmod	_
4	organizatoriai	organizatorius	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
5	surinkę	surinkti	VERB	Vgpa-pmannnn-p	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	2	ccomp	2:ccomp	_
6	per	per	ADP	Sga	AdpType=Prep|Case=Acc	7	case	7:case	_
7	2300	2300	NUM	M----d-	NumForm=Digit	5	obl	5:obl	_
8	litų	litas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 ccomp	color:blue
1	Jis	jis	PRON	Pgmsnn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|Person=3|PronType=Prs	0	root	0:root	_
2	atsakantis	atsakyti	VERB	Vgpp-smannnn-p	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	1	ccomp	1:ccomp	_
3	už	už	ADP	Sga	AdpType=Prep|Case=Acc	7	case	7:case	_
4	švietimo	švietimas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod	_
5	įstaigų	įstaiga	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	7	nmod	7:nmod	_
6	edukacinę	edukacinis	ADJ	Agpfsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	veiklą	veikla	NOUN	Ncfsan-	Case=Acc|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 11 ccomp	color:blue
1	Tiesa	tiesa	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	Z	_	1	punct	1:punct	_
3	šįkart	šįkart	ADV	Rgp	Degree=Pos	6	advmod	6:advmod	_
4	plėšikų	plėšikas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	5:nmod	_
5	grobiu	grobis	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	6	obj	6:obj	_
6	tapo	tapti	VERB	Vgma3p--n--ni-	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	1	parataxis	1:parataxis	_
7	vos	vos	PART	Qg	_	8	advmod:emph	8:advmod:emph	_
8	40	40	NUM	M----d-	NumForm=Digit	6	obl	6:obl	_
9	litų	litas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	8	nmod	8:nmod	_
10	mat	mat	PART	Qg	_	15	advmod:emph	15:advmod:emph	_
11	likusius	likti	VERB	Vgpa-pmannan-p	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	15	ccomp	15:ccomp	_
12	iš	iš	ADP	Sgg	AdpType=Prep|Case=Gen	14	case	14:case	_
13	jų	jis	PRON	Pgmpgn	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	nmod	14:nmod	_
14	rankų	ranka	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	15	obl:arg	15:obl:arg	_
15	išplėšė	išplėšyti	VERB	Vgma3s--n--ni-	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	1	parataxis	1:parataxis	_
16	nusikaltėlių	nusikaltėlis	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	17	obj	17:obj	_
17	nepabūgusi	nepabūgti	VERB	Vgpa-sfaynnn-p	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	18	acl	18:acl	_
18	vaistininkė	vaistininkė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	15	nsubj	15:nsubj	SpaceAfter=No
19	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


