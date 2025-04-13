---
layout: base
title:  'Statistics of compound:affix in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `compound:affix`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-compound.html">compound</a></tt>.

67 nodes (0%) are attached to their parents as `compound:affix`.

67 instances of `compound:affix` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70149253731343.

The following 6 pairs of parts of speech are connected with `compound:affix`: <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (38; 57% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (17; 25% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (9; 13% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 compound:affix	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	לא	לא	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	מתיישב	התיישב	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	עם	עם	ADP	ADP	_	6	case	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	Entity=(MISC
6	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	3	obl	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
8	בין	בין	ADV	ADV	Prefix=Yes	10	compound:affix	_	_
9	-	-	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No
10	לאומי	לאומי	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	Entity=MISC)|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:affix	color:blue
1	את	את	ADP	ADP	Case=Acc	5	case	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	5	det	_	_
3	דה	דה	ADV	ADV	Prefix=Yes	5	compound:affix	_	_
4	-	-	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
5	לגיטימציה	לגיטימציה	NOUN	NOUN	Gender=Fem|Number=Sing	9	obj	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	det	_	_
8	אתם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=2|PronType=Prs	9	nsubj	_	_
9	עושים	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=2|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
10	חזור	חזור	NOUN	NOUN	Gender=Masc|Number=Sing	9	obl:unmarked	_	_
11	ו	ו	CCONJ	CCONJ	_	12	cc	_	_
12	עשה	עשה	NOUN	NOUN	Gender=Masc|Number=Sing	10	conj	_	_
13	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 compound:affix	color:blue
1	מ	מ	ADP	ADP	_	2	case	_	_
2	צד	צד	NOUN	NOUN	Gender=Masc|Number=Sing	7	obl	_	_
3	שני	שני	ADJ	ADJ	Gender=Masc|Number=Sing	2	amod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	אי	אי	ADV	ADV	_	7	compound:affix	_	SpaceAfter=No
6	-	-	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
7	אפשר	אפשר	VERB	VERB	VerbType=Mod	0	root	_	_
8	להציב	הציב	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	7	csubj	_	_
9	משהו	משהו	NOUN	NOUN	Gender=Masc|Number=Sing	8	obj	_	_
10	לא	לא	ADV	ADV	Polarity=Neg	11	advmod	_	_
11	ריאלי	ריאלי	ADJ	ADJ	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


