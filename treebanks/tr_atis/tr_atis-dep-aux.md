---
layout: base
title:  'Statistics of aux in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `aux`

This relation is universal.

447 nodes (1%) are attached to their parents as `aux`.

447 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01118568232662.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (223; 50% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (207; 46% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="tr_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_atis-pos-AUX.html">AUX</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	B	b	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	ücret	ücret	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	kodu	kod	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nsubj	_	_
4	business	business	NOUN	_	Case=Nom|Number=Sing|Person=3	7	nmod	_	_
5	sınıfı	sınıf	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	compound	_	_
6	ile	ile	ADP	_	_	4	case	_	_
7	aynı	aynı	ADJ	_	_	0	root	_	_
8	mı	mi	AUX	_	PronType=Int	7	aux	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	San	san	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	Francisco’dan	Francisco’dan	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	Baltimore'ye	baltimore	PROPN	_	Case=Dat|Number=Sing	7	obl	_	_
4	747	747	NUM	_	NumType=Card	6	nmod	_	_
5	ile	ile	ADP	_	_	4	case	_	_
6	sefer	sefer	NOUN	_	Case=Nom|Number=Sing|Person=3	7	obj	_	_
7	yapıyor	yap	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	musunuz	mi	AUX	_	PronType=Int	7	aux	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux	color:blue
1	Denver	denver	PROPN	_	Case=Nom|Number=Sing	5	obl	_	_
2	havalimanında	havaliman	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
3	kara	kara	NOUN	_	Case=Nom|Number=Sing|Person=3	4	nmod	_	_
4	ulaşımı	ulaşım	NOUN	_	Case=Acc|Number=Sing|Person=3	5	nsubj	_	_
5	mevcut	mevcut	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	mu	mi	AUX	_	PronType=Int	5	aux	_	_

~~~


