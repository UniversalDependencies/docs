---
layout: base
title:  'Statistics of nmod:poss in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_atis-dep-nmod-tmod.html">nmod:tmod</a></tt>.

362 nodes (1%) are attached to their parents as `nmod:poss`.

362 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53038674033149.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (241; 67% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (71; 20% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (13; 4% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (12; 3% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:poss	color:blue
1	M80	M80	PROPN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	uçağının	uçak	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod:poss	_	_
3	koltuk	koltuk	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	kapasitesi	kapasite	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
5	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nmod:poss	color:blue
1	Continental'ın	continental	PROPN	_	Case=Gen|Number=Sing	8	nmod:poss	_	_
2	kaç	kaç	ADJ	_	NumType=Card	8	amod	_	_
3	tane	tane	NOUN	_	Case=Nom|Number=Sing	2	compound	_	_
4	Atlanta'ya	atlanta	PROPN	_	Case=Dat|Number=Sing	8	nmod	_	_
5	gidiş	git	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	8	nmod	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	dönüş	dön	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	5	conj	_	_
8	uçuşu	uçuş	NOUN	_	Case=Acc|Number=Sing	9	nsubj	_	_
9	var	var	ADJ	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nmod:poss	color:blue
1	Philadelphia'dan	philadelphia	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	4	nmod	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	uçmanın	uç	VERB	_	Case=Gen|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	nmod:poss	_	_
5	en	en	ADV	_	Degree=Sup	6	advmod	_	_
6	ucuz	ucuz	ADJ	_	_	7	amod	_	_
7	yolu	yol	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
8	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


