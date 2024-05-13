---
layout: base
title:  'Statistics of discourse in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `discourse`

This relation is universal.

40 nodes (0%) are attached to their parents as `discourse`.

29 instances of `discourse` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.275.

The following 12 pairs of parts of speech are connected with `discourse`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (18; 45% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (7; 18% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 13% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ay	ay	INTJ	_	_	3	discourse	_	_
2	nasıl	nasıl	ADV	_	PronType=Int	3	advmod	_	_
3	güldük	gül	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Aaa	aaa	INTJ	_	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	yiyecek	yiyecek	ADJ	_	_	5	amod	_	_
4	hiçbir	hiçbir	DET	_	Definite=Ind|Polarity=Neg|PronType=Art	5	det	_	_
5	şey	şey	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
6	yok	yok	ADJ	_	Case=Nom|Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	Çabuk	çabuk	ADV	_	_	2	advmod	_	_
2	bitirseler	bit	VERB	_	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Cau	0	root	_	_
3	bari	bari	ADV	_	_	2	discourse	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	_

~~~


