---
layout: base
title:  'Statistics of case in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `case`

This relation is universal.

13131 nodes (21%) are attached to their parents as `case`.

13108 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17005559363339.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (10806; 82% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1981; 15% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (135; 1% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (86; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (57; 0% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (22; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (20; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (16; 0% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	the	the	DET	_	PronType=Art	5	det	_	_
3	tower	tower	PROPN	_	Number=Sing	5	compound	_	_
4	air	air	PROPN	_	Number=Sing	3	flat	_	_
5	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
6	on	on	ADP	_	_	7	case	_	_
7	mondays	monday	PROPN	_	Number=Plur	5	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
1	show	show	VERB	_	VerbForm=Inf	0	root	_	_
2	me	I	PRON	_	PronType=Prs	1	iobj	_	_
3	flights	flight	NOUN	_	Number=Plur	1	obj	_	_
4	to	to	ADP	_	_	5	case	_	_
5	san	san	PROPN	_	Number=Sing	3	nmod	_	_
6	francisco	francisco	PROPN	_	Number=Sing	5	flat	_	_
7	arriving	arrive	VERB	_	Tense=Pres|VerbForm=Part	3	acl:relcl	_	_
8	before	before	ADP	_	_	9	case	_	_
9	1	1	NUM	_	NumType=Card	7	obl	_	_

~~~


