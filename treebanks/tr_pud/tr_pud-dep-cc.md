---
layout: base
title:  'Statistics of cc in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="tr_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

519 nodes (3%) are attached to their parents as `cc`.

517 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.26011560693642.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (255; 49% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (86; 17% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (68; 13% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (62; 12% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (18; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (13; 3% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Program	_	NOUN	NN	Case=Nom|Number=Sing	8	nsubj	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	sponsorluk	_	NOUN	NN	Number=Sing	6	compound	_	_
4	ve	_	CCONJ	CCONJ	_	5	cc	_	_
5	reklam	_	NOUN	NN	Number=Sing	3	conj	_	_
6	yoluyla	_	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	advmod	_	_
7	para	_	NOUN	NN	Number=Sing	8	obj	_	_
8	kazanıyor	_	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Geçit	_	NOUN	NN	Number=Sing	2	compound	_	_
2	töreni	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	nsubj	_	_
3	yok	_	ADJ	JJ	Polarity=Neg	0	root	_	_
4	ve	_	CCONJ	CCONJ	_	6	cc	_	_
5	hiç	_	ADV	RB	_	6	advmod	_	_
6	olmadı	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
7	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Weiss	_	PROPN	PROPN	Case=Nom|Number=Sing	11	nsubj	_	Proper=True|SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	Köln	_	PROPN	PROPN	Number=Sing	6	compound	_	Proper=True
4	ve	_	CCONJ	CCONJ	_	5	cc	_	_
5	Bremen	_	PROPN	PROPN	Number=Sing	3	conj	_	Proper=True
6	şehirlerinden	_	NOUN	NN	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	advmod	_	_
7	gelen	_	ADJ	VJ	Number=Sing|Polarity=Pos	9	acl:relcl	_	_
8	edebiyat	_	NOUN	NN	Number=Sing	9	compound	_	_
9	ödülleri	_	NOUN	NN	Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
10	ile	_	ADP	IN	_	9	case	_	_
11	onurlandırıldı	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauPass	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


