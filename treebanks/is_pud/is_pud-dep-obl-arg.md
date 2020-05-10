---
layout: base
title:  'Statistics of obl:arg in UD_Icelandic-PUD'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-PUD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="is_pud-dep-obl.html">obl</a></tt>.

312 nodes (2%) are attached to their parents as `obl:arg`.

307 instances of `obl:arg` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.96794871794872.

The following 15 pairs of parts of speech are connected with `obl:arg`: <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (209; 67% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (51; 16% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (33; 11% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="is_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="is_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="is_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	Hann	hann	PRON	fpken	Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	3	nsubj	_	_
2	hefur	hafa	AUX	sfg3en	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	mælt	mæla	VERB	ssg	VerbForm=Sup|Voice=Act	0	root	_	_
4	með	með	ADP	aþ	_	5	case	_	_
5	pyntingum	pynting	NOUN	nvfþ	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur	3	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl:arg	color:blue
1	Ég	ég	PRON	fp1en	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	kom	koma	VERB	sfg1eþ	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	auga	auga	NOUN	nheþ	Case=Dat|Definite=Ind|Gender=Neut|Number=Sing	2	obj	_	_
4	á	á	ADP	ao	_	5	case	_	_
5	nokkra	nokkur	PRON	fokfo	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	2	obl:arg	_	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:arg	color:blue
1	Hún	hún	PRON	fpven	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	2	nsubj	_	_
2	ræddi	ræða	VERB	sfg3eþ	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	við	við	ADP	ao	_	4	case	_	_
4	CNN	CNN	PROPN	e	_	2	obl:arg	_	_
5	Style	Style	PROPN	e	_	4	flat:name	_	_
6	um	um	ADP	ao	_	7	case	_	_
7	reynsluna	reynsla	NOUN	nveog	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


