---
layout: base
title:  'Statistics of obj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `obj`

This relation is universal.

923 nodes (6%) are attached to their parents as `obj`.

680 instances of `obj` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99783315276273.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (707; 77% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (129; 14% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (66; 7% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Uutta	uusi	ADJ	_	Case=Par|Degree=Pos|Number=Sing	2	amod	_	_
2	varainkäyttöä	varainkäyttö	NOUN	_	Case=Par|Number=Sing	3	obj	_	_
3	kiihdyttää	kiihdyttää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
4	Clintonin	Clinton	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	_	_
5	muhkea	muhkea	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	pankkitili	pankki#tili	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Häntä	hän	PRON	_	Case=Par|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	syytetään	syyttää	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	myös	myös	ADV	_	_	7	advmod	_	_
4	kaksivuotiaan	kaksivuotias	ADJ	_	Case=Gen|Degree=Pos|Number=Sing	5	amod	_	_
5	tyttärensä	tytär	NOUN	_	Case=Gen|Number=Sing|Person[psor]=3	6	nmod:gobj	_	_
6	tapon	tappo	NOUN	_	Case=Gen|Number=Sing	7	nmod:gobj	_	_
7	yrityksestä	yritys	NOUN	_	Case=Ela|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj	color:blue
1	30.	30.	ADJ	_	NumType=Ord	5	obl	_	_
2	elokuuta	elo#kuu	NOUN	_	Case=Par|Number=Sing	1	flat	_	_
3	2015	2015	NUM	_	NumType=Card	1	flat	_	_
4	ankka-armeija	ankka#armeija	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	_
5	valtasi	vallata	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Internetin	Internet	PROPN	_	Case=Gen|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


