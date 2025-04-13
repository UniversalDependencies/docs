---
layout: base
title:  'Statistics of nmod in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="uz_ut-dep-nmod-poss.html">nmod:poss</a></tt>.

353 nodes (6%) are attached to their parents as `nmod`.

350 instances of `nmod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45042492917847.

The following 11 pairs of parts of speech are connected with `nmod`: <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (260; 74% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (55; 16% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (21; 6% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Keyingi	keyingi	ADJ	_	_	4	amod	_	_
2	25	25	NUM	_	NumType=Card	3	nummod	_	_
3	yil	yil	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	umrini	umr	NOUN	_	Case=Acc|Number=Sing	8	obj	_	_
5	og‘ir	og‘ir	ADJ	_	_	6	advmod	_	_
6	rejimli	rejimli	ADJ	_	_	7	amod	_	_
7	koloniyada	koloniya	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
8	o‘tkazadi	o‘tkaz	VERB	_	Mood=Ind|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	O‘zbekiston	O‘zbekiston	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	terma	terma	ADJ	_	_	3	amod	_	_
3	jamoasining	jamoa	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	4	nmod:poss	_	_
4	imkoniyati	imkoniyat	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
5	qanday	qanday	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Baykar	Baykar	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	kompaniyasi	kompaniya	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	1	compound	_	_
3	vakillari	vakil	NOUN	_	Case=Nom|Number=Plur	7	nsubj	_	_
4	uning	u	PRON	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod	_	_
5	dafn	dafn	NOUN	_	Case=Nom|Number=Sing	6	compound	_	_
6	marosimida	marosim	NOUN	_	Case=Loc|Number=Sing	7	obl	_	_
7	qatnashgan	qatnash	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


