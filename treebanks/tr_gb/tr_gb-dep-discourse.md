---
layout: base
title:  'Statistics of discourse in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `discourse`

This relation is universal.

138 nodes (1%) are attached to their parents as `discourse`.

90 instances of `discourse` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.96376811594203.

The following 18 pairs of parts of speech are connected with `discourse`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (79; 57% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (13; 9% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (12; 9% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (7; 5% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-INTJ.html">INTJ</a></tt> (3; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-DET.html">DET</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 discourse	color:blue
1	Hani	hani	ADV	_	_	3	advmod	_	_
2	sana	sen	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	3	obl	_	_
3	göstermiştim	göster	VERB	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Tense=Pqp|VerbForm=Fin	8	parataxis	_	_
4	ya	ya	ADV	_	_	3	advmod:emph	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	işte	işte	ADV	_	_	8	discourse	_	_
7	o	o	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	elbise	elbise	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 discourse	color:blue
1	Telefon	telefon	NOUN	_	Case=Nom|Number=Sing	2	nmod	_	_
2	numaram	numara	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	4	nsubj	_	_
3	sizde	siz	PRON	_	Case=Loc|Number=Sing|Person=2|PronType=Prs	4	nmod	_	_
4	var	var	ADJ	_	_	0	root	_	_
5	dır	i	AUX	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	herhalde	herhalde	ADV	_	_	4	discourse	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


