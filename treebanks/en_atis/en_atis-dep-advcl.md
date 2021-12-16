---
layout: base
title:  'Statistics of advcl in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `advcl`

This relation is universal.

55 nodes (0%) are attached to their parents as `advcl`.

51 instances of `advcl` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.43636363636364.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (46; 84% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-AUX.html">AUX</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 advcl	color:blue
1	what	what	DET	_	PronType=Int,Rel	2	det	_	_
2	time	time	NOUN	_	Number=Sing	5	obl	_	_
3	does	do	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	twa	twa	PROPN	_	Number=Sing	5	nsubj	_	_
5	depart	depart	VERB	_	VerbForm=Inf	0	root	_	_
6	from	from	ADP	_	_	7	case	_	_
7	boston	boston	PROPN	_	Number=Sing	5	obl	_	_
8	to	to	PART	_	_	9	mark	_	_
9	go	go	VERB	_	VerbForm=Inf	5	advcl	_	_
10	to	to	ADP	_	_	11	case	_	_
11	san	san	PROPN	_	Number=Sing	9	obl	_	_
12	francisco	francisco	PROPN	_	Number=Sing	11	flat	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 21 advcl	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	ADJ	_	Degree=Pos	0	root	_	_
4	to	to	PART	_	_	5	mark	_	_
5	book	book	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	a	a	DET	_	PronType=Art	7	det	_	_
7	flight	flight	NOUN	_	Number=Sing	5	obj	_	_
8	for	for	ADP	_	_	9	case	_	_
9	may	may	PROPN	_	Number=Sing	7	nmod	_	_
10	twenty	twenty	NUM	_	NumType=Card	11	compound	_	_
11	sixth	six	ADJ	_	Degree=Pos	9	amod	_	_
12	going	go	VERB	_	Tense=Pres|VerbForm=Part	7	acl:relcl	_	_
13	from	from	ADP	_	_	14	case	_	_
14	tampa	tampa	PROPN	_	Number=Sing	12	obl	_	_
15	to	to	ADP	_	_	16	case	_	_
16	milwaukee	milwaukee	PROPN	_	Number=Sing	12	obl	_	_
17	a	a	DET	_	PronType=Art	19	det	_	_
18	direct	direct	ADJ	_	Degree=Pos	19	amod	_	_
19	flight	flight	NOUN	_	Number=Sing	21	obl	_	_
20	if	if	ADP	_	_	21	mark	_	_
21	possible	possible	ADJ	_	Degree=Pos	5	advcl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advcl	color:blue
1	i	i	PRON	_	PronType=Prs	3	nsubj	_	_
2	would	will	AUX	_	_	3	aux	_	_
3	like	like	VERB	_	VerbForm=Inf	0	root	_	_
4	a	a	DET	_	PronType=Art	5	det	_	_
5	flight	flight	NOUN	_	Number=Sing	3	obj	_	_
6	as	as	ADV	_	Degree=Pos	7	advmod	_	_
7	early	early	ADJ	_	Degree=Pos	5	amod	_	_
8	as	as	ADP	_	_	9	mark	_	_
9	possible	possible	ADJ	_	Degree=Pos	7	advcl	_	_
10	in	in	ADP	_	_	12	case	_	_
11	the	the	DET	_	PronType=Art	12	det	_	_
12	day	day	NOUN	_	Number=Sing	7	nmod	_	_
13	leaving	leave	VERB	_	Tense=Pres|VerbForm=Part	5	acl:relcl	_	_
14	from	from	ADP	_	_	15	case	_	_
15	boston	boston	PROPN	_	Number=Sing	13	obl	_	_
16	and	and	CCONJ	_	_	18	cc	_	_
17	to	to	ADP	_	_	18	case	_	_
18	denver	denver	PROPN	_	Number=Sing	15	conj	_	_

~~~


