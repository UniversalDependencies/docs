---
layout: base
title:  'Statistics of nsubj:cop in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="tr_gb-dep-nsubj-outer.html">nsubj:outer</a></tt>.

23 nodes (0%) are attached to their parents as `nsubj:cop`.

22 instances of `nsubj:cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34782608695652.

The following 10 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (7; 30% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 22% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	Dışarda	dışarı	NOUN	_	Case=Loc|Number=Sing	4	obl	_	_
2	bir	bir	DET	_	Definite=Ind|PronType=Art	3	det	_	_
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
1	Bu	bu	DET	_	Definite=Def|Polarity=Pos|PronType=Art	2	det	_	_
2	hayvanların	hayvan	NOUN	_	Case=Gen|Number=Plur	3	nmod	_	_
3	arasında	ara	NOUN	_	Number[psor]=Sing|Person[psor]=3	6	obl	_	_
4	en	en	ADV	_	_	5	advmod	_	_
5	vahşisi	vahşi	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
6	kaplan	kaplan	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	mış	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Amaç	amaç	NOUN	_	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	birbirimizi	birbir	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Rcp	3	obj	_	_
3	görmek	gör	VERB	_	Case=Nom|Number=Sing|VerbForm=Vnoun	0	root	_	_
4	ti	i	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
5	.	.	PUNCT	_	_	3	punct	_	_

~~~


