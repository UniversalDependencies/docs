---
layout: base
title:  'Statistics of nmod:poss in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="uz_ut-dep-nmod.html">nmod</a></tt>.

142 nodes (2%) are attached to their parents as `nmod:poss`.

142 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8169014084507.

The following 10 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (93; 65% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (19; 13% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (18; 13% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="uz_ut-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-NUM.html">NUM</a></tt>-<tt><a href="uz_ut-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-PRON.html">PRON</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_ut-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Hamshira	hamshira	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
2	Mastura	Mastura	PROPN	_	Case=Nom|Number=Sing	6	iobj	_	_
3	bilan	bilan	ADP	_	_	5	cc	_	_
4	uning	u	PRON	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	eriga	er	NOUN	_	Case=Dat|Number=Sing	2	conj	_	_
6	xabar	xabar	NOUN	_	Case=Nom|Number=Sing	8	xcomp	_	_
7	bergani	ber	VERB	_	_	6	compound	_	_
8	ketdi	ket	VERB	_	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nmod:poss	color:blue
1	Hozirda	hozirda	ADV	_	_	6	advmod	_	_
2	u	u	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
3	Turkiyaning	Turkiya	PROPN	_	Case=Gen|Number=Sing|Poss=Yes	5	nmod:poss	_	_
4	hukmron	hukmron	ADJ	_	_	5	amod	_	_
5	partiyasi	partiya	NOUN	_	Case=Nom|Number=Sing	6	xcomp	_	_
6	hisoblanadi	hisobla	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


