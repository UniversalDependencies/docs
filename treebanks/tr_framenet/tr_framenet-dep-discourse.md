---
layout: base
title:  'Statistics of discourse in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `discourse`

This relation is universal.

45 nodes (0%) are attached to their parents as `discourse`.

37 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.15555555555556.

The following 16 pairs of parts of speech are connected with `discourse`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-INTJ.html">INTJ</a></tt> (7; 16% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (6; 13% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (6; 13% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (5; 11% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (3; 7% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-INTJ.html">INTJ</a></tt> (2; 4% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (2; 4% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Eyvah	eyvah	INTJ	_	_	3	discourse	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	dedi	de	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
4	panikle	panik	NOUN	_	Case=Ins|Number=Sing	3	nmod	_	_
5	,	,	PUNCT	_	_	3	punct	_	_
6	cüzdanımı	cüzdan	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1	8	obj	_	_
7	evde	ev	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
8	unuttum	unut	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	3	ccomp	_	_
9	!	!	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	Bütün	bütün	ADJ	_	_	3	amod	_	_
2	bu	bu	DET	_	Definite=Def|PronType=Dem	3	det	_	_
3	projeler	proje	NOUN	_	Case=Nom|Number=Plur	4	nmod	_	_
4	süresince	süresince	ADV	_	_	6	advcl	_	_
5	israfa	israf	NOUN	_	Case=Dat|Number=Sing	6	compound	_	_
6	kaçma	kaç	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	0	root	_	_
7	lütfen	lütfen	ADV	_	_	6	discourse	_	_
8	mümkünse	mümkün	ADJ	_	Number=Sing|Person=3	6	advcl	_	_
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse	color:blue
1	Aslına	asıl	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	compound	_	_
2	bakılırsa	bak	VERB	_	Evident=Fh|Mood=CndGen|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Pass	8	discourse	_	_
3	aktör	aktör	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
4	olmayı	ol	VERB	_	Case=Acc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	6	ccomp	_	_
5	rüyasında	rüya	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obl	_	_
6	görse	gör	VERB	_	Evident=Fh|Mood=Des|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	8	advcl	_	_
7	hayra	hayra	NOUN	_	Case=Nom|Number=Sing	8	compound	_	_
8	yormazdı	yor	VERB	_	Aspect=Hab|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


