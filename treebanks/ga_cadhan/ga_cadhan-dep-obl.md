---
layout: base
title:  'Statistics of obl in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="ga_cadhan-dep-obl-prep.html">obl:prep</a></tt>, <tt><a href="ga_cadhan-dep-obl-tmod.html">obl:tmod</a></tt>.

254 nodes (5%) are attached to their parents as `obl`.

225 instances of `obl` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61417322834646.

The following 12 pairs of parts of speech are connected with `obl`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (124; 49% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (63; 25% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (21; 8% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (20; 8% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PART.html">PART</a></tt> (15; 6% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl	color:blue
1	Thangas	tar	VERB	_	Form=Len|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	abhaile	abhaile	ADV	_	_	1	advmod	_	_
3	air	ar	ADP	_	_	5	case	_	_
4	mo	mo	DET	_	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	_
5	socracht	socracht	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl	color:blue
1	Do	do	PART	_	PartType=Vb	2	mark:prt	_	_
2	dhéanfá	déan	VERB	_	Form=Len|Mood=Cnd|Number=Sing|Person=2	0	root	_	_
3	iarracht	iarracht	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	obj	_	_
4	mé	mé	PRON	_	Number=Sing|Person=1	5	obj	_	_
5	sgaradh	scaradh	NOUN	_	VerbForm=Inf	3	acl	_	_
6	ó'n	ó	ADP	_	Number=Sing|PronType=Art	7	case	_	_
7	bhfear	fear	NOUN	_	Case=Nom|Definite=Def|Form=Ecl|Gender=Masc|Number=Sing	5	obl	_	_
8	beag	beag	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_
9	buidhe	buí	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	nach	nach	PART	_	PartType=Cmpl|Polarity=Neg	12	mark:prt	_	_
12	ndéanfá	déan	VERB	_	Form=Ecl|Mood=Cnd|Number=Sing|Person=2|Polarity=Neg	2	parataxis	_	SpaceAfter=No
13	?	.	PUNCT	_	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 obl	color:blue
1	Tug	tabhair	VERB	_	Mood=Ind|Tense=Past	0	root	_	_
2	d'	de	ADP	_	_	3	case	_	SpaceAfter=No
3	Fhidheach	Fíoch	PROPN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Sing	1	obl	_	_
4	mac	mac	NOUN	_	Case=Gen|Gender=Masc|NounType=Weak|Number=Plur	3	appos	_	_
5	Féigh	Fiach	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	d'	de	ADP	_	_	8	case	_	SpaceAfter=No
8	fhearaibh	fear	NOUN	_	Case=Dat|Definite=Def|Form=Len|Gender=Masc|Number=Plur	3	nmod	_	_
9	na	an	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	craoibhe	craobh	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	8	punct	_	_
12	ó	ó	ADP	_	_	13	case	_	_
13	Fhidhic	Fidhic	PROPN	_	Case=Nom|Definite=Def|Form=Len|Gender=Masc|Number=Plur	1	obl	_	_
14	go	go	ADP	_	_	15	case	_	_
15	Luimneach	Luimneach	PROPN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	13	nmod	_	SpaceAfter=No
16	.	.	PUNCT	_	_	1	punct	_	_

~~~


