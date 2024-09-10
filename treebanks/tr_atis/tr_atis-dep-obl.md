---
layout: base
title:  'Statistics of obl in UD_Turkish-Atis'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Atis: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="tr_atis-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="tr_atis-dep-obl-tmod.html">obl:tmod</a></tt>.

4205 nodes (9%) are attached to their parents as `obl`.

4194 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.40737217598098.

The following 22 pairs of parts of speech are connected with `obl`: <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (1639; 39% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (980; 23% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (389; 9% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (385; 9% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (297; 7% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (184; 4% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (160; 4% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (123; 3% instances), <tt><a href="tr_atis-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (15; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_atis-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_atis-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_atis-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Denver'den	denver	PROPN	_	Case=Abl|Number=Sing	2	nmod	_	_
2	Pittsburgh'a	pittsburgh	PROPN	_	Case=Dat|Number=Sing	3	obl	_	_
3	olan	ol	ADJ	_	_	5	acl	_	_
4	hangi	hangi	ADJ	_	_	5	amod	_	_
5	uçuş	uç	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
6	sabah	sabah	NOUN	_	Case=Nom|Number=Sing|Person=3	9	obl:tmod	_	_
7	en	en	ADV	_	Degree=Sup	8	advmod	_	_
8	erken	erken	ADV	_	_	9	advmod	_	_
9	gelir	gel	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl	color:blue
1	Bana	ben	PRON	_	PronType=Prs	7	obl	_	_
2	Washington	washington	PROPN	_	Case=Nom|Number=Sing	6	amod	_	_
3	DC'deki	dc	PROPN	_	_	2	flat	_	_
4	tüm	tüm	DET	_	PronType=Art	6	det	_	_
5	kara	kara	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	ulaşımını	ulaşım	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	gösterin	göster	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl	color:blue
1	Orlando	orlando	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	Havaalanı'ndan	havaalan	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	1	flat	_	_
3	şehre	şehir	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obl	_	_
4	olan	ol	ADJ	_	_	5	acl	_	_
5	mesafeyi	mesafe	NOUN	_	Case=Acc|Number=Sing|Person=3	6	obj	_	_
6	söyleyin	söyle	VERB	_	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_

~~~


