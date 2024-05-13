---
layout: base
title:  'Statistics of acl:relcl in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-acl.html">acl</a></tt>.

511 nodes (3%) are attached to their parents as `acl:relcl`.

511 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6320939334638.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (388; 76% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (48; 9% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (35; 7% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (8; 2% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 acl:relcl	color:blue
1	Söylediği	söyle	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	4	acl:relcl	_	_
2	ve	ve	CCONJ	CCONJ	_	3	cc	_	_
3	yaptığı	yap	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	1	conj	_	_
4	şeyler	şey	NOUN	NN	Case=Nom|Number=Plur	6	nsubj	_	_
5	gerçekten	gerçekten	ADV	RB	_	6	advmod	_	_
6	inanılmaz	inan	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 acl:relcl	color:blue
1	Cape	Cape	PROPN	PROPN	Number=Sing	4	nmod:poss	_	Proper=True
2	Town'ın	Town	PROPN	PROPN	Case=Gen|Number=Sing	1	flat:name	_	Proper=True
3	yerel	yerel	ADJ	JJ	Number=Sing	4	amod	_	_
4	yönetimi	yönetim	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	büyükşehir	büyükşehir	NOUN	NN	Number=Sing	7	compound	_	_
7	belediyesi	belediye	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	11	acl:relcl	_	_
8	olan	ol	AUX	VJ	Number=Sing|Polarity=Pos	7	cop	_	_
9	Cape	Cape	PROPN	PROPN	Number=Sing	11	compound	_	Proper=True
10	Town	Town	PROPN	PROPN	Number=Sing	9	flat:name	_	Proper=True
11	şehri	şehir	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
12	dir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	11	cop	_	_
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 acl:relcl	color:blue
1	Seferi	sefer	NOUN	NN	Case=Acc|Number=Sing	8	obj	_	_
2	Albany'ye	Albany	PROPN	PROPN	Case=Dat|Number=Sing	3	obl	_	Proper=True
3	ulaşmayı	ulaş	NOUN	VN	Aspect=Perf|Case=Acc|Mood=Ind|Tense=Pres|VerbForm=Ger	4	xcomp	_	_
4	amaçlayan	amaçlay	ADJ	VJ	Number=Sing|Polarity=Pos	6	acl:relcl	_	_
5	General	General	NOUN	NN	Number=Sing	6	compound	_	_
6	Joseph	Joseph	PROPN	PROPN	Number=Sing	8	nsubj	_	Proper=True
7	Burgoyne	Burgoyne	PROPN	PROPN	Case=Nom|Number=Sing	6	flat:name	_	Proper=True
8	yönetmiştir	yönet	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


