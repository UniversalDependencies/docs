---
layout: base
title:  'Statistics of cc:preconj in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-cc.html">cc</a></tt>.

93 nodes (0%) are attached to their parents as `cc:preconj`.

80 instances of `cc:preconj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.54838709677419.

The following 12 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (39; 42% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (19; 20% instances), <tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (18; 19% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_rrt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Fie	fie	CCONJ	Ccssp	Polarity=Pos	3	cc:preconj	_	_
2	că	că	SCONJ	Csssp	Polarity=Pos	3	mark	_	_
3	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	csubj	_	_
4	JOS	jos	ADV	Rgp	Degree=Pos	3	ccomp	_	_
5	FRATELE	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obj	_	_
6	CEL	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	det	_	_
7	MARE	mare	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	12	punct	_	_
9	fie	fie	CCONJ	Ccssp	Polarity=Pos	12	cc	_	_
10	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
11	nu	nu	PART	Qz	Polarity=Neg	12	advmod	_	_
12	scria	scrie	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	COMMA	_	3	punct	_	_
14	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	_
15	totuna	totuna	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Solomonescu	Solomonescu	PROPN	Np	_	4	nsubj	_	_
2	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
3	și	și	CCONJ	Crssp	Polarity=Pos	4	cc:preconj	_	_
4	cântăreț	cântăreț	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	biserică	biserică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
7	și	și	CCONJ	Crssp	Polarity=Pos	8	cc	_	_
8	artist	artist	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	conj	_	_
9	dramatic	dramatic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cc:preconj	color:blue
1	Aspectul	aspect	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	_
2	gazetei	gazetă	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	schimbă	schimba	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	modernizează	moderniza	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
8	atât	atât	ADV	Rgp	Degree=Pos	10	cc:preconj	_	_
9	ca	ca	ADV	Rc	_	10	advmod	_	_
10	structură	structură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	15	punct	_	_
12	cât	cât	ADV	Rw	PronType=Int,Rel	15	cc	_	_
13	și	și	CCONJ	Crssp	Polarity=Pos	12	fixed	_	_
14	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	punct	punct	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	conj	_	_
16	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	vedere	vedere	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nmod	_	_
18	grafic	grafic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


