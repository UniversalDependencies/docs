---
layout: base
title:  'Statistics of nsubj in UD_Sanskrit-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit-UFAL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sa_ufal-dep-nsubj-cop.html">nsubj:cop</a></tt>, <tt><a href="sa_ufal-dep-nsubj-pass.html">nsubj:pass</a></tt>.

168 nodes (9%) are attached to their parents as `nsubj`.

131 instances of `nsubj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.04166666666667.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (59; 35% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (47; 28% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PROPN.html">PROPN</a></tt> (18; 11% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (10; 6% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (10; 6% instances), <tt><a href="sa_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-DET.html">DET</a></tt> (3; 2% instances), <tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sa_ufal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sa_ufal-pos-ADV.html">ADV</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
1	तत्र	तत्र	ADV	_	_	5	advmod	_	Translit=tatra|LTranslit=tatra|Gloss=here,there
2	अमरशक्तिर्	अमरशक्ति	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	Translit=amaraśaktir|LTranslit=amaraśakti|Gloss=Amarashakti
3	नाम्नः	नामन्	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	4	nmod	_	Translit=nāmnaḥ|LTranslit=nāman|Gloss=name
4	राजा	राजन्	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Translit=rājā|LTranslit=rājan|Gloss=king
5	बभूव	भू	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|LId=भू-१|Translit=babhūva|LTranslit=bhū|Gloss=lived
6	।	।	PUNCT	_	_	5	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	तत्	तद्	ADV	_	PronType=Dem	10	advmod	_	Translit=tat|LTranslit=tad|Gloss=so
2	एतान्	एतद्	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	3	obj	_	Translit=etān|LTranslit=etad|Gloss=these
3	पश्यतः	पश््	VERB	_	Case=Gen|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	10	advcl	_	Translit=paśyataḥ|LTranslit=paś|Gloss=when-seeing
4	मे	अहम्	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Translit=me|LTranslit=aham|Gloss=me
5	महत्	महत्	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	7	amod	_	Translit=mahat|LTranslit=mahat|Gloss=great
6	अपि	अपि	ADV	_	_	5	advmod	_	Translit=api|LTranslit=api|Gloss=no-matter-how
7	राज्यम्	राज्य	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	Translit=rājyam|LTranslit=rājya|Gloss=kingdom
8	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	सौख्यम्	सौख्य	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	Translit=saukhyam|LTranslit=saukhya|Gloss=happiness
10	आवहति	आ-वह्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=आ-वह्-१|Translit=āvahati|LTranslit=ā-vah|Gloss=brings
11	।	।	PUNCT	_	_	10	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj	color:blue
1	अथ	अथ	ADV	_	_	5	advmod	_	Translit=atha|LTranslit=atha|Gloss=thus
2	विष्णुशर्म	विष्णुशर्मा	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Translit=viṣṇuśarma|LTranslit=viṣṇuśarmā|Gloss=Vishnusharma
3	तम्	तद्	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	Translit=tam|LTranslit=tad|Gloss=the
4	राजानम्	राजन्	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	obj	_	Translit=rājānam|LTranslit=rājan|Gloss=king
5	उच्यते	वच्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ucyate|LTranslit=vac|Gloss=is-said

~~~


