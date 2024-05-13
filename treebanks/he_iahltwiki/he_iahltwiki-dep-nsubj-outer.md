---
layout: base
title:  'Statistics of nsubj:outer in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_iahltwiki-dep-nsubj-pass.html">nsubj:pass</a></tt>.

92 nodes (0%) are attached to their parents as `nsubj:outer`.

91 instances of `nsubj:outer` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.82608695652174.

The following 14 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (65; 71% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (6; 7% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	הצעה	הצעה	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj:outer	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	שנייה	שני	ADJ	ADJ	Gender=Fem|Number=Sing|NumType=Ord	2	amod	_	_
5	הייתה	היה	AUX	AUX	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|VerbType=Cop	6	cop	_	_
6	ליצור	יצר	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
7	מדינה	מדינה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obj	_	_
8	פדרלית	פדרלי	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	_
9	דו	דו	ADV	ADV	Prefix=Yes	11	compound:affix	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	לאומית	לאומי	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	מי	מי	PRON	PRON	_	9	nsubj:outer	_	Comment=PronType
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	מנסה	ניסה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
4	לפגוע	פגע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	3	xcomp	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	נו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
7	-	-	PUNCT	PUNCT	_	1	punct	_	_
8	אנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	פוגעים	פגע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
12	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	סיכום	סיכום	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	10	nsubj:outer	_	_
2	בנק	בנק	PROPN	PROPN	Definite=Cons	1	compound	_	_
3	ישראל	ישראל	PROPN	PROPN	_	2	compound	_	_
4	היה	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	10	cop	_	_
5	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	בעיה	בעיה	NOUN	NOUN	Gender=Fem|Number=Sing	10	nsubj	_	_
8	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|PronType=Prs	10	cop	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	אינפלציה	אינפלציה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
11	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


