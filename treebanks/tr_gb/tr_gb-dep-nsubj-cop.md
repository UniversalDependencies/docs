---
layout: base
title:  'Statistics of nsubj:cop in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>.

33 nodes (0%) are attached to their parents as `nsubj:cop`.

32 instances of `nsubj:cop` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18181818181818.

The following 11 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (8; 24% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (7; 21% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 15% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 15% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:cop	color:blue
1	Bir	bir	DET	_	Definite=Ind|Number=Sing	2	det	_	_
2	bakıma	bakım	NOUN	_	Case=Dat|Number=Sing	6	obl	_	_
3	Ali’nin	Ali	PROPN	_	Case=Gen|Number=Sing	5	nsubj	_	_
4	geç	geç	ADV	_	_	5	advmod	_	_
5	gelmesi	gel	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	6	nsubj:cop	_	_
6	iyi	iyi	ADJ	_	_	0	root	_	_
7	oldu	ol	AUX	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	Dışarda	dışarı	NOUN	_	Case=Loc|Number=Sing	4	nmod	_	_
2	bir	bir	DET	_	Definite=Ind	3	det	_	_
3	köpek	köpek	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	_
4	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:cop	color:blue
1	Bu	bu	DET	_	Definite=Def|Number=Sing|Polarity=Pos	2	det	_	_
2	hayvanların	hayvan	NOUN	_	Case=Gen|Number=Plur	6	obl	_	_
3	arasında	arasında	ADP	_	Number[psor]=Sing|Person[psor]=3	2	case	_	_
4	en	en	ADV	_	_	5	advmod	_	_
5	vahşisi	vahşi	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
6	kaplan	kaplan	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	mış	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


