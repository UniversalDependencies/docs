---
layout: base
title:  'Statistics of iobj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `iobj`

This relation is universal.

90 nodes (1%) are attached to their parents as `iobj`.

90 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17777777777778.

The following 12 pairs of parts of speech are connected with `iobj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (33; 37% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (23; 26% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (10; 11% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (8; 9% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Sesini	_	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
2	gerçek	_	NOUN	NN	Number=Sing	3	compound	_	_
3	anlamda	_	NOUN	NN	Case=Loc|Number=Sing	6	advmod	_	_
4	tüm	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
5	dünyaya	_	NOUN	NN	Case=Dat|Number=Sing	6	iobj	_	_
6	duyurdu	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_
8	dedi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
9	Leive	_	PROPN	PROPN	Number=Sing	8	nsubj	_	Proper=True|SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	Çalışanların	_	NOUN	VN	Case=Gen|Number=Plur	5	nmod:poss	_	_
2	masalarına	_	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	5	iobj	_	_
3	dini	_	ADJ	JJ	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	amod	_	_
4	nesneler	_	NOUN	NN	Number=Plur	5	obj	_	_
5	koyması	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	csubj	_	_
6	serbest	_	ADJ	JJ	Number=Sing	0	root	_	_
7	mi	_	AUX	AUX	Number=Sing|Person=3	6	advmod:emph	_	SpaceAfter=No
8	?	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Kansas'ta	_	PROPN	PROPN	Case=Loc|Number=Sing	3	amod	_	Proper=True
2	ki	_	ADP	JJ	_	1	case	_	_
3	olaylara	_	NOUN	NN	Case=Dat|Number=Plur	4	iobj	_	_
4	verilen	_	ADJ	VJ	Number=Sing|Polarity=Pos	6	acl:relcl	_	_
5	ulusal	_	ADJ	JJ	Number=Sing	6	amod	_	_
6	tepkiler	_	NOUN	NN	Case=Nom|Number=Plur	12	nsubj	_	_
7	ülkenin	_	NOUN	NN	Case=Gen|Number=Sing	11	nmod:poss	_	_
8	ne	_	PRON	WP	Number=Sing|PronType=Int	10	nmod	_	_
9	kadar	_	ADP	IN	_	8	case	_	_
10	derinden	_	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=2	11	advmod	_	_
11	bölündüğünü	_	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	xcomp	_	_
12	göstermiştir	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


