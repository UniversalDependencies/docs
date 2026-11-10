---
layout: base
title:  'Statistics of flat:name in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_kiparlaforest-dep-flat-foreign.html">flat:foreign</a></tt>.

50 nodes (0%) are attached to their parents as `flat:name`.

50 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt> (48; 96% instances), <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	marina	Marina	PROPN	_	_	0	root	_	Begin=300.571|KID=124-0
2	gialli	Gialli	PROPN	_	_	1	flat:name	_	End=301.59|Intonation=Falling|KID=124-1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:name	color:blue
1	mi	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	KID=931-6
2	guardo	guardare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=931-7|Prolonged=Yes
3	ormai	ormai	ADV	_	_	5	advmod	_	KID=931-8|PaceFast=Yes
4	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	5	expl	_	KID=931-9|PaceFast=Yes|SpaceAfter=No
5	ho	avere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis:parenth	_	KID=931-10|PaceFast=Yes
6	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	KID=931-11|PaceFast=Yes
7	miei	mio	DET	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	8	det:poss	_	KID=931-12|PaceFast=Yes
8	fissi	fisso	ADJ	_	Gender=Masc|Number=Plur	5	obj	_	End=1779.744|KID=931-13|PaceFast=Yes
9	carta	carta	NOUN	_	_	2	obj	_	Begin=1780.186|KID=932-0
10	bianca	bianco	ADJ	_	Gender=Fem|Number=Sing	9	flat:name	_	End=1781.388|Intonation=WeaklyRising|KID=932-1
11	con	con	ADP	_	_	13	case	_	Begin=1782.132|KID=933-0
12	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	KID=933-1
13	berlinguer	Berlinguer	PROPN	_	_	9	nmod	_	End=1783.217|Intonation=WeaklyRising|KID=933-2|OverlappingGroup=177

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat:name	color:blue
1	si	si	PRON	_	Clitic=Yes|Person=3|PronType=Prs	2	expl	_	Begin=1923.002|KID=1009-0|Volume=low
2	chiama	chiamare	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=1009-1|Volume=low
3	luca	Luca	PROPN	_	_	2	nsubj	_	KID=1009-2|OverlappingGroup=194|Volume=low
4	carbo~	carbo~	X	_	_	3	flat:name	_	ExtLemma=Carboni|ExtUPOS=PROPN|Interrupted=Yes|KID=1009-3|OverlappingGroup=194|Volume=low

~~~


