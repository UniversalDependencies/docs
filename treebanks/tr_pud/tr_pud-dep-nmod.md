---
layout: base
title:  'Statistics of nmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

191 nodes (1%) are attached to their parents as `nmod`.

191 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.37696335078534.

The following 18 pairs of parts of speech are connected with `nmod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (70; 37% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (29; 15% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (28; 15% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (25; 13% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Daha	daha	ADV	RB	_	2	advmod	_	_
2	önceleri	önce	ADV	RB	_	8	advmod	_	_
3	jetler	jet	NOUN	NN	Case=Nom|Number=Plur	8	nsubj	_	_
4	sadece	sadece	ADV	RB	_	7	advmod	_	_
5	blog	blog	NOUN	NN	Number=Sing	6	nmod:poss	_	_
6	yazarları	yazar	NOUN	NN	Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nmod	_	_
7	tarafından	taraf	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Plur|Person[psor]=3	8	obl	_	_
8	görülürdü	görülür	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Yeni	yeni	ADJ	JJ	Number=Sing	2	amod	_	_
2	bütçe	bütçe	NOUN	NN	Case=Nom|Number=Sing	7	nsubj	_	_
3	Clinton'un	Clinton	PROPN	PROPN	Case=Gen|Number=Sing	6	nmod:poss	_	Proper=True
4	kabarık	kabarık	ADJ	JJ	Number=Sing	6	amod	_	_
5	banka	banka	NOUN	NN	Number=Sing	6	nmod:poss	_	_
6	hesabından	hesab	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nmod	_	_
7	sağlanıyor	sağla	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	Carcassonne'in	Carcassonne	PROPN	PROPN	Case=Gen|Number=Sing	2	nmod:poss	_	Proper=True
2	tarihi	tarih	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	surlarla	sur	NOUN	NN	Case=Ins|Number=Plur	5	nmod	_	ToDo=nmod
5	çevrili	çevrili	ADJ	VJ	Number=Sing	6	acl	_	_
6	şehriyle	şehr	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	doğrudan	doğru	ADJ	JJ	Number=Sing	8	advmod	_	_
8	bağlantılı	_	ADJ	JJ	Number=Sing	0	root	_	_
9	dır	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


