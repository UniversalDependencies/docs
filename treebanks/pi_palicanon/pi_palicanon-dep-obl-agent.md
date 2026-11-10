---
layout: base
title:  'Statistics of obl:agent in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="pi_palicanon-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pi_palicanon-dep-obl-goal.html">obl:goal</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 obl:agent	color:blue
1	Anatikkamanīyā	atikkamati	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Polarity=Neg|Tense=Fut|VerbForm=Part|Voice=Pass	0	root	_	_
2	ca	ca	CCONJ	_	_	1	cc	_	_
3	bodhisatta	bodhisatta	NOUN	_	_	4	compound:tp	_	_
4	mātā	mātar	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	nsubj:pass	_	_
5	hoti	bhavati	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	_
6	kenaci	kiñci	DET	_	Case=Ins|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	purisena	purisa	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	obl:agent	_	_
8	ratta	rajjati	VERB	_	Tense=Past|VerbForm=Part	9	compound:bv	_	_
9	cittena	citta	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	7	amod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:agent	color:blue
1	Adhigato	adhigacchati	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	kho	kho	PART	_	_	1	discourse	_	_
3	my	ahaṃ	PRON	_	Case=Ins|Number=Sing|Person=1|PronType=Prs	1	obl:agent	_	SpaceAfter=No
4	āyaṃ	idaṃ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	maggo	magga	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	nsubj	_	_
6	sambodhāya	sambodha	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	5	nmod	_	_
7	yad	yad	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	nsubj	_	SpaceAfter=No
8	idaṃ	idaṃ	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	acl:relcl	_	_

~~~


