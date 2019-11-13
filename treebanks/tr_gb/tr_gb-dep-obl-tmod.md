---
layout: base
title:  'Statistics of obl:tmod in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="tr_gb-dep-obl-agent.html">obl:agent</a></tt>.

493 nodes (3%) are attached to their parents as `obl:tmod`.

482 instances of `obl:tmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56592292089249.

The following 14 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (375; 76% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (30; 6% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (29; 6% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (25; 5% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (11; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (8; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
6	yer	ye	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:tmod	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1	4	nsubj	_	_
2	o	o	DET	_	Definite=Def|Number=Sing	3	det	_	_
3	sırada	sıra	NOUN	_	Case=Loc|Number=Sing	4	obl:tmod	_	_
4	öğretmen	öğretmen	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	dim	i	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	cop	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl:tmod	color:blue
1	Londra	Londra	PROPN	_	Number=Sing	5	nsubj	_	_
2	sonbaharda	sonbahar	NOUN	_	Case=Loc|Number=Sing	5	obl:tmod	_	_
3	o	o	PRON	_	Case=Nom|Number=Sing	5	nmod	_	_
4	kadar	kadar	ADP	_	_	3	case	_	_
5	güzel	güzel	ADJ	_	_	0	root	_	_
6	olur	ol	AUX	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
7	ki	ki	ADV	_	_	5	advmod:emph	_	SpaceAfter=No
8	!	!	PUNCT	_	_	5	punct	_	_

~~~


