---
layout: base
title:  'Statistics of nsubj in UD_Mongolian-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Mongolian-GDUD: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="mn_gdud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

84 nodes (18%) are attached to their parents as `nsubj`.

82 instances of `nsubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73809523809524.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mn_gdud-pos-PRON.html">PRON</a></tt> (42; 50% instances), <tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt> (20; 24% instances), <tt><a href="mn_gdud-pos-VERB.html">VERB</a></tt>-<tt><a href="mn_gdud-pos-PROPN.html">PROPN</a></tt> (8; 10% instances), <tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt> (5; 6% instances), <tt><a href="mn_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="mn_gdud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="mn_gdud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="mn_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="mn_gdud-pos-AUX.html">AUX</a></tt>-<tt><a href="mn_gdud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="mn_gdud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="mn_gdud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj	color:blue
1	Ene	ene	DET	_	PronType=Dem	2	det	_	_
2	nom-ïg	nom	NOUN	_	Case=Acc	3	obj	_	_
3	mart-san	mart	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	uu	uu	PART	_	PartType=Int	3	discourse	_	_
5	ci	ci	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Xüü	xüü	NOUN	_	Case=Nom	5	nsubj	_	_
2	öcigdör	öcigdör	ADV	_	_	5	advmod	_	_
3	oxin-d	oxin	NOUN	_	Case=Dat	5	obl	_	_
4	nom	nom	NOUN	_	Case=Acc	5	obj	_	_
5	ög-sön	ög	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	Ene	ene	DET	_	PronType=Dem	2	det	_	_
2	nom-ïg	nom	NOUN	_	Case=Acc	5	obj	_	_
3	Bat	Bat	PROPN	_	Case=Nom	5	nsubj	_	_
4	oxin-d	oxin	NOUN	_	Case=Dat	5	obl	_	_
5	ög-sön	ög	VERB	_	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


