---
layout: base
title:  'Statistics of cc in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="fi_ood-dep-cc-preconj.html">cc:preconj</a></tt>.

733 nodes (4%) are attached to their parents as `cc`.

733 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1418826739427.

The following 18 pairs of parts of speech are connected with `cc`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (310; 42% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (252; 34% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (77; 11% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (33; 5% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (25; 3% instances), <tt><a href="fi_ood-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (13; 2% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fi_ood-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ood-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-X.html">X</a></tt>-<tt><a href="fi_ood-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	asiallinen	asiallinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Llinen|Number=Sing	0	root	_	_
2	ja	ja	CCONJ	_	_	3	cc	_	_
3	orientoitunut	orientoitua	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	conj	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Thoraxin	thorax	NOUN	_	Case=Gen|Number=Sing	4	nmod:poss	_	Gen=Rintakehän
2	ja	ja	CCONJ	_	_	3	cc	_	_
3	vatsan	vatsa	NOUN	_	Case=Gen|Number=Sing	1	conj	_	_
4	TT:ssä	TT	NOUN	_	Abbr=Yes|Case=Ine|Number=Sing	5	obl	_	Gen=tietokonekuvauksessa
5	käyty	käydä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Hengitys	hengitys	NOUN	_	Case=Nom|Number=Sing	2	nsubj:cop	_	_
2	pinnallista	pinnallinen	ADJ	_	Case=Par|Degree=Pos|Number=Sing	0	root	_	_
3	ja	ja	CCONJ	_	_	4	cc	_	_
4	krohisevaa	krohiseva	ADJ	_	Case=Par|Degree=Pos|Number=Sing	2	conj	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


