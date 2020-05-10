---
layout: base
title:  'Statistics of iobj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `iobj`

This relation is universal.

138 nodes (1%) are attached to their parents as `iobj`.

138 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14492753623188.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (56; 41% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (34; 25% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (9; 7% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (8; 6% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Sesini	ses	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
2	gerçek	gerçek	NOUN	NN	Number=Sing	3	amod	_	_
3	anlamda	anlam	NOUN	NN	Case=Loc|Number=Sing	6	obl	_	_
4	tüm	tüm	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
5	dünyaya	dünya	NOUN	NN	Case=Dat|Number=Sing	6	iobj	_	_
6	duyurdu	duy	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_
8	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
9	Leive	Leive	PROPN	PROPN	Number=Sing	8	nsubj	_	Proper=True|SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	Çalışanların	Çalışan	NOUN	VN	Case=Gen|Number=Plur	5	nsubj	_	_
2	masalarına	masa	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	iobj	_	_
3	dini	din	ADJ	JJ	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	amod	_	_
4	nesneler	nesne	NOUN	NN	Number=Plur	5	obj	_	_
5	koyması	koy	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	csubj	_	_
6	serbest	serbest	ADJ	JJ	Number=Sing	0	root	_	_
7	mi	mi	AUX	AUX	Number=Sing|Person=3	6	aux	_	SpaceAfter=No
8	?	?	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Kansas'ta	Kansas	PROPN	PROPN	Case=Loc|Number=Sing	3	amod	_	Proper=True
2	ki	ki	ADP	JJ	_	1	case	_	_
3	olaylara	olay	NOUN	NN	Case=Dat|Number=Plur	4	iobj	_	_
4	verilen	ver	ADJ	VJ	Number=Sing|Polarity=Pos	6	acl	_	_
5	ulusal	ulusal	ADJ	JJ	Number=Sing	6	amod	_	_
6	tepkiler	tepki	NOUN	NN	Case=Nom|Number=Plur	12	nsubj	_	_
7	ülkenin	ülke	NOUN	NN	Case=Gen|Number=Sing	11	nsubj	_	_
8	ne	ne	PRON	WP	Number=Sing|PronType=Int	10	obl	_	_
9	kadar	kadar	ADP	IN	_	8	case	_	_
10	derinden	derin	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	obl	_	_
11	bölündüğünü	bölündük	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	ccomp	_	_
12	göstermiştir	göster	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


