---
layout: base
title:  'Statistics of expl:pv in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `expl:pv`

This relation is a language-specific subtype of .

271 nodes (1%) are attached to their parents as `expl:pv`.

245 instances of `expl:pv` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08118081180812.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (238; 88% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (20; 7% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (13; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	każdy	każdy	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	nsubj	3:nsubj	_
3	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	wznieść	wznieść	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	ponad	ponad	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Acc
7	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 expl:pv	color:blue
1	Album	album	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
2	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	3	punct	3:punct	SpaceAfter=No
3	Wild	Wild	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	1	nmod	1:nmod	_
4	West	West	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	flat	3:flat	SpaceAfter=No
5	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	3	punct	3:punct	_
6	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Gen
7	1981	1981	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	8	amod:flat	8:amod:flat	_
8	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	1	nmod	1:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_
10	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
11	jednym	jeden	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	_
12	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	16	case	16:case	Case=Gen
13	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	16	obl	16:obl	_
14	najlepiej	dobrze	ADV	adv:sup	Degree=Sup	16	advmod	16:advmod	_
15	się	się	PRON	part	PronType=Prs|Reflex=Yes	16	expl:pv	16:expl:pv	_
16	sprzedających	sprzedawać	ADJ	pact:pl:gen:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Gen|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	11	acl	11:acl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl:pv	color:blue
1	W	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Loc
2	tym	ten	DET	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	_
3	kontekście	kontekst	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	obl	7:obl	_
4	przeciwstawianie	przeciwstawiać	NOUN	ger:sg:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	7	nsubj	7:nsubj	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	handlowi	handel	NOUN	subst:sg:dat:m3	Animacy=Inan|Case=Dat|Gender=Masc|Number=Sing	4	iobj	4:iobj	_
7	ma	mieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	sens	sens	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	iobj	7:iobj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


