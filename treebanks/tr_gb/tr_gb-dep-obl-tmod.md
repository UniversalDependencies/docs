---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_gb-dep-obl-agent.html">obl:agent</a></tt>.

450 nodes (3%) are attached to their parents as `obl:tmod`.

440 instances of `obl:tmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 11 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (363; 81% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (25; 6% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (22; 5% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (11; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 obl:tmod	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	her	her	DET	_	Definite=Def	3	det	_	_
3	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	6	obl:tmod	_	_
4	yemeklerini	ye	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
5	lokantada	lokanta	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yer	ye	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 obl:tmod	color:blue
1	Saat	saat	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	ikiden	iki	NUM	_	Case=Abl|Number=Sing	6	obl:tmod	_	_
3	sonra	sonra	ADP	_	_	2	case	_	_
4	beni	ben	PRON	_	Case=Acc|Number=Sing|Person=1	6	obj	_	_
5	telefonla	telefon	NOUN	_	Case=Ins|Number=Sing	6	obl	_	_
6	ara	ara	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:tmod	color:blue
1	O	o	DET	_	Definite=Def|Number=Sing	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	_
3	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	_
4	yok	yok	ADJ	_	Case=Nom|Polarity=Neg	0	root	_	_
5	tum	i	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


