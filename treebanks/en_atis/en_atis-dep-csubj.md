---
layout: base
title:  'Statistics of csubj in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

2 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 50% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj	color:blue
1	my	I	DET	_	Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	question	question	NOUN	_	Number=Sing	0	root	_	_
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	i	i	PRON	_	PronType=Prs	5	nsubj	_	_
5	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	csubj	_	_
6	to	to	PART	_	_	7	mark	_	_
7	go	go	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	to	to	ADP	_	_	9	case	_	_
9	san	san	PROPN	_	Number=Sing	7	obl	_	_
10	francisco	francisco	PROPN	_	Number=Sing	9	flat	_	_
11	and	and	CCONJ	_	_	13	cc	_	_
12	i	i	PRON	_	PronType=Prs	13	nsubj	_	_
13	live	live	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	conj	_	_
14	in	in	ADP	_	_	15	case	_	_
15	denver	denver	PROPN	_	Number=Sing	13	obl	_	_
16	and	and	CCONJ	_	_	19	cc	_	_
17	i	i	PRON	_	PronType=Prs	19	nsubj	_	_
18	would	will	AUX	_	_	19	aux	_	_
19	like	like	VERB	_	VerbForm=Inf	13	conj	_	_
20	to	to	PART	_	_	21	mark	_	_
21	fly	fly	VERB	_	VerbForm=Inf	19	xcomp	_	_
22	on	on	ADP	_	_	23	case	_	_
23	united	united	PROPN	_	Number=Sing	21	obl	_	_
24	airlines	airline	PROPN	_	Number=Plur	23	flat	_	_
25	do	do	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	27	aux	_	_
26	you	you	PRON	_	PronType=Prs	27	nsubj	_	_
27	have	have	VERB	_	VerbForm=Inf	2	parataxis	_	_
28	an	an	DET	_	PronType=Art	30	det	_	_
29	early	early	ADJ	_	Degree=Pos	30	amod	_	_
30	flight	flight	NOUN	_	Number=Sing	27	obj	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 24 csubj	color:blue
1	okay	okay	INTJ	_	_	2	discourse	_	_
2	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
3	i	i	PRON	_	PronType=Prs	5	nsubj	_	_
4	would	will	AUX	_	_	5	aux	_	_
5	like	like	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	acl:relcl	_	_
6	to	to	ADP	_	_	7	case	_	_
7	know	know	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
9	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	aux	_	_
10	twa	twa	PROPN	_	Number=Sing	24	nsubj	_	_
11	flight	flight	NOUN	_	Number=Sing	10	flat	_	_
12	505	505	NUM	_	NumType=Card	10	flat	_	_
13	from	from	ADP	_	_	14	case	_	_
14	charlotte	charlotte	PROPN	_	Number=Sing	10	nmod	_	_
15	to	to	ADP	_	_	16	case	_	_
16	las	la	PROPN	_	Number=Sing	10	nmod	_	_
17	vegas	vegas	PROPN	_	Number=Sing	16	flat	_	_
18	with	with	ADP	_	_	20	case	_	_
19	a	a	DET	_	PronType=Art	20	det	_	_
20	stop	stop	NOUN	_	Number=Sing	10	nmod	_	_
21	in	in	ADP	_	_	22	case	_	_
22	st.	st.	PROPN	_	Number=Sing	20	nmod	_	_
23	louis	louis	PROPN	_	Number=Sing	22	flat	_	_
24	serve	serve	VERB	_	VerbForm=Inf	2	csubj	_	_
25	dinner	dinner	NOUN	_	Number=Sing	24	obj	_	_
26	that	that	PRON	_	PronType=Int,Rel	28	nsubj	_	_
27	's	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	_	_
28	twa	twa	PROPN	_	Number=Sing	24	obl	_	_
29	flight	flight	NOUN	_	Number=Sing	28	flat	_	_
30	505	505	NUM	_	NumType=Card	28	nummod	_	_
31	or	or	CCONJ	_	_	32	cc	_	_
32	163	163	NUM	_	NumType=Card	30	conj	_	_

~~~


