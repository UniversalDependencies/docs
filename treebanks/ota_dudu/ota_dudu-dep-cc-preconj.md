---
layout: base
title:  'Statistics of cc:preconj in UD_Ottoman_Turkish-DUDU'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-DUDU: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="ota_dudu-dep-cc.html">cc</a></tt>.

43 nodes (0%) are attached to their parents as `cc:preconj`.

43 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16279069767442.

The following 7 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="ota_dudu-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (16; 37% instances), <tt><a href="ota_dudu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (15; 35% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (6; 14% instances), <tt><a href="ota_dudu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="ota_dudu-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt>-<tt><a href="ota_dudu-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="ota_dudu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ota_dudu-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	ne	ne	CCONJ	Ques	_	2	cc:preconj	_	_
2	dönerler	dön	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	giderler	git	VERB	_	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	conj	_	_
4	ne	ne	CCONJ	Ques	_	8	cc:preconj	_	_
5	mücāb	mücāb	ADV	_	_	8	advmod	_	_
6	u	ve	CCONJ	_	_	7	cc	_	_
7	mülzem	mülzem	ADV	_	_	5	conj	_	_
8	olurlar	ol	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	2	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	bir	bir	DET	Indef	Definite=Ind|PronType=Art	2	det	_	_
2	ferd	ferd	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	yoḳ	yoḳ	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Neg	0	root	_	_
4	ne	ne	CCONJ	Ques	_	5	cc:preconj	_	_
5	müsāfir	müsāfir	NOUN	_	Case=Nom|Number=Sing|Person=3	6	nsubj	_	_
6	var	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Pos	3	conj	_	_
7	ve	ve	CCONJ	_	_	9	cc	_	_
8	ne	ne	CCONJ	Ques	_	9	cc:preconj	_	_
9	ġayrı	ġayrı	ADJ	_	_	5	conj	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	gördi	gör	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
2	ki	ki	SCONJ	_	_	5	mark	_	_
3	ne	ne	CCONJ	Ques	_	4	cc:preconj	_	_
4	ʿable	ʿable	PROPN	Pers	Case=Nom|Gender=Fem|NameType=Prs|Number=Sing|Person=3	5	nsubj	_	_
5	var	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Pos	1	ccomp	_	_
6	ne	ne	CCONJ	Ques	_	7	cc:preconj	_	_
7	rābiʿa	rābiʿa	PROPN	Pers	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	conj	_	_

~~~


