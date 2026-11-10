---
layout: base
title:  'Statistics of conj in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `conj`

This relation is universal.

79 nodes (8%) are attached to their parents as `conj`.

79 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.9620253164557.

The following 10 pairs of parts of speech are connected with `conj`: <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (46; 58% instances), <tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt> (14; 18% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pra_dipi-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt>-<tt><a href="pra_dipi-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pra_dipi-pos-VERB.html">VERB</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	ta	ta	ADV	_	_	8	advmod	_	Orig=[ta]
2	imamhi	idam	PRON	_	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	_
3	athamhi	atha	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	_
4	vadhī	vadhi	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	Orig=[va]dhī
5	ca	ca	CCONJ	_	_	4	cc	_	_
6	ahīnī	ahīni	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	conj	_	_
7	ca	ca	CCONJ	_	_	6	cc	_	_
8	sādhu	sādhu	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 conj	color:blue
1	Yoṇa	Yoṇa	PROPN	_	Compound=Yes|Gender=Masc	12	nmod	_	_
2	Kaṃboja	Kaṃboja	PROPN	_	Compound=Yes|Gender=Masc	1	conj	_	Orig=K[a]ṃbo[ja]
3	Gaṃdhārānaṃ	Gaṃdhāra	PROPN	_	Case=Gen|Gender=Masc|Number=Plur	2	conj	_	_
4	Risṭika	Risṭika	PROPN	_	Compound=Yes|Gender=Masc	3	conj	_	_
5	Peteṇikānaṃ	Peteṇika	PROPN	_	Case=Gen|Gender=Masc|Number=Plur	4	conj	_	Orig=P[e]teṇikānaṃ
6	ye	yo	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	conj	_	_
7	vā	vā	CCONJ	_	_	6	cc	_	_
8	pi	pi	ADV	_	_	6	discourse	_	_
9	aṃñe	aṃña	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	10	amod	_	Orig=a[ṃ]ñ[e]
10	āparātā	aparāta	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	6	acl:relcl	_	Orig=[ā]parātā
11	bhata	bhata	NOUN	_	Compound=Yes|Gender=Masc	19	obl	_	_
12	mayesu	maya	NOUN	_	Case=Loc|Gender=Masc|Number=Plur	11	conj	_	_
13	vā	vā	CCONJ	_	_	12	cc	_	_
14	...	...	PUNCT	_	_	12	punct	_	_
15	sukhāya	sukha	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	19	obl	_	Orig=[su]khā[ya]
16	dhaṃma	dhaṃma	NOUN	_	Compound=Yes|Gender=Masc	17	compound	_	Orig=[dhaṃma]
17	yutānaṃ	yuta	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	19	obl	_	_
18	aparigodhāya	aparigodha	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	19	obl	_	Orig=apar[i]godhāya
19	vyāpatā	vyāpata	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	0	root	_	_
20	te	so	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	19	nsubj	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 conj	color:blue
1	ośaḍhani	ośaḍha	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	10	nsubj	_	Orig=[o]śa[ḍha]ni
2	manuśa	manuśa	NOUN	_	Compound=Yes|Gender=Masc	3	nmod	_	_
3	upakani	upaka	ADJ	_	Case=Nom|Gender=Neut|Number=Plur	1	amod	_	_
4	ca	ca	CCONJ	_	_	3	cc	_	_
5	paśu	paśu	NOUN	_	Compound=Yes|Gender=Masc	6	nmod	_	_
6	upakani	upaka	ADJ	_	Case=Nom|Gender=Neut|Number=Plur	3	conj	_	_
7	ca	ca	CCONJ	_	_	6	cc	_	_
8	yatra	yatra	SCONJ	_	_	10	mark	_	Orig=yat[r]a
9	yatra	yatra	SCONJ	_	_	10	mark	_	_
10	nāsti	nās	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
11	savatra	savatra	ADV	_	AdvType=Loc	12	advmod:lmod	_	_
12	harapita	harapaya	VERB	_	Case=Nom|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Cau,Pass	0	root	_	_
13	ca	ca	CCONJ	_	_	12	cc	_	_
14	vuta	vapa	VERB	_	Case=Nom|Gender=Neut|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	12	conj	_	_
15	ca	ca	CCONJ	_	_	14	cc	_	_

~~~


