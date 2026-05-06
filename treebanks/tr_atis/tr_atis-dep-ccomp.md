---
layout: base
title:  'Statistics of ccomp in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `ccomp`

This relation is universal.

90 nodes (0%) are attached to their parents as `ccomp`.

86 instances of `ccomp` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51111111111111.

The following 10 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (58; 64% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (9; 10% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 ccomp	color:blue
1	Pittsburgh	pittsburgh	PROPN	_	Case=Nom|Number=Sing	4	obl	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	Denver'e	denver	PROPN	_	Case=Dat|Number=Sing	1	conj	_	_
4	gitmem	git	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
5	gerek	gerek	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp	color:blue
1	Philadelphia'dan	philadelphia	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	6	nmod	_	_
3	öğleden	öğle	NOUN	_	Case=Abl|Number=Sing	6	nmod:tmod	_	_
4	sonra	sonra	ADP	_	_	3	case	_	_
5	hangi	hangi	ADJ	_	_	6	ccomp	_	_
6	uçuşlar	uçuş	NOUN	_	Case=Nom|Number=Plur	7	nsubj	_	_
7	var	var	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 ccomp	color:blue
1	Newark'tan	newark	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Tampa'ya	tampa	PROPN	_	Case=Dat|Number=Sing	7	nmod	_	_
3	4	4	NUM	_	NumType=Card	4	nummod	_	_
4	Nisan'da	nisan	PROPN	_	Case=Loc|Number=Sing	7	nmod:tmod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	7	det	_	_
6	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	_
7	rezervasyonu	rezervasyon	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
8	yapmam	yapma	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	9	ccomp	_	_
9	gerekiyor	gerek	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


