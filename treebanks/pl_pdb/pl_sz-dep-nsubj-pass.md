---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_sz-dep-nsubj.html">nsubj</a></tt>.

220 nodes (0%) are attached to their parents as `nsubj:pass`.

182 instances of `nsubj:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.38636363636364.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (178; 81% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-PROPN.html">PROPN</a></tt> (19; 9% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-PRON.html">PRON</a></tt> (12; 5% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-DET.html">DET</a></tt> (10; 5% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Projekt	projekt	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	_
2	został	zostać	AUX	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	3	aux:pass	_	_
3	podpisany	podpisany	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Case=Acc|Variant=Short	5	case	_	_
5	cesarza	cesarz	NOUN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	3	obl:arg	_	_
6	Wilhelma	Wilhelm	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	5	appos	_	_
7	II	II	ADJ	adj:sg:acc:m1:pos	Animacy=Hum|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	interp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	SLD	SLD	PROPN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj:pass	_	_
2	nie	nie	PART	qub	_	3	advmod	_	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
4	już	już	PART	qub	_	5	advmod	_	_
5	postrzegany	postrzegany	ADJ	ppas:sg:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
6	jako	jako	ADP	prep:nom	AdpType=Prep|Case=Nom	7	case	_	_
7	partia	partia	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	obl	_	_
8	lewicowa	lewicowy	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	.	.	PUNCT	interp	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Wszyscy	wszyscy	PRON	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	4	nsubj:pass	_	_
2	natychmiast	natychmiast	ADV	adv	_	4	advmod	_	_
3	zostają	zostawać	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	wezwani	wezwany	ADJ	ppas:pl:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	_
5	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	6	case	_	_
6	Moskwy	Moskwa	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	interp	_	4	punct	_	_

~~~


