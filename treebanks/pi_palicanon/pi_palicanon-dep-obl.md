---
layout: base
title:  'Statistics of obl in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="pi_palicanon-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pi_palicanon-dep-obl-goal.html">obl:goal</a></tt>.

161 nodes (8%) are attached to their parents as `obl`.

142 instances of `obl` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11801242236025.

The following 9 pairs of parts of speech are connected with `obl`: <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (69; 43% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt> (37; 23% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (29; 18% instances), <tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pi_palicanon-pos-NUM.html">NUM</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl	color:blue
1	Yo	yad	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	_
2	ciraṃ	cira	ADV	_	_	3	advmod	_	_
3	jīvati	jīvati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
4	so	tad	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
5	vassa	vassa	NOUN	_	_	6	compound:tp	_	_
6	sataṃ	sata	NOUN	_	Case=Acc|Gender=Neut|Number=Sing|NumType=Card	3	obl	_	_
7	appaṃ	appa	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	6	amod	_	_
8	vā	vā	CCONJ	_	_	7	cc	_	_
9	bhiyyo	bhiyyo	ADV	_	_	7	conj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 obl	color:blue
1	Atha	atha	ADV	_	_	7	advmod	_	_
2	kho	kho	PART	_	_	7	discourse	_	_
3	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	7	vocative	_	_
4	vipassissa	vipassin	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	7	obl	_	_
5	bodhisattassa	bodhisatta	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	appos	_	_
6	etad	etad	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj	_	SpaceAfter=No
7	ahosi	bhavati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl	color:blue
1	Kiṃ	kiṃ	PRON	_	PronType=Int	2	compound:tp	_	_
2	paccayā	paccaya	NOUN	_	Case=Abl|Gender=Masc|Number=Sing	4	obl	_	_
3	jarā	jarā	NOUN	_	_	4	compound:dv	_	_
4	maraṇan	maraṇa	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
5	ti	iti	PART	_	_	4	mark	_	_

~~~


