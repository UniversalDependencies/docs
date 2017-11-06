---
layout: base
title:  'Statistics of flat:name in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="fi_pud-dep-flat-foreign.html">flat:foreign</a></tt>.

389 nodes (2%) are attached to their parents as `flat:name`.

389 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.50642673521851.

The following 8 pairs of parts of speech are connected with `flat:name`: <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (358; 92% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Mietin	miettiä	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	myös	myös	ADV	_	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	oliko	olla	AUX	_	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop:own	_	_
5	Davis	Davis	PROPN	_	Case=Nom|Number=Sing	1	ccomp	_	_
6	Cupilla	Cup	PROPN	_	Case=Ade|Number=Sing	5	flat:name	_	_
7	jonkinlainen	jonkinlainen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Lainen|Number=Sing	8	amod	_	_
8	osa	osa	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat:name	color:blue
1	Sen	se	PRON	_	Case=Gen|Number=Sing|PronType=Dem	4	obl	_	_
2	jälkeen	jälkeen	ADP	_	AdpType=Post	1	case	_	_
3	hän	hän	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	työskenteli	työskennellä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	neljä	neljä	NUM	_	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	vuotta	vuosi	NOUN	_	Case=Par|Number=Sing	4	obl	_	_
7	BBC	BBC	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	10	compound:nn	_	_
8	World	World	PROPN	_	Case=Nom|Number=Sing	7	flat:name	_	_
9	Service	Service	PROPN	_	Case=Nom|Number=Sing	7	flat:name	_	_
10	-radiossa	radio	NOUN	_	Case=Ine|Number=Sing	4	obl	_	_
11	Bush	Bush	PROPN	_	Case=Nom|Number=Sing	4	obl	_	_
12	Housessa	House	PROPN	_	Case=Ine|Number=Sing	11	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	nummod	_	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	_	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	_	_
6	(	(	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	_	_
8	830	830	NUM	_	NumType=Card	9	compound	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	compound	_	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	_	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


