---
layout: base
title:  'Statistics of obl:agent in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="tr_atis-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-tmod.html">obl:tmod</a></tt>.

4 nodes (0%) are attached to their parents as `obl:agent`.

4 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.75.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (2; 50% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl:agent	color:blue
1	American	american	PROPN	_	Case=Nom|Number=Sing	7	obl:agent	_	_
2	Airlines	airlines	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	ne	ne	ADJ	_	_	6	amod	_	_
5	tür	tür	NOUN	_	Case=Nom|Number=Sing|Person=3	4	compound	_	_
6	uçaklar	uçak	NOUN	_	Case=Nom|Number=Plur|Person=3	7	nsubj:pass	_	_
7	kullanılıyor	kullan	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:agent	color:blue
1	American	american	PROPN	_	Case=Nom|Number=Sing	4	obl:agent	_	_
2	Havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	sağlanan	sağla	ADJ	_	_	8	acl	_	_
5	Atlanta	atlanta	PROPN	_	Case=Nom|Number=Sing	8	nmod	_	_
6	ve	ve	CCONJ	_	_	7	cc	_	_
7	DFW	DFW	PROPN	_	Case=Nom|Number=Sing	5	conj	_	_
8	uçuşları	uç	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	10	nmod	_	_
9	için	için	ADP	_	_	8	case	_	_
10	ücretler	ücret	NOUN	_	Case=Nom|Number=Plur|Person=3	11	nsubj	_	_
11	nelerdir	ne	VERB	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:agent	color:blue
1	amerikan	amerikan	ADJ	_	_	6	obl:agent	_	_
2	havayolları	havayol	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
3	tarafından	tarafından	ADV	_	_	1	case	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuşlar	uç	NOUN	_	Case=Nom|Number=Plur|Person=3	6	nsubj:pass	_	_
6	sağlanmaktadır	sağla	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_

~~~


