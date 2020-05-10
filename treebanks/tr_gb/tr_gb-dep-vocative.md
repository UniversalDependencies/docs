---
layout: base
title:  'Statistics of vocative in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `vocative`

This relation is universal.

4 nodes (0%) are attached to their parents as `vocative`.

4 instances of `vocative` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 50% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Ayşe	Ayşe	PROPN	_	Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	xcomp	_	_
4	şimdi	şimdi	ADV	_	_	5	advmod	_	_
5	çıkıyorum	çık	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 vocative	color:blue
1	Ayşe	Ayşe	PROPN	_	Number=Sing	5	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	benim	ben	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	_	_
4	anahtarım	anahtar	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	5	nsubj	_	_
5	nerede	nere	PRON	_	Case=Loc|Number=Sing|PronType=Int	0	root	_	SpaceAfter=No
6	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Çocuklar	çocuk	NOUN	_	Case=Nom|Number=Plur	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	bağırmadan	bağırmadan	VERB	_	Mood=Ind|VerbForm=Conv	4	advcl	_	_
4	oynayın	oyna	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	!	!	PUNCT	_	_	4	punct	_	_

~~~


