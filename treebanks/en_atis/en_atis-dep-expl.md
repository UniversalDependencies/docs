---
layout: base
title:  'Statistics of expl in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `expl`

This relation is universal.

239 nodes (0%) are attached to their parents as `expl`.

230 instances of `expl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02928870292887.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (203; 85% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (30; 13% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	are	be	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	there	there	PRON	_	PronType=Dem	1	expl	_	_
3	delta	delta	PROPN	_	Number=Sing	4	compound	_	_
4	flights	flight	NOUN	_	Number=Plur	1	nsubj	_	_
5	leaving	leave	VERB	_	Tense=Pres|VerbForm=Part	4	acl:relcl	_	_
6	atlanta	atlanta	PROPN	_	Number=Sing	5	obj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl	color:blue
1	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	there	there	PRON	_	PronType=Dem	1	expl	_	_
3	limo	limo	NOUN	_	Number=Sing	4	compound	_	_
4	service	service	NOUN	_	Number=Sing	1	nsubj	_	_
5	at	at	ADP	_	_	6	case	_	_
6	pittsburgh	pittsburgh	PROPN	_	Number=Sing	1	obl	_	_
7	airport	airport	PROPN	_	Number=Sing	6	flat	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 expl	color:blue
1	is	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
2	there	there	PRON	_	PronType=Dem	4	expl	_	_
3	a	a	DET	_	PronType=Art	4	det	_	_
4	flight	flight	NOUN	_	Number=Sing	0	root	_	_
5	on	on	ADP	_	_	6	case	_	_
6	continental	continental	PROPN	_	Number=Sing	4	nmod	_	_
7	airlines	airline	PROPN	_	Number=Plur	6	flat	_	_
8	from	from	ADP	_	_	9	case	_	_
9	boston	boston	PROPN	_	Number=Sing	6	nmod	_	_
10	to	to	ADP	_	_	11	case	_	_
11	denver	denver	PROPN	_	Number=Sing	6	nmod	_	_

~~~


