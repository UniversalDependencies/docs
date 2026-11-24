---
layout: base
title:  'Statistics of nmod in UD_Prakrit-DIPI'
udver: '2'
---

## Treebank Statistics: UD_Prakrit-DIPI: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="pra_dipi-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="pra_dipi-dep-nmod-poss.html">nmod:poss</a></tt>.

84 nodes (9%) are attached to their parents as `nmod`.

67 instances of `nmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77380952380952.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (36; 43% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (36; 43% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-PROPN.html">PROPN</a></tt> (6; 7% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pra_dipi-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pra_dipi-pos-NUM.html">NUM</a></tt>-<tt><a href="pra_dipi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	iyaṃ	iyaṃ	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	Gloss=this|Orig=iy[aṃ]
2	dhaṃma	dhaṃma	NOUN	_	Compound=Yes|Gender=Masc	3	compound	_	Gloss=morality
3	lipī	lipi	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	obj	_	Gloss=rescript
4	devānaṃ	deva	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	Gloss=of-the-Gods
5	priyena	priya	ADJ	_	Case=Ins|Gender=Masc|Number=Sing	8	nmod:desc	_	Gloss=beloved
6	priya	priya	ADJ	_	Compound=Yes|Gender=Masc	7	amod	_	Gloss=friendly
7	dasinā	dasin	ADJ	_	Case=Ins|Gender=Masc|Number=Sing	8	nmod:desc	_	Gloss=looking
8	rāña	rājan	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	9	nsubj	_	Gloss=by-king
9	lekhāpitā	lekhāpaya	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Cau,Pass	0	root	_	Gloss=has-been-caused-to-be-written|Orig=lekh[ā]pitā

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	esa	etad	PRON	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	_	Orig=[e]sa
2	hi	hi	ADV	_	_	4	discourse	_	_
3	sesṭe	sesṭa	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	amod	_	_
4	kaṃme	kaṃma	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
5	ya	yad	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj	_	_
6	dhaṃma	dhaṃma	NOUN	_	Compound=Yes|Gender=Masc	7	nmod	_	_
7	anusāsanaṃ	anusāsana	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	acl:relcl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 nmod	color:blue
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


