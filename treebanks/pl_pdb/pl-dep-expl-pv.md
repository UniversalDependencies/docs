---
layout: base
title:  'Statistics of expl:pv in UD_Polish'
udver: '2'
---

## Treebank Statistics: UD_Polish: Relations: `expl:pv`

This relation is a language-specific subtype of .

1708 nodes (2%) are attached to their parents as `expl:pv`.

1336 instances of `expl:pv` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21135831381733.

The following 4 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pl-pos-VERB.html">VERB</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (1613; 94% instances), <tt><a href="pl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (62; 4% instances), <tt><a href="pl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (31; 2% instances), <tt><a href="pl-pos-PRON.html">PRON</a></tt>-<tt><a href="pl-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Zawahała	zawahać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	się	się	PRON	qub	PronType=Prs|Reflex=Yes	1	expl:pv	_	SpaceAfter=No
3	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl:pv	color:blue
1	Więc	więc	CCONJ	conj	_	6	advmod	_	_
2	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	_	_
3	nagle	nagle	ADV	adv:pos	Degree=Pos	6	advmod	_	_
4	ludziska	ludziska	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	_
5	poczuli	poczuć	AUX	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	6	cop	_	_
6	ważniejsi	ważny	ADJ	adj:pl:nom:m1:com	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
7	i	i	CCONJ	conj	_	8	cc	_	_
8	lepsi	dobry	ADJ	adj:pl:nom:m1:com	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl:pv	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep|Case=Loc	2	case	_	_
2	2005	2005	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	5	obl	_	_
3	r	rok	X	brev:pun	Abbr=Yes	2	nmod	_	SpaceAfter=No
4	.	.	PUNCT	interp	_	3	punct	_	_
5	planuje	planować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	się	się	PRON	qub	PronType=Prs|Reflex=Yes	8	expl:pv	_	_
7	znaczne	znaczny	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	8	amod	_	_
8	ograniczenie	ograniczenie	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	5	obj	_	_
9	wydobycia	wydobycie	NOUN	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	5	punct	_	_

~~~


