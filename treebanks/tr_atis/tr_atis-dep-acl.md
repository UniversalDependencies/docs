---
layout: base
title:  'Statistics of acl in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `acl`

This relation is universal.

1964 nodes (4%) are attached to their parents as `acl`.

1963 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28004073319756.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1909; 97% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-X.html">X</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	olan	ol	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	_
6	sabah	sabah	NOUN	_	Case=Nom|Number=Sing	9	obl:tmod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	erken	erken	ADV	_	_	9	advmod	_	_
9	gelir	gel	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 acl	color:blue
1	Philadelphia'dan	philadelphia	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Dallas'a	dallas	PROPN	_	Case=Dat|Number=Sing	7	nmod	_	_
3	Atlanta'da	atlanta	PROPN	_	Case=Loc|Number=Sing	4	obl	_	_
4	mola	mola	NOUN	_	Case=Nom|Number=Sing	7	acl	_	_
5	veren	ver	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	4	compound	_	_
6	bir	bir	DET	_	Definite=Ind|PronType=Art	7	det	_	_
7	uçuş	uçuş	NOUN	_	Case=Nom|Number=Sing	8	obj	_	_
8	istiyorum	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl	color:blue
1	7	7	NUM	_	NumType=Card	2	nummod	_	_
2	Kasım'da	kasım	PROPN	_	Case=Loc|Number=Sing	8	nmod	_	_
3	Boston'dan	boston	PROPN	_	Case=Abl|Number=Sing	4	nmod	_	_
4	Dallas	dallas	PROPN	_	Case=Nom|Number=Sing	7	obl	_	_
5	Fort	fort	PROPN	_	Case=Nom|Number=Sing	4	flat	_	_
6	Worth'e	worth	PROPN	_	Case=Dat|Number=Sing	5	flat	_	_
7	giden	git	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	8	acl	_	_
8	tek	tek	ADJ	_	_	10	nmod	_	_
9	yön	yön	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
10	ücretleri	ücret	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	ne	ne	ADV	_	_	12	compound	_	_
12	kadar	kadar	ADP	_	_	0	root	_	_

~~~


