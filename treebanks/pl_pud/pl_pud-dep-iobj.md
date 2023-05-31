---
layout: base
title:  'Statistics of iobj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `iobj`

This relation is universal.

290 nodes (2%) are attached to their parents as `iobj`.

260 instances of `iobj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97931034482759.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (171; 59% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (41; 14% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (28; 10% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (18; 6% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (9; 3% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (6; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 iobj	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	2	amod	2:amod	_
2	normy	norma	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
3	poziomu	poziom	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
4	żelaza	żelazo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	nmod:arg	3:nmod:arg	_
5	oznaczają	oznaczać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	że	że	SCONJ	comp	_	8	mark	8:mark	_
8	potrzeba	potrzeba	VERB	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	5	ccomp	5:ccomp	_
9	więcej	więcej	DET	num:pl:acc:m1:rec	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	10	det:numgov	10:det:numgov	_
10	dawców	dawca	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	8	iobj	8:iobj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Zostanie	zostać	AUX	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	aux:pass	2:aux:pass	_
2	poddany	poddać	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
3	ocenie	ocena	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	2	iobj	2:iobj	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 iobj	color:blue
1	Ludzie	człowiek	NOUN	subst:pl:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Plur	5	vocative	5:vocative	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
3	nie	nie	PART	part	Polarity=Neg	4	advmod:neg	4:advmod:neg	_
4	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	iobj	5:iobj	_
5	potrzebujemy	potrzebować	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Loc
7	naszym	nasz	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det:poss	8:det:poss	_
8	kraju	kraj	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


