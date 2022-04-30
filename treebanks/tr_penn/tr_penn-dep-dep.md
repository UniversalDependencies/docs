---
layout: base
title:  'Statistics of dep in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `dep`

This relation is universal.

43 nodes (0%) are attached to their parents as `dep`.

42 instances of `dep` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6046511627907.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (18; 42% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (14; 33% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt> (2; 5% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 dep	color:blue
1	Herkesin	herkes	PRON	_	PronType=Ind	2	nmod	_	_
2	yapması	yapma	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
3	gereken	gerek	ADJ	_	_	4	acl	_	_
4	bir	bir	DET	_	Definite=Ind|PronType=Art	5	dep	_	_
5	dükkan	dükkan	NOUN	_	Case=Nom|Number=Sing|Person=3	6	obj	_	_
6	açıp	aç	ADV	_	_	8	advcl	_	_
7	planlamaya	planlama	NOUN	_	Case=Dat|Number=Sing|Person=3	8	obl	_	_
8	başlamak	başla	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	Bazı	bazı	ADJ	_	_	2	dep	_	_
2	anneler	anne	NOUN	_	Case=Nom|Number=Plur|Person=3	11	obl	_	_
3	için	için	ADP	_	_	2	case	_	_
4	,	,	PUNCT	_	_	11	punct	_	_
5	beklenen	bekle	ADJ	_	_	7	acl	_	_
6	FDA	FDA	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
7	eylemleri	eylem	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	11	nsubj	_	_
8	olabileceklerin	ol	NOUN	_	Case=Gen|Number=Plur|Person=3	11	nmod	_	_
9	dokunaklı	dokunaklı	ADJ	_	_	11	amod	_	_
10	bir	bir	DET	_	Definite=Ind|PronType=Art	11	det	_	_
11	hatırlatması	hatırla	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 dep	color:blue
1	f	f	NOUN	_	Case=Acc|Number=Sing|Person=3	8	dep	_	_
2	-	-	PUNCT	_	_	1	punct	_	_
3	Chevrolet	Chevrolet	PROPN	_	Case=Nom|Number=Sing	8	obj	_	_
4	Prizm	Prizm	PROPN	_	Case=Nom|Number=Sing	3	flat	_	_
5	ve	ve	CCONJ	_	_	6	cc	_	_
6	Toyota	toyota	PROPN	_	Case=Nom|Number=Sing	3	conj	_	_
7	Corolla'yı	corolla	PROPN	_	Case=Acc|Number=Sing	6	flat	_	_
8	içeriyor	içer	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


