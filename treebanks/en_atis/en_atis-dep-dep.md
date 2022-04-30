---
layout: base
title:  'Statistics of dep in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-DET.html">DET</a></tt> (2; 40% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	are	be	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	4	dep	_	_
4	flights	flight	NOUN	_	Number=Plur	1	nsubj	_	_
5	on	on	ADP	_	_	6	case	_	_
6	thursday	thursday	PROPN	_	Number=Sing	4	nmod	_	_
7	leaving	leave	VERB	_	Tense=Pres|VerbForm=Part	4	acl:relcl	_	_
8	from	from	ADP	_	_	9	case	_	_
9	st.	st.	PROPN	_	Number=Sing	7	obl	_	_
10	paul	paul	PROPN	_	Number=Sing	9	flat	_	_
11	minnesota	minnesota	PROPN	_	Number=Sing	9	flat	_	_
12	to	to	ADP	_	_	13	case	_	_
13	st.	st.	PROPN	_	Number=Sing	7	obl	_	_
14	louis	louis	PROPN	_	Number=Sing	13	flat	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 dep	color:blue
1	I	I	PRON	_	PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	ADJ	_	Degree=Pos	0	root	_	_
4	to	to	PART	_	_	5	mark	_	_
5	find	find	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	a	a	DET	_	PronType=Art	7	det	_	_
7	flight	flight	NOUN	_	Number=Sing	5	obj	_	_
8	from	from	ADP	_	_	9	case	_	_
9	charlotte	charlotte	PROPN	_	Number=Sing	7	nmod	_	_
10	north	north	PROPN	_	Number=Sing	9	appos	_	_
11	carolina	carolina	PROPN	_	Number=Sing	10	flat	_	_
12	to	to	ADP	_	_	13	case	_	_
13	las	la	PROPN	_	Number=Sing	7	nmod	_	_
14	vegas	vegas	PROPN	_	Number=Sing	13	flat	_	_
15	I	I	PRON	_	PronType=Prs	17	nsubj	_	_
16	would	will	AUX	_	_	17	dep	_	_
17	like	like	ADJ	_	Degree=Pos	3	parataxis	_	_
18	a	a	DET	_	PronType=Art	19	det	_	_
19	stopover	stopover	NOUN	_	Number=Sing	17	obj	_	_
20	in	in	ADP	_	_	21	case	_	_
21	st.	st.	PROPN	_	Number=Sing	19	nmod	_	_
22	louis	louis	PROPN	_	Number=Sing	21	flat	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 dep	color:blue
1	find	find	VERB	_	VerbForm=Inf	0	root	_	_
2	a	a	DET	_	PronType=Art	3	det	_	_
3	flight	flight	NOUN	_	Number=Sing	1	obj	_	_
4	from	from	ADP	_	_	5	case	_	_
5	memphis	memphis	PROPN	_	Number=Sing	3	nmod	_	_
6	to	to	ADP	_	_	7	case	_	_
7	tacoma	tacoma	PROPN	_	Number=Sing	3	nmod	_	_
8	dinner	dinner	NOUN	_	Number=Sing	3	dep	_	_

~~~


