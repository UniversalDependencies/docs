---
layout: base
title:  'Statistics of mark in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `mark`

This relation is universal.

202 nodes (0%) are attached to their parents as `mark`.

102 instances of `mark` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.78712871287129.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (112; 55% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (51; 25% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (12; 6% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (9; 4% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mark	color:blue
1	Öyle	öyle	ADV	_	_	2	advmod	_	_
2	güzel	güzel	ADJ	Adj	_	3	amod	_	_
3	yetiştirmişsiniz	yetiş	VERB	_	Evident=Nfh|Number=Plur|Person=2|Polarity=Pos|Tense=Past|Voice=Cau	0	root	_	_
4	ki	ki	SCONJ	_	_	3	mark	_	_
5	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3	3	obj	_	SpaceAfter=No
6	...	...	PUNCT	TDots	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Ne	ne	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	2	nsubj	_	_
2	var	var	NOUN	Exist	Number=Sing|Person=3|Polarity=Pos	9	advcl	_	_
3	ki	ki	SCONJ	_	_	2	mark	_	_
4	kendisinden	kendi	PRON	Reflex	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	_
5	not	not	NOUN	_	Case=Nom|Number=Sing|Person=3	9	csubj	_	_
6	almak	al	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	compound	_	_
7	son	son	ADJ	Adj	_	8	amod	_	_
8	derece	derece	ADV	_	_	9	advmod	_	_
9	güç	güç	ADJ	Adj	_	0	root	_	_
10	tü	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 mark	color:blue
1	Çünkü	çünkü	SCONJ	_	_	7	mark	_	_
2	onu	o	PRON	Pers	Case=Acc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
3	daima	daima	ADV	_	_	7	advmod	_	_
4	bir	bir	DET	Indef	_	5	det	_	_
5	şeyler	şey	NOUN	_	Case=Nom|Number=Plur|Person=3	7	nsubj	_	_
6	çok	çok	ADV	_	_	7	advmod	_	_
7	rahatsız	rahatsız	ADJ	Adj	_	0	root	_	DerivedFrom=rahat
8	ediyor	et	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	7	compound:lvc	_	SpaceAfter=No
9	...	...	PUNCT	TDots	_	7	punct	_	SpacesAfter=\n

~~~


