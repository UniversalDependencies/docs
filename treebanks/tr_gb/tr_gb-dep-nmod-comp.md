---
layout: base
title:  'Statistics of nmod:comp in UD_Turkish-GB'
udver: '2'
---

## Treebank Statistics: UD_Turkish-GB: Relations: `nmod:comp`

This relation is a language-specific subtype of <tt><a href="tr_gb-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="tr_gb-dep-nmod-part.html">nmod:part</a></tt>.

18 nodes (0%) are attached to their parents as `nmod:comp`.

18 instances of `nmod:comp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 5 pairs of parts of speech are connected with `nmod:comp`: <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (7; 39% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (6; 33% instances), <tt><a href="tr_gb-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_gb-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="tr_gb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_gb-pos-PROPN.html">PROPN</a></tt> (1; 6% instances), <tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_gb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:comp	color:blue
1	Bayram’ın	bayram	NOUN	_	Case=Gen|Number=Sing	2	nmod	_	_
2	ailesinin	aile	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
3	diğer	diğer	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	köylülerden	köylü	NOUN	_	Case=Abl|Number=Plur	6	nmod:comp	_	_
5	daha	daha	ADV	_	_	6	advmod	_	_
6	çok	çok	ADJ	_	_	7	amod	_	_
7	toprağı	toprak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
8	var	var	ADJ	_	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:comp	color:blue
1	Bundan	bu	PRON	_	Case=Abl|Number=Sing|Polarity=Pos|PronType=Dem	3	nmod:comp	_	_
2	daha	daha	ADV	_	_	3	advmod	_	_
3	uygun	uygun	ADJ	_	_	5	amod	_	_
4	bir	bir	DET	_	Definite=Ind|Polarity=Pos|PronType=Art	5	det	_	_
5	sözcük	sözcük	NOUN	_	Case=Nom|Number=Sing	6	obj	_	_
6	düşünemiyorum	düşün	VERB	_	Aspect=Prog|Mood=Pot|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:comp	color:blue
1	Sen	sen	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	8	nsubj	_	_
2	bu	bu	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	konu	konu	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
4	üzerinde	üzer	NOUN	_	Case=Loc|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
5	benden	ben	PRON	_	Case=Abl|Number=Sing|Person=1|PronType=Prs	7	nmod:comp	_	_
6	daha	daha	ADV	_	_	7	advmod	_	_
7	fazla	fazla	ADV	_	_	8	advmod	_	_
8	çalıştın	çalış	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


