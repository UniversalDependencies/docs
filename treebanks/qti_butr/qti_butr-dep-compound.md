---
layout: base
title:  'Statistics of compound in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `compound`

This relation is universal.

20 nodes (5%) are attached to their parents as `compound`.

20 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (14; 70% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (4; 20% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Okulun	okul	NOUN	_	Case=Gen|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	sitesini	site	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
3	navigate	navigate	NOUN	_	_	4	compound	_	Lang=en
4	etmek	et	VERB	_	Case=Nom|Polarity=Pos	5	nsubj	_	Lang=tr
5	kolay	kolay	ADJ	_	_	0	root	_	Lang=tr
6	değil	değil	AUX	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	5	aux	_	Lang=tr|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Vending	vending	NOUN	_	_	2	compound	_	Lang=en
2	machinelerden	machine	NOUN	_	Case=Abl|Number=Plur	4	obj	_	Lang=tr|CSID=MIXED|CSPoint=machine§lerden
3	nefret	nefret	NOUN	_	Case=Nom|Number=Sing|Person=3	4	compound	_	Lang=tr
4	ediyorum	et	VERB	_	Aspect=Prog|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	Lang=tr|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 compound	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Lang=en
2	know	now	ADV	_	Typo=Yes	3	advmod	_	Lang=en
3	own	own	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Lang=en
4	a	a	DET	_	PronType=Art	6	det	_	Lang=en
5	saç	saç	NOUN	_	Case=Nom|Number=Sing|Person=3	6	compound	_	Lang=tr
6	tokası	toka	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obj	_	Lang=tr
7	w	with	ADP	_	_	9	case	_	Lang=en
8	plastic	plastic	ADJ	_	_	9	amod	_	Lang=en
9	decorations	decoration	NOUN	_	Number=Plur	6	nmod	_	Lang=en
10	next	next	ADJ	_	_	6	advmod	_	Lang=en
11	to	to	ADP	_	_	12	case	_	Lang=en
12	it	it	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	obl	_	Lang=en
13	a	a	DET	_	PronType=Art	14	det	_	Lang=en
14	mendil	mendil	NOUN	_	Case=Nom|Number=Sing|Person=3	6	conj	_	Lang=tr
15	and	and	CCONJ	_	_	19	cc	_	Lang=en
16	a	a	DET	_	PronType=Art	19	det	_	Lang=en
17	pink	pink	ADJ	_	_	19	amod	_	Lang=en
18	barbie	barbie	PROPN	_	Number=Sing	19	compound	_	Lang=en
19	hat	hat	NOUN	_	Number=Sing	14	conj	_	Lang=en|SpaceAfter=No
20	.	.	PUNCT	_	_	3	punct	_	_

~~~


