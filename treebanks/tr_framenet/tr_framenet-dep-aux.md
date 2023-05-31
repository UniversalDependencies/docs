---
layout: base
title:  'Statistics of aux in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `aux`

This relation is universal.

28 nodes (0%) are attached to their parents as `aux`.

28 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03571428571429.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (15; 54% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (6; 21% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (3; 11% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (3; 11% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	Aldığın	al	ADJ	_	_	2	acl	_	_
2	elbiselerin	elbise	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=2	3	nmod	_	_
3	masrafını	masraf	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	4	compound	_	_
4	gördün	gör	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
5	mü	mi	AUX	_	PronType=Int	4	aux	_	_
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Yemek	yemek	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	hala	hala	ADV	_	_	3	advmod	_	_
3	hazır	hazır	ADJ	_	_	7	parataxis	_	_
4	değil	değil	AUX	_	_	3	aux	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	çok	çok	ADV	_	_	7	advmod	_	_
7	acıktım	acık	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux	color:blue
1	Doktor	doktor	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	Sevim	sevim	PROPN	_	Case=Nom|Number=Sing	10	nsubj	_	_
3	,	,	PUNCT	_	_	10	punct	_	_
4	hastayı	hasta	NOUN	_	Case=Acc|Number=Sing|Person=3	6	obj	_	_
5	ilk	ilk	ADV	_	_	6	advmod	_	_
6	gördüğü	gör	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	acl	_	_
7	an	an	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nmod	_	_
8	kendinde	kendinde	NOUN	_	Case=Nom|Number=Sing|Person=3	10	ccomp	_	_
9	değil	değil	AUX	_	_	8	aux	_	_
10	sanmıştı	san	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


