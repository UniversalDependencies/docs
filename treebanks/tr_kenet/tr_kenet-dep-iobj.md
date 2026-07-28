---
layout: base
title:  'Statistics of iobj in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `iobj`

This relation is universal.

555 nodes (0%) are attached to their parents as `iobj`.

538 instances of `iobj` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33333333333333.

The following 19 pairs of parts of speech are connected with `iobj`: <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (389; 70% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (88; 16% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (19; 3% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (16; 3% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt> (9; 2% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-X.html">X</a></tt>-<tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	Oğlum	oğul	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	vocative	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
4	karanlığa	karanlık	NOUN	_	Case=Dat|Number=Sing	6	iobj	_	_
5	kubur	kubur	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	sıkmam	sık	VERB	_	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 iobj	color:blue
1	Annemi	anne	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	2	obj	_	_
2	kıskanıyor	kıskan	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	parataxis	_	_
3	,	,	PUNCT	_	_	2	punct	_	_
4	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
5	leke	leke	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	sürmek	sür	VERB	_	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	7	xcomp	_	_
7	istiyor	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	Zira	zira	CCONJ	_	_	9	discourse	_	_
2	ki	ki	SCONJ	_	_	1	case	_	_
3	biz	biz	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	orijinal	orijinal	ADJ	_	_	6	advmod	_	_
6	mevzulara	mevzu	NOUN	_	Case=Dat|Number=Plur	9	iobj	_	_
7	teması	temas	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
8	şiar	şiar	NOUN	_	Case=Nom|Number=Sing	7	nmod	_	_
9	edinmişiz	et	NOUN	_	Aspect=Perf|Number=Plur|Number[psor]=Sing|Person=1|Person[psor]=2	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


