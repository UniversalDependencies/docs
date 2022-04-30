---
layout: base
title:  'Statistics of obj in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `obj`

This relation is universal.

3274 nodes (5%) are attached to their parents as `obj`.

3155 instances of `obj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60995723885156.

The following 16 pairs of parts of speech are connected with `obj`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2955; 90% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (145; 4% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (60; 2% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (33; 1% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (27; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (21; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obj	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	tower	tower	PROPN	_	Number=Sing	5	compound	_	_
4	air	air	PROPN	_	Number=Sing	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	on	on	ADP	_	_	7	case	_	_
7	mondays	monday	PROPN	_	Number=Plur	5	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj	color:blue
1	tell	tell	VERB	_	VerbForm=Inf	0	root	_	_
2	me	I	PRON	_	PronType=Prs	1	iobj	_	_
3	distance	distance	PROPN	_	Number=Sing	1	obj	_	_
4	from	from	ADP	_	_	5	case	_	_
5	orlando	orlando	PROPN	_	Number=Sing	3	nmod	_	_
6	airport	airport	PROPN	_	Number=Sing	5	flat	_	_
7	to	to	ADP	_	_	9	case	_	_
8	the	the	DET	_	PronType=Art	9	det	_	_
9	city	city	NOUN	_	Number=Sing	3	nmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obj	color:blue
1	what	what	PRON	_	PronType=Int,Rel	5	obj	_	_
2	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	d	d	PROPN	_	Number=Sing	5	nsubj	_	_
4	s	s	PROPN	_	Number=Sing	3	flat	_	_
5	stand	stand	VERB	_	VerbForm=Inf	0	root	_	_
6	for	for	ADP	_	_	5	compound:prt	_	_
7	for	for	ADP	_	_	8	case	_	_
8	meals	meal	NOUN	_	Number=Plur	5	obl	_	_

~~~


