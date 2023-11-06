---
layout: base
title:  'Statistics of nmod:poss in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_atis-dep-nmod-tmod.html">nmod:tmod</a></tt>.

374 nodes (1%) are attached to their parents as `nmod:poss`.

374 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.49732620320856.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (282; 75% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (71; 19% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	M80	M80	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	uçağının	uçak	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nmod:poss	_	_
3	koltuk	koltuk	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	kapasitesi	kapasite	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nsubj	_	_
5	nedir	ne	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nmod:poss	color:blue
1	Continental'ın	continental	PROPN	_	Case=Gen|Number=Sing	8	nmod:poss	_	_
2	kaç	kaç	ADJ	_	NumType=Card	8	amod	_	_
3	tane	tane	NOUN	_	Case=Nom|Number=Sing|Person=3	2	compound	_	_
4	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
5	gidiş	git	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	dönüş	dön	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	_
8	uçuşu	uç	NOUN	_	Case=Acc|Number=Sing|Person=3	9	nsubj	_	_
9	var	var	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Nashville'den	nashville	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Tacoma'ya	tacoma	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	olan	ol	ADJ	_	_	7	acl	_	_
4	ayın	ay	NOUN	_	Case=Gen|Number=Sing|Person=3	5	nmod:poss	_	_
5	on	on	NUM	_	NumType=Card	7	amod	_	_
6	sekizindeki	sekiz	ADJ	_	NumType=Card	5	compound	_	_
7	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	8	nsubj	_	_
8	hangileri	hangi	PRON	_	PronType=Int	0	root	_	_

~~~


