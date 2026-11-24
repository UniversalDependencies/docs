---
layout: base
title:  'Statistics of appos in UD_Manchu-GDUD'
udver: '2'
---

## Treebank Statistics: UD_Manchu-GDUD: Relations: `appos`

This relation is universal.

4 nodes (1%) are attached to their parents as `appos`.

4 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="mnc_gdud-pos-NUM.html">NUM</a></tt>-<tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="mnc_gdud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="mnc_gdud-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	ilan	ilan	NUM	_	NumType=Card	4	nmod	_	_
2	ubu	ubu	NOUN	_	_	1	appos	_	_
3	ci	ci	ADP	_	_	1	case	_	_
4	emu	emu	NUM	_	NumType=Card	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	hūwangheo	hūwangheo	NOUN	_	_	4	nsubj	_	_
2	beye	beye	PRON	_	PronType=Prs|Reflex=Yes	1	appos	_	_
3	nimala	nimala	NOUN	_	_	4	obj	_	_
4	fata-mbihebi	fata	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	Aspect=Freq

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 appos	color:blue
1	meni	meni	PRON	_	Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	eme	eme	NOUN	_	_	5	nsubj	_	_
3	oci	oci	PART	_	_	2	discourse	_	_
4	mafa	mafa	ADJ	_	Degree=Pos	5	amod	_	_
5	gurun	gurun	NOUN	_	_	0	root	_	_
6	jungg’o	jungg’o	PROPN	_	_	5	appos	_	_

~~~


