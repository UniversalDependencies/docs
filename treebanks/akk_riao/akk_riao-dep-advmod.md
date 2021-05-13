---
layout: base
title:  'Statistics of advmod in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="akk_riao-dep-advmod-emph.html">advmod:emph</a></tt>.

233 nodes (1%) are attached to their parents as `advmod`.

221 instances of `advmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.068669527897.

The following 6 pairs of parts of speech are connected with `advmod`: <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (120; 52% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (99; 42% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-ADP.html">ADP</a></tt> (10; 4% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod	color:blue
1	rubû	rubû	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	7	nsubj	7:nsubj	NUN
2	arkû	warkû	ADJ	AJ	Case=Nom|Gender=Masc|Number=Sing	1	amod	1:amod	EGIR-u
3	šum	šumu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Sing	7	obj	7:obj	MU
4	ī	_	PRON	_	Number=Sing|Person=1	3	det:poss	3:det:poss	_
5	šaṭra	šaṭru	ADJ	AJ	Case=Acc|Gender=Masc|Number=Sing	3	amod	3:amod	_
6	lā	lā	PART	MOD	_	7	advmod	7:advmod	NU
7	tapaššiṭ	pašāṭu	VERB	V	Gender=Masc|Mood=Proh|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|VerbStem=G	0	root	0:root	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advmod	color:blue
1	Kašiyaru	Kašiyaru	PROPN	GN	_	2	obj	2:obj	_
2	attabalkat	nabalkutu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=N	0	root	0:root	_
3	šaniātešu	šaniānu	ADV	AV	_	7	advmod	7:advmod	_
4	ana	ana	ADP	PRP	_	5	case	5:case	_
5	māt	mātu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	7	obl	7:obl	_
6	Nairi	Nairi	PROPN	GN	Case=Gen	5	nmod:poss	5:nmod:poss	_
7	attarda	warādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|Ventive=Yes|VerbForm=Fin|VerbStem=G	2	conj	2:conj	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod	color:blue
1	še’ī	_	NOUN	_	Gender=Masc|Number=Plur	11	obj	11:obj	_
2	tabkāni	tabku	NOUN	AJ	Gender=Masc|Number=Plur	11	obl	11:obl	tab-ka-a-ni
3	ana	ana	ADP	PRP	_	4	case	4:case	a-na
4	erišti	erištu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Bound|Number=Sing	11	obl	11:obl	e-riš-ti
5	māti	mātu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Suffixal|Number=Sing	4	nmod:poss	4:nmod:poss	KUR-ia
6	ya	_	PRON	_	Number=Sing|Person=1	5	det:poss	5:det:poss	_
7	eli	eli	ADP	PRP	_	10	advmod	10:advmod	UGU
8	ša	ša	ADP	REL	_	7	fixed	7:fixed	ša₂
9	pān	pānu	ADV	N	_	7	fixed	7:fixed	pa-an
10	ušātir	watāru	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=S	11	xcomp	11:xcomp	u₂-ša₂-tir
11	atbuk	tabāku	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	0:root	at-bu-uk

~~~


