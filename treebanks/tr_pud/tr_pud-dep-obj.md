---
layout: base
title:  'Statistics of obj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `obj`

This relation is universal.

946 nodes (6%) are attached to their parents as `obj`.

945 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06871035940803.

The following 22 pairs of parts of speech are connected with `obj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (478; 51% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (148; 16% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (126; 13% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (34; 4% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (32; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (30; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (18; 2% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (15; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (15; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obj	color:blue
1	Program	program	NOUN	NN	Case=Nom|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	sponsorluk	sponsorluk	NOUN	NN	Number=Sing	6	nmod:poss	_	_
4	ve	ve	CCONJ	CCONJ	_	5	cc	_	_
5	reklam	reklam	NOUN	NN	Number=Sing	3	conj	_	_
6	yoluyla	yol	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
7	para	para	NOUN	NN	Number=Sing	8	obj	_	_
8	kazanıyor	kazan	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obj	color:blue
1	Eşi	eş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
2	Alice	_	PROPN	PROPN	_	1	appos	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	sağlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	tamamen	ADV	RB	_	8	advmod	_	_
8	ihmal	ihmal	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	et	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun	8	compound:lvc	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	8	nsubj	_	_
2	bazen	bazen	ADV	RB	_	6	advmod	_	_
3	süper	süper	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	5	det	_	_
5	güce	güce	NOUN	NN	Case=Dat|Number=Sing	6	obj	_	_
6	sahip	sahip	ADJ	JJ	Number=Sing	8	obj	_	_
7	olmak	ol	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Vnoun	6	cop	_	ToDo=pcomp
8	gibi	gibi	ADP	IN	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


