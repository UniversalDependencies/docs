---
layout: base
title:  'Statistics of nmod:poss in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_atis-dep-nmod-tmod.html">nmod:tmod</a></tt>.

43 nodes (0%) are attached to their parents as `nmod:poss`.

43 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81395348837209.

The following 3 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (28; 65% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (10; 23% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (5; 12% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	your	you	DET	_	Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	flights	flight	NOUN	_	Number=Plur	1	nsubj	_	_
5	from	from	ADP	_	_	6	case	_	_
6	denver	denver	PROPN	_	Number=Sing	4	nmod	_	_
7	to	to	ADP	_	_	8	case	_	_
8	baltimore	baltimore	PROPN	_	Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nmod:poss	color:blue
1	what	what	PRON	_	PronType=Int,Rel	2	det	_	_
2	price	price	NOUN	_	Number=Sing	0	root	_	_
3	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	a	a	DET	_	PronType=Art	6	det	_	_
5	limousine	limousine	NOUN	_	Number=Sing	6	compound	_	_
6	service	service	NOUN	_	Number=Sing	2	nsubj	_	_
7	to	to	ADP	_	_	11	case	_	_
8	new	new	PROPN	_	Number=Sing	11	nmod:poss	_	_
9	york	york	PROPN	_	Number=Sing	8	flat	_	_
10	's	be	PART	_	_	8	case	_	_
11	la	la	PROPN	_	Number=Sing	6	nmod	_	_
12	guardia	guardia	PROPN	_	Number=Sing	11	flat	_	_

~~~


