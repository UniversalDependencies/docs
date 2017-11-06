---
layout: base
title:  'Statistics of cc in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="fi_pud-dep-cc-preconj.html">cc:preconj</a></tt>.

594 nodes (4%) are attached to their parents as `cc`.

593 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1043771043771.

The following 12 pairs of parts of speech are connected with `cc`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (232; 39% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (216; 36% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (72; 12% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (33; 6% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (12; 2% instances), <tt><a href="fi_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (10; 2% instances), <tt><a href="fi_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (7; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Suunnitelma	suunnitelma	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	tuottaa	tuottaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	rahaa	raha	NOUN	_	Case=Par|Number=Sing	2	obj	_	_
4	sponsoroinnin	sponsorointi	NOUN	_	Case=Gen|Number=Sing	2	obl	_	_
5	ja	ja	CCONJ	_	_	6	cc	_	_
6	mainonnan	mainonta	NOUN	_	Case=Gen|Number=Sing	4	conj	_	_
7	kautta	kautta	ADP	_	AdpType=Post	4	case	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ja	ja	CCONJ	_	_	4	cc	_	_
2	totta	totta	ADV	_	_	4	advmod	_	_
3	kai	kai	ADV	_	_	2	fixed	_	_
4	on	olla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	Bob	Bob	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	viihteen	viihde	NOUN	_	Case=Gen|Number=Sing	9	nmod:poss	_	_
8	loputon	loputon	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	9	amod	_	_
9	lähde	lähde	NOUN	_	Case=Nom|Number=Sing	5	appos	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Kölnin	Köln	PROPN	_	Case=Gen|Number=Sing	4	nmod:poss	_	_
2	ja	ja	CCONJ	_	_	3	cc	_	_
3	Bremenin	Bremen	PROPN	_	Case=Gen|Number=Sing	1	conj	_	_
4	kaupungit	kaupunki	NOUN	_	Case=Nom|Number=Plur	5	nsubj	_	_
5	kunnioittivat	kunnioittaa	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Weissia	Weiss	PROPN	_	Case=Par|Number=Sing	5	obj	_	_
7	kirjallisuuspalkinnoilla	kirjallisuus#palkinto	NOUN	_	Case=Ade|Number=Plur	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


