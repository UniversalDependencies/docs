---
layout: base
title:  'Statistics of det in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `det`

This relation is universal.

6310 nodes (3%) are attached to their parents as `det`.

6310 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30301109350238.

The following 15 pairs of parts of speech are connected with `det`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (5726; 91% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (201; 3% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (134; 2% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (82; 1% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (80; 1% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (30; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (19; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (14; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (10; 0% instances), <tt><a href="tr_penn-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-X.html">X</a></tt>-<tt><a href="tr_penn-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Bu	bu	DET	_	Definite=Def|PronType=Dem	2	det	_	_
2	defa	defa	NOUN	_	Case=Nom|Number=Sing	8	obl	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	daha	daha	ADV	_	Degree=Cmp	6	advmod	_	_
5	da	da	CCONJ	_	_	4	cc	_	_
6	hızlı	hızlı	ADJ	_	_	8	advmod	_	_
7	hareket	hareket	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	ediyorlar	et	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	"	"	PUNCT	_	_	6	punct	_	_
2	Bu	bu	DET	_	Definite=Def|PronType=Dem	4	det	_	_
3	kadar	kadar	ADP	_	_	2	case	_	_
4	kolay	kolay	ADJ	_	_	6	advmod	_	_
5	pes	pes	ADJ	_	_	6	compound	_	_
6	edemezsin	et	VERB	_	Evident=Fh|Mood=GenPot|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	8	obj	_	_
7	"	"	PUNCT	_	_	6	punct	_	_
8	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 det	color:blue
1	"	"	PUNCT	_	_	9	punct	_	_
2	Başımıza	baş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Plur|Person[psor]=1	3	obl	_	_
3	gelen	gel	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	9	csubj	_	_
4	gerçek	gerçek	NOUN	_	Case=Nom|Number=Sing	9	amod	_	_
5	,	,	PUNCT	_	_	9	punct	_	_
6	eski	eski	ADJ	_	_	7	amod	_	_
7	moda	moda	NOUN	_	Case=Nom|Number=Sing	9	amod	_	_
8	bir	bir	DET	_	Definite=Ind|PronType=Art	9	det	_	_
9	toparlanmaydı	toparlan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_
11	"	"	PUNCT	_	_	9	punct	_	_

~~~


