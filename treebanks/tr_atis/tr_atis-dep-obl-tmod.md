---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-agent.html">obl:agent</a></tt>.

612 nodes (1%) are attached to their parents as `obl:tmod`.

612 instances of `obl:tmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47385620915033.

The following 14 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (302; 49% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (249; 41% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (41; 7% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 obl:tmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl:tmod	color:blue
1	Minneapolis'ten	minneapolis	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	8	nmod	_	_
3	Diego'ya	diego	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	7'den	7	NUM	_	Case=Abl|Number=Sing|NumType=Card	6	obl:tmod	_	_
5	önce	ön	NOUN	_	Number=Sing	4	case	_	_
6	varan	var	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	8	acl	_	_
7	tüm	tüm	DET	_	Definite=Def|PronType=Ind	8	det	_	_
8	uçuşları	uçuş	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	göster	göster	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:tmod	color:blue
1	Atlanta'dan	atlanta	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Denver'e	denver	PROPN	_	Case=Dat|Number=Sing	10	nmod	_	_
3	12	12	NUM	_	NumType=Card	4	nummod	_	_
4	Ekim'de	ekim	PROPN	_	Case=Loc|Number=Sing	5	obl:tmod	_	_
5	kalkan	kalk	VERB	_	Polarity=Pos|Tense=Pres|VerbForm=Part	10	acl	_	_
6	en	en	ADV	_	Degree=Sup	7	advmod	_	_
7	ucuz	ucuz	ADJ	_	_	10	amod	_	_
8	tek	tek	ADJ	_	_	10	amod	_	_
9	yön	yön	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
10	bilet	bilet	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
11	nedir	ne	X	_	Number=Sing	0	root	_	_

~~~


