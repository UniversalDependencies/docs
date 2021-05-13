---
layout: base
title:  'Statistics of acl in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `acl`

This relation is universal.

515 nodes (3%) are attached to their parents as `acl`.

514 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.66796116504854.

The following 18 pairs of parts of speech are connected with `acl`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (323; 63% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (63; 12% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (53; 10% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (33; 6% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (17; 3% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 acl	color:blue
1	Söylediği	söyle	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	4	acl	_	_
2	ve	ve	CCONJ	CCONJ	_	3	cc	_	_
3	yaptığı	yap	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	conj	_	_
4	şeyler	şey	NOUN	NN	Case=Nom|Number=Plur	6	nsubj	_	_
5	gerçekten	gerçekten	ADV	RB	_	6	advmod	_	_
6	inanılmaz	inan	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 acl	color:blue
1	Cape	Cape	PROPN	PROPN	Number=Sing	4	nmod:poss	_	Proper=True
2	Town'ın	Town	PROPN	PROPN	Case=Gen|Number=Sing	1	flat	_	Proper=True
3	yerel	yerel	ADJ	JJ	Number=Sing	4	amod	_	_
4	yönetimi	yönetim	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	büyükşehir	büyükşehir	NOUN	NN	Number=Sing	7	nmod:poss	_	_
7	belediyesi	belediye	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	11	acl	_	_
8	olan	ol	AUX	VJ	Number=Sing|Polarity=Pos	7	cop	_	_
9	Cape	Cape	PROPN	PROPN	Number=Sing	11	nmod	_	Proper=True
10	Town	Town	PROPN	PROPN	Number=Sing	9	flat	_	Proper=True
11	şehri	şehir	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
12	dir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	Shenzhen	Shenzhan	PROPN	PROPN	Number=Sing	3	nmod:poss	_	Proper=True
2	trafik	trafik	NOUN	NN	Number=Sing	3	nmod:poss	_	_
3	polisi	polis	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
4	daha	daha	ADV	RB	_	5	advmod	_	_
5	önce	önce	ADV	RB	_	8	advmod	_	_
6	alışılmamış	alışılma	VERB	VJ	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Pass	7	acl	_	_
7	cezalara	ceza	NOUN	NN	Case=Dat|Number=Plur	8	obj	_	_
8	başvurmuş	başvur	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


