---
layout: base
title:  'Statistics of obj in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `obj`

This relation is universal.

1112 nodes (7%) are attached to their parents as `obj`.

1097 instances of `obj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5863309352518.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (896; 81% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (152; 14% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (52; 5% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|PronType=Prs	6	nsubj	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	6	obl:tmod	_	_
4	yemeklerini	ye	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
5	lokantada	lokanta	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yer	ye	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Sana	san	NOUN	_	Case=Dat|Number=Sing	3	obl	_	_
2	bunu	bu	PRON	_	Case=Acc|Number=Sing|PronType=Dem	3	obj	_	_
3	söylüyorum	söyle	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	ki	ki	SCONJ	_	_	6	mark	_	_
5	sonradan	sonradan	ADV	_	_	6	advmod	_	_
6	şaşırmayasın	şaşır	VERB	_	Mood=Opt|Number=Sing|Person=2|Polarity=Neg|Tense=Pres|VerbForm=Fin	3	advcl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obj	color:blue
1	Soner’i	Soner	PROPN	_	Case=Acc|Number=Sing	3	obj	_	_
2	moneri	moner	PROPN	_	Case=Acc|Number=Sing	1	compound:redup	_	_
3	görmedim	gör	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


