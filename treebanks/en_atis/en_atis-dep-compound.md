---
layout: base
title:  'Statistics of compound in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="en_atis-dep-compound-prt.html">compound:prt</a></tt>.

2377 nodes (4%) are attached to their parents as `compound`.

2372 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.09844341607068.

The following 18 pairs of parts of speech are connected with `compound`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1463; 62% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (581; 24% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (124; 5% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (52; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (43; 2% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (35; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (28; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (26; 1% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	need	need	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	information	information	NOUN	_	Number=Sing	2	obj	_	_
4	for	for	ADP	_	_	6	case	_	_
5	ground	ground	NOUN	_	Number=Sing	6	compound	_	_
6	transportation	transportation	NOUN	_	Number=Sing	3	nmod	_	_
7	denver	denver	PROPN	_	Number=Sing	6	list	_	_
8	colorado	colorado	PROPN	_	Number=Sing	7	appos	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	tower	tower	PROPN	_	Number=Sing	5	compound	_	_
4	air	air	PROPN	_	Number=Sing	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	on	on	ADP	_	_	7	case	_	_
7	mondays	monday	PROPN	_	Number=Plur	5	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 compound	color:blue
1	flights	flight	NOUN	_	Number=Plur	0	root	_	_
2	from	from	ADP	_	_	3	case	_	_
3	oakland	oakland	PROPN	_	Number=Sing	1	nmod	_	_
4	to	to	ADP	_	_	5	case	_	_
5	san	san	PROPN	_	Number=Sing	1	nmod	_	_
6	francisco	francisco	PROPN	_	Number=Sing	5	flat	_	_
7	on	on	ADP	_	_	8	case	_	_
8	january	january	PROPN	_	Number=Sing	1	obl:tmod	_	_
9	twenty	twenty	NUM	_	NumType=Card	10	compound	_	_
10	first	first	ADJ	_	Degree=Pos	8	amod	_	_
11	1992	1992	NUM	_	NumType=Card	8	nummod	_	_

~~~


