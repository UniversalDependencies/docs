---
layout: base
title:  'Statistics of obl in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="tr_gb-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="tr_gb-dep-obl-tmod.html">obl:tmod</a></tt>.

1282 nodes (7%) are attached to their parents as `obl`.

1271 instances of `obl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08502340093604.

The following 16 pairs of parts of speech are connected with `obl`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (735; 57% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (271; 21% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (150; 12% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (68; 5% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|PronType=Prs	6	nsubj	_	_
2	her	her	DET	_	Definite=Def|PronType=Art	3	det	_	_
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
# visual-style 4 3 obl	color:blue
1	Her	her	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	gün	gün	NOUN	_	Case=Nom|Number=Sing	4	obl:tmod	_	_
3	nereye	nere	PRON	_	Case=Dat|Number=Sing|PronType=Int	4	obl	_	_
4	gidiyorsun	git	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	Bugün	bugün	NOUN	_	Case=Nom|Number=Sing	3	obl:tmod	_	_
2	Ziya’yla	Ziya	PROPN	_	Case=Ins|Number=Sing	3	obl	_	_
3	buluştuğun	buluş	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2|Tense=Past|VerbForm=Part	4	acl	_	_
4	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	…	…	PUNCT	_	_	4	punct	_	_

~~~


