---
layout: base
title:  'Statistics of csubj in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="he_iahltwiki-dep-csubj-pass.html">csubj:pass</a></tt>.

202 nodes (0%) are attached to their parents as `csubj`.

200 instances of `csubj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68811881188119.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (129; 64% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (26; 13% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (17; 8% instances), <tt><a href="he_iahltwiki-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (7; 3% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj	color:blue
1	לפני	לפני	ADP	ADP	_	3	mark	_	_
2	ש	ש	SCONJ	SCONJ	_	1	fixed	_	_
3	ניתנת	ניתן	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	6	advcl	_	_
4	מנת	מנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
5	פלזמה	פלזמה	NOUN	NOUN	Gender=Fem|Number=Sing	4	compound	_	_
6	יש	יש	VERB	VERB	Polarity=Pos	0	root	_	_
7	לבדוק	בדק	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	6	csubj	_	_
8	תאימות	תאימות	NOUN	NOUN	Gender=Fem|Number=Sing	7	obj	_	_
9	של	של	ADP	ADP	_	10	case	_	_
10	נוגדנים	נוגדן	NOUN	NOUN	Gender=Masc|Number=Plur	8	nmod:poss	_	_
11	אצל	אצל	ADP	ADP	_	13	case	_	_
12	ה	ה	DET	DET	Definite=Def|PronType=Art	13	det	_	_
13	נתרם	נתרם	NOUN	NOUN	Gender=Masc|Number=Sing	7	obl	_	_
14	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	על	על	ADV	ADV	_	3	advmod	_	_
2	כן	כן	ADV	ADV	_	1	fixed	_	_
3	ברור	ברור	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
4	ש	ש	SCONJ	SCONJ	_	7	mark	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	_
6	איסור	איסור	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
7	פוגע	פגע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	3	csubj	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	זכות	זכות	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	7	obl	_	_
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	יסוד	יסוד	NOUN	NOUN	Gender=Masc|Number=Sing	9	compound	_	_
12	:	:	PUNCT	PUNCT	_	13	punct	_	_
13	חופש	חופש	PROPN	PROPN	Definite=Cons|Gender=Masc|Number=Sing	9	appos	_	_
14	ה	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	_
15	עיסוק	עיסוק	PROPN	PROPN	Gender=Masc|Number=Sing	13	compound	_	_
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 csubj	color:blue
1	שומה	שומה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	לשקוד	שקד	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	1	csubj	_	_
3	ו	ו	CCONJ	CCONJ	_	4	cc	_	_
4	לשמור	שמר	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	2	conj	_	_
5	על	על	ADP	ADP	_	6	case	_	_
6	מעמד	מעמד	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	_
7	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
8	של	של	ADP	ADP	_	10	case	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	רשות	רשות	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod:poss	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	מחוקקת	מחוקק	ADJ	ADJ	Gender=Fem|Number=Sing	10	amod	_	_
13	ו	ו	CCONJ	CCONJ	_	15	cc	_	_
14	על	על	ADP	ADP	_	15	case	_	_
15	עצמאות	עצמאות	NOUN	NOUN	Gender=Fem|Number=Sing	6	conj	_	_
16	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	15	nmod:poss	_	_
17	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


