---
layout: base
title:  'Statistics of aux in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_atis-dep-aux-pass.html">aux:pass</a></tt>.

1199 nodes (2%) are attached to their parents as `aux`.

1190 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75896580483736.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1004; 84% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (87; 7% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (75; 6% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (19; 2% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	what	what	PRON	_	PronType=Int,Rel	5	obj	_	_
2	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	d	d	PROPN	_	Number=Sing	5	nsubj	_	_
4	s	s	PROPN	_	Number=Sing	3	flat	_	_
5	stand	stand	VERB	_	VerbForm=Inf	0	root	_	_
6	for	for	ADP	_	_	5	compound:prt	_	_
7	for	for	ADP	_	_	8	case	_	_
8	meals	meal	NOUN	_	Number=Plur	5	obl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	what	what	PRON	_	PronType=Int,Rel	2	det	_	_
2	types	type	NOUN	_	Number=Plur	6	obl	_	_
3	of	of	ADP	_	_	4	case	_	_
4	meals	meal	NOUN	_	Number=Plur	2	nmod	_	_
5	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	available	available	ADJ	_	Degree=Pos	0	root	_	_

~~~


