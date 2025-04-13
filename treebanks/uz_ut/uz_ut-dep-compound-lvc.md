---
layout: base
title:  'Statistics of compound:lvc in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="uz_ut-dep-compound.html">compound</a></tt>.

121 nodes (2%) are attached to their parents as `compound:lvc`.

116 instances of `compound:lvc` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (96; 79% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (13; 11% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:lvc	color:blue
1	Tuman	tuman	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	rahbarlari	rahbar	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
3	tadbirkorlarga	tadbirkor	NOUN	_	Case=Dat|Number=Plur	5	obj	_	_
4	qasd	qasd	NOUN	_	Case=Nom|Number=Sing	5	compound:lvc	_	_
5	qilganmi	qil	VERB	_	Mood=Int|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound:lvc	color:blue
1	3	3	NUM	_	NumType=Card	3	nummod	_	_
2	ta	ta	X	_	_	1	compound	_	_
3	tumanni	tuman	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
4	bog‘lovchi	bog‘la	VERB	_	_	5	acl	_	_
5	ko‘prik	ko‘prik	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
6	bunyod	bunyod	PART	_	_	7	compound:lvc	_	_
7	etildi	et	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:lvc	color:blue
1	Nega	nega	ADV	_	PronType=Int	3	advmod	_	_
2	ma’lum	ma’lum	ADJ	_	_	3	compound:lvc	_	_
3	qilmadingiz	qil	VERB	_	Mood=Int|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	ayangizning	aya	NOUN	_	Case=Gen|Number=Sing|Poss=Yes	7	nmod:poss	_	_
6	ko‘zlagan	ko‘zla	VERB	_	VerbForm=Part	7	acl	_	_
7	qizlari	qiz	NOUN	_	Case=Nom|Number=Plur	8	nsubj	_	_
8	bormi	bor	VERB	_	Mood=Int|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


