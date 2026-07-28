---
layout: base
title:  'Statistics of parataxis in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `parataxis`

This relation is universal.

474 nodes (2%) are attached to their parents as `parataxis`.

474 instances of `parataxis` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.26793248945148.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (356; 75% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (39; 8% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (28; 6% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (18; 4% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (16; 3% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_framenet-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_framenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_framenet-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 parataxis	color:blue
1	Kıpırda	kıpırda	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	6	parataxis	_	_
2	biraz	biraz	ADV	_	_	1	advmod	_	_
3	,	,	PUNCT	_	_	1	punct	_	_
4	Ayşe'ye	ayşe	PROPN	_	Case=Dat|Number=Sing	6	obj	_	_
5	yer	yer	NOUN	_	Case=Nom|Number=Sing	6	compound	_	_
6	aç	aç	VERB	_	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
7	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 parataxis	color:blue
1	Adam	adam	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	çok	çok	ADV	_	_	3	amod	_	_
3	bonkör	bonkör	ADJ	_	_	8	parataxis	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	her	her	DET	_	Definite=Def|PronType=Ind	6	det	_	_
6	yemekte	yemek	NOUN	_	Case=Loc|Number=Sing	8	obl	_	_
7	masrafı	masraf	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	compound	_	_
8	çekiyor	çek	VERB	_	Aspect=Prog|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 parataxis	color:blue
1	Sınıfımda	sınıf	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	obl	_	_
2	popülarite	popülarite	NOUN	_	Case=Nom|Number=Sing	3	compound	_	_
3	kazandım	kazan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	7	parataxis	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	herkesle	herkes	PRON	_	Case=Ins|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Ind	7	obl	_	_
6	aram	ara	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	7	compound	_	_
7	iyiydi	iyi	ADJ	_	Aspect=Perf|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


