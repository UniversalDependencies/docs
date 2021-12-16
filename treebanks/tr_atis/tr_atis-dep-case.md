---
layout: base
title:  'Statistics of case in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `case`

This relation is universal.

994 nodes (2%) are attached to their parents as `case`.

992 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14989939637827.

The following 16 pairs of parts of speech are connected with `case`: <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (775; 78% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (140; 14% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (23; 2% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (14; 1% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="tr_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-DET.html">DET</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	yemek	yemek	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
2	için	için	ADP	_	_	1	case	_	_
3	"d	"d	NOUN	_	Case=Acc|Number=Sing|Person=3	7	nsubj	_	_
4	s"	s"	NOUN	_	Case=Nom|Number=Sing|Person=3	3	fixed	_	_
5	ne	ne	ADJ	_	_	7	obj	_	_
6	anlama	anlam	NOUN	_	Case=Dat|Number=Sing|Person=3	7	compound	_	_
7	geliyor	gel	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	San	san	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
3	Francisco'ya	francisco	PROPN	_	Case=Dat|Number=Sing	2	flat	_	_
4	23	23	NUM	_	NumType=Card	5	nummod	_	_
5	Ocak	ocak	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
6	için	için	ADP	_	_	5	case	_	_
7	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	bilgileri	bilgi	NOUN	_	Case=Acc|Number=Plur|Person=3	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 case	color:blue
1	amerikan	amerikan	ADJ	_	_	7	nmod	_	_
2	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
3	ile	ile	ADP	_	_	1	case	_	_
4	Miami'den	miami	PROPN	_	Case=Abl|Number=Sing	5	nmod	_	_
5	Chicago'ya	chicago	PROPN	_	Case=Dat|Number=Sing	7	nmod	_	_
6	tüm	tüm	DET	_	PronType=Art	7	det	_	_
7	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	obj	_	_
8	ver	ver	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


