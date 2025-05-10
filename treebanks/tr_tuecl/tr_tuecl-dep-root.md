---
layout: base
title:  'Statistics of root in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `root`

This relation is universal.

148 nodes (16%) are attached to their parents as `root`.

148 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.00675675675676.

The following 6 pairs of parts of speech are connected with `root`: -<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (108; 73% instances), -<tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt> (19; 13% instances), -<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (17; 11% instances), -<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (2; 1% instances), -<tt><a href="tr_tuecl-pos-PRON.html">PRON</a></tt> (1; 1% instances), -<tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Kız	kız	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	arkadaşına	arkadaş	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	mektup	mektup	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	yazdı	yaz	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod:poss	_	_
2	babam	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	_	_
3	senin	sen	PRON	_	Case=Abl|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	kinden	ki	PRON	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	6	obl	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	harika	harika	ADJ	_	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	İguazu	İguazu	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	büyük	büyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	ülke	ülke	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	yoksa	yoksa	CCONJ	_	_	8	cc	_	_
8	küçük	küçük	ADJ	_	_	4	conj	_	_
9	mü	mi	AUX	_	Number=Sing|Person=3|PronType=Int	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


