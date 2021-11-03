---
layout: base
title:  'Statistics of mark in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `mark`

This relation is universal.

802 nodes (1%) are attached to their parents as `mark`.

800 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12718204488778.

The following 12 pairs of parts of speech are connected with `mark`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (470; 59% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (298; 37% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (14; 2% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	how	how	ADV	_	PronType=Int,Rel	2	advmod	_	_
2	long	long	ADJ	_	Degree=Pos	5	advmod	_	_
3	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	it	it	PRON	_	PronType=Prs	5	nsubj	_	_
5	take	take	VERB	_	VerbForm=Inf	0	root	_	_
6	to	to	PART	_	_	7	mark	_	_
7	fly	fly	VERB	_	VerbForm=Inf	5	obl	_	_
8	from	from	ADP	_	_	9	case	_	_
9	boston	boston	PROPN	_	Number=Sing	7	nmod	_	_
10	to	to	ADP	_	_	11	case	_	_
11	atlanta	atlanta	PROPN	_	Number=Sing	7	nmod	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 mark	color:blue
1	what	what	DET	_	PronType=Int,Rel	2	det	_	_
2	kind	kind	NOUN	_	Number=Sing	6	nsubj	_	_
3	of	of	ADP	_	_	5	case	_	_
4	ground	ground	NOUN	_	Number=Sing	5	compound	_	_
5	transportation	transportation	NOUN	_	Number=Sing	2	nmod	_	_
6	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	there	there	PRON	_	PronType=Dem	6	expl	_	_
8	once	once	ADP	_	_	10	mark	_	_
9	i	i	PRON	_	PronType=Prs	10	nsubj	_	_
10	get	get	VERB	_	VerbForm=Inf	6	advcl	_	_
11	to	to	ADP	_	_	12	case	_	_
12	dallas	dallas	PROPN	_	Number=Sing	10	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	all	all	DET	_	PronType=Art	4	det:predet	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	airlines	airline	NOUN	_	Number=Plur	1	obj	_	_
5	that	that	ADP	_	_	6	mark	_	_
6	service	service	NOUN	_	Number=Sing	4	acl:relcl	_	_
7	denver	denver	PROPN	_	Number=Sing	6	obj	_	_

~~~


