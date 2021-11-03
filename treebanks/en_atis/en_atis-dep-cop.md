---
layout: base
title:  'Statistics of cop in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `cop`

This relation is universal.

1007 nodes (2%) are attached to their parents as `cop`.

703 instances of `cop` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.28997020854022.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (630; 63% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (158; 16% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (141; 14% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (27; 3% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (24; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (22; 2% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-DET.html">DET</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	restriction	restriction	NOUN	_	Number=Sing	4	compound	_	_
4	ap57	ap57	PROPN	_	Number=Sing	1	nsubj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cop	color:blue
1	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
2	fare	fare	NOUN	_	Number=Sing	3	compound	_	_
3	code	code	NOUN	_	Number=Sing	6	nsubj	_	_
4	b	b	SYM	_	_	3	nmod	_	_
5	the	the	DET	_	PronType=Art	6	det	_	_
6	same	same	ADJ	_	Degree=Pos	0	root	_	_
7	as	as	ADP	_	_	9	case	_	_
8	business	business	NOUN	_	Number=Sing	9	compound	_	_
9	class	class	NOUN	_	Number=Sing	6	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	how	how	ADV	_	PronType=Int,Rel	2	advmod	_	_
2	many	many	ADJ	_	Degree=Pos	10	nsubj	_	_
3	of	of	ADP	_	_	7	case	_	_
4	delta	delta	PROPN	_	Number=Sing	6	nmod:poss	_	_
5	's	be	PART	_	_	4	case	_	_
6	night	night	NOUN	_	Number=Sing	7	compound	_	_
7	flights	flight	NOUN	_	Number=Plur	2	nmod	_	_
8	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	first	first	ADJ	_	Degree=Pos	10	amod	_	_
10	class	class	NOUN	_	Number=Sing	0	root	_	_

~~~


