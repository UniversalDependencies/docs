---
layout: base
title:  'Statistics of obl in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="pra_dipi-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="pra_dipi-dep-obl-tmod.html">obl:tmod</a></tt>.

35 nodes (4%) are attached to their parents as `obl`.

18 instances of `obl` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (23; 66% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (6; 17% instances), <tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (3; 9% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl	color:blue
1	sarvata	sarvata	ADV	_	AdvType=Loc	14	advmod:lmod	_	_
2	vijite	vijita	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	1	obl	_	_
3	mama	aham	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	nmod	_	_
4	yutā	yuta	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	14	obj	_	_
5	ca	ca	CCONJ	_	_	4	cc	_	_
6	rājūke	rājūka	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	_
7	ca	ca	CCONJ	_	_	6	cc	_	_
8	prādesike	prādesika	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	_
9	ca	ca	CCONJ	_	_	8	cc	_	_
10	paṃcasu	paṃca	NUM	_	Case=Loc|Gender=Masc|Number=Plur|NumType=Card	12	nummod	_	_
11	paṃcasu	paṃca	NUM	_	Case=Loc|Gender=Masc|Number=Plur|NumType=Card	10	compound:redup	_	_
12	vāsesu	vāsa	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	14	obl:tmod	_	_
13	anusaṃyānaṃ	anusaṃyāna	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	14	obl:lmod	_	Orig=anusaṃy[ā]na[ṃ]
14	niyātu	niyā	VERB	_	Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Orig=[n]iyātu
15	etāya	etad	PRON	_	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	_
16	eva	eva	PART	_	_	15	advmod:emph	_	_
17	athāya	atha	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	14	obl	_	_
18	imāya	idam	PRON	_	Case=Dat|Gender=Fem|Number=Sing|PronType=Dem	20	det	_	_
19	dhaṃma	dhaṃma	NOUN	_	Compound=Yes|Gender=Masc	20	nmod	_	_
20	anusastiya	anusasti	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	17	appos	_	_
21	yathā	yathā	PART	_	_	24	cc	_	_
22	añāya	aña	PRON	_	Case=Dat|Gender=Neut|Number=Sing|PronType=Ind	24	det	_	Gloss=other
23	pi	pi	ADV	_	_	22	discourse	_	_
24	kaṃmāya	kaṃma	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	20	conj	_	Orig=kaṃmāy[a]

~~~


