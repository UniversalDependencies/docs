---
layout: base
title:  'Statistics of nsubj in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `nsubj`

This relation is universal.

259 nodes (6%) are attached to their parents as `nsubj`.

174 instances of `nsubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.67953667953668.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (90; 35% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (80; 31% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (30; 12% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (19; 7% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="el_cretan-pos-DET.html">DET</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj	color:blue
1	Περάσανε	περνώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	χρόνια	χρόνος	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Plur	1	nsubj	_	_
3	κι	και	CCONJ	CjCo	_	6	cc	_	_
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	κοπελιά	κοπελιά	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	μέστωσε	μεστώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
7	κι	και	CCONJ	CjCo	_	8	cc	_	_
8	έλαμπε	λάμπω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
9	σαν	σαν	ADV	AdBa	_	11	case	_	_
10	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	ήλιο	ήλιος	NOUN	NoCm	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nsubj	color:blue
1	Δεν	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	mwe=1
2	ήβγαλε	βγάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
3	αχνιά	αχνιά	NOUN	AdBa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	mwe=1
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Μελεμενιά	Μελεμενιά	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nsubj	color:blue
1	Ύστερα	ύστερα	ADV	AdBa	_	2	advmod	_	_
2	πήγα	πηγαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	κι	και	CCONJ	CjCo	_	4	cc	_	_
4	εγώ	εγώ	PRON	NoCm	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
5	,	,	PUNCT	NoCm	_	6	punct	_	PunctType=Comm
6	είπα	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	8	det	_	_
8	κρίματά	κρίμα	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	_
9	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	nmod	_	_
10	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


