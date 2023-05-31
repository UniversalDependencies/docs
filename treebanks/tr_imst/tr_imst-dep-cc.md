---
layout: base
title:  'Statistics of cc in UD_Turkish-IMST'
udver: '2'
---

## Treebank Statistics: UD_Turkish-IMST: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="tr_imst-dep-cc-preconj.html">cc:preconj</a></tt>.

1072 nodes (2%) are attached to their parents as `cc`.

1036 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.76399253731343.

The following 19 pairs of parts of speech are connected with `cc`: <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (433; 40% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (359; 33% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (160; 15% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (45; 4% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="tr_imst-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (12; 1% instances), <tt><a href="tr_imst-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (8; 1% instances), <tt><a href="tr_imst-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="tr_imst-pos-DET.html">DET</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="tr_imst-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_imst-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_imst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_imst-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_imst-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_imst-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cc	color:blue
1	Ama	ama	CCONJ	Conj	_	3	ccomp	_	SpaceAfter=No
2	,	,	PUNCT	Punc	_	1	punct	_	_
3	dedim	de	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
6	ne	ne	CCONJ	Conj	_	8	cc	_	_
7	şiir	şiir	NOUN	Noun	Case=Nom|Number=Sing|Person=3	8	obj	_	_
8	okuyabilirim	oku	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	1	conj	_	SpaceAfter=No
9	,	,	PUNCT	Punc	_	12	punct	_	_
10	ne	ne	CCONJ	Conj	_	12	cc	_	_
11	de	de	CCONJ	Conj	_	12	advmod:emph	_	_
12	şarkı	şarkı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	conj	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ama	ama	CCONJ	Conj	_	4	cc	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Ve	ve	CCONJ	Conj	_	5	cc	_	_
2	kendi	kendi	PRON	Reflex	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Reflex=Yes	3	nmod	_	_
3	merceklerinden	mercek	NOUN	Noun	Case=Abl|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	obl	_	_
4	bakıldığında	bak	VERB	Verb	Aspect=Perf|Case=Loc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	_	_
5	haklı	haklı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	lar	i	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres	5	cop	_	_
7	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


