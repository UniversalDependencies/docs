---
layout: base
title:  'Statistics of flat:name in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fi_ood-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fi_ood-dep-flat-foreign.html">flat:foreign</a></tt>.

158 nodes (1%) are attached to their parents as `flat:name`.

158 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4746835443038.

The following 6 pairs of parts of speech are connected with `flat:name`: <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (149; 94% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fi_ood-pos-X.html">X</a></tt>-<tt><a href="fi_ood-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	sisar	sisar	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	soittanut	soittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	käynyt	käydä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	conj	_	SpaceAfter=No
5	;	;	PUNCT	_	_	6	punct	_	_
6	jutellut	jutella	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	conj	_	_
7	S.	S.	PROPN	_	Abbr=Yes|Case=Nom|Number=Sing	6	obl	_	_
8	Timosen	Timonen	PROPN	_	Case=Gen|Number=Sing	7	flat:name	_	_
9	kanssa	kanssa	ADP	_	AdpType=Post	7	case	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:name	color:blue
1	Akti	Akti	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
2	Palace	Palace	PROPN	_	Case=Nom|Number=Sing	1	flat:name	_	_
3	Hotellissa	hotelli	NOUN	_	Case=Ine|Number=Sing	1	flat:name	_	_
4	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
5	mm	mm.	ADV	_	Abbr=Yes	1	advmod	_	SpaceAfter=No
6	:	:	PUNCT	_	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Msp	Msp	PROPN	_	Abbr=Yes|Case=Nom|Number=Sing	2	compound	_	Note=MovieStarPlanet
2	käyttäjä	käyttäjä	NOUN	_	Case=Nom|Derivation=Ja|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	_	_	4	punct	_	_
4	Tikru	Tikru	PROPN	_	Case=Nom|Number=Sing	2	appos	_	_
5	987	987	NUM	_	NumType=Card	4	flat:name	_	_
6	https://t.co/CAYwlRH5Mp	https://t.co/CAYwlRH5Mp	SYM	_	_	2	discourse	_	SpacesAfter=\n\n

~~~


