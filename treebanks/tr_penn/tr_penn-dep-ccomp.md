---
layout: base
title:  'Statistics of ccomp in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `ccomp`

This relation is universal.

1158 nodes (1%) are attached to their parents as `ccomp`.

1133 instances of `ccomp` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70466321243523.

The following 23 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (787; 68% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (168; 15% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (73; 6% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (66; 6% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (18; 2% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	Bunun	bu	PRON	_	PronType=Dem	4	obl	_	_
2	hakkında	hakkında	ADV	_	_	1	case	_	_
3	önceden	önceden	ADV	_	_	4	advmod	_	_
4	düşünmemiz	düşün	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	5	ccomp	_	_
5	gerekiyordu	gerek	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 ccomp	color:blue
1	Kimsenin	kimse	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	3	nmod	_	_
2	oradan	oradan	ADV	_	_	3	obl	_	_
3	ayrıldığını	ayrıl	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	4	ccomp	_	_
4	sanmıyorum	san	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
5	diye	diye	ADP	_	_	4	mark	_	_
6	fısıldadı	fısılda	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	Dixie	dixie	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 ccomp	color:blue
1	New	new	PROPN	_	Case=Nom|Number=Sing	3	amod	_	_
2	Yorklu	Yorklu	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	borsacı	borsacı	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
4	"	"	PUNCT	_	_	7	punct	_	_
5	birçok	birçok	DET	_	_	6	det	_	_
6	arz	arz	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
7	var	var	ADJ	_	_	9	ccomp	_	_
8	"	"	PUNCT	_	_	7	punct	_	_
9	dedi	de	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


