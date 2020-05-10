---
layout: base
title:  'Statistics of nsubj:cop in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nsubj.html">nsubj</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:cop`.

24 instances of `nsubj:cop` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.4.

The following 10 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (7; 28% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 20% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (5; 20% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:cop	color:blue
1	Dışarda	dışarı	NOUN	_	Case=Loc|Number=Sing	4	nmod	_	_
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
2	hayvanların	hayvan	NOUN	_	Case=Gen|Number=Plur	6	obl	_	_
3	arasında	arasında	ADP	_	Number[psor]=Sing|Person[psor]=3	2	case	_	_
4	en	en	ADV	_	_	5	advmod	_	_
5	vahşisi	vahşi	NOUN	_	Case=Nom|Number=Sing	6	nsubj:cop	_	_
6	kaplan	kaplan	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
7	mış	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:cop	color:blue
1	Bir	bir	DET	_	Definite=Ind|PronType=Art	4	det	_	_
2	önemli	önemli	ADJ	_	_	4	amod	_	_
3	toplumsal	toplumsal	ADJ	_	_	4	amod	_	_
4	sorunumuz	sorun	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	7	nsubj:cop	_	_
5	da	de	ADV	_	_	4	advmod:emph	_	_
6	ailenin	aile	NOUN	_	Case=Gen|Number=Sing	7	nsubj	_	_
7	dağılması	dağıl	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|VerbForm=Vnoun	0	root	_	_
8	dır	i	AUX	_	Mood=Gen|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


