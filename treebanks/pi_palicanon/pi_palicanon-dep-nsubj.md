---
layout: base
title:  'Statistics of nsubj in UD_Pali-PaliCanon'
udver: '2'
---

## Treebank Statistics: UD_Pali-PaliCanon: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="pi_palicanon-dep-nsubj-pass.html">nsubj:pass</a></tt>.

232 nodes (11%) are attached to their parents as `nsubj`.

190 instances of `nsubj` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.94396551724138.

The following 12 pairs of parts of speech are connected with `nsubj`: <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (114; 49% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (30; 13% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (27; 12% instances), <tt><a href="pi_palicanon-pos-VERB.html">VERB</a></tt>-<tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt> (25; 11% instances), <tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt> (7; 3% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="pi_palicanon-pos-NUM.html">NUM</a></tt>-<tt><a href="pi_palicanon-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="pi_palicanon-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pi_palicanon-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pi_palicanon-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	Eko	eka	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	3	nummod	_	_
2	sāvakānaṃ	sāvaka	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	_
3	sannipāto	sannipāta	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	ahosi	bhavati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	aṭṭhasaṭṭhi	aṭṭhasaṭṭhi	NUM	_	NumType=Card	6	compound:dg	_	_
6	bhikkhu	bhikkhu	NOUN	_	_	7	compound:tp	_	_
7	sata	sata	NUM	_	NumType=Card	8	compound:dg	_	_
8	sahassaṃ	sahassa	NUM	_	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	4	xcomp	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Ayam	idaṃ	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	nsubj	_	SpaceAfter=No
2	ettha	ettha	ADV	_	_	3	advmod	_	_
3	dhammatā	dhammatā	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_

~~~


