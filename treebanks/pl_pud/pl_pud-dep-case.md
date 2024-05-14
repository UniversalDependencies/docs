---
layout: base
title:  'Statistics of case in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `case`

This relation is universal.

1996 nodes (11%) are attached to their parents as `case`.

1993 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.42885771543086.

The following 12 pairs of parts of speech are connected with `case`: <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1535; 77% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (284; 14% instances), <tt><a href="pl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (85; 4% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (38; 2% instances), <tt><a href="pl_pud-pos-DET.html">DET</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (31; 2% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (10; 1% instances), <tt><a href="pl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pud-pos-X.html">X</a></tt>-<tt><a href="pl_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	wydatki	wydatek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
3	finansowane	finansować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
6	zasobnego	zasobny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	konta	konto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
8	Clinton	Clinton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Pracował	pracować	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	dla	dla	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen
3	BBC	BBC	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	1	obl	1:obl	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	dekadę	dekada	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obl	1:obl	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	każdy	każdy	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	3	nsubj	3:nsubj	_
3	może	móc	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	wznieść	wznieść	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	się	się	PRON	part	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	ponad	ponad	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Acc
7	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl:arg	4:obl:arg	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


