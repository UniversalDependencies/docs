---
layout: base
title:  'Statistics of conj in UD_Turkish_English-BUTR'
udver: '2'
---

## Treebank Statistics: UD_Turkish_English-BUTR: Relations: `conj`

This relation is universal.

12 nodes (3%) are attached to their parents as `conj`.

12 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.08333333333333.

The following 5 pairs of parts of speech are connected with `conj`: <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qti_butr-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (2; 17% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-ADJ.html">ADJ</a></tt> (2; 17% instances), <tt><a href="qti_butr-pos-VERB.html">VERB</a></tt>-<tt><a href="qti_butr-pos-VERB.html">VERB</a></tt> (2; 17% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 conj	color:blue
1	Erzincan	Erzincan	PROPN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	Lang=tr
2	tulum	tulum	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	Lang=tr
3	yok	yok	ADJ	_	Polarity=Neg	0	root	_	Lang=tr|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	gravyer	gravyer	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	kaşar	kaşar	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr|SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	eski	eski	ADJ	_	_	10	amod	_	Lang=tr
10	kaşar	kaşar	NOUN	_	Case=Nom|Number=Sing|Person=3	3	conj	_	Lang=tr
11	relatively	relatively	ADV	_	_	12	advmod	_	Lang=en
12	az	az	ADV	_	_	13	advmod	_	Lang=tr
13	var	var	ADJ	_	Polarity=Pos	10	parataxis	_	Lang=tr

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 conj	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	Ama	ama	CCONJ	_	_	6	discourse	_	Lang=tr
2	çok	çok	ADV	_	_	3	advmod	_	Lang=tr
3	tatlı	tatlı	ADJ	_	_	6	amod	_	Lang=tr
4	ve	ve	CCONJ	_	_	3	cc	_	Lang=tr
5	süper	süper	ADJ	_	_	3	conj	_	Lang=tr
6	biri	bir	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	0	root	_	Lang=tr
7	so	so	ADV	_	_	8	advmod	_	Lang=en
8	unproblematic	unproblematic	ADJ	_	_	6	parataxis	_	Lang=en
9	and	and	CCONJ	_	_	10	cc	_	Lang=en
10	funny	funny	ADJ	_	_	8	conj	_	Lang=en|SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


