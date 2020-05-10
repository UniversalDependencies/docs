---
layout: base
title:  'Statistics of csubj in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="tr_gb-dep-csubj-cop.html">csubj:cop</a></tt>.

75 nodes (0%) are attached to their parents as `csubj`.

71 instances of `csubj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65333333333333.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (52; 69% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (16; 21% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	Maç	maç	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	birazdan	birazdan	ADV	_	_	3	advmod	_	_
3	başlayacak	başla	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	csubj	_	_
4	deniyor	de	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	Şan	şan	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	derslerine	ders	NOUN	_	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obl	_	_
3	gidip	gidip	VERB	_	Mood=Ind|VerbForm=Conv	4	advcl	_	_
4	duruyor	dur	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ama	ama	CCONJ	_	_	8	cc	_	_
6	şarkı	şarkı	NOUN	_	Case=Nom|Number=Sing	7	compound	_	_
7	söylediği	söyle	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	8	csubj	_	_
8	yok	yok	ADJ	_	Case=Nom|Polarity=Neg	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	Bahçeyi	bahçe	NOUN	_	Case=Acc|Number=Sing	4	obj	_	_
2	bu	bu	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	hale	hal	NOUN	_	Case=Dat|Number=Sing	4	obl	_	_
4	getirmek	getir	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	7	advcl	_	_
5	için	için	ADP	_	_	4	mark	_	_
6	aylarca	ay	NOUN	_	Case=Equ|Number=Plur	7	obl:tmod	_	_
7	uğraşmış	uğraş	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Tense=Past|VerbForm=Fin	9	csubj	_	_
8	olsan	ol	AUX	_	Mood=Cnd|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	gerek	gerek	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


