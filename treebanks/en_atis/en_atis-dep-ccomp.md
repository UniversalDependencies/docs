---
layout: base
title:  'Statistics of ccomp in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `ccomp`

This relation is universal.

49 nodes (0%) are attached to their parents as `ccomp`.

48 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.6734693877551.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (28; 57% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (11; 22% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	please	please	INTJ	_	_	2	discourse	_	_
2	tell	tell	VERB	_	VerbForm=Inf	0	root	_	_
3	me	I	PRON	_	PronType=Prs	2	iobj	_	_
4	which	which	DET	_	PronType=Int,Rel	5	det	_	_
5	airline	airline	NOUN	_	Number=Sing	6	nsubj	_	_
6	has	have	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	the	the	DET	_	PronType=Art	9	det	_	_
8	most	most	ADJ	_	Degree=Sup	9	amod	_	_
9	departures	departure	NOUN	_	Number=Plur	6	obj	_	_
10	from	from	ADP	_	_	11	case	_	_
11	atlanta	atlanta	PROPN	_	Number=Sing	9	nmod	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 ccomp	color:blue
1	i	i	PRON	_	PronType=Prs	2	nsubj	_	_
2	need	need	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ground	ground	NOUN	_	Number=Sing	4	compound	_	_
4	transportation	transportation	NOUN	_	Number=Sing	2	obj	_	_
5	in	in	ADP	_	_	6	acl	_	_
6	dallas	dallas	PROPN	_	Number=Sing	4	nmod	_	_
7	please	please	INTJ	_	_	2	discourse	_	_
8	show	show	VERB	_	VerbForm=Inf	2	parataxis	_	_
9	me	I	PRON	_	PronType=Prs	8	iobj	_	_
10	what	what	PRON	_	PronType=Int,Rel	12	nsubj	_	_
11	's	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	available	available	ADJ	_	Degree=Pos	8	ccomp	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	can	can	AUX	_	_	3	aux	_	_
2	you	you	PRON	_	PronType=Prs	3	nsubj	_	_
3	tell	tell	VERB	_	VerbForm=Inf	0	root	_	_
4	me	I	PRON	_	PronType=Prs	3	iobj	_	_
5	what	what	DET	_	PronType=Int,Rel	6	det	_	_
6	flights	flight	NOUN	_	Number=Plur	3	ccomp	_	_
7	you	you	PRON	_	PronType=Prs	8	nsubj	_	_
8	have	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	from	from	ADP	_	_	10	case	_	_
10	baltimore	baltimore	PROPN	_	Number=Sing	6	nmod	_	_
11	to	to	ADP	_	_	12	case	_	_
12	dallas	dallas	PROPN	_	Number=Sing	6	nmod	_	_

~~~


