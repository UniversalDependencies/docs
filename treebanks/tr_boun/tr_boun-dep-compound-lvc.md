---
layout: base
title:  'Statistics of compound:lvc in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_boun-dep-compound-redup.html">compound:redup</a></tt>.

1265 nodes (1%) are attached to their parents as `compound:lvc`.

1265 instances of `compound:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0395256916996.

The following 15 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1073; 85% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (118; 9% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (28; 2% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (15; 1% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:lvc	color:blue
1	Başak	Başak	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	burcunun	burç	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nsubj	_	_
3	sahip	sahip	NOUN	_	Case=Nom|Number=Sing|Person=3	5	advcl	_	_
4	olduğu	ol	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	3	compound:lvc	_	_
5	erdemler	erdem	NOUN	_	Case=Nom|Number=Plur|Person=3	0	root	_	nullcop=3s|SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:lvc	color:blue
1	Babası	baba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
2	buna	bu	PRON	Demons	Case=Dat|Number=Sing|Person=3	4	obl	_	_
3	çok	çok	ADV	_	_	4	advmod	_	_
4	gönüllü	gönüllü	ADJ	Adj	_	0	root	_	DerivedFrom=gönül
5	olmamış	ol	VERB	Ptcp	Aspect=Perf|Evident=Fh|Number=Plur|Person=3|Polarity=Neg|VerbForm=Part	4	compound:lvc	_	_
6	tı	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	5	cop	_	_
7	.	.	PUNCT	Stop	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:lvc	color:blue
1	Ablam	abla	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	6	nsubj	_	_
2	söylediklerime	söyle	VERB	Ptcp	Aspect=Perf|Case=Dat|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|Polarity=Pos|Tense=Past|VerbForm=Part	4	obl	_	_
3	hiç	hiç	ADV	_	_	4	advmod	_	_
4	aldırış	aldır	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	advcl	_	_
5	etmeden	et	VERB	Conv	Case=Abl|Number=Sing|Person=3|Polarity=Neg|VerbForm=Conv	4	compound:lvc	_	_
6	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Stop	_	6	punct	_	SpacesAfter=\n

~~~


