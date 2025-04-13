---
layout: base
title:  'Statistics of csubj in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="he_iahltknesset-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="he_iahltknesset-dep-csubj-pass.html">csubj:pass</a></tt>.

291 nodes (0%) are attached to their parents as `csubj`.

286 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83505154639175.

The following 18 pairs of parts of speech are connected with `csubj`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (192; 66% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (49; 17% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (15; 5% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (9; 3% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	אין	אין	VERB	VERB	Polarity=Neg	0	root	_	_
2	ב	ב	ADP	ADP	_	3	case	_	_
3	רצונ	רצון	NOUN	NOUN	Gender=Masc|Number=Sing	1	obl	_	_
4	י	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
5	להשאיר	השאיר	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	1	csubj	_	_
6	כתם	כתם	NOUN	NOUN	Gender=Masc|Number=Sing	5	obj	_	_
7	על	על	ADP	ADP	_	8	case	_	_
8	י	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	5	obl	_	_
9	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	קל	קל	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
2	להתפתות	התפתה	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf|Voice=Mid	1	csubj	_	_
3	ל	ל	ADP	ADP	_	4	case	_	_
4	ציניות	ציניות	NOUN	NOUN	Gender=Fem|Number=Sing	2	obl	_	_
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	חובת	חובה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	י	הוא	PRON	PRON	Case=Gen|Definite=Def|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	nmod:poss	_	_
3	לאתר	איתר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	1	csubj	_	_
4	אות	את	ADP	ADP	Case=Acc	5	case	_	_
5	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


