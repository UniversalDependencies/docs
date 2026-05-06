---
layout: base
title:  'Statistics of goeswith in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `goeswith`

This relation is universal.

40 nodes (0%) are attached to their parents as `goeswith`.

40 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 6 pairs of parts of speech are connected with `goeswith`: <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (25; 63% instances), <tt><a href="tr_tourism-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (9; 23% instances), <tt><a href="tr_tourism-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (3; 8% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-DET.html">DET</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-X.html">X</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Park	park	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	hotelde	hotel	NOUN	_	Case=Loc|Number=Sing|Typo=Yes	4	amod	_	_
3	ki	_	X	_	_	2	goeswith	_	_
4	ayrıcalığı	ayrıcalık	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	yaşamanızı	yaşa	VERB	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=2|Polarity=Pos|VerbForm=Vnoun	6	ccomp	_	_
6	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Hep	hep	ADV	_	_	5	advmod	_	_
2	Ets	ets	PROPN	_	Case=Nom|Number=Sing|Typo=Yes	5	obj	_	_
3	yi	_	X	_	_	2	goeswith	_	_
4	tercih	tercih	NOUN	_	Case=Nom|Number=Sing	5	compound	_	_
5	ediyorum	et	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Biz	biz	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	kendimiz	kendi	PRON	_	Case=Nom|Number=Plur|Number[psor]=Plur|Person=1|Person[psor]=1|PronType=Prs|Reflex=Yes	5	nmod	_	_
3	50	50	NUM	_	NumType=Card|Typo=Yes	5	nummod	_	_
4	ye	_	X	_	_	3	goeswith	_	_
5	gittik	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


