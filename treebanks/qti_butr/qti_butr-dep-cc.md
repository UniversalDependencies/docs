---
layout: base
title:  'Statistics of cc in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `cc`

This relation is universal.

5 nodes (1%) are attached to their parents as `cc`.

4 instances of `cc` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (3; 60% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cc	color:blue
1	Ama	ama	CCONJ	_	_	6	discourse	_	Lang=tr
2	çok	çok	ADV	_	_	3	advmod	_	Lang=tr
3	tatlı	tatlı	ADJ	_	_	6	amod	_	Lang=tr
4	ve	ve	CCONJ	_	_	3	cc	_	Lang=tr
5	süper	süper	ADJ	_	_	3	conj	_	Lang=tr
6	biri	bir	PRON	_	Case=Nom|Number=Sing|Person=3	0	root	_	Lang=tr
7	so	so	ADV	_	_	8	advmod	_	Lang=en
8	unproblematic	unproblematic	ADJ	_	_	6	parataxis	_	Lang=en
9	and	and	CCONJ	_	_	10	cc	_	Lang=en
10	funny	funny	ADJ	_	_	8	conj	_	Lang=en|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 15 cc	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1	3	nsubj	_	Lang=en
2	know	now	ADV	_	Typo=Yes	3	advmod	_	Lang=en
3	own	own	VERB	_	Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Lang=en
4	a	a	DET	_	_	6	det	_	Lang=en
5	saç	saç	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	Lang=tr
6	tokası	toka	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
7	w	with	ADP	_	_	9	case	_	Lang=en
8	plastic	plastic	ADJ	_	_	9	amod	_	Lang=en
9	decorations	decoration	NOUN	_	Number=Plur	6	nmod	_	Lang=en
10	next	next	ADJ	_	_	6	advmod	_	Lang=en
11	to	to	ADP	_	_	12	case	_	Lang=en
12	it	it	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3	10	obl	_	Lang=en
13	a	a	DET	_	_	14	det	_	Lang=en
14	mendil	mendil	NOUN	_	Case=Nom|Number=Sing|Person=3	3	obj	_	Lang=tr
15	and	and	CCONJ	_	_	19	cc	_	Lang=en
16	a	a	DET	_	_	19	det	_	Lang=en
17	pink	pink	ADJ	_	_	19	amod	_	Lang=en
18	barbie	barbie	PROPN	_	Number=Sing	19	compound	_	Lang=en
19	hat	hat	NOUN	_	Number=Sing	14	conj	_	Lang=en|SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Me	I	PRON	_	_	2	nsubj	_	Lang=en
2	flirting	flirt	VERB	_	_	0	root	_	Lang=en
3	but	but	CCONJ	_	_	4	cc	_	Lang=en
4	doing	do	VERB	_	_	2	conj	_	Lang=en
5	this	this	PRON	_	_	4	obj	_	Lang=en
6	in	in	ADP	_	_	12	case	_	Lang=en
7	a	a	DET	_	_	12	det	_	Lang=en
8	artık	artık	ADV	_	_	10	advmod	_	Lang=tr
9	flörtleşmek	flörtleş	VERB	_	Case=Nom|Polarity=Pos|VerbForm=Vnoun	10	obj	_	Lang=tr
10	istemiyorum	iste	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	11	amod	_	Lang=tr
11	kinda	kinda	ADV	_	_	12	advmod	_	Lang=en
12	way	way	NOUN	_	_	4	obl	_	Lang=en|SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


