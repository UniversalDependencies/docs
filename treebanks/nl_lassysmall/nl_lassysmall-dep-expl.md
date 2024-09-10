---
layout: base
title:  'Statistics of expl in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="nl_lassysmall-dep-expl-pv.html">expl:pv</a></tt>.

280 nodes (0%) are attached to their parents as `expl`.

240 instances of `expl` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.99285714285714.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (159; 57% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (68; 24% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (45; 16% instances), <tt><a href="nl_lassysmall-pos-ADV.html">ADV</a></tt>-<tt><a href="nl_lassysmall-pos-PRON.html">PRON</a></tt> (8; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 expl	color:blue
1	Ik	ik	PRON	VNW|pers|pron|nomin|vol|1|ev	Case=Nom|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	hield	houden	VERB	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	er	er	PRON	VNW|aanw|adv-pron|stan|red|3|getal	Person=3|PronType=Dem	10	expl	10:expl	_
4	niet	niet	ADV	BW	_	2	advmod	2:advmod	_
5	van	van	ADP	VZ|fin	_	10	case	10:case	_
6	met	met	ADP	VZ|init	_	7	case	7:case	_
7	hem	hem	PRON	VNW|pers|pron|obl|vol|3|ev|masc	Case=Acc|Person=3|PronType=Prs	10	obl:arg	10:obl:arg:met	_
8	mee	mee	ADP	VZ|fin	_	10	compound:prt	10:compound:prt	_
9	te	te	ADP	VZ|init	_	10	mark	10:mark	_
10	rijden	mee_rijden	VERB	WW|inf|vrij|zonder	VerbForm=Inf	2	advcl	2:advcl:van	SpaceAfter=No
11	.	.	PUNCT	LET	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	4	expl	4:expl	_
2	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	daarom	daarom	ADV	BW	_	4	advmod	4:advmod	_
4	gezonder	gezond	ADJ	ADJ|vrij|comp|zonder	Degree=Cmp	0	root	0:root	_
5	om	om	ADP	VZ|init	_	11	mark	11:mark	_
6	bruine	bruin	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	nmod	9:nmod	_
7	of	of	CCONJ	VG|neven	_	8	cc	8:cc	_
8	parboiled	parboiled	X	SPEC|vreemd	Foreign=Yes	6	conj	6:conj:of|9:nmod	_
9	rijst	rijst	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	11	obj	11:obj	_
10	te	te	ADP	VZ|init	_	11	mark	11:mark	_
11	eten	eten	VERB	WW|inf|vrij|zonder	VerbForm=Inf	4	csubj	4:csubj	SpaceAfter=No
12	.	.	PUNCT	LET	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 expl	color:blue
1	Zijn	zijn	PRON	VNW|bez|det|stan|vol|3|ev|prenom|zonder|agr	Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	_
2	grootste	groot	ADJ	ADJ|prenom|sup|met-e|stan	Degree=Sup	3	amod	3:amod	_
3	wens	wens	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	0	root	0:root	_
4	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	3	cop	3:cop	_
5	het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	3	expl	3:expl	SpaceAfter=No
6	,	,	PUNCT	LET	_	9	punct	9:punct	_
7	Peshawar	Peshawar	PROPN	N|eigen|ev|basis|onz|stan	Gender=Neut|Number=Sing	9	obj	9:obj	_
8	te	te	ADP	VZ|init	_	9	mark	9:mark	_
9	heroveren	heroveren	VERB	WW|inf|vrij|zonder	VerbForm=Inf	3	csubj	3:csubj	_
10	op	op	ADP	VZ|init	_	12	case	12:case	_
11	de	de	DET	LID|bep|stan|rest	Definite=Def	12	det	12:det	_
12	Sikhs	sikh	NOUN	N|soort|mv|basis	Number=Plur	9	obl:arg	9:obl:arg:op	SpaceAfter=No
13	.	.	PUNCT	LET	_	3	punct	3:punct	_

~~~


