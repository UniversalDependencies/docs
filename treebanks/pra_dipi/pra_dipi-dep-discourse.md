---
layout: base
title:  'Statistics of discourse in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `discourse`

This relation is universal.

16 nodes (2%) are attached to their parents as `discourse`.

12 instances of `discourse` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9375.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="pra_dipi-pos-PRON.html">PRON</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (4; 25% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (3; 19% instances), <tt><a href="pra_dipi-pos-DET.html">DET</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="pra_dipi-pos-PRON.html">PRON</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (2; 13% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (2; 13% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (1; 6% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-CCONJ.html">CCONJ</a></tt> (1; 6% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-PART.html">PART</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 discourse	color:blue
1	Pāṭalipute	Pāṭaliputa	PROPN	_	Case=Loc|Gender=Masc|Number=Sing	13	obl:lmod	_	_
2	ca	ca	CCONJ	_	_	1	cc	_	_
3	bāhirasu	bāhira	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	1	conj	_	_
4	ca	ca	CCONJ	_	_	3	cc	_	_
5	...	...	PUNCT	_	_	1	punct	_	_
6	ye	yo	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	1	conj	_	Orig=[y]e
7	vā	vā	CCONJ	_	_	6	cc	_	_
8	pi	pi	ADV	_	_	6	discourse	_	_
9	me	ahaṃ	PRON	_	Case=Dat|Number=Plur|PronType=Prs	11	nmod	_	_
10	añe	aña	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	11	amod	_	_
11	ñātikā	ñātika	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	acl:relcl	_	_
12	sarvata	sarvata	ADV	_	AdvType=Loc	13	advmod:lmod	_	_
13	vyāpatā	vyāpata	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
14	te	so	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	13	nsubj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	parisā	parisad	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
2	pi	pi	ADV	_	_	1	discourse	_	_
3	yute	yuta	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	_
4	āñapayisati	āñā	VERB	_	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
5	gaṇanāyaṃ	gaṇa	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	_
6	hetuto	hetuto	ADV	_	AdvType=Man	5	advmod	_	_
7	ca	ca	CCONJ	_	_	6	cc	_	_
8	vyaṃjanato	vyaṃjanato	ADV	_	AdvType=Man	6	conj	_	_
9	ca	ca	CCONJ	_	_	8	cc	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	ete	eta	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	4	det	_	Gloss=these
2	pi	pi	ADV	_	_	1	discourse	_	Gloss=even
3	trī	tri	NUM	_	Case=Nom|Gender=Masc|NumType=Card	4	nummod	_	Gloss=three
4	prāṇā	prāṇa	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	Gloss=animals
5	pachā	pachā	ADV	_	AdvType=Tim	7	advmod:tmod	_	Gloss=in-future
6	na	na	PART	_	Polarity=Neg	7	advmod:neg	_	Gloss=not
7	ārabhisare	ārabha	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	Gloss=shall-be-killed

~~~


