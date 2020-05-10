---
layout: base
title:  'Statistics of ccomp in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `ccomp`

This relation is universal.

165 nodes (1%) are attached to their parents as `ccomp`.

147 instances of `ccomp` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (139; 84% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (9; 5% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (6; 4% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp	color:blue
1	Gitmenizi	git	VERB	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=2|VerbForm=Vnoun	2	ccomp	_	_
2	bekliyor	bekle	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 ccomp	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
2	adam	adam	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	tarih	tarih	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	hocası	hoca	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	ccomp	_	_
5	ymış	i	AUX	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
6	marih	tarih	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	_
7	hocası	hoca	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	compound:redup	_	_
8	ymış	i	AUX	_	Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
9	anlamam	anla	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 ccomp	color:blue
1	Coşkun’un	Coşkun	PROPN	_	Case=Gen|Number=Sing	2	nsubj:cop	_	_
2	evli	evli	ADJ	_	_	5	ccomp	_	_
3	olduğunu	ol	AUX	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	2	cop	_	_
4	sonradan	sonradan	ADV	_	_	5	advmod	_	_
5	öğrendim	öğren	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


