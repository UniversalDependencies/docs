---
layout: base
title:  'Statistics of compound:redup in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="ota_dudu-dep-compound-lvc.html">compound:lvc</a></tt>.

28 nodes (0%) are attached to their parents as `compound:redup`.

28 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.03571428571429.

The following 8 pairs of parts of speech are connected with `compound:redup`: <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (12; 43% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt> (7; 25% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (2; 7% instances), <tt><a href="ota_dudu-pos-DET.html">DET</a></tt>-<tt><a href="ota_dudu-pos-DET.html">DET</a></tt> (2; 7% instances), <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:redup	color:blue
1	ıraḳda	ıraḳ	NOUN	_	Case=Loc|Number=Sing|Person=3	4	obl	_	_
2	yaḳında	yaḳın	NOUN	_	Case=Loc|Number=Sing|Person=3	1	compound:redup	_	_
3	kim	kim	PRON	Ques	Case=Nom|Number=Sing|Person=3|PronType=Int	4	nsubj	_	_
4	varısa	var	VERB	_	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	advcl	_	_
5	bunuñ	bu	PRON	Demons	Case=Gen|Number=Sing|Person=3|PronType=Dem	6	nmod:poss	_	_
6	şerrinden	şerr	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
7	iḥtiyâṭ	iḥtiyâṭ	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	iderdi	it	VERB	_	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	compound:lvc	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:redup	color:blue
1	ve	ve	CCONJ	_	_	5	cc	_	_
2	aġır	aġır	ADJ	Adj	_	4	amod	_	_
3	aġır	aġır	ADJ	Adj	_	2	compound:redup	_	_
4	binâlara	binâ	NOUN	_	Case=Dat|Number=Plur|Person=3	5	obl	_	_
5	ṣarf	ṣarf	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	itmezlerdi	it	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	5	compound:lvc	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	maşrıḳ	maşrıḳ	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nmod	_	_
2	beginüñ	beg	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod:poss	_	_
3	adı	ad	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	ʿazâz	ʿazâz	PROPN	Pers	Case=Nom|Gender=Masc|NameType=Prs|Number=Sing|Person=3	0	root	_	_
5	idi	y	AUX	Overt	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	cop	_	_
6	ġâyetde	ġâyet	ADV	_	_	8	advmod	_	_
7	ġâyetde	ġâyet	ADV	_	_	6	compound:redup	_	_
8	bahâdur	bahâdur	ADJ	Adj	_	9	amod	_	_
9	kişi	kişi	NOUN	_	Case=Nom|Number=Sing|Person=3	4	conj	_	_
10	yidi	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	9	cop	_	_

~~~


