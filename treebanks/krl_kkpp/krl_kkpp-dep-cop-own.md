---
layout: base
title:  'Statistics of cop:own in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="krl_kkpp-dep-cop.html">cop</a></tt>.

5 nodes (0%) are attached to their parents as `cop:own`.

5 instances of `cop:own` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6.

The following 3 pairs of parts of speech are connected with `cop:own`: <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (3; 60% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 20% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cop:own	color:blue
1	Meilä	myö	PRON	PRON	Case=Ade|Number=Plur|Person=1|PronType=Prs	0	root	_	_
2	kaikilla	kaikki	PRON	PRON	Case=Ade|Number=Plur|PronType=Ind	1	det	_	_
3	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
4	šamat	šama	ADJ	ADJ	Case=Nom|Number=Plur	5	amod	_	_
5	proplemat	proplema	NOUN	NOUN	Case=Nom|Number=Plur	1	nsubj:cop	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop:own	color:blue
1	Muan	mua	NOUN	NOUN	Case=Gen|Number=Sing	0	root	_	_
2	tunti	tunti	NOUN	NOUN	Case=Nom|Number=Sing	1	flat:name	_	_
3	-aktijolla	-aktijo	NOUN	NOUN	Case=Ade|Number=Sing	1	compound	_	_
4	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
5	virallini	virallini	ADJ	ADJ	Case=Nom|Number=Sing	6	amod	_	_
6	saitti	saitti	NOUN	NOUN	Case=Nom|Number=Sing	3	nsubj:cop	_	_
7	60.wwf.ru/	60.wwf.ru/	NOUN	NOUN	Case=Nom|Number=Sing	6	appos	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	_
9	mistä	mi	PRON	PRON	Case=Ine|Number=Sing	12	nmod	_	PronType=Interr
10	voit	voija	AUX	AUX	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	6	acl:relcl	_	_
11	tarkemmin	tarkemmin	ADV	ADV	_	12	advmod	_	_
12	lukie	lukie	VERB	VERB	VerbForm=Inf	10	xcomp	_	_
13	šiitä	še	PRON	PRON	Case=Ela|Number=Sing|PronType=Dem	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop:own	color:blue
1	Kirilällä	Kirilä	PROPN	PROPN	Case=Ade|Number=Sing	0	root	_	PropnType=Cog
2	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	cop:own	_	_
3	šiih	še	PRON	PRON	Case=Ill|Number=Sing|PronType=Dem	4	det	_	_
4	aikah	aika	NOUN	NOUN	Case=Ill|Number=Sing	1	obl	_	_
5	nellä	n’el’l’ä	NUM	NUM	Case=Nom|Number=Sing	6	nummod	_	_
6	vuotta	vuosi	NOUN	NOUN	Case=Par|Number=Sing	1	nsubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


