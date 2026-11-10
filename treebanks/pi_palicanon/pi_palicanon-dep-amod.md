---
layout: base
title:  'Statistics of amod in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `amod`

This relation is universal.

88 nodes (4%) are attached to their parents as `amod`.

52 instances of `amod` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32954545454545.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (77; 88% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="pi_palicanon-pos-NUM.html">NUM</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
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
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 amod	color:blue
1	Sace	sace	SCONJ	_	_	6	mark	_	_
2	kho	kho	PART	_	_	6	discourse	_	_
3	pana	pana	PART	_	_	6	advmod	_	_
4	agārasmā	agāra	NOUN	_	Case=Abl|Gender=Neut|Number=Sing	6	obl	_	_
5	anagāriyaṃ	agāriya	NOUN	_	Case=Acc|Gender=Neut|Number=Sing|Polarity=Neg	6	obl	_	_
6	pabbajati	pabbajati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
7	arahaṃ	arahant	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
8	hoti	bhavati	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
9	sammā	sammā	ADV	_	_	10	compound:kd	_	_
10	sambuddho	sambuddha	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	appos	_	_
11	loke	loka	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	13	obl	_	_
12	vivaṭa	vivarati	VERB	_	_	13	compound:kd	_	_
13	cchado	chada	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	amod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 amod	color:blue
1	Atha	atha	ADV	_	_	10	advmod	_	_
2	kho	kho	PART	_	_	10	discourse	_	_
3	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	10	vocative	_	_
4	bandhumā	bandhumant	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
5	rājā	rājan	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	appos	_	_
6	vipassissa	vipassin	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	10	obl	_	_
7	kumārassa	kumāra	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	6	appos	_	_
8	tayo	ti	NUM	_	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	9	nummod	_	_
9	pāsāde	pāsāda	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	10	obj	_	_
10	kārāpesi	kārāpeti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=CauCau	0	root	_	_
11	ekaṃ	eka	NUM	_	Case=Acc|Gender=Neut|Number=Sing	9	appos	_	_
12	vassikaṃ	vassika	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	11	amod	_	_
13	ekaṃ	eka	NUM	_	Case=Acc|Gender=Neut|Number=Sing	11	conj	_	_
14	hemantikaṃ	hemantika	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	13	amod	_	_
15	ekaṃ	eka	NUM	_	Case=Acc|Gender=Neut|Number=Sing	11	conj	_	_
16	gimhikaṃ	gimhika	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	15	amod	_	_

~~~


