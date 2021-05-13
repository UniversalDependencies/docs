---
layout: base
title:  'Statistics of nsubj in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="tr_gb-dep-nsubj-cop.html">nsubj:cop</a></tt>.

1630 nodes (9%) are attached to their parents as `nsubj`.

1606 instances of `nsubj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54846625766871.

The following 22 pairs of parts of speech are connected with `nsubj`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (531; 33% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (373; 23% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (279; 17% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (216; 13% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (44; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (43; 3% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (32; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (30; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (28; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (9; 1% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-DET.html">DET</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Dün	dün	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	_
2	çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	4	nsubj	_	_
3	okula	okul	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
4	gitti	git	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Aydın	Aydın	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	bana	ben	PRON	_	Case=Dat|Number=Sing|PronType=Prs	4	obl	_	_
3	çiçek	çiçek	NOUN	_	Case=Nom|Number=Sing	4	obj	_	_
4	getirdi	getir	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|PronType=Prs	6	nsubj	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	6	obl:tmod	_	_
4	yemeklerini	ye	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
5	lokantada	lokanta	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yer	ye	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


