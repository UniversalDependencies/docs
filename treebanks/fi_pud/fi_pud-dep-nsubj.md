---
layout: base
title:  'Statistics of nsubj in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="fi_pud-dep-nsubj-cop.html">nsubj:cop</a></tt>.

1104 nodes (7%) are attached to their parents as `nsubj`.

1018 instances of `nsubj` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87952898550725.

The following 14 pairs of parts of speech are connected with `nsubj`: <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (496; 45% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (342; 31% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (237; 21% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (8; 1% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj	color:blue
1	Uutta	uusi	ADJ	_	Case=Par|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	varainkäyttöä	varainkäyttö	NOUN	_	Case=Par|Number=Sing	3	obj	3:obj	_
3	kiihdyttää	kiihdyttää	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	0:root	_
4	Clintonin	Clinton	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
5	muhkea	muhkea	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	pankkitili	pankki#tili	NOUN	_	Case=Nom|Number=Sing	3	nsubj	3:nsubj	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Kaikki	kaikki	PRON	_	Case=Nom|Number=Sing|PronType=Ind	3	nsubj	3:nsubj	_
2	eivät	ei	AUX	_	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	pysty	pystyä	VERB	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	jättämään	jättää	VERB	_	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	sitä	se	PRON	_	Case=Par|Number=Sing|PronType=Dem	4	obj	4:obj	_
6	omaan	oma	ADJ	_	Case=Ill|Degree=Pos|Number=Sing	7	amod	7:amod	_
7	arvoonsa	arvo	NOUN	_	Case=Ill|Number=Sing|Person[psor]=3	4	obl	4:obl	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nsubj	color:blue
1	Ja	ja	CCONJ	_	_	4	cc	4:cc	_
2	totta	totta	ADV	_	_	4	advmod	4:advmod	_
3	kai	kai	ADV	_	_	2	fixed	2:fixed	_
4	on	olla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	Bob	Bob	PROPN	_	Case=Nom|Number=Sing	4	nsubj	4:nsubj	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	9:punct	_
7	viihteen	viihde	NOUN	_	Case=Gen|Number=Sing	9	nmod:poss	9:nmod:poss	_
8	loputon	loputon	ADJ	_	Case=Nom|Degree=Pos|Derivation=Ton|Number=Sing	9	amod	9:amod	_
9	lähde	lähde	NOUN	_	Case=Nom|Number=Sing	5	appos	5:appos	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


