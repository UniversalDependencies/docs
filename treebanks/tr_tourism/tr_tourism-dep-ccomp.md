---
layout: base
title:  'Statistics of ccomp in UD_Turkish-Tourism'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Tourism: Relations: `ccomp`

This relation is universal.

220 nodes (0%) are attached to their parents as `ccomp`.

217 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (136; 62% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (36; 16% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (22; 10% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt> (12; 5% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tourism-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_tourism-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tourism-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 ccomp	color:blue
1	İlk	ilk	ADV	_	_	2	amod	_	_
2	defa	defa	NOUN	_	Case=Nom|Number=Sing	9	nmod	_	_
3	bitse	bit	VERB	_	Evident=Fh|Mood=Des|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	5	advcl	_	_
4	de	de	CCONJ	_	_	3	advmod	_	_
5	kurtulsak	kurtul	VERB	_	Evident=Fh|Mood=Des|Number=Plur|Person=1|Polarity=Pos|VerbForm=Fin	7	ccomp	_	_
6	diye	diye	ADP	_	_	5	mark	_	_
7	düşündüğüm	düşün	VERB	_	Aspect=Perf|Number[psor]=Sing|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	9	acl	_	_
8	bir	bir	DET	_	Definite=Ind|PronType=Art	9	det	_	_
9	tatil	tatil	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	Merkezi	merkezi	ADJ	_	_	2	advmod	_	_
2	olması	ol	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Polarity=Pos|VerbForm=Vnoun	3	ccomp	_	_
3	iyiydi	iyi	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 ccomp	color:blue
1	Bize	biz	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	2	obl	_	_
2	yok	yok	ADJ	_	Polarity=Neg	4	ccomp	_	_
3	mu	mi	AUX	_	Number=Sing|Person=3|PronType=Int|Tense=Pres	2	aux	_	_
4	deyince	de	VERB	_	Polarity=Pos|VerbForm=Conv	9	obl	_	_
5	onlar	o	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Dem	8	nsubj	_	_
6	ala	ala	NOUN	_	Case=Nom|Number=Sing	7	compound	_	_
7	kart	kart	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	_
8	restoranın	restoran	NOUN	_	Case=Gen|Number=Sing	9	ccomp	_	_
9	dediler	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


