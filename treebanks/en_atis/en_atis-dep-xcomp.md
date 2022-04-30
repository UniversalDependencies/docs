---
layout: base
title:  'Statistics of xcomp in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `xcomp`

This relation is universal.

543 nodes (1%) are attached to their parents as `xcomp`.

512 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.18600368324125.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (405; 75% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (61; 11% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (34; 6% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (33; 6% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	want	want	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	to	to	ADP	_	_	4	case	_	_
4	fly	fly	VERB	_	VerbForm=Inf	2	xcomp	_	_
5	from	from	ADP	_	_	6	case	_	_
6	denver	denver	PROPN	_	Number=Sing	4	obl	_	_
7	to	to	ADP	_	_	8	case	_	_
8	san	san	PROPN	_	Number=Sing	4	obl	_	_
9	francisco	francisco	PROPN	_	Number=Sing	8	flat	_	_
10	with	with	ADP	_	_	14	case	_	_
11	at	at	ADP	_	_	12	case	_	_
12	least	least	ADJ	_	Degree=Sup	14	amod	_	_
13	one	one	NUM	_	NumType=Card	14	nummod	_	_
14	stop	stop	NOUN	_	Number=Sing	4	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	ADP	_	_	0	root	_	_
4	to	to	PART	_	_	5	mark	_	_
5	fly	fly	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	from	from	ADP	_	_	7	case	_	_
7	boston	boston	PROPN	_	Number=Sing	5	obl	_	_
8	to	to	PART	_	_	9	mark	_	_
9	denver	denver	PROPN	_	Number=Sing	5	obl	_	_
10	early	early	ADJ	_	Degree=Pos	13	amod	_	_
11	in	in	ADP	_	_	13	case	_	_
12	the	the	DET	_	PronType=Art	13	det	_	_
13	morning	morning	NOUN	_	Number=Sing	5	obl:tmod	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	ADJ	_	Degree=Pos	0	root	_	_
4	to	to	PART	_	_	5	mark	_	_
5	travel	travel	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	from	from	ADP	_	_	7	case	_	_
7	boston	boston	PROPN	_	Number=Sing	5	obl	_	_
8	to	to	ADP	_	_	9	case	_	_
9	denver	denver	PROPN	_	Number=Sing	5	obl	_	_
10	early	early	ADV	_	Degree=Pos	5	advmod	_	_
11	in	in	ADP	_	_	13	case	_	_
12	the	the	DET	_	PronType=Art	13	det	_	_
13	morning	morning	NOUN	_	Number=Sing	10	obl:tmod	_	_

~~~


