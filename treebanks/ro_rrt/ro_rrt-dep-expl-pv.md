---
layout: base
title:  'Statistics of expl:pv in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro_rrt-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_rrt-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_rrt-dep-expl-poss.html">expl:poss</a></tt>.

2267 nodes (1%) are attached to their parents as `expl:pv`.

2158 instances of `expl:pv` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26643140714601.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (2265; 100% instances), <tt><a href="ro_rrt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_rrt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
3	stătu	sta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	uitându	uita	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	3	advcl	_	SpaceAfter=No
5	-se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	4	expl:pv	_	_
6	prostește	prostește	ADV	Rgp	Degree=Pos	4	advmod	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	hârtie	hârtie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 23 expl:pv	color:blue
1	Annie	Annie	PROPN	Np	_	12	nsubj	_	_
2	Bowyer	Bowyer	PROPN	Np	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	76	76	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	1	nummod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	Strada	stradă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
8	Hawkendon	Hawkendon	PROPN	Np	_	7	nmod	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	Clacton	Clacton	PROPN	Np	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	10	punct	_	_
12	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
13	dureri	durere	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	12	obj	_	_
14	groaznice	groaznic	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	13	amod	_	_
15	deoarece	deoarece	SCONJ	Csssp	Polarity=Pos	19	mark	_	_
16	oasele	os	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	19	nsubj	_	_
17	sale	său	DET	Ds3fp-s	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	16	det	_	_
18	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	19	expl:pv	_	_
19	înmuiaseră	înmuia	VERB	Vmil3p	Mood=Ind|Number=Plur|Person=3|Tense=Pqp|VerbForm=Fin	12	advcl	_	_
20	și	și	CCONJ	Crssp	Polarity=Pos	24	cc	_	_
21	coloana	coloană	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	24	nsubj	_	_
22	sa	său	DET	Ds3fsrs	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	21	det	_	_
23	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	24	expl:pv	_	_
24	sfărâmița	sfărâmița	PROPN	Np	_	19	conj	_	SpaceAfter=No
25	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 expl:pv	color:blue
1	Valea	vale	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
2	largă	larg	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
4	Moldovii	Moldovii	PROPN	Np	_	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	apa	apă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
8	sclipitoare	sclipitor	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	7	amod	_	_
9	ca	ca	ADV	Rc	_	11	advmod	_	_
10	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	cordică	cordică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
12	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	argint	argint	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	SpaceAfter=No
14	,	,	PUNCT	COMMA	_	7	punct	_	_
15	să	să	PART	Qs	Mood=Sub	16	expl:pv	_	_
16	întindea	întinde	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
17	dinaintea	dinaintea	ADP	Spsg	AdpType=Prep|Case=Gen	18	case	_	_
18	ochilor	ochi	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	16	obl	_	_
19	noștri	meu	DET	Ds1mp-p	Gender=Masc|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	18	det	_	SpaceAfter=No
20	.	.	PUNCT	PERIOD	_	16	punct	_	_

~~~


