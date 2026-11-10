---
layout: base
title:  'Statistics of obl:lmod in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="pra_dipi-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="pra_dipi-dep-obl-tmod.html">obl:tmod</a></tt>.

11 nodes (1%) are attached to their parents as `obl:lmod`.

11 instances of `obl:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.54545454545455.

The following 3 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (9; 82% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:lmod	color:blue
1	bahukaṃ	bahuka	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	Gloss=much
2	hi	hi	PART	_	_	5	discourse	_	Gloss=for
3	dosaṃ	dosa	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	Gloss=evil
4	samājamhi	samāja	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	5	obl:lmod	_	Gloss=in-festival-meetings
5	pasati	pasa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=sees
6	devānaṃ	deva	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	Gloss=of-the-Gods
7	priyo	priya	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	10	nmod:desc	_	Gloss=beloved
8	priya	priya	ADJ	_	Compound=Yes|Gender=Masc	9	amod	_	Gloss=friendly
9	dasi	dasin	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	10	nmod:desc	_	Gloss=looking
10	rājā	rājan	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Gloss=king

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:lmod	color:blue
1	te	so	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	4	nsubj	_	_
2	sava	sava	ADJ	_	Compound=Yes	3	amod	_	_
3	pāsaṃḍesu	pāsaṃḍa	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	4	obl:lmod	_	_
4	vyāpatā	vyāpata	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
5	dhāma	dhāma	NOUN	_	Compound=Yes|Gender=Masc	6	compound	_	_
6	adhisṭānāya	adhisṭāna	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	4	obl	_	_
7	...	...	PUNCT	_	_	6	punct	_	_
8	dhamma	dhamma	NOUN	_	Compound=Yes|Gender=Masc	9	compound	_	Orig=[dha]mma
9	yutasa	yuta	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	6	conj	_	_
10	ca	ca	CCONJ	_	_	9	cc	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 1 obl:lmod	color:blue
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


