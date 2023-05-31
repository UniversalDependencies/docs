---
layout: base
title:  'Statistics of expl:pv in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `expl:pv`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="pl_lfg-dep-expl-impers.html">expl:impers</a></tt>.

3045 nodes (2%) are attached to their parents as `expl:pv`.

2296 instances of `expl:pv` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21904761904762.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (2995; 98% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (26; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (24; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 expl:pv	color:blue
1	423	423	NUM	num:pl:acc:m3:congr	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc3	2	nummod	2:nummod	DepType=Congr
2	razy	raz	NOUN	subst:pl:acc:m3	Case=Acc|Gender=Masc|Number=Plur|SubGender=Masc3	3	obl	3:obl	_
3	spotkały	spotkać	VERB	praet:pl:m3:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	qub	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	cztery	cztery	NUM	num:pl:nom:m3:congr	Case=Nom|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc3	7	nummod	7:nummod	DepType=Congr
6	rządowe	rządowy	ADJ	adj:pl:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|SubGender=Masc3	7	amod	7:amod	_
7	komitety	komitet	NOUN	subst:pl:nom:m3	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc3	3	nsubj	3:nsubj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 expl:pv	color:blue
1	Widział	widzieć	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	1	aux:clitic	1:aux:clitic	_
3	wyraźnie	wyraźnie	ADV	adv:pos	Degree=Pos	1	advmod	1:advmod	_
4	drobne	drobny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	amod	5:amod	_
5	krople	kropla	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	wolno	wolno	ADV	adv:pos	Degree=Pos	8	advmod	8:advmod	_
8	toczące	toczyć	ADJ	pact:pl:acc:f:imperf:aff	Aspect=Imp|Case=Acc|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	5	acl	5:acl	_
9	się	się	PRON	qub	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
10	po	po	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
11	twarzy	twarz	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	8	obl	8:obl:po	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pv	color:blue
1	Miłość	miłość	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
2	dla	dla	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen
3	ciebie	ty	PRON	ppron12:sg:gen:m1:sec:akc	Case=Gen|Gender=Masc|Number=Sing|Person=2|PronType=Prs|SubGender=Masc1|Variant=Long	5	obl	5:obl:dla	_
4	niekiedy	niekiedy	ADV	adv	PronType=Ind	5	advmod	5:advmod	_
5	sprzyja	sprzyjać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	ocieraniu	ocierać	NOUN	ger:sg:dat:n:imperf:aff	Aspect=Imp|Case=Dat|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	5	iobj	5:iobj	_
7	się	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
8	o	o	ADP	prep:acc	AdpType=Prep	9	case	9:case	Case=Acc
9	śmierć	śmierć	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	6	nmod	6:nmod:o	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


