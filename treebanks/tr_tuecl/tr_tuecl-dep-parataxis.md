---
layout: base
title:  'Statistics of parataxis in UD_Turkish-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Turkish-TueCL: Relations: `parataxis`

This relation is universal.

5 nodes (1%) are attached to their parents as `parataxis`.

5 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.4.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="tr_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_tuecl-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 parataxis	color:blue
1	Sana	sen	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	4	obl	_	_
2	bunu	bu	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
3	hep	hep	ADV	_	_	4	advmod	_	_
4	söylüyorum	söyle	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	sabahları	sabah	NOUN	_	Case=Acc|Number[psor]=Sing|Person[psor]=3	9	obl:tmod	_	_
7	arkadaşınla	arkadaş	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=2	9	obl	_	_
8	telefonda	telefon	NOUN	_	Case=Loc|Number=Sing	9	obl	_	_
9	konuşurken	konuş	VERB	_	Aspect=Imp|Mood=Ind|VerbForm=Conv	11	advcl	_	_
10	benden	ben	PRON	_	Case=Abl|Number=Sing|Person=1|PronType=Prs	11	obl	_	_
11	bahsetme	bahset	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	4	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis	color:blue
1	Sude	Sude	PROPN	_	Case=Nom|Number=Sing	6	nsubj	_	_
2	üç	üç	NUM	_	NumType=Card	3	nummod	_	_
3	saat	saat	ADV	_	Case=Nom	6	advmod	_	_
4	tir	i	AUX	_	Mood=Gen|Number=Sing|Person=3	3	cop	_	_
5	ofiste	ofis	NOUN	_	Case=Loc|Number=Sing	6	obl	_	_
6	yok	yok	ADJ	_	Polarity=Neg	0	root	_	_
7	muş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	,	,	PUNCT	_	_	6	punct	_	_
9	Ayşe	Ayşe	PROPN	_	Case=Nom|Number=Sing	11	nsubj	_	_
10	de	de	ADV	_	_	9	advmod:emph	_	_
11	evde	ev	NOUN	_	Case=Loc|Number=Sing	6	parataxis	_	_
12	değil	değil	AUX	_	Case=Nom|Number=Sing|Polarity=Neg	11	aux	_	_
13	miş	i	AUX	_	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	cop	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	2	nmod:poss	_	_
2	mavisi	mavi	ADJ	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nsubj	_	_
3	daha	daha	ADV	_	_	4	advmod	_	_
4	güzel	güzel	ADJ	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	bana	ben	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	8	obl	_	_
7	maviyi	mavi	ADJ	_	Case=Acc|Number=Sing	8	obj	_	_
8	verir	ver	VERB	_	Aspect=Hab|Evident=Fh|Mood=Gen|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
9	misin	mi	AUX	_	Number=Sing|Person=2|Tense=Pres	8	aux:q	_	SpaceAfter=No
10	?	?	PUNCT	_	_	4	punct	_	_

~~~


