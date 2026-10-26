---
layout: base
title:  'Statistics of aux:q in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `aux:q`

This relation is a language-specific subtype of <tt><a href="tr_tuecl-dep-aux.html">aux</a></tt>.

26 nodes (3%) are attached to their parents as `aux:q`.

25 instances of `aux:q` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19230769230769.

The following 4 pairs of parts of speech are connected with `aux:q`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (11; 42% instances), <tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (10; 38% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (3; 12% instances), <tt><a href="tr_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux:q	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	gitmek	git	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	3	xcomp	_	_
3	istiyor	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	musun	mi	AUX	_	Number=Sing|Person=2|PronType=Int	3	aux:q	_	SpaceAfter=No
5	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:q	color:blue
1	İguazu	İguazu	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	büyük	büyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	ülke	ülke	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	yoksa	yoksa	CCONJ	_	_	8	cc	_	_
8	küçük	küçük	ADJ	_	_	4	conj	_	_
9	mü	mi	AUX	_	Number=Sing|Person=3|PronType=Int	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:q	color:blue
1	İguazu	İguazu	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	_
2	büyük	büyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
4	ülke	ülke	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
5	mi	mi	AUX	_	Number=Sing|Person=3|PronType=Int	4	aux:q	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	yoksa	yoksa	CCONJ	_	_	8	cc	_	_
8	küçük	küçük	ADJ	_	_	4	conj	_	_
9	mü	mi	AUX	_	Number=Sing|Person=3|PronType=Int	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


