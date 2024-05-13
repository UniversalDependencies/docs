---
layout: base
title:  'Statistics of cop:own in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-cop.html">cop</a></tt>.

49 nodes (0%) are attached to their parents as `cop:own`.

48 instances of `cop:own` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30612244897959.

The following 4 pairs of parts of speech are connected with `cop:own`: <tt><a href="fi_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (26; 53% instances), <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (17; 35% instances), <tt><a href="fi_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (5; 10% instances), <tt><a href="fi_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop:own	color:blue
1	Heillä	hän	PRON	_	Case=Ade|Number=Plur|Person=3|PronType=Prs	0	root	0:root	_
2	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	1:cop:own	_
3	yksi	yksi	NUM	_	Case=Nom|Number=Sing|NumType=Card	4	nummod	4:nummod	_
4	yritys	yritys	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	_
5	pelastua	pelastua	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	acl	4:acl	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	8:punct	_
7	Englannin	Englanti	PROPN	_	Case=Gen|Number=Sing	8	nmod:gobj	8:nmod:gobj	_
8	voittaminen	voittaminen	NOUN	_	Case=Nom|Derivation=Minen|Number=Sing	4	appos	4:appos	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop:own	color:blue
1	Ranskalla	ranska	NOUN	_	Case=Ade|Number=Sing	0	root	0:root	_
2	ei	ei	AUX	_	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	1	aux	1:aux	_
3	ole	olla	AUX	_	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop:own	1:cop:own	_
4	hyvä	hyvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	5:amod	_
5	maine	maine	NOUN	_	Case=Nom|Number=Sing	1	nsubj:cop	1:nsubj:cop	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop:own	color:blue
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


