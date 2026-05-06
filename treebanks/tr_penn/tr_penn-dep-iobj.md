---
layout: base
title:  'Statistics of iobj in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `iobj`

This relation is universal.

30 nodes (0%) are attached to their parents as `iobj`.

30 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (17; 57% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NUM.html">NUM</a></tt> (4; 13% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Ancak	ancak	CCONJ	_	_	9	cc	_	_
2	Seagram'ın	seagram	PROPN	_	Case=Gen|Number=Sing	5	nmod	_	_
3	Chivas	Chivas	PROPN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	tanıtım	tanıtım	NOUN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	kapsamı	kapsam	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
6	onu	o	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
7	bir	bir	DET	_	Definite=Ind|PronType=Art	8	amod	_	_
8	tarafa	taraf	NOUN	_	Case=Dat|Number=Sing	9	iobj	_	_
9	ayırıyor	ayır	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 iobj	color:blue
1	Daimler-Benz	Daimler-Benz	PROPN	_	Case=Nom|Number=Sing	10	nsubj	_	_
2	12.5'i	12.5	NUM	_	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Card|Person[psor]=3	10	obj	_	_
3	710.5'e	710.5	NUM	_	Case=Dat|Number=Sing|NumType=Card	10	iobj	_	_
4	,	,	PUNCT	_	_	5	punct	_	_
5	Bayerische	Bayerische	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
6	Motoren	Motoren	PROPN	_	Case=Nom|Number=Sing	5	flat	_	_
7	Werke	Werke	PROPN	_	Case=Nom|Number=Sing	6	flat	_	_
8	10.5'i	10.5	NUM	_	Case=Nom|Number=Sing|Number[psor]=Sing|NumType=Card|Person[psor]=3	2	conj	_	_
9	543.5'e	543.5	NUM	_	Case=Dat|Number=Sing|NumType=Card	10	iobj	_	_
10	düşürdü	düşür	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	ve	ve	CCONJ	_	_	14	cc	_	_
12	Volkswagen	Volkswagen	PROPN	_	Case=Nom|Number=Sing	14	nsubj	_	_
13	7.1	7.1	NUM	_	NumType=Card	14	obj	_	_
14	kaybetti	kaybet	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	10	conj	_	_
15	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 iobj	color:blue
1	Loral	Loral	PROPN	_	Case=Nom|Number=Sing	13	nsubj	_	_
2	,	,	PUNCT	_	_	13	punct	_	_
3	Türkiye'ye	türkiye	PROPN	_	Case=Dat|Number=Sing	13	iobj	_	_
4	F-16	F-16	PROPN	_	Case=Nom|Number=Sing	5	nmod	_	_
5	uçak	uçak	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	filosu	filo	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl	_	_
7	için	için	ADP	_	_	6	case	_	_
8	bir	bir	DET	_	Definite=Ind|PronType=Art	12	det	_	_
9	elektronik	elektronik	ADJ	_	_	12	amod	_	_
10	karşı	karşı	ADJ	_	_	11	amod	_	_
11	önlemler	önlem	NOUN	_	Case=Nom|Number=Plur	12	nmod	_	_
12	sistemi	sistem	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obj	_	_
13	sağlayacak	sağla	VERB	_	Aspect=Imp|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	_
14	.	.	PUNCT	_	_	13	punct	_	_

~~~


