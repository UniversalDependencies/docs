---
layout: base
title:  'Statistics of expl:pv in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `expl:pv`

This relation is a language-specific subtype of .

6181 nodes (2%) are attached to their parents as `expl:pv`.

4999 instances of `expl:pv` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17214043035108.

The following 3 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (5817; 94% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (227; 4% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (137; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pv	color:blue
1	Dwóch	dwa	NUM	num:pl:nom:m1:rec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	3	nummod:gov	3:nummod:gov	_
2	rudych	rudy	ADJ	adj:pl:gen:m1:pos	Animacy=Hum|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	3	amod	3:amod	_
3	chłopaków	chłopak	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	6	nsubj	6:nsubj	_
4	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
5	okularach	okulary	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	3	nmod	3:nmod	_
6	siłuje	siłować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
9	trzymając	trzymać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	6	advcl	6:advcl	_
10	kije	kij	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl:pv	color:blue
1	Tu	tu	ADV	adv	PronType=Dem	2	advmod	2:advmod	_
2	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	dużo	dużo	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	4	det:numgov	4:det:numgov	_
4	kobiet	kobieta	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	2	nsubj	2:nsubj	_
5	utożsamiających	utożsamiać	ADJ	pact:pl:gen:f:imperf:aff	Aspect=Imp|Case=Gen|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Act	4	amod	4:amod	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_
10	przy	przy	ADP	prep:loc	AdpType=Prep	5	parataxis:insert	5:parataxis:insert	Case=Loc
11	okazji	okazja	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	10	fixed	10:fixed	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	13	punct	13:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl:pv	color:blue
1	Dajemy	dawać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	ci	ty	PRON	ppron12:sg:dat:m1:sec:nakc	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Variant=Short	1	iobj	1:iobj	_
3	jedną	jeden	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	minutę	minuta	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obj	1:obj	_
5	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
6	poddanie	poddać	NOUN	ger:sg:acc:n:perf:aff	Aspect=Perf|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	1	obl	1:obl	_
7	się	się	PRON	part	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


