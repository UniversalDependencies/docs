---
layout: base
title:  'Statistics of cc in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `cc`

This relation is universal.

4221 nodes (2%) are attached to their parents as `cc`.

4126 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76143094053542.

The following 23 pairs of parts of speech are connected with `cc`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1572; 37% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1329; 31% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (417; 10% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (406; 10% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (182; 4% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (141; 3% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (47; 1% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (35; 1% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (32; 1% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (20; 0% instances), <tt><a href="tr_penn-pos-X.html">X</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (16; 0% instances), <tt><a href="tr_penn-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_penn-pos-DET.html">DET</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_penn-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_penn-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_penn-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_penn-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_penn-pos-X.html">X</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Reklam	reklam	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	ve	ve	CCONJ	_	_	3	cc	_	_
3	tanıtımın	tanıtım	NOUN	_	Case=Gen|Number=Sing	1	conj	_	_
4	işe	iş	NOUN	_	Case=Dat|Number=Sing	6	compound	_	_
5	yarayıp	yara	VERB	_	Polarity=Pos|VerbForm=Conv	6	compound	_	_
6	yaramadığını	yara	VERB	_	Aspect=Perf|Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Neg|Tense=Past|VerbForm=Vnoun	7	ccomp	_	_
7	görmek	gör	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	xcomp	_	_
8	üzereyiz	üzere	X	_	Number=Plur	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	Ve	ve	CCONJ	_	_	6	cc	_	_
2	Londra	londra	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
3	açısından	açı	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
4	karmaşık	karmaşık	ADJ	_	_	5	amod	_	_
5	sinyaller	sinyal	NOUN	_	Case=Nom|Number=Plur	6	obj	_	_
6	bıraktı	bırak	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	James	james	PROPN	_	Case=Nom|Number=Sing	10	nsubj	_	_
2	A.	a.	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	White	white	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	Sonja	Sonja	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
6	Steptoe	Steptoe	PROPN	_	Case=Nom|Number=Sing	5	flat	_	_
7	bu	bu	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	makaleye	makale	NOUN	_	Case=Dat|Number=Sing	10	obl	_	_
9	katkı	katkı	NOUN	_	Case=Nom|Number=Sing	10	compound	_	_
10	yaptılar	yap	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


