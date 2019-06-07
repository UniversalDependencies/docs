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
Average distance between parent and child is 1.50385604113111.

The following 8 pairs of parts of speech are connected with `flat:name`: <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (366; 94% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (4; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-X.html">X</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Mietin	miettiä	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	myös	myös	ADV	_	_	1	advmod	1:advmod	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	5:punct	_
4	oliko	olla	AUX	_	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop:own	5:cop:own	_
5	Davis	Davis	PROPN	_	Case=Nom|Number=Sing	1	ccomp	1:ccomp	_
6	Cupilla	Cup	PROPN	_	Case=Ade|Number=Sing	5	flat:name	5:flat:name	_
7	jonkinlainen	jonkinlainen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Lainen|Number=Sing	8	amod	8:amod	_
8	osa	osa	NOUN	_	Case=Nom|Number=Sing	5	nsubj:cop	5:nsubj:cop	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	_	Case=Nom|Derivation=Inen|Number=Sing|NumType=Ord	2	amod	2:amod	_
2	kuningas	kuningas	NOUN	_	Case=Nom|Number=Sing	4	nsubj:cop	4:nsubj:cop	_
3	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
4	Mojmír	Mojmír	PROPN	_	Case=Nom|Number=Sing	0	root	0:root	_
5	I	I	ADJ	_	NumType=Ord	4	flat:name	4:flat:name	_
6	(	(	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
7	hallitsi	hallita	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	parataxis	4:parataxis	_
8	830	830	NUM	_	NumType=Card	10	compound	10:compound	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	10:punct	SpaceAfter=No
10	846	846	NUM	_	NumType=Card	7	obl	7:obl	SpaceAfter=No
11	)	)	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 flat:name	color:blue
1	Nicolai	Nicolai	PROPN	_	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	teki	tehdä	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	yhteistyötä	yhteis#työ	NOUN	_	Case=Par|Number=Sing	2	obj	2:obj	_
4	Morriconen	Morricone	PROPN	_	Case=Gen|Number=Sing	2	obl	2:obl	_
5	kanssa	kanssa	ADP	_	AdpType=Post	4	case	4:case	_
6	eri	eri	ADJ	_	_	7	amod	7:amod	_
7	elokuvien	elo#kuva	NOUN	_	Case=Gen|Number=Plur	8	nmod:poss	8:nmod:poss	_
8	musiikeissa	musiikki	NOUN	_	Case=Ine|Number=Plur	2	obl	2:obl	SpaceAfter=No
9	,	,	PUNCT	_	_	17	punct	17:punct	_
10	kuten	kuten	ADV	_	_	17	advmod	17:advmod	_
11	Metti	Metti	PROPN	_	Case=Nom|Number=Sing	17	compound:nn	17:compound:nn	SpaceAfter=No
12	,	,	PUNCT	_	_	11	punct	11:punct	_
13	una	una	X	_	Foreign=Yes	11	flat:name	11:flat:name	_
14	sera	sera	X	_	Foreign=Yes	11	flat:name	11:flat:name	_
15	a	a	X	_	Foreign=Yes	11	flat:name	11:flat:name	_
16	cena	cena	X	_	Foreign=Yes	11	flat:name	11:flat:name	_
17	-elokuvassa	elo#kuva	NOUN	_	Case=Ine|Number=Sing	8	appos	8:appos	SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	2:punct	_
19	Jotkut	joku	PRON	_	Case=Nom|Number=Plur|PronType=Ind	22	obj	22:obj	_
20	musiikeista	musiikki	NOUN	_	Case=Ela|Number=Plur	19	nmod	19:nmod	_
21	he	hän	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	22	nsubj	22:nsubj	_
22	kirjoittivat	kirjoittaa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	parataxis	2:parataxis	_
23	yhdessä	yhdessä	ADV	_	_	22	advmod	22:advmod	SpaceAfter=No
24	.	.	PUNCT	_	_	22	punct	22:punct	_

~~~


