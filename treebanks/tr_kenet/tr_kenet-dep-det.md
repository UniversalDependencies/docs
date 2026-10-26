---
layout: base
title:  'Statistics of det in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `det`

This relation is universal.

7788 nodes (4%) are attached to their parents as `det`.

7785 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18515665125835.

The following 21 pairs of parts of speech are connected with `det`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (6782; 87% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (407; 5% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (236; 3% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (161; 2% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (48; 1% instances), <tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (28; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (27; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (26; 0% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (25; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (14; 0% instances), <tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-DET.html">DET</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_kenet-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Kimse	kimse	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|PronType=Neg	9	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	dört	dört	NUM	_	NumType=Card	4	nummod	_	_
4	çocuklu	çocuklu	ADJ	_	_	6	amod	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	aileye	aile	NOUN	_	Case=Dat|Number=Sing	8	obl	_	_
7	ev	ev	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	vermek	ver	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	9	xcomp	_	_
9	istememiş	iste	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Kahve	kahve	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	sahibi	sahip	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
3	hem	hem	CCONJ	_	_	5	cc	_	_
4	çok	çok	DET	_	_	5	det	_	_
5	zengindi	zengin	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	hem	hem	CCONJ	_	_	9	cc	_	_
8	çok	çok	DET	_	_	9	det	_	_
9	bıçkın	bıçkın	ADJ	_	_	5	conj	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 det	color:blue
1	Yine	yine	ADV	_	_	7	advcl	_	_
2	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	det	_	_
3	değişmeyen	değiş	VERB	_	Polarity=Neg|Tense=Pres|VerbForm=Part	4	acl	_	_
4	ızdırap	ızdırap	NOUN	_	Case=Nom|Number=Sing	7	obl	_	_
5	ile	ile	ADP	_	_	4	case	_	_
6	ağzını	ağız	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	mühürler	mühürle	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


