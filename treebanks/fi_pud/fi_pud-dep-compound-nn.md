---
layout: base
title:  'Statistics of compound:nn in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `compound:nn`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_pud-dep-compound-prt.html">compound:prt</a></tt>.

142 nodes (1%) are attached to their parents as `compound:nn`.

142 instances of `compound:nn` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8943661971831.

The following 5 pairs of parts of speech are connected with `compound:nn`: <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (70; 49% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (63; 44% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:nn	color:blue
1	Ritari	ritari	NOUN	_	Case=Nom|Number=Sing	2	compound:nn	2:compound:nn	_
2	Lyvet	Lyvet	PROPN	_	Case=Nom|Number=Sing	3	obj	3:obj	_
3	vapautettiin	vapauttaa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
4	ja	ja	CCONJ	_	_	7	cc	7:cc	_
5	hänen	hän	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	seuraajansa	seuraaja	NOUN	_	Case=Gen|Derivation=Ja|Number=Sing|Person[psor]=3	7	obj	7:obj	_
7	vangittiin	vangita	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	3	conj	3:conj	_
8	Toweriin	Tower	PROPN	_	Case=Ill|Number=Sing	7	obl	7:obl	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 compound:nn	color:blue
1	Yerba	Yerba	PROPN	_	Case=Nom|Number=Sing	4	compound:nn	4:compound:nn	_
2	Buena	Buena	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
3	Garden	Garden	PROPN	_	Case=Nom|Number=Sing	1	flat:name	1:flat:name	_
4	-puutarha	puu#tarha	NOUN	_	Case=Nom|Number=Sing	5	obj	5:obj	_
5	rakennettiin	rakentaa	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
6	1990-luvulla	1990#luku	NOUN	_	Case=Ade|Number=Sing	5	obl	5:obl	_
7	Moscone	Moscone	PROPN	_	Case=Nom|Number=Sing	11	compound:nn	11:compound:nn	_
8	North	North	PROPN	_	Case=Nom|Number=Sing	7	flat:name	7:flat:name	_
9	Convention	Convention	PROPN	_	Case=Nom|Number=Sing	7	flat:name	7:flat:name	_
10	Center	Center	PROPN	_	Case=Nom|Number=Sing	7	flat:name	7:flat:name	_
11	-keskuksen	keskus	NOUN	_	Case=Gen|Number=Sing	12	nmod:poss	12:nmod:poss	_
12	katolle	katto	NOUN	_	Case=All|Number=Sing	5	obl	5:obl	SpaceAfter=No
13	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 compound:nn	color:blue
1	Makedonian	Makedonia	PROPN	_	Case=Gen|Number=Sing	3	nmod:poss	3:nmod:poss	_
2	itäinen	itäinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	3:amod	_
3	raja	raja	NOUN	_	Case=Nom|Number=Sing	8	nsubj:cop	8:nsubj:cop	_
4	Traakian	Traakia	PROPN	_	Case=Gen|Number=Sing	3	nmod	3:nmod	_
5	kanssa	kanssa	ADP	_	AdpType=Post	4	case	4:case	_
6	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	nyt	nyt	ADV	_	_	8	advmod	8:advmod	_
8	turvattu	turvata	VERB	_	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
9	Néstos-	Néstos	NOUN	_	Case=Nom|Number=Sing	12	compound:nn	12:compound:nn	_
10	eli	eli	CCONJ	_	_	11	cc	11:cc	_
11	Mesta	Mesta	PROPN	_	Case=Nom|Number=Sing	9	conj	9:conj	SpaceAfter=No
12	-joella	joki	NOUN	_	Case=Ade|Number=Sing	8	obl	8:obl	SpaceAfter=No
13	.	.	PUNCT	_	_	8	punct	8:punct	_

~~~


