---
layout: base
title:  'Statistics of compound in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="tr_gb-dep-compound-redup.html">compound:redup</a></tt>.

265 nodes (2%) are attached to their parents as `compound`.

257 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27924528301887.

The following 12 pairs of parts of speech are connected with `compound`: <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (144; 54% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (68; 26% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt> (31; 12% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_gb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_gb-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Konuşmamda	konuş	VERB	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1|VerbForm=Vnoun	3	advcl	_	_
2	ısrar	ısrar	NOUN	_	Case=Nom	3	compound	_	_
3	etti	et	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
4	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 compound	color:blue
1	Her	her	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	yıl	yıl	NOUN	_	Case=Nom|Number=Sing	11	obl:tmod	_	_
3	bu	bu	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	kentte	kent	NOUN	_	Case=Loc|Number=Sing	11	obl	_	_
5	iki	iki	NUM	_	NumType=Card	8	compound	_	_
6	bin	bin	NUM	_	NumType=Card	8	compound	_	_
7	beş	beş	NUM	_	NumType=Card	8	compound	_	_
8	yüz	yüz	NUM	_	NumType=Card	10	nummod	_	_
9	yeni	yeni	ADJ	_	_	10	amod	_	_
10	bina	bina	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
11	yapılıyor	yap	VERB	_	Aspect=Prog|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Allahtan	Allah	PROPN	_	Case=Abl|Number=Sing	5	discourse	_	_
2	kimseyi	kimse	PRON	_	Case=Acc|Number=Sing|PronType=Prs	5	obj	_	_
3	ölüme	ölüm	NOUN	_	Case=Dat|Number=Sing	5	obl	_	_
4	mahkum	mahkum	ADJ	_	_	5	compound	_	_
5	etmediler	et	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


