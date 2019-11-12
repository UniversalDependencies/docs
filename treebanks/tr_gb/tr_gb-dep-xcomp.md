---
layout: base
title:  'Statistics of xcomp in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `xcomp`

This relation is universal.

116 nodes (1%) are attached to their parents as `xcomp`.

116 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10344827586207.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (84; 72% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (16; 14% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Eğer	eğer	SCONJ	_	_	4	mark	_	_
2	sokağa	sokak	NOUN	_	Case=Dat|Number=Sing	3	obl	_	_
3	çıkmak	çık	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	4	xcomp	_	_
4	istiyorsan	iste	VERB	_	Aspect=Prog|Evident=Fh|Mood=Cnd|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	…	…	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Köyde	köy	NOUN	_	Case=Loc|Number=Sing	5	obl	_	_
2	Bayram’ın	bayram	NOUN	_	Case=Gen|Number=Sing	3	nmod	_	_
3	ailesi	aile	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
4	zengin	zengin	ADJ	_	_	5	xcomp	_	_
5	sayılıyormuş	say	VERB	_	Aspect=Prog|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Ben	ben	PRON	_	Case=Nom|Number=Sing|Person=1	7	obl	_	_
2	ce	-ce	ADV	_	_	1	case	_	_
3	bu	bu	DET	_	Definite=Def|Number=Sing	4	det	_	_
4	resim	resim	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
5	sanat	sanat	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
6	eseri	eser	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	xcomp	_	_
7	sayılmaz	say	VERB	_	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


