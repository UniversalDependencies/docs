---
layout: base
title:  'Statistics of xcomp in UD_Hausa-WesternAutogramm'
udver: '2'
---

## Treebank Statistics: UD_Hausa-WesternAutogramm: Relations: `xcomp`

This relation is universal.

182 nodes (1%) are attached to their parents as `xcomp`.

180 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26923076923077.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-NOUN.html">NOUN</a></tt> (114; 63% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt> (51; 28% instances), <tt><a href="ha_westernautogramm-pos-PART.html">PART</a></tt>-<tt><a href="ha_westernautogramm-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ha_westernautogramm-pos-ADP.html">ADP</a></tt>-<tt><a href="ha_westernautogramm-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ha_westernautogramm-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-PART.html">PART</a></tt>-<tt><a href="ha_westernautogramm-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-PART.html">PART</a></tt>-<tt><a href="ha_westernautogramm-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ha_westernautogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="ha_westernautogramm-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	sai	sai	ADV	_	_	3	advmod	_	Gloss=then
2	à	_	AUX	ø	Aspect=Aor|Person=4	3	aux	_	Gloss=4.Aor
3	dakèː	dakèː	VERB	_	_	0	root	_	Gloss=pound
4	,	,	PUNCT	_	_	6	punct	_	Gloss=PUNCT
5	à	_	AUX	ø	Aspect=Aor|Person=4	6	aux	_	Gloss=4.Aor
6	dakèː	dakèː	VERB	_	_	3	parataxis	_	Gloss=pound
7	ƙwar̃ai	ƙwar̃ai	ADV	_	_	6	advmod	_	Gloss=completely
8	,	,	PUNCT	_	_	10	punct	_	Gloss=PUNCT
9	sù	_	AUX	ø	Aspect=Aor|Number=Plur|Person=3	10	aux	_	Gloss=3Plur.Aor
10	zan	zama	VERB	_	_	6	advcl	_	Gloss=become
11	gàːriː	gàːriː	NOUN	_	Definite=Ind|Gender=Masc	10	xcomp	_	Gloss=powder.Masc
12	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	wani	wani	PRON	_	Definite=Spec|Gender=Masc	3	dislocated	_	Gloss=some.Masc
2	kà	_	AUX	kà	Aspect=ProgBkg	3	aux	_	Background=Yes|Gloss=ProgBkg
3	yi	yi	VERB	_	_	0	root	_	Gloss=do
4	wankaː	wankaː	VERB	_	ExtPos=NOUN|Gender=Masc	3	xcomp	_	Gloss=bathing.Nmlz.Masc
5	,	,	PUNCT	_	_	7	punct	_	Gloss=PUNCT
6	shì	_	AUX	ø	Aspect=Aor|Gender=Masc|Person=3	7	aux	_	Gloss=3Masc.Aor
7	kaːmà	kaːmàː	VERB	_	_	3	parataxis	_	Gloss=catch
8	wandà	wandà	PRON	_	Gender=Masc|PronType=Rel	7	obj	_	Gloss=who.Masc
9	kay	_	AUX	(n)kà	Aspect=PerfBkg|Gender=Masc|Person=2	10	aux	_	Background=Yes|Gloss=2Masc.PerfBkg
10	yi	yi	VERB	_	_	8	acl:relcl	_	Gloss=do
11	wankaː	wankaː	VERB	_	ExtPos=NOUN|Gender=Masc	10	xcomp	_	Gloss=bathing.Nmlz.Masc
12	sabòːdà	sabòːdà	ADP	_	_	13	case	_	Gloss=because
13	shiː	shiː	PRON	_	Gender=Masc|Person=3	10	obl	_	Gloss=3Masc
14	.	.	PUNCT	_	_	3	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	bâː	baːbù	PART	_	PartType=Neg|Polarity=Neg	0	root	_	Gloss=there_is.Neg
2	koːmiː	koːmiː	PRON	_	_	1	nsubj	_	Gloss=anything
3	gà	gà	ADP	_	_	4	case	_	Gloss=at
4	ɗwaim	ɗwai	NOUN	_	Definite=Cons|Gender=Masc	1	xcomp	_	Gloss=stench.Masc|wordform=ɗwai
5	mài	mài	ADP	_	Gender=Masc	6	case	_	Gloss=owner_of.Masc/Fem
6	doːkìː	doːkìː	NOUN	_	Definite=Ind|Gender=Masc	4	nmod	_	Gloss=horse.Masc
7	,	,	PUNCT	_	_	9	punct	_	Gloss=PUNCT
8	sai	sai	ADP	_	_	9	case	_	Gloss=except
9	kaːshiː	kaːshiː	NOUN	_	Definite=Ind|Gender=Masc	1	obl	_	Gloss=excrement.Masc
10	,	,	PUNCT	_	_	13	punct	_	Gloss=PUNCT
11	kuma	kuma	PART	_	PartType=Disc	13	discourse	_	Gloss=also
12	sai	sai	ADP	_	_	13	case	_	Gloss=except
13	tuːsàː	tuːsàː	NOUN	_	Definite=Ind|Gender=Fem	9	conj	_	Gloss=farting.Fem
14	,	,	PUNCT	_	_	16	punct	_	Gloss=PUNCT
15	kàmaj	kàmat	ADP	_	_	16	case	_	Gloss=like
16	jàːkiː	jàːkiː	NOUN	_	Definite=Ind	1	obl	_	Gloss=donkey
17	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


