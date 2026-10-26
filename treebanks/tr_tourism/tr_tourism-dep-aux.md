---
layout: base
title:  'Statistics of aux in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `aux`

This relation is universal.

1281 nodes (1%) are attached to their parents as `aux`.

1280 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03903200624512.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (1154; 90% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (97; 8% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="tr_tourism-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="tr_tourism-pos-DET.html">DET</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_tourism-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	Temizlik	temizlik	NOUN	_	Case=Nom|Number=Sing	4	advcl	_	_
2	açısından	açı	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	1	case	_	_
3	çok	çok	ADV	_	_	4	advmod	_	_
4	iyi	iyi	ADJ	_	_	0	root	_	_
5	değildi	değil	AUX	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	4	aux	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Çok	çok	ADV	_	_	3	advmod	_	_
2	ahım	ah	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	compound	_	_
3	şahım	şahım	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	değildi	değil	AUX	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	aux	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Değil	değil	AUX	_	Polarity=Neg	4	aux	_	_
2	bir	bir	DET	_	Definite=Ind|PronType=Art	4	advmod	_	_
3	daha	daha	ADV	_	Degree=Cmp	2	fixed	_	_
4	gitmek	git	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	parataxis	_	_
5	kapısının	kapı	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nmod	_	_
6	önünden	ön	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
7	bile	bile	ADV	_	_	6	advmod	_	_
8	geçmem	geç	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


