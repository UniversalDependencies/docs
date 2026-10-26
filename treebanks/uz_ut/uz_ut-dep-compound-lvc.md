---
layout: base
title:  'Statistics of compound:lvc in UD_Uzbek-UT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UT: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="uz_ut-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="uz_ut-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="uz_ut-dep-compound-svc.html">compound:svc</a></tt>.

215 nodes (4%) are attached to their parents as `compound:lvc`.

211 instances of `compound:lvc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 7 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt> (168; 78% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-PART.html">PART</a></tt> (23; 11% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADJ.html">ADJ</a></tt> (17; 8% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="uz_ut-pos-ADV.html">ADV</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_ut-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="uz_ut-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_ut-pos-ADV.html">ADV</a></tt> (1; 0% instances).


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
4	bogʻlovchi	bogʻla	VERB	_	_	5	acl	_	_
5	koʻprik	koʻprik	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
6	bunyod	bunyod	PART	_	_	7	compound:lvc	_	_
7	etildi	et	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	Bu	bu	PRON	_	PronType=Dem	7	nsubj	_	_
2	haqiqatga	haqiqat	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
3	toʻgʻri	toʻgʻri	ADJ	_	_	4	compound:lvc	_	_
4	kelmaydigan	kel	VERB	_	Polarity=Neg|VerbForm=Part	7	acl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	notoʻgʻri	notoʻgʻri	ADJ	_	_	7	amod	_	_
7	maʼlumot	maʼlumot	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


