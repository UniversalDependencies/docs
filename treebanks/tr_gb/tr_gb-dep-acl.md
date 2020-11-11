---
layout: base
title:  'Statistics of acl in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `acl`

This relation is universal.

299 nodes (2%) are attached to their parents as `acl`.

283 instances of `acl` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7190635451505.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (248; 83% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (21; 7% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (13; 4% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (10; 3% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Bugün	bugün	NOUN	_	Case=Nom|Number=Sing	3	obl:tmod	_	_
2	Ziya’yla	Ziya	PROPN	_	Case=Ins|Number=Sing	3	obl	_	_
3	buluştuğun	buluş	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2|Tense=Past|VerbForm=Part	4	acl	_	_
4	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	…	…	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl	color:blue
1	bugün	bugün	NOUN	_	Case=Nom|Number=Sing	2	obl:tmod	_	_
2	işte	iş	NOUN	_	Case=Loc|Number=Sing	4	acl	_	_
3	olan	ol	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Part	2	cop	_	_
4	kadın	kadın	NOUN	_	Case=Nom|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	Yemeğin	yemek	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	altını	alt	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	kaynadıktan	kayna	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl	_	_
5	ne	ne	PRON	_	Case=Nom|Number=Sing|PronType=Int	7	nmod	_	_
6	kadar	kadar	ADP	_	_	5	case	_	_
7	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	9	obl	_	_
8	sonra	sonra	ADP	_	_	7	case	_	_
9	kapatıyorsunuz	kapa	VERB	_	Aspect=Prog|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	SpaceAfter=No
10	?	?	PUNCT	_	_	9	punct	_	_

~~~


