---
layout: base
title:  'Statistics of ccomp in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `ccomp`

This relation is universal.

14 nodes (1%) are attached to their parents as `ccomp`.

11 instances of `ccomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.6428571428571.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt> (9; 64% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 ccomp	color:blue
1	Dhammatā	dhammatā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	esā	etad	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	nsubj	_	_
3	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	1	vocative	_	_
4	yadā	yadā	ADV	_	PronType=Rel	11	advmod	_	_
5	bodhisatto	bodhisatta	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
6	tusitā	tusita	ADJ	_	Case=Abl|Gender=Masc|Number=Sing	7	amod	_	_
7	kāyā	kāya	NOUN	_	Case=Abl|Gender=Masc|Number=Sing	8	obl	_	_
8	cavitvā	cavati	VERB	_	VerbForm=Conv	11	advcl	_	_
9	mātu	mātar	NOUN	_	_	10	compound:tp	_	_
10	kucchiṃ	kucchi	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	11	obl:goal	_	_
11	okkamati	okkamati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 ccomp	color:blue
1	Dhammatā	dhammatā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	esā	etad	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	nsubj	_	_
3	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	1	vocative	_	_
4	yadā	yadā	ADV	_	_	8	advmod	_	_
5	bodhisatto	bodhisatta	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
6	mātu	mātar	NOUN	_	_	7	compound:tp	_	_
7	kucchiṃ	kucchi	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obl:goal	_	_
8	okkanto	okkamati	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	10	advcl	_	_
9	hoti	bhavati	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
10	lābhinī	lābhinī	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	1	ccomp	_	_
11	bodhisatta	bodhisatta	NOUN	_	_	12	compound:tp	_	_
12	mātā	mātar	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
13	hoti	bhavati	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
14	pañcannaṃ	pañca	NUM	_	Case=Gen|Gender=Masc|Number=Plur|NumType=Card	16	nummod	_	_
15	kāma	kāma	NOUN	_	_	16	compound:tp	_	_
16	guṇānaṃ	guṇa	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	10	obl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 ccomp	color:blue
1	Nirodho	nirodha	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	ccomp	_	_
2	nirodho	nirodha	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	12	ccomp	_	SpaceAfter=No
3	ti	iti	PART	_	_	1	mark	_	_
4	kho	kho	PART	_	_	12	discourse	_	_
5	bhikkhave	bhikkhu	NOUN	_	Case=Voc|Gender=Masc|Number=Plur	12	vocative	_	_
6	vipassissa	vipassin	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	12	obl	_	_
7	bodhisattassa	bodhisatta	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	6	appos	_	_
8	pubbe	pubba	ADJ	_	Case=Loc|Number=Sing	9	obl	_	_
9	ananussutesu	anussavati	VERB	_	Case=Loc|Gender=Masc|Number=Plur|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Pass	10	acl	_	_
10	dhammesu	dhamma	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	12	obl	_	_
11	cakkhuṃ	cakkhu	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	12	nsubj	_	_
12	udapādi	uppajjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
13	ñāṇaṃ	ñāṇa	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	14	nsubj	_	_
14	udapādi	uppajjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
15	paññā	paññā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	_
16	udapādi	uppajjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
17	vijjā	vijjā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	18	nsubj	_	_
18	udapādi	uppajjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
19	āloko	āloka	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	20	nsubj	_	_
20	udapādi	uppajjati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_

~~~


